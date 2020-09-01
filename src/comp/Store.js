import React, { Component } from 'react'
import Product from './Product'
import Storele from './Storele'

import axios from 'axios';
import {
    BrowserRouter as Router,
    Route,

} from 'react-router-dom'

export default class Store extends Component {



    constructor(props) {
        super(props)
        this.state = {
            product: [],
            id: [],
            img: [],
            name: [],
            des: [],
            price: [],
        }
    }



    componentDidMount() {
        axios.get(`http://localhost:8000/api/products`)
            .then(res => {
                const products = res.data.data;

                console.log(products)
                this.setState({
                    product: res.data.data.map(products => products),
                    id: res.data.data.map(products => products.id),
                    img: res.data.data.map(products => products.img),
                    name: res.data.data.map(products => products.name),
                    des: res.data.data.map(products => products.des),
                    price: res.data.data.map(products => products.price),
                })

            })



    }






    render() {
        return (



            <div style={{ marginTop: '5%', width: "100%" }} className='store'>


                {
                    this.state.name.map((pro, index) => (
                        <Product name={pro} img={this.state.img[index]} des={this.state.des[index]} id={this.state.id[index]} key={this.state.id[index]} />
                    ))
                }
                <Storele id={this.state.id} img={this.state.img} des={this.state.des} name={this.state.name} price={this.state.price} />
            </div>


        )
    }
}