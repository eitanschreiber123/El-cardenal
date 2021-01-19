import React, { Component } from 'react'
import dynamic from 'next/dynamic';
import Link from 'next/link'
import styled from 'styled-components'
import Header from '../components/header'
import OtherFooter from '../components/otherFooter'
import { i18n, withTranslation } from '../i18n'
import { sendOtherMail } from "../components/networking/contact-api"
import axios from 'axios';
const MyMap = dynamic(() => import('components/map'), {ssr: false});
const Wrapper = styled.div`font-family:Playfair Display;main>section{background-color:white;display:flex;flex-direction:column;align-items:center;padding:0 20px;}main>section>div:first-of-type{display:flex;flex-direction:row;margin-bottom:100px;}button{padding:10px;background-color:black;color:white;width:fit-content;border:none;}.contact-form{display:flex;flex-direction:column;align-items:flex-end;}`
class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state={first:``,email:``,second:``,third:``}}
  static async getInitialProps(ctx){
    return {namespacesRequired: ['common','header']}
  }
  submitForm = async e => {
    e.preventDefault();
    const senderMail = `eitanschreiber97@gmail.com`
    const res = await sendOtherMail(senderMail, this.state.first, this.state.email, this.state.second, this.state.third);
    if (res.status < 300) {
      this.setState({first: ``,email: ``,second: ``,third: ``})
    }
  }
  render() {
    return (<Wrapper>
        <Header/>
        <main style={{width:`100%`,margin:0,height:`100vh`,position:`relative`,top:`7vh`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,zIndex:1,backgroundImage:`url(/contact/background_1.png)`,backgroundPosition:`center`,backgroundSize:`cover`,backgroundRepeat:`no-repeat`}}>
          <section>
            <h1>{this.props.t("contact_header_1")}</h1>
            <p>{this.props.t("contact_header_2")}</p>
            <hr style={{width:`10px`}}/>
            <div>
              <div style={{width:`310px`,height:`217px`,zIndex:0,marginRight:`40px`}}><MyMap style={{zIndex:0}}center={[-4.0081308,-79.2401756]}zoom={15}markers={[{position:[-4.0081308,-79.2401756]}]}/></div>
              <div style={{marginRight:`40px`}}>
                <p>Gladiolos Street 154-42, Loja 110150, Ecuador<br/>elcardenalhotel@gmail.com</p>
                <p>Tel: +593 99 642 4583</p>
              </div>
              <div className="contact-form">
                <input placeholder={`${this.props.t("form_1")} *`}style={{marginBottom:`10px`,border:`1px solid rgb(206, 206, 206)`,color:`rgb(206, 206, 206)`,fontSize:`17px`,lineHeight:`23.8px`,padding:`3px 3px 3px 5px`,width:`276px`}}value={this.state.first}onChange={e=>this.setState({first:e.target.value})}/>
                <input placeholder="Email *"style={{marginBottom:`10px`,border:`1px solid rgb(206, 206, 206)`,color:`rgb(206, 206, 206)`,fontSize:`17px`,padding:`3px 3px 3px 5px`,width:`276px`}}value={this.state.email}onChange={e=>this.setState({first:e.target.value})}/>
                <input placeholder={`${this.props.t("form_2")} *`}style={{marginBottom:`10px`,border:`1px solid rgb(206, 206, 206)`,color:`rgb(206, 206, 206)`,fontSize:`17px`,padding:`3px 3px 3px 5px`,width:`276px`}}value={this.state.second}onChange={e=>this.setState({first:e.target.value})}/>
                <textarea placeholder={`${this.props.t("form_3")} *`}style={{marginBottom:`10px`,border:`1px solid rgb(206, 206, 206)`,color:`rgb(206, 206, 206)`,fontSize:`17px`,padding:`3px 3px 3px 5px`,width:`276px`}}rows="5"value={this.state.email}onChange={e=>this.setState({first:e.target.value})}></textarea>
                <button type="submit" onClick={this.submitForm}>{this.props.t("form_button")}</button>
              </div>
            </div>
          </section>
        </main>
        <OtherFooter/>
      </Wrapper>)}}
export default withTranslation('common')(ContactPage)
