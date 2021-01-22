import React,{Component}from'react'
import dynamic from'next/dynamic';
import Link from'next/link'
import styled from'styled-components'
import Header from'../components/header'
import OtherFooter from'../components/otherFooter'
import{i18n,withTranslation}from'../i18n'
import{BsCreditCard,BsFillPeopleFill}from'react-icons/bs';
import{FaWifi,FaDesktop}from'react-icons/fa';
import{BiRestaurant}from'react-icons/bi';
import{MdEventNote,MdLocalLaundryService}from'react-icons/md';
import{GiCoffeePot,GiMirrorMirror}from'react-icons/gi'
import{ImAirplane}from'react-icons/im'
const Wrapper=styled.div`font-family:Playfair Display;main>section{background-color:white;display:flex;flex-direction:column;align-items:center;padding:0px 20px;width:90%;}main>section>div:first-of-type{display:grid;grid-template-columns:repeat(5,100px);grid-gap:30px 25px;}main>section>div:first-of-type>div{display:flex;flex-direction:column;text-align:center;}main>section>div:last-of-type{display:flex;flex-direction:column;margin-bottom:90px;}main>section>div:last-of-type>div{display:flex;flex-direction:row;}main>section>div:last-of-type>div>p{margin-right:50px;}h1{color:rgb(97,26,30);}.food{flex-direction:row;}.food{display:flex;flex-direction:row;width:100%;justify-content:space-evenly;}.food>div{margin:50px 0;width:200px;height:200px;}@media(max-width:800px){.food{flex-direction:column;align-items:center;}main>section>div:last-of-type>div{flex-direction:column;}main>section>div:first-of-type{grid-template-columns:repeat(4,100px);}}@media(max-width:700px){main>section>div:first-of-type{grid-template-columns:repeat(3,100px);}}@media(max-width:600px){main>section>div:first-of-type{grid-template-columns:repeat(2,100px);}}`
class ServicesPage extends Component{
  constructor(props){
    super(props);
    this.state={w:``}}
  static async getInitialProps(ctx){return{namespacesRequired:['common','header']}}
  componentDidMount(){this.checkWidth()
    window.addEventListener('resize',this.checkWidth)}
checkWidth=()=>{if(window.matchMedia('(max-width:300px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:350px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:400px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:450px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:500px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:550px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:600px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:650px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:700px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:750px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:800px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:850px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:900px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:950px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:1000px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:1050px)')){this.setState({w:window.innerWidth})}else{this.setState({w:`100%`})}}
  render(){
    return(<Wrapper style={{width:this.state.w}}>
        <Header/>
        <main style={{width:this.state.w,margin:0,position:`relative`,top:`50px`,paddingTop:`90px`,display:`flex`,flexDirection:`column`,alignItems:`center`,zIndex:1,backgroundImage:`url(/events/background_1.png)`,backgroundPosition:`center`,backgroundSize:`cover`,backgroundRepeat:`no-repeat`}}>
          <section>
            <h1>{this.props.t("services_1")}</h1>
            <div>
              <div>
                <FaWifi style={{width: `100px`,height:`100px`}}/>
                <p>Wifi</p>
              </div>
              <div>
                <BsCreditCard style={{width:`100px`,height:`100px`}}/>
                <p>{this.props.t("services_2")}</p>
              </div>
              <div>
                <BiRestaurant style={{width:`100px`,height:`100px`}}/>
                <p>{this.props.t("services_3")}</p>
              </div>
              <div>
                <FaDesktop style={{width:`100px`,height:`100px`}}/>
                <p>Tv-cable</p>
              </div>
              <div>
                <MdEventNote style={{width:`100px`,height:`100px`}}/>
                <p>{this.props.t("services_4")}</p>
              </div>
              <div>
                <div style={{height:`100px`,width:`100px`,background:`center / cover no-repeat url(/services/outdoor.jpg)`}}></div>
                <p>{this.props.t("services_5")}</p>
              </div>
              <div>
                <MdLocalLaundryService style={{width:`100px`,height:`100px`}}/>
                <p>{this.props.t("services_6")}</p>
              </div>
              <div>
                <BsFillPeopleFill style={{width:`100px`,height:`100px`}}/>
                <p>{this.props.t("services_7")}</p>
              </div>
              <div>
                <GiCoffeePot style={{width:`100px`,height:`100px`}}/>
                <p>{this.props.t("services_8")}</p>
              </div>
              <div>
                <GiMirrorMirror style={{width:`100px`,height:`100px`}}/>
                <p>{this.props.t("services_9")}</p>
              </div>
            </div>
            <div className="food">
              <div style={{background:`center / cover no-repeat url(/services/food_1.jpg)`,margin:`50px`}}></div>
              <div style={{background:`center / cover no-repeat url(/services/food_2.jpg)`,margin:`50px`}}></div>
              <div style={{background:`center / cover no-repeat url(/services/food_3.jpg)`,margin:`50px`}}></div>
            </div>
            <div className="airplane">
              <h1>{this.props.t("services_10")}</h1>
              <div className="plane">
                <p>{this.props.t("services_11")}</p>
                <ImAirplane style={{width:`150px`,height:`150px`}}/>
              </div>
            </div>
        </section>
        </main>
        <OtherFooter/>
      </Wrapper>)}}
export default withTranslation('common')(ServicesPage)
