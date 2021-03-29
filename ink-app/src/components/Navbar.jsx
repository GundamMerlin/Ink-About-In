import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <div className="Nav">
      <Link to="/"><button>Home</button></Link>
      <Link to="/new"><button>Ink Your Story</button></Link>
    </div>
  )
}
