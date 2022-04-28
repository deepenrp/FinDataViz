// import React {useEffect, useState} from 'react';
import React, {Component} from 'react';
import { useEffect, useState } from 'react';
import axios from '../axios-url-mappings';
import {Link} from 'react-router-dom';


export default class StockCompany extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stocks: []
        };
    }

    getStocksData() {
        axios.get('/stock', {}).then(res => {
            const stockData = res.data
            console.log("Stock Data:- ", stockData)
            const stocks = stockData.map(s =>
                <div>
                    <p>{s.stock}</p>
                    <p>{s.price}</p>
                </div>
                )

                this.setState({
                    stocks
                })

        })
        .catch((error) => {
            console.log(error)
        })
    }

    componentDidMount(){
        this.getStocksData()
    }

    render() {

        return(

            <div>
                <h1>STOCK ANALYSIS</h1>
                {this.state.stocks}
            </div>

        );
    }
}
