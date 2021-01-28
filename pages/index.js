import React,{Component}from'react'
import dynamic from'next/dynamic';
import Link from'next/link'
import styled from'styled-components'
import Header from'../components/header'
import OtherFooter from'../components/otherFooter'
import{i18n,withTranslation}from'../i18n'
import ReactPlayer from 'react-player/youtube'
const Wrapper=styled.div`font-family:Playfair Display;main>div:first-of-type{display:flex;flex-direction:column;align-items:center;margin-bottom:50px;}main>div:last-of-type>div:last-of-type{display:grid;grid-template-columns:repeat(4,235px);}main>div:last-of-type{display:flex;flex-direction:column;align-items:center;}main>div a>button{width:261px;height:40px;background-color:white;border:1px solid black;}main>div a>button:hover{background-color:rgb(97,26,30);border:1px solid white;}a{color:black;}main>div:last-of-type>div p,main>div:last-of-type>div h1{font-size:14px;font-weight:400;}main{align-items:flex-end;}.award{flex-direction:row;}.award>div{margin:50px 0;}@media(max-width:1140px){main{align-items:center;}}@media(max-width:970px){main>div:last-of-type>div:last-of-type{grid-template-columns:repeat(3,235px)}}@media(max-width:700px){main>div:last-of-type>div:last-of-type{grid-template-columns:repeat(2,235px)}}@media(max-width:600px){main>div:last-of-type>div:last-of-type{grid-template-columns:repeat(1,235px)}}@media(max-width:500px){.award{flex-direction:column;}.award>div{margin:50px 0;}}`
class HomePage extends Component{
  constructor(props){
    super(props);
    this.state={w:``}}
  static async getInitialProps(ctx){
    return{namespacesRequired:['common','header']}}
    componentDidMount() {this.checkWidth()
      window.addEventListener('resize',this.checkWidth)}
checkWidth=()=>{if(window.matchMedia('(max-width:300px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:350px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:400px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:450px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:500px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:550px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:600px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:650px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:700px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:750px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:800px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:850px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:900px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:950px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:1000px)')){this.setState({w:window.innerWidth})}else if(window.matchMedia('(max-width:1050px)')){this.setState({w:window.innerWidth})}else{this.setState({w:`100%`})}}
  render(){
    return(<Wrapper style={{width:this.state.w}}>
        <Header/>
        <main style={{width:this.state.w,margin:0,padding:`50px 200px 100px 200px`,position:`relative`,top:`50px`,display:`flex`,flexDirection:`column`,zIndex:1,backgroundAttachment:`fixed`,backgroundImage:`url(/home/background1.png)`,backgroundPosition:`center`,backgroundSize:`cover`,backgroundRepeat:`no-repeat`,backgroundColor:`grey`,backgroundBlendMode:`soft-light`}}>
          <div>
            <h1 style={{fontFamily:`Playfair Display`,fontSize:`100px`,lineHeight:`1.2em`,textShadow:`rgba(0, 0, 0, 0.298039) 0px 5px 0px`,color:`white`,marginBottom:`20px`,fontWeight:500}}>{this.props.t("header_1")}</h1>
            <h1 style={{fontFamily:`times new roman`,fontSize:`30px`,lineHeight:`1.2em`,textShadow:`rgba(0, 0, 0, 0.298039) 0px 5px 0px`}}>{this.props.t("header_2")}</h1>
            <Link href="/rooms"><a><button>{this.props.t("button")}</button></a></Link>
          </div>
          <div>
          <div className="award" style={{display: `flex`,width:`100%`,justifyContent:`space-evenly`}}>
            <div style={{width:`200px`,height:`200px`,background:`center / cover no-repeat url(/home/award1.png)`}}></div>
            <div style={{width:`200px`,height:`200px`,background:`center / cover no-repeat url(/home/award2.jpg)`}}></div>
          </div>
          <ReactPlayer url='https://www.youtube.com/watch?v=69PP-mea7_Y' controls width="100%"/>
          <h1 style={{color:`white`,textShadow:`rgba(0, 0, 0, 0.298039) 0px 5px 0px`}}>{this.props.t("header_3")}</h1>
          <div>
            <div style={{width:`235px`,height:`276px`,background:`center / cover no-repeat url(/home/table.png)`}}></div>
            <div style={{width:`235px`,height:`276px`,display:`flex`,flexDirection:`column`,textAlign:`center`,backgroundColor:`white`,padding:`30px 10px 0px 10px`}}>
              <h1 style={{textAlign:`center`,color:`rgb(97, 26, 30)`}}>{this.props.t("grid_header_1")}</h1>
              <p style={{textAlign:`center`}}>{this.props.t("grid_p_1")}</p>
            </div>
            <div style={{width:`235px`,height:`276px`,background:`center / cover no-repeat url(/home/enter.png)`}}></div>
            <div style={{width:`235px`,height:`276px`,display:`flex`,flexDirection:`column`,textAlign:`center`,backgroundColor:`white`,padding:`30px 10px 0px 10px`}}>
              <h1 style={{textAlign:`center`,color:`rgb(97, 26, 30)`}}>{this.props.t("grid_header_2")}</h1>
              <p style={{textAlign:`center`}}>{this.props.t("grid_p_2")}</p>
            </div>
            <div style={{width:`235px`,height:`276px`,display:`flex`,flexDirection:`column`,textAlign:`center`,backgroundColor:`white`,padding:`30px 10px 0px 10px`}}>
              <h1 style={{textAlign:`center`,color:`rgb(97, 26, 30)`}}>{this.props.t("grid_header_3")}</h1>
              <p style={{textAlign:`center`}}>{this.props.t("grid_p_3")}</p>
            </div>
            <div style={{width:`235px`,height:`276px`,background:`center / cover no-repeat url(/home/view.png)`}}></div>
            <div style={{width:`235px`,height:`276px`,display:`flex`,flexDirection:`column`,textAlign:`center`,backgroundColor:`white`,padding:`30px 10px 0px 10px`}}>
              <h1 style={{textAlign:`center`,color:`rgb(97, 26, 30)`}}>{this.props.t("grid_header_4")}</h1>
              <p style={{textAlign:`center`}}>{this.props.t("grid_p_4")}</p>
            </div>
            <div style={{width:`235px`,height:`276px`,background:`center / cover no-repeat url(/home/corner.png)`}}></div>
          </div>
          </div>
        </main>
        <OtherFooter/>
      </Wrapper>)}}
export default withTranslation('common')(HomePage)
