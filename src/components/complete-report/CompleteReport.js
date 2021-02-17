import React, { Component } from 'react';

import Header from './header';
import Body from './body';
import Footer from './footer';
import Item from './Item';
import './complete-report.css'

class CompleteReport extends Component {
    constructor(){
        super();
        this.cashItem = [
            {
                value: "1.7M",
                earning: "54.1% less earnings"
            },
            {
                value: "1.5M",
                earning: "50.4% less earnings"
            },
            {
                value: "1.3M",
                earning: "46.9% less earnings"
            },
        ]
    }
    render(){
        const cashItem = this.cashItem;
        return(
            <div className = 'CompleteReport'>
                <Header/>
                <Body>
                    {cashItem.map((item, index) => <Item key = {index}>{item}</Item>)}
                </Body>
                <Footer/>
            </div>
        )
    }
}

export default CompleteReport;