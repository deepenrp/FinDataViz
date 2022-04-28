import React from 'react';
import axios from '../axios-url-mappings';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { corrData, clear } from "../features/correlation";

function Correlations() {

    const corr = useSelector((state) => state.corr.value);
    // const themeColor = useSelector((state) => state.theme.value);

    const dispatch = useDispatch();

    // const corrDispatch = corrData(
    //     axios.get('/correlations', {}).then(res => {

    //         console.log(res.data);
    //         const corr = res.data;
    //         console.log(corr);
    //         return ( corr )

    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
     
    // );

    return(
        <section>
            <div class="container-fluid">
                <h1>CORRELATIONS</h1>

                <button
                    onClick={() => {
                        dispatch(corrData(
                            {
                                "beta": 2.5,
                                "pe": 56.32,
                                "atr" : 5
                            }
                        ));
                    }}
                >
                Click To Get Correlation Data
                </button>

                <h3> Correlation Data</h3>
                <p> Beta: {corr.beta} </p>
                <p> PE: {corr.pe}</p>
                <p> ATR: {corr.atr}</p>

                <button onClick={ () => { dispatch( clear() ); } }>
                    CLEAR
                </button>

            </div>
        </section>
    );
}

export default Correlations;