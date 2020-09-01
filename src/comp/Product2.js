import React from 'react'
import '../App.css';
var id = 13;
var sou = `https://i.picsum.photos/id/${id}/600/400.jpg`;

export default function Product2() {
    return (

        <div className={"card mb-3"} style={{ height: "250px" }} >

            <a href="130">
                <img style={{ width: "300px" }} src={sou} alt="Card cap"></img>
            </a>

            <div className="container60">
                <h5>Card title</h5>
                <p >90% offer</p>

            </div>



        </div >
    )
}
