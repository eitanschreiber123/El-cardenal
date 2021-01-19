import React, { Component } from 'react'
import dynamic from 'next/dynamic';
import Link from 'next/link'
import styled from 'styled-components'
import Header from '../components/header'
import OtherFooter from '../components/otherFooter'
import { i18n, withTranslation } from '../i18n'
import { BsCreditCard } from 'react-icons/bs';
import { FaWifi } from 'react-icons/fa';
import { IoRestaurant } from 'react-icons/io';
import { FaDesktop } from 'react-icons/fa';
import { FaMusic } from 'react-icons/fa';
import { MdEventNote } from 'react-icons/md';
import { MdLocalLaundryService } from 'react-icons/md';
import { GiCoffeePot } from 'react-icons/gi'
import { GiMirrorMirror } from 'react-icons/gi'
const Wrapper = styled.div`font-family:Playfair Display;main>section{background-color:white;display:flex;flex-direction:column;align-items:center;padding:0px 20px;}
main>section>div:first-of-type {
  display: grid;
  grid-template-columns: repeat(4, 200px);
}
`
class ServicesPage extends Component {
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
            <h1>Services</h1>
            <div>
              <div>
                //image
                <p></p>
              </div>
              <div>
                //image
                <p></p>
              </div>
              <div>
                //image
                <p></p>
              </div>
              <div>
                //image
                <p></p>
              </div>
              <div>
                //image
                <p></p>
              </div>
              <div>
                //image
                <p></p>
              </div>
              <div>
                //image
                <p></p>
              </div>
              <div>
                //image
                <p></p>
              </div>
              <div>
                //image
                <p></p>
              </div>
              <div>
                //image
                <p></p>
              </div>
              <div>
                //image
                <p></p>
              </div>
              <div>
                //image
                <p></p>
              </div>
            </div>
            <div>
              //image
              <div>
                <h1>Pick up from airport</h1>
                <p></p>
              </div>
          </div>
        </section>
        </main>
        <OtherFooter/>
      </Wrapper>)}}
export default withTranslation('common')(ServicesPage)
