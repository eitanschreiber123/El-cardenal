import React, { Component } from 'react'
import dynamic from 'next/dynamic';
import Link from 'next/link'
import styled from 'styled-components'
import { i18n, withTranslation } from '../../i18n'
const Wrapper = styled.div`display:flex;flex-direction:row;background-color:black;height:50px;align-items:center;justify-content:space-evenly;width:100vw;position:fixed;z-index:10;.ho,.first,.last{padding:1px;color:white;background-color:rgb(97, 26, 30);text-decoration:none;}.ho:hover,.first:hover,.last:hover{color:rgb(97, 26, 30);background-color:white;}.hol{display:flex;flex-direction:row;}.corr{color:rgb(97, 26, 30) !important;}.wrong{color:white !important;}`
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {active:`en`}}
  static async getInitialProps(ctx) {
  return {namespacesRequired: ['header'], func}
}
changeLang = n => {
  this.setState({active: n});
  this.props.func
}
  render() {
    return (<Wrapper>
      <Link href="/rooms"><a className="first">{this.props.t("bedrooms")}</a></Link>
      <Link href="/events"><a className="ho">{this.props.t("events")}</a></Link>
      <Link href="/services"><a className="ho">Services</a></Link>
      <Link href="/"><a><div style={{width:`151px`,height:`123px`,background:`center / cover no-repeat url(header.png)`,marginTop:`80px`}}></div></a></Link>
      <Link href="/location"><a className="ho">Location</a></Link>
      <Link href="/contact"><a className="last">{this.props.t("contact")}</a></Link>
      <div className="hol">
        <p className={this.state.active == `en` ? `corr` : `wrong`}style={{marginRight: `10px`}}onClick={() => this.changeLang(`en`)}>EN</p>
        <p className={this.state.active == `es` ? `corr` : `wrong`}onClick={() => this.changeLang(`es`)}>ES</p>
      </div>
      </Wrapper>)}}
export default withTranslation('header')(Header)
