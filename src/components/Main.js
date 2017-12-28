import React, { Component } from "react";
import './main.css'
import Layout from './Layout'

class Main extends Component{
    handleClick(){
        console.log("Hola click")
    }

    render(){       
        
        return (
            <div className="media">
                <h1>HELLO WORLD FROM PARCEL 2 </h1>
                <Layout mensaje="SOY UN MENSAJE" handleClick={this.handleClick}/>
            </div>
        )
    }
}
export default Main