import React,{Component}from'react'
import dynamic from'next/dynamic';
import Link from'next/link'
import styled from'styled-components'
import Header from'../components/header'
import OtherFooter from'../components/otherFooter'
import{i18n,withTranslation}from'../i18n'
const Wrapper=styled.div`font-family:Playfair Display;main>section{background-color:white;display:flex;flex-direction:column;align-items:center;padding:0 20px;}main>section>div:first-of-type{display:flex;flex-direction:row;margin-bottom:50px;}main>section>div:first-of-type>div{display:flex;flex-direction:column;width:442px;align-items:center;text-align:center;}main>section>div:first-of-type button{width:fit-content;padding:10px 20px;background-color:white;border:1px solid black;}main>section>div:first-of-type button:hover{background-color:black;color:white;}main>section>div:first-of-type>div>h1{font-size:21px;color:#611A1E;}main>section>div:first-of-type>div:first-of-type{margin-right:50px;}.special{display:flex;flex-direction:column;margin-bottom:100px;align-items:center;}.special>h1{color:#611A1E;}.special-images{display:grid;grid-template-columns:repeat(2,300px);grid-gap:50px;}@media(max-width:850px){main>section>div:first-of-type{flex-direction:column;width:90%;}main>section>div:first-of-type>div:first-of-type{margin-right:0;}main>section>div:first-of-type>div{width:100%;}main>section{width:90%;display:flex;flex-direction:column;align-items:center;}}@media(max-width:800px){.special-images{grid-template-columns:repeat(1,300px);}}`
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
        <main style={{width:this.state.w,margin:0,position:`relative`,top:`50px`,paddingTop:`90px`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,zIndex:1,backgroundImage:`url(/events/background1.png)`,backgroundPosition:`center`,backgroundSize:`cover`,backgroundRepeat:`no-repeat`}}>
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
            <div className="special">
              <h1>Rooms for special occasions</h1>
              <div className="special-images">
                <div style={{width:`300px`,height:`300px`,background:`center / cover no-repeat url(/events/special1.jpg)`}}></div>
                <div style={{width:`300px`,height:`300px`,background:`center / cover no-repeat url(/events/special2.jpg)`}}></div>
                <div style={{width:`300px`,height:`300px`,background:`center / cover no-repeat url(/events/special3.jpg)`}}></div>
                <div style={{width:`300px`,height:`300px`,background:`center / cover no-repeat url(/events/special4.jpg)`}}></div>
              </div>
            </div>
          </section>
        </main>
        <OtherFooter/>
      </Wrapper>)}}
export default withTranslation('common')(EventsPage)
