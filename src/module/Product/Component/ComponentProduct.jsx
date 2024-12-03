import '../../../assets/scss/module/product/index.css'

import React from 'react'

export default class ComponentProduct extends React.Component {
    constructor() {
        super();
        this.state = {
            color: ''
        }
        this.handleColor = this.handleColor.bind(this)
    }
    handleColor(vals){
        if(this.state.color === vals){
            this.setState({
                color: ''
            })
        }else{
            this.setState({
                color: vals
            })
        }
    }
    render() {
      console.log(this.state.color)
    return (
      <>
        <div className='div-conatiner-product'>
          <h1 className='div-heading-product'>Colors Dynamic</h1>
          <div className={`div-box-product ${this.state.color}`}></div>
          <div className='div-box-childs'>
            <div className={`div-box-childs-color box-color-red`} onClick={() => this.handleColor('box-color-red')}></div>
            <div className={`div-box-childs-color box-color-yellow`}  onClick={() => this.handleColor('box-color-yellow')}></div>
            <div className={`div-box-childs-color box-color-orange`}  onClick={() => this.handleColor('box-color-orange')}></div>
            <div className={`div-box-childs-color box-color-blue`}  onClick={() => this.handleColor('box-color-blue')}></div>
          </div>
        </div>
      </>
    )
  }
}
