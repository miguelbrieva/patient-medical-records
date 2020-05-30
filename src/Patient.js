import React from 'react'

const Patient = (props) => (
  <div className="patient">
    <div className="container-tight">
      <h2>Name: <span className="patient__text">{props.patient}</span></h2>
      <h3>Dob: <span className="patient__text">{props.dob}</span></h3>
      <h3>Height: <span className="patient__text">{props.height}</span></h3>
    </div>
  </div>
)

export default Patient
