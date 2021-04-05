import React,{Component}from'react'
import dynamic from'next/dynamic';
import Link from'next/link'
import styled from'styled-components'
import Header from'../components/header'
import OtherFooter from'../components/otherFooter'
import {i18n,withTranslation}from'../i18n'
import {sendOtherMail}from"../components/networking/contact-api"
import axios from'axios';
const MyMap=dynamic(()=>import('components/map'),{ssr:false});
const Wrapper=styled.div`font-family:Playfair Display;main{height:120vh;}main>section{background-color:white;display:flex;flex-direction:column;align-items:center;padding:0 20px;}main>section>div:first-of-type{display:flex;flex-direction:row;margin-bottom:100px;}main>section>div:first-of-type button{padding:10px;background-color:black;color:white;width:fit-content;border:none;}.contact-form{display:flex;flex-direction:column;align-items:flex-end;}.ma{width:310px;}@media(max-width: 850px){main>section>div:first-of-type{flex-direction: column;width: 100%;align-items:flex-start;}main{height:150vh;}main>section{width:90%}.ma{width:100%;}}`
export default withTranslation('common')(class ContactPage extends Component{constructor(props){super(props);
    this.state={first:``,email:``,second:``,third:``,w: ``}}
  static async getInitialProps(ctx){return{namespacesRequired:['common','header']}}
  submitForm=async e=>{e.preventDefault();
    const senderMail=`eitanschreiber97@gmail.com`
    const res=await sendOtherMail(senderMail,this.state.first,this.state.email,this.state.second,this.state.third);
    if(res.status<300){this.setState({first:``,email:``,second:``,third:``})}}
    componentDidMount(){this.checkWidth()
      window.addEventListener('resize', this.checkWidth)}
checkWidth=()=>{if(window.matchMedia('(max-width:300px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:350px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:400px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:450px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:500px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:550px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:600px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:650px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:700px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:750px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:800px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:850px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:900px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:950px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:1000px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:1050px)')){this.setState({w:window.innerWidth})}else{this.setState({w:`100%`})}}
  render(){return(<Wrapper style={{width:this.state.w}}>
        <Header/>
        <main style={{width:this.state.w,margin:0,position:`relative`,top:`50px`,paddingTop:`90px`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,zIndex:1,backgroundImage:`url(/contact/background1.png)`,backgroundPosition:`center`,backgroundSize:`cover`,backgroundRepeat:`no-repeat`}}>
          <section>
            <h1>{this.props.t("contact_header_1")}</h1>
            <p>{this.props.t("contact_header_2")}</p>
            <hr style={{width:`10px`}}/>
            <div>
              <div className="ma" style={{height:`217px`,zIndex:0,marginRight:`40px`}}><MyMap style={{zIndex:0}}center={[-4.019650,-79.201920]}zoom={15}markers={[{position:[-4.019650,-79.201920]}]}/></div>
              <div style={{marginRight:`40px`}}>
                <p>Gladiolos Street 154-42, Loja 110150, Ecuador<br/>elcardenalhotel@gmail.com</p>
                <p>Tel: +593 99 642 4583</p>
              </div>
              <div className="contact-form">
                <input placeholder={`${this.props.t("form_1")} *`}style={{marginBottom:`10px`,border:`1px solid rgb(206, 206, 206)`,fontSize:`17px`,lineHeight:`23.8px`,padding:`3px 3px 3px 5px`,width:`276px`}}value={this.state.first}onChange={e=>this.setState({first:e.target.value})}/>
                <input placeholder="Email *"style={{marginBottom:`10px`,border:`1px solid rgb(206, 206, 206)`,fontSize:`17px`,padding:`3px 3px 3px 5px`,width:`276px`}}value={this.state.email}onChange={e=>this.setState({email:e.target.value})}/>
                <input placeholder={`${this.props.t("form_2")} *`}style={{marginBottom:`10px`,border:`1px solid rgb(206, 206, 206)`,fontSize:`17px`,padding:`3px 3px 3px 5px`,width:`276px`}}value={this.state.second}onChange={e=>this.setState({second:e.target.value})}/>
                <textarea placeholder={`${this.props.t("form_3")} *`}style={{marginBottom:`10px`,border:`1px solid rgb(206, 206, 206)`,fontSize:`17px`,padding:`3px 3px 3px 5px`,width:`276px`}}rows="5"value={this.state.third}onChange={e=>this.setState({third:e.target.value})}></textarea>
                <button type="submit"onClick={this.submitForm}>{this.props.t("form_button")}</button>
              </div>
            </div>
          </section>
        </main>
        <OtherFooter/>
      </Wrapper>)}})
