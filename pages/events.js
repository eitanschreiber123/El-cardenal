import React,{Component}from'react'
import dynamic from'next/dynamic';
import Link from'next/link'
import styled from'styled-components'
import Header from'../components/header'
import OtherFooter from'../components/otherFooter'
import{i18n,withTranslation}from'../i18n'
const Wrapper=styled.div`font-family:Playfair Display;main>section{background-color:white;display:flex;flex-direction:column;align-items:center;padding:0 20px;}main>section>div:first-of-type{display:flex;flex-direction:row;margin-bottom:100px;}main>section>div:first-of-type>div{display:flex;flex-direction:column;width:442px;align-items:center;text-align:center;}main>section>div:first-of-type button{width:fit-content;padding:10px 20px;background-color:white;border:1px solid black;}main>section>div:first-of-type button:hover{background-color:black;color:white;}main>section>div:first-of-type>div>h1{font-size:21px;color:#611A1E;}main>section>div:first-of-type>div:first-of-type{margin-right:50px;}@media(max-width:800px){main>section>div:first-of-type{flex-direction:column;width:90%;}main>section>div:first-of-type>div:first-of-type{margin-right:0;}main>section>div:first-of-type>div{width:100%;}main>section{width:90%;display:flex;flex-direction:column;align-items:center;}}`
class EventsPage extends Component{
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
        <main style={{width:this.state.w,margin:0,height:`100vh`,position:`relative`,top:`50px`,paddingTop:`90px`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,zIndex:1,backgroundImage:`url(/events/background_1.png)`,backgroundPosition:`center`,backgroundSize:`cover`,backgroundRepeat:`no-repeat`}}>
          <section>
            <h1>{this.props.t("events_header")}</h1>
            <div>
              <div>
                <div style={{width:`100%`,height:`251px`,background:`center / cover no-repeat url(/events/first.png)`}}></div>
                <h1>CLUB El CARDENAL</h1>
                <p>{this.props.t("column_1_p_1")}</p>
                <p>{this.props.t("column_1_p_2")}</p>
                <p>{this.props.t("column_1_p_3")}</p>
              </div>
              <div>
                <div style={{width:`100%`,height:`251px`,background:`center / cover no-repeat url(/events/second.png)`}}></div>
                <h1>{this.props.t("column_2_header")}</h1>
                <p>{this.props.t("column_2_p_1")}</p>
                <p>{this.props.t("column_2_p_2")}</p>
                <p>{this.props.t("column_2_p_3")}</p>
                <button>{this.props.t("column_2_button")}</button>
              </div>
            </div>
          </section>
        </main>
        <OtherFooter/>
      </Wrapper>)}}
export default withTranslation('common')(EventsPage)
