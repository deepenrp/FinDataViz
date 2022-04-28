import React, {Component} from 'react';
import { useEffect, useState } from 'react';
import axios from '../axios-url-mappings';
import {Link} from 'react-router-dom';


export default class OverallMarket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            market: []
        };
    }

    getMarketData() {
        axios.get('/market', {}).then(res => {
            const marketData = res.data
            console.log("Market Data:- ", marketData)
            const federalGDP = marketData[1]['FRED']['GDP'][0]['Value']
            console.log('Federal GDP:- ', federalGDP)

            this.setState({
                federalGDP
            })

        })
        .catch((error) => {
            console.log(error)
        })
    }

    componentDidMount(){
        this.getMarketData()
    }

    render() {

        return(

            <div>
                <h1>MARKET ANALYSIS</h1>
                {this.state.market}
            </div>

        );
    }
}
