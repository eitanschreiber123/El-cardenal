import React, { Component } from 'react'
import dynamic from 'next/dynamic';
import Link from 'next/link'
import styled from 'styled-components'
import Header from '../components/header'
import OtherFooter from '../components/otherFooter'
import { i18n, withTranslation } from '../i18n'
const Wrapper = styled.div`font-family:Playfair Display;main>section{background-color:white;display:flex;flex-direction:column;align-items:center;padding:0px 20px;width:800px;padding-bottom:100px;}
  main>section>div:first-of-type {
    display: flex;
    flex-direction: row;
  }
  main>section>div:first-of-type>div {
    margin: 0 50px;
    width: 200px;
    height: 200px;
  }
`
class LocationPage extends Component {
  constructor(props) {
    super(props);
    }
  static async getInitialProps(ctx){
    return {namespacesRequired: ['common', 'header']}
  }
  render() {
    return (<Wrapper>
        <Header/>
        <main style={{width:`100%`,margin:0,position:`relative`,top:`7vh`,paddingTop:`90px`,display:`flex`,flexDirection:`column`,alignItems:`center`,zIndex:1,backgroundImage:`url(/events/background_1.png)`,backgroundPosition:`center`,backgroundSize:`cover`,backgroundRepeat:`no-repeat`}}>
          <section>
            <h1>Location</h1>
            <div>
              <div style={{background:`center / cover no-repeat url(/location/first.jpg)`}}>
              </div>
              <div style={{background:`center / cover no-repeat url(/location/second.jpg)`}}></div>
              <div style={{background:`center / cover no-repeat url(/location/third.JPG)`}}></div>
            </div>
            <p>La ciudad de loja es la capital musica de Ecuador, se encuentraen el sur del pais, es considerada un ejemplo del exito en la riqueza, religion, cultura y tradicion. En 1594, la Virgen Maria coronada de rosas fragantes se aparecio en la montaña a una doncella indigena que pastoreaba las ovejas...<br/>El Santuario de "El cisne". Su advocacion se origino desde Alemania con la leyenda de Lohengrin cabarello cristiano del Santo Grial. Aquellos antepasados antiguos deben haber visto de inmediato lo especial que era la tierra ya que los seres humanos viven mas tiempo. Loja, ciudad milenaria, cruce de diferentes culturas: nativa, judia y cristiana. En ese entorno tiene monumentos, plazas y memoriales; museos y restaurantes; danzas, comidas tradicionales y juegos. El arte en Loja es muy importante especialmente la musica, la literatura y la pintura.</p>
            <p>The city of Loja is the musical capital of Ecuador, located in the south of the country is considered an example of success in wealth, religion, culture, and tradition, In 1594, The Virgin Mary crowned with fragrant roses appeared at the mountain to a native woman who grazed the sheep...<br/>The zion "El cisne". Its dedication originated from Germany with the legend of Lohengrin, Christian Knight of the holy grail. Those ancient ancestors must have immediately seen how special earth was since humans live longer, Loja, ancient city, mixture of different cultures: native jewish and Christian has monuments, squares and memorials; museums and restaurans; dances, traditional foods and games. Art in Loja is very important especially music, literature and painting</p>
          </section>
        </main>
        <OtherFooter/>
      </Wrapper>)}}
export default withTranslation('common')(LocationPage)
