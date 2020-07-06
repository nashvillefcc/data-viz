import React, { useRef, useEffect, useState } from 'react'
import * as d3 from 'd3'
import tempOneMonth from '../../mockData/tempOneMonth.json'
import { axisBottom, axisRight } from 'd3'
import { Wrapper, XAxis, YAxis } from './D3Styled'

const width = 700
const height = 500
const margin = { top: 20, right: 35, bottom: 20, left: 35 }
const D3BarChart = () => {
  const [data, setData] = useState(tempOneMonth)
  const [barsData, setBarsData] = useState([])
  const yAxisRef = useRef()
  const xAxisRef = useRef()
  useEffect(() => {
    // d3.select(axisRef.current).call(yAxis)
    // Scales
    console.log('data', data)
    let dateExtent = d3.extent(data, d => new Date(d.date))
    let min = d3.min(data, data => data.low)
    let max = d3.max(data, data => data.high)
    let xScale = d3
      .scaleTime()
      .domain(dateExtent)
      .range([margin.left, width - margin.right])

    let yScale = d3
      .scaleLinear()
      .domain([min, max])
      .range([height - margin.bottom, margin.top])

    let colorScale = d3
      .scaleSequential()
      .domain([max, min])
      .interpolator(d3.interpolateRdYlBu)
    // Axis
    const yAxis = axisRight(yScale)
    d3.select(yAxisRef.current).call(yAxis)
    const xAxis = axisBottom(xScale)
    xAxis.ticks(d3.timeDay.every())
    xAxis.tickFormat(d3.timeFormat('%m/%d'))
    d3.select(xAxisRef.current).call(xAxis)
    //
    const bars = data.map(({ date, high, low }) => {
      return {
        x: xScale(new Date(date)),
        y: yScale(high),
        height: yScale(low) - yScale(high),
        fill: colorScale((Number(high) + Number(low)) / 2)
      }
    })
    setBarsData(bars)
  }, [data])

  /////////////////////

  console.log('render bars', margin)

  return (
    <Wrapper>
      <svg width={width} height={height}>
        {barsData &&
          barsData.map(({ x, y, height, fill }, i) => (
            <rect key={i} x={x} y={y} width={12} height={height} fill={fill} />
          ))}
        <YAxis ref={yAxisRef} margin={margin} />
        <XAxis id='x-axis' ref={xAxisRef} height={height} margin={margin} />
      </svg>
    </Wrapper>
  )
}

export default D3BarChart
