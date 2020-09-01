import React from 'react'
import '../App.css';




export default function Blogcomp({ des, img, title, time }) {
    return (

        <div className="card" style={{ width: "25rem" }}>
            <a href="140">
                <img className="card-img-top" src={img} alt="Card cap"></img>
            </a>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{des}</p>
                <p className="card-text"><small className="text-muted">`Last updated ${time} days ago`</small></p>

            </div>

        </div>
    )
}
