import React from 'react'

export default function Strategy(){
  return (
    <section id="strategy" className="strategy">
      <div className="container">
        <h2>My Trading Strategy</h2>
        <p>I analyze the market starting from the Weekly timeframe to determine strong levels, use the Daily for trend direction, refine zones on H4/H1, and take entries on M30 using structure alignment and candlestick confirmation.</p>
        <p>Chart components (candlesticks/line charts) will be added here to display sample trades and performance; these are easy to update when you provide CSV/API data.</p>
      </div>
    </section>
  )
}
