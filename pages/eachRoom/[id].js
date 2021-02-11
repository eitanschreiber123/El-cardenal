import React,{Component}from'react'
import dynamic from'next/dynamic';
import Link from'next/link'
import styled from'styled-components'
import Header from'../../components/header'
import OtherFooter from'../../components/otherFooter'
import Rooms from'../../data'
import{AiOutlineArrowLeft }from'react-icons/ai';
import{FaWifi}from'react-icons/fa';
import{FaShower}from'react-icons/fa';
import{FaPhone}from'react-icons/fa';
import{FaDesktop}from'react-icons/fa';
import{BiCloset}from'react-icons/bi';
import{GiDesk}from'react-icons/gi';
import{i18n,withTranslation}from'../../i18n'
const Wrapper=styled.div`font-family:Playfair Display;main>section{background-color:white;display:flex;flex-direction:column;align-items:center;padding:0px 20px;}main>section>div:first-of-type>div:first-of-type{display:flex;flex-direction:row;align-items:flex-end;margin-bottom:20px;}.images{display:flex;flex-direction:column;}.images>div:last-of-type{display:flex;flex-direction:row;}.info_1,.info_3{display:flex;flex-direction:row;justify-content:space-evenly;}.info_2{display:grid;grid-template-columns:repeat(2,40%);padding-left:25%;grid-gap:20px 30px;}.info_2>div{display:flex;flex-direction:row;align-items:center;}.top{width:100%;display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;}.top a{text-decoration:none;color:white;background-color:black;padding:10px 20px;width:fit-content;height:fit-content;}.current{width:649px;}@media(max-width:800px){main>section{width:90%;}.current{width:100%;}}`
export default withTranslation('common')(class EachPage extends Component{
  constructor(props){
    super(props);
    this.state={active:`big1`,w:``}}
  static async getInitialProps(ctx){
    const{id}=ctx.query;
    const r=Rooms[id];
    return{r,tran:{namespacesRequired:['common','header']}}}
    componentDidMount(){this.checkWidth()
      window.addEventListener('resize',this.checkWidth)}
checkWidth=()=>{if(window.matchMedia('(max-width:300px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:350px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:400px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:450px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:500px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:550px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:600px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:650px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:700px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:750px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:800px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:850px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:900px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:950px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:1000px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:1050px)')){this.setState({w:window.innerWidth})}else{this.setState({w:`100%`})}}
  changeImage=n=>this.setState({active:n});
  render(){return(<Wrapper style={{width:this.state.w}}>
        <Header/>
        <main style={{width:this.state.w,margin:0,position:`relative`,top:`50px`,paddingTop:`90px`,paddingBottom:`90px`,display:`flex`,flexDirection:`column`,alignItems:`center`,zIndex:1,backgroundImage:`url(/roomsPage/background1.png)`,backgroundPosition:`center`,backgroundSize:`cover`,backgroundRepeat:`no-repeat`}}>
          <section>
          <div className="top">
            <h1>{this.props.t("rooms_1")}</h1>
            <Link href="/reserve"><a>{this.props.t("rooms_2")}</a></Link>
          </div>
            <div>
            <div style={{display:`flex`,flexDirection:`row`,alignItems:`flex-end`,marginBottom:`20px`}}><Link href="/rooms"><a style={{marginRight:`10px`}}><AiOutlineArrowLeft style={{color:`black`,width:`25px`,height:`25px`}}/></a></Link><h1 style={{margin:0,lineHeight:1}}>{this.props.r.number}</h1></div>
            <div className="images">
              <div className="current" style={{height:`408px`,background:`center / cover no-repeat url(/rooms/${this.props.r.number}/${this.state.active}.jpg)`,marginBottom:`20px`}}></div>
              <div>{[`/rooms/${this.props.r.number}/small1.jpg`],[`/rooms/${this.props.r.number}/small2.jpg`],[`/rooms/${this.props.r.number}/small3.jpg`].map((i,ind)=>{return<div onClick={()=>this.changeImage(`big${ind + 1}`)}style={{width:`58px`,height:`48px`,background:`center / cover no-repeat url(${i})`}}></div>})}</div>
            </div>
            <div className="info_1">
              <div><p>{this.props.t("rooms_3")}: {this.props.r.size}<sup>2</sup></p></div>
              <div>
                <p>{this.props.t("rooms_4")}:</p>
                  <ul>{Object.entries(this.props.r.beds).map(b=><li>{b[0]}: {b[1]}</li>)}</ul>
              </div>
            </div>
            <hr style={{width:`100%`}}/>
            <div className="info_2">
              <div>
                <FaWifi style={{color:`black`,width:`25px`,height:`25px`,marginRight:`10px`}}/>
                <p>Wifi</p>
              </div>
              <div>
                <FaDesktop style={{color:`black`,width:`25px`,height:`25px`,marginRight:`10px`}}/>
                <p>TV</p>
              </div>
              <div>
                <FaShower style={{color:`black`,width:`25px`,height:`25px`,marginRight:`10px`}}/>
                <p>{this.props.t("each_1")}</p>
              </div>
              <div>
                <FaPhone style={{color:`black`,width:`25px`,height:`25px`,marginRight:`10px`}}/>
                <p>{this.props.t("each_2")}</p>
              </div>
              <div>
                <GiDesk style={{color:`black`,width:`25px`,height:`25px`,marginRight:`10px`}}/>
                <p>{this.props.t("each_3")}</p>
              </div>
              <div>
                <BiCloset style={{color:`black`,width:`25px`,height:`25px`,marginRight:`10px`}}/>
                <p>{this.props.t("each_4")}</p>
              </div>
            </div>
            <hr style={{width:`100%`}}/>
            <div className="info_3">
              <p>{this.props.t("each_5")}: 02:00 PM</p>
              <p>{this.props.t("each_6")}: 11:00 AM</p>
            </div>
            </div>
          </section>
        </main>
        <OtherFooter/>
      </Wrapper>)}})
