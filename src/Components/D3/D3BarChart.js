import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'
import tempOneMonth from '../../mockData/tempOneMonth.json'
const data = tempOneMonth

const width = 700
const height = 500

const barChartData = () => {
  let dateExtent = d3.extent(data, d => new Date(d.date))
  let min = d3.min(data, data => data.low)
  let max = d3.max(data, data => data.high)
  let xScale = d3
    .scaleTime()
    .domain(dateExtent)
    .range([0, width])

  let yScale = d3
    .scaleLinear()
    .domain([min, max])
    .range([height, 0])

  let colorScale = d3
    .scaleSequential()
    .domain([max, min])
    .interpolator(d3.interpolateRdYlBu)
  const yAxis = d3.axisLeft().scale(yScale)
  return data.map(({ date, high, low }) => {
    return {
      x: xScale(new Date(date)),
      y: yScale(high),
      height: yScale(low) - yScale(high),
      fill: colorScale((Number(high) + Number(low)) / 2)
    }
  })
}
/////////////////////
let dateExtent = d3.extent(data, d => new Date(d.date))
let min = d3.min(data, data => data.low)
let max = d3.max(data, data => data.high)
let xScale = d3
  .scaleTime()
  .domain(dateExtent)
  .range([0, width])

let yScale = d3
  .scaleLinear()
  .domain([min, max])
  .range([height, 0])

let colorScale = d3
  .scaleSequential()
  .domain([max, min])
  .interpolator(d3.interpolateRdYlBu)
const yAxis = d3.axisLeft().scale(yScale)
const xAxis = d3.axisLeft().scale(xScale)
const D3BarChart = () => {
  console.log('render bars')

  const axisRef = useRef()

  useEffect(() => {
    d3.select(axisRef.current).call(yAxis)
  }, [])

  const bars = data.map(({ date, high, low }) => {
    return {
      x: xScale(new Date(date)),
      y: yScale(high),
      height: yScale(low) - yScale(high),
      fill: colorScale((Number(high) + Number(low)) / 2)
    }
  })

  return (
    <>
      <svg width={width} height={height}>
        {bars.map(({ x, y, height, fill }, i) => (
          <rect key={i} x={x} y={y} width={12} height={height} fill={fill} />
        ))}
        <g ref={axisRef} />
      </svg>
    </>
  )
}

export default D3BarChart
