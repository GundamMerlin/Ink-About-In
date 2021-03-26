import React from 'react'

export default function Tattoo(props) {
  let data = props.tattoo.fields;
  console.log(data)
  return (
    <div id ="tattoo">
      <img src ={data.image}></img>
    </div>
  )
}
