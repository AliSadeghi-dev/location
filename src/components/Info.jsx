import React from 'react'

export default function Info({data}) {
  return (
    <div className="card-container">
        <span className="info">Info</span>
        <img className="round" src={data.flag.img} alt="brazil" />
        <h3>{data.country}</h3>
        <h6>{data.city}</h6>
        <p>region: {data.region}</p>
        <div className="footer">
            <p>IP: {data.ip}</p>
            <p>latitude: {data.latitude}</p>
            <p>longitude: {data.longitude}</p>
        </div>
    </div>
  )
}
