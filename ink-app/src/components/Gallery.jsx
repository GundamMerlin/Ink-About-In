import React from 'react'
import Tattoo from "./Tattoo"

export default function Gallery({tattoos}) {
  return (
      <div className="tattoo-grid">
        {tattoos.map((tattoo) => {
          return (
            <Tattoo
              tattoo={tattoo}>
            </Tattoo>)
        })}</div>
  )
}
