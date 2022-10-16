import React from 'react'
import Navigation from './Navigation'

export default function ScrollSpy() {
  return (
    <div className="App">
      <section id="box-1" className="section red">
        Box 1
        <Navigation />
      </section>
      <section id="box-2" className="section blue">
        Box 2
      </section>
      <section id="box-3" className="section green">
        Box 3
      </section>
      <section id="box-4" className="section red">
        Box 4
      </section>
      <section id="box-5" className="section blue">
        Box 5
      </section>
      <section id="box-6" className="section green">
        Box 6
      </section>
    </div>
  )
}
