import React, { useState, useEffect } from 'react'
import * as d3 from 'd3'
import tempOneMonth from '../../mockData/tempOneMonth.json'
const data = tempOneMonth

const width = 400
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
    .domain([min, max])
    .interpolator(d3.interpolateRdYlBu)

  return data.map(({ date, high, low }) => ({
    x: xScale(new Date(date)),
    y: yScale(high),
    height: yScale(low) - yScale(high),
    fill: colorScale((high + low) / 2)
  }))
}

const D3BarChart = () => {
  const bars = barChartData()
  console.log('bars', bars)
  return (
    <>
      <svg width={width} height={height}>
        {bars.map(({ x, y, height, fill }, i) => (
          <rect key={i} x={x} y={y} width={4} height={height} fill={fill} />
        ))}
      </svg>
    </>
  )
}

export default D3BarChart
