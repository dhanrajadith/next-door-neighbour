import React from 'react'
import '../App.css';



export default function Product({ id1 }) {


    var sou = `https://i.picsum.photos/id/${id1}/600/600.jpg`;
    return (
        <div style={{ width: "1000px" }}>
            <div className={"card mb-3"}>
                <div className="item">
                    <img style={{ width: "250px" }} src={sou} alt="Card cap"></img>
                    <div style={{ width: "50%" }}>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                            <a href="120" style={{ marginRight: '5%' }} className="btn btn-warning">ADD TO CART</a>

                            <a href="120" className={"btn btn-danger"}>BUY NOW</a>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}
