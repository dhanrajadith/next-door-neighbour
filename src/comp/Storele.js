import React from 'react'
import Product from './Product'
import {
    BrowserRouter as Router,
    Route,

} from 'react-router-dom'

export default function Storele({ id, name, des, price, img }) {
    return (
        <div>
            {
                id.map((ids, index) => (
                    <div key={ids}>
                        <Router>
                            <Route exact path={`/sto${ids}`}>
                                <Product id={ids} name={name[index]} img={img[index]} des={des[index]} price={price[index]} key={ids} />
                            </Route>
                        </Router >
                    </div>
                )
                )
            }
        </div>
    )
}
