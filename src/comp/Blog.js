import React, { Component } from 'react'
import Blogcomp from './Blogcomp'
import '../App.css';
import axios from 'axios';



export default class Blog extends Component {

    constructor() {
        super()
        this.state = {
            blog: [],
            id: [],
            img: [],
            title: [],
            des: [],
            time: [],
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/api/blog`)
            .then(res => {
                const blogs = res.data.data;

                //  console.log(blogs)

                this.setState({
                    blog: blogs,
                    id: res.data.data.map(blogs => blogs.id),
                    img: res.data.data.map(blogs => blogs.img),
                    title: res.data.data.map(blogs => blogs.title),
                    des: res.data.data.map(blogs => blogs.des),
                    time: res.data.data.map(blogs => blogs.time),
                })
                // console.log(this.state.img[4])
            })


    }




    render() {

        return (
            <div className="blogs">
                {
                    this.state.title.map((pro, index) => (
                        <Blogcomp title={pro} img={this.state.img[index]} time={this.state.time[index]} des={this.state.des[index]} key={this.state.id[index]} />
                    ))
                }
            </div>
        )
    }

}
