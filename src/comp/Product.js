import React from 'react'
import '../App.css';



export default function Product({ id, des, img, name }) {

    var sou = img;
    return (

        <div className={"card mb-3"}>
            <div className="item">
                <a href={`/store/${id}`}>
                    <img style={{ height: "200px" }} src={sou} alt="Card cap"></img>
                </a>
                <div style={{ width: "50%" }}>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{des}</p>

                        <a href="120" style={{ marginRight: '5%' }} className="btn btn-warning">ADD TO CART</a>

                        <a href="120" className={"btn btn-danger"}>BUY NOW</a>
                    </div>
                </div>
            </div>
        </div>


    )
}
