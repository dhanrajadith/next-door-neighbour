import React, { Component } from 'react'
import Blogcomp from './Blogcomp'
import Product2 from './Product2'
import '../App.css';

export default class Home1 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            product: [],
            id: [],
            img: [],
            name: [],
            des: []
        }
    }


    render() {
        return (
            <div>
                <div style={{ marginTop: '5%' }} className='Home5'>
                    <h1 className='headin'>Meet your friendly-neighbourhood-businesses!!!</h1>
                </div>

                <div className="container3">
                    <div style={{ width: "25%" }} >
                        <Blogcomp />
                        <Blogcomp />
                        <Blogcomp />
                        <Blogcomp />
                    </div>
                    <div className="cont2" >
                        <Product2 />
                        <Product2 />
                        <Product2 />
                        <Product2 />
                        <Product2 />
                        <Product2 />
                        <Product2 />
                        <Product2 />
                        <Product2 />
                    </div>
                </div>

            </div >
        )
    }
}
