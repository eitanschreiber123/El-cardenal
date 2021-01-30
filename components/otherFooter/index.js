import React,{Component}from'react';
import dynamic from'next/dynamic';
import Link from'next/link'
import styled from'styled-components'
const Wrapper=styled.div`background-color:black;display:flex;flex-direction:row;padding:10px 0;justify-content:space-evenly;align-items:center;position:relative;z-index:10;section{display:flex;flex-direction:row;margin:30px;}p{font-family: Playfair Display;}@media(max-width:800px){flex-direction:column;align-items:center;section{margin:30px 0;width:100%;justify-content:space-evenly;}}`
export default class OtherFooter extends Component{
  constructor(props){
    super(props);
    this.state={w:``}}
    componentDidMount(){this.checkWidth()
      window.addEventListener('resize',this.checkWidth)}
checkWidth=()=>{if(window.matchMedia('(max-width:300px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:350px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:400px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:450px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:500px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:550px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:600px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:650px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:700px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:750px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:800px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:850px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:900px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:950px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:1000px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:1050px)')){this.setState({w:window.innerWidth})}else{this.setState({w:`100%`})}}
  render(){
    return(<Wrapper style={{width:this.state.w}}>
        <section style={{display:`flex`,flexDirection:`row`}}>
          <Link href="https://www.facebook.com/elcardenalhotel/"><a target="_blank"rel="noopener noreferrer"><div style={{width:`24px`,height:`24px`,background:`center / cover no-repeat url(facebook.png)`,borderRadius:`5px`,marginRight:`10px`}}></div></a></Link>
          <Link href="https://www.instagram.com/elcardenalhotel/"><a target="_blank"rel="noopener noreferrer"><div style={{width:`24px`,height:`24px`,background:`center / cover no-repeat url(instagram.png)`,marginRight:`10px`}}></div></a></Link>
          <Link href="https://twitter.com/elcardenalhotel"><a target="_blank"rel="noopener noreferrer"><div style={{width:`24px`,height:`24px`,background:`center / cover no-repeat url(twitter.png)`,borderRadius:`5px`,marginRight:`10px`}}></div></a></Link>
          <Link href="https://www.tripadvisor.com/Hotel_Review-g644406-d11776034-Reviews-El_Cardenal_Hotel-Loja_Loja_Province.html"><a className="level" target="_blank"rel="noopener noreferrer"><div style={{width:`24px`,height:`24px`,background:`center / cover no-repeat url(trip.png)`}}></div></a></Link>
        </section>
      <p style={{color:`white`,fontSize:`13px`,padding:`0px`,margin:`0px`}}>© 2018 by EL CARDENAL HOTEL</p>
      <section>
        <div style={{background:`center / cover no-repeat url(master.png)`,width:`51px`,height:`27px`,borderRadius:`5px`,marginRight:`10px`}}></div>
        <div style={{background:`center / cover no-repeat url(visa.png)`,width:`51px`,height:`27px`,borderRadius:`5px`,marginRight:`10px`}}></div>
      </section>
      </Wrapper>)}}
