import React, { Component } from 'react'
import dynamic from 'next/dynamic';
import Link from 'next/link'
import styled from 'styled-components'
import Header from '../components/header'
import OtherFooter from '../components/otherFooter'
import { i18n, withTranslation } from '../i18n'
const Wrapper = styled.div`font-family:Playfair Display;main>section{background-color:white;display:flex;flex-direction:column;align-items:center;padding:0 20px;}main>section>div:first-of-type{display:flex;flex-direction:row;margin-bottom:100px;}main>section>div:first-of-type>div{display:flex;flex-direction:column;width:442px;align-items:center;text-align:center;}button{width:fit-content;padding:10px 20px;background-color:white;border:1px solid black;}button:hover{background-color:black;color:white;}main>section>div:first-of-type>div>h1{font-size:21px;color:#611A1E;}`
class EventsPage extends Component {
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
            <h1>{this.props.t("events_header")}</h1>
            <div>
              <div style={{marginRight:`50px`}}>
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
