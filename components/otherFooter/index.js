import React, { Component } from 'react'
import dynamic from 'next/dynamic';
import Link from 'next/link'
import styled from 'styled-components'
const Wrapper = styled.div`background-color:black;display:flex;flex-direction:row;padding:10px 150px;justify-content:space-between;align-items:center;position:relative;z-index:10;section{display:flex;flex-direction:row;}p{font-family: Playfair Display;}`
class OtherFooter extends Component {
  constructor(props) {
    super(props);
    }
  render() {
    return (<Wrapper>
      <section style={{alignItems:`center`}}>
        <div style={{display:`flex`,flexDirection:`row`,marginRight:`20px`}}>
          <Link href="https://www.facebook.com/elcardenalhotel/"><a target="_blank"rel="noopener noreferrer"><div style={{width:`24px`,height:`24px`,background:`center / cover no-repeat url(facebook.png)`,borderRadius:`5px`,marginRight:`10px`}}></div></a></Link>
          <Link href="https://www.instagram.com/elcardenalhotel/"><a target="_blank"rel="noopener noreferrer"><div style={{width:`24px`,height:`24px`,background:`center / cover no-repeat url(instagram.png)`,marginRight:`10px`}}></div></a></Link>
          <Link href="https://twitter.com/elcardenalhotel"><a target="_blank"rel="noopener noreferrer"><div style={{width:`24px`,height:`24px`,background:`center / cover no-repeat url(twitter.png)`,borderRadius:`5px`,marginRight:`10px`}}></div></a></Link>
          <Link href="https://www.tripadvisor.com/Hotel_Review-g644406-d11776034-Reviews-El_Cardenal_Hotel-Loja_Loja_Province.html"><a target="_blank"rel="noopener noreferrer"><div style={{width:`24px`,height:`24px`,background:`center / cover no-repeat url(trip.png)`}}></div></a></Link>
        </div>
        <p style={{color:`white`,fontSize:`13px`,padding:`0px`,margin:`0px`}}>© 2018 by EL CARDENAL HOTEL</p>
      </section>
      <section>
        <div style={{background:`center / cover no-repeat url(paypal.png)`,width:`63px`,height:`28px`,borderRadius:`5px`,marginRight:`10px`}}></div>
        <div style={{background:`center / cover no-repeat url(master.png)`,width:`51px`,height:`27px`,borderRadius:`5px`,marginRight:`10px`}}></div>
        <div style={{background:`center / cover no-repeat url(visa.png)`,width:`51px`,height:`27px`,borderRadius:`5px`,marginRight:`10px`}}></div>
      </section>
      </Wrapper>)}}
export default OtherFooter
