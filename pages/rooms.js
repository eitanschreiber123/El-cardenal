import React,{Component}from'react'
import dynamic from'next/dynamic';
import Link from'next/link'
import styled from'styled-components'
import Header from'../components/header'
import OtherFooter from'../components/otherFooter'
import Rooms from'../data/rooms'
import{FaWifi,FaShower,FaPhone,FaDesktop}from'react-icons/fa';
import{BiCloset}from'react-icons/bi';
import{GiDesk}from'react-icons/gi';
import{i18n,withTranslation}from'../i18n'
const Wrapper=styled.div`font-family:Playfair Display;main>section{background-color:white;display:flex;flex-direction:column;align-items:center;padding:0px 20px;}.list{display:flex;flex-direction:column;}.each{display:flex;flex-direction:row;height:170px;margin-bottom:50px;align-items:flex-end;}ul{list-style-type:none;}.middle{height:100%;display:flex;flex-direction:column;margin-right:50px;}.icons{display:flex;flex-direction:row;}.list button{color:white;background-color:black;padding:10px 20px;height:fit-content;width:fit-content;border:none;}a{text-decoration:none;color:black;}.top{width:100%;display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;}.top a{text-decoration:none;color:white;background-color:black;padding:10px 20px;width:fit-content;height:fit-content;}@media(max-width:800px){.each{flex-direction:column;height:auto;}.icons{margin-bottom:20px;}}`
class RoomsPage extends Component{
  constructor(props) {
    super(props);
    this.state={w:``}}
  static async getInitialProps(ctx){
    return{namespacesRequired:['common','header']}}
    componentDidMount(){this.checkWidth()
      window.addEventListener('resize',this.checkWidth)}
checkWidth=()=>{if(window.matchMedia('(max-width:300px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:350px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:400px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:450px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:500px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:550px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:600px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:650px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:700px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:750px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:800px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:850px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:900px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:950px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:1000px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:1050px)')){this.setState({w:window.innerWidth})}else{this.setState({w:`100%`})}}
  render(){
    return(<Wrapper style={{width:this.state.w}}>
        <Header/>
        <main style={{width:this.state.w,margin:0,position:`relative`,top:`50px`,paddingTop:`90px`,paddingBottom:`90px`,display:`flex`,flexDirection:`column`,alignItems:`center`,zIndex:1,backgroundImage:`url(/roomsPage/background1.png)`,backgroundPosition:`center`,backgroundSize:`cover`,backgroundRepeat:`no-repeat`}}>
          <section>
            <div className="top">
              <h1>{this.props.t("rooms_1")}</h1>
              <Link href="/reserve"><a>{this.props.t("rooms_2")}</a></Link>
            </div>
            <div className="list">
              {Rooms.map((r,ind)=>{return<Link href="/eachRoom/[id]"as={`/eachRoom/${ind}`}><a><div className="each">
                <div style={{width:`240px`,height:`170px`,background:`center / cover no-repeat url(/roomsPage/${r.number}.jpg)`,marginRight:`30px`}}></div>
                <div className="middle">
                  <h1 style={{margin: 0,lineHeight: 1}}>{r.number}</h1>
                  <ul>
                    <li>{this.props.t("rooms_3")}: {r.size}<sup>2</sup></li>
                    <li>{this.props.t("rooms_4")}:</li>
                      <ul>{Object.entries(r.beds).map(b=><li>{b[0]}: {b[1]}</li>)}</ul>
                  </ul>
                  <hr style={{width:`100%`}}/>
                  <div className="icons">
                    <FaWifi style={{color:`black`,width:`25px`,height:`25px`,marginRight:`20px`}}/>
                    <FaDesktop style={{color:`black`,width:`25px`,height:`25px`,marginRight:`20px`}}/>
                    <FaShower style={{color:`black`,width:`25px`,height:`25px`,marginRight:`20px`}}/>
                    <FaPhone style={{color:`black`,width:`25px`,height:`25px`,marginRight:`20px`}}/>
                    <GiDesk style={{color:`black`,width:`25px`,height:`25px`,marginRight:`20px`}}/>
                    <BiCloset style={{color:`black`,width:`25px`,height:`25px`}}/>
                  </div>
                </div>
                <button>{this.props.t("rooms_5")}</button>
                </div></a></Link>})}
            </div>
          </section>
        </main>
        <OtherFooter/>
      </Wrapper>)}}
export default withTranslation('common')(RoomsPage)
