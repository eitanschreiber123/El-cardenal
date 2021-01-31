import React,{Component}from'react'
import dynamic from'next/dynamic';
import Link from'next/link'
import styled from'styled-components'
import Header from'../components/header'
import OtherFooter from'../components/otherFooter'
import{i18n,withTranslation}from'../i18n'
import ReactPlayer from 'react-player/youtube'
const Wrapper=styled.div`font-family:Playfair Display;main>section{background-color:white;display:flex;flex-direction:column;align-items:center;padding:0px 20px;width:90%;padding-bottom:100px;}main>section>div:first-of-type{align-self:center;display:grid;grid-template-columns:repeat(4,200px);grid-gap:5vh 2%;margin-bottom:100px;}@media(max-width:1000px){main>section>div:first-of-type{grid-template-columns:repeat(3,200px);}}@media(max-width:800px){main>section>div:first-of-type{grid-template-columns:repeat(2,200px);}}@media(max-width:700px){main>section>div:first-of-type{grid-template-columns:repeat(1,200px);}}`
class LocationPage extends Component{
  constructor(props) {
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
        <main style={{width:this.state.w,margin:0,position:`relative`,top:`50px`,paddingTop:`90px`,display:`flex`,flexDirection:`column`,alignItems:`center`,zIndex:1,backgroundImage:`url(/events/background1.png)`,backgroundPosition:`center`,backgroundSize:`cover`,backgroundRepeat:`no-repeat`}}>
          <section>
            <h1>{this.props.t("location")}</h1>
            <div>
              <div style={{width:`200px`,height:`200px`,background:`center / cover no-repeat url(/location/first.jpg)`, display:`flex`,flexDirection:`column`,justifyContent:`flex-end`}}><p style={{margin:0,width:`fit-content`,height:`fit-content`,padding:`10px`,backgroundColor:`grey`}}>Puerta de la ciudad</p></div>
              <div style={{width:`200px`,height:`200px`,background:`center / cover no-repeat url(/location/second.jpg)`}}></div>
              <div style={{width:`200px`,height:`200px`,background:`center / cover no-repeat url(/location/third.JPG)`}}></div>
              <div style={{width:`200px`,height:`200px`,background:`center / cover no-repeat url(/location/hotel.jpg)`}}></div>
              <div style={{width:`200px`,height:`200px`,background:`center / cover no-repeat url(/location/church.jpg)`}}></div>
              <div style={{width:`200px`,height:`200px`,background:`center / cover no-repeat url(/location/church2.JPG)`}}></div>
              <div style={{width:`200px`,height:`200px`,background:`center / cover no-repeat url(/location/gate.JPG)`}}></div>
              <div style={{width:`200px`,height:`200px`,background:`center / cover no-repeat url(/location/statue.JPG)`}}></div>
            </div>
            <ReactPlayer url='https://www.youtube.com/watch?v=69PP-mea7_Y'controls width="100%"style={{marginBottom:`100px`}}/>
            <ReactPlayer url="https://www.youtube.com/watch?v=0R-RVQeCn14&t"controls width="100%"/>
            <p>La ciudad de loja es la capital musica de Ecuador, se encuentraen el sur del pais, es considerada un ejemplo del exito en la riqueza, religion, cultura y tradicion. En 1594, la Virgen Maria coronada de rosas fragantes se aparecio en la montaña a una doncella indigena que pastoreaba las ovejas...<br/>El Santuario de "El cisne". Su advocacion se origino desde Alemania con la leyenda de Lohengrin cabarello cristiano del Santo Grial. Aquellos antepasados antiguos deben haber visto de inmediato lo especial que era la tierra ya que los seres humanos viven mas tiempo. Loja, ciudad milenaria, cruce de diferentes culturas: nativa, judia y cristiana. En ese entorno tiene monumentos, plazas y memoriales; museos y restaurantes; danzas, comidas tradicionales y juegos. El arte en Loja es muy importante especialmente la musica, la literatura y la pintura.</p>
            <p>The city of Loja is the musical capital of Ecuador, located in the south of the country is considered an example of success in wealth, religion, culture, and tradition, In 1594, The Virgin Mary crowned with fragrant roses appeared at the mountain to a native woman who grazed the sheep...<br/>The zion "El cisne". Its dedication originated from Germany with the legend of Lohengrin, Christian Knight of the holy grail. Those ancient ancestors must have immediately seen how special earth was since humans live longer, Loja, ancient city, mixture of different cultures: native jewish and Christian has monuments, squares and memorials; museums and restaurans; dances, traditional foods and games. Art in Loja is very important especially music, literature and painting</p>
          </section>
        </main>
        <OtherFooter/>
      </Wrapper>)}}
export default withTranslation('common')(LocationPage)
