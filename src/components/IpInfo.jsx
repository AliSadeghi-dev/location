import React, { Component } from 'react'
import './style.css'
import { Audio } from  'react-loader-spinner'
import Info from './Info'
import getInfo from '../services/getInfo'

export default class IpInfo extends Component {
    constructor(props){
        super(props)
        this.state={
            info:null,
            isLoading:true
        }
    }

    componentDidMount(){
        //get Data
        getInfo().then(data=>{
            this.setState({
                info:data,
                isLoading:false
            })
        })
    }

  render() {
      const isLoading = this.state.isLoading
    return (
     <>
     {isLoading ? <Audio
           height="100"
           width="100"
           color='grey'
           ariaLabel='loading'
         /> : 
         <Info data = {this.state.info}/>}
     </>
    )
  }
}
