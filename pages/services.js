import React, { Component } from 'react'
import dynamic from 'next/dynamic';
import Link from 'next/link'
import styled from 'styled-components'
import Header from '../components/header'
import OtherFooter from '../components/otherFooter'
import { i18n, withTranslation } from '../i18n'
import { BsCreditCard } from 'react-icons/bs';
import { FaWifi } from 'react-icons/fa';
import { BiRestaurant } from 'react-icons/bi';
import { FaDesktop } from 'react-icons/fa';
import { MdEventNote } from 'react-icons/md';
import { MdLocalLaundryService } from 'react-icons/md';
import { GiCoffeePot } from 'react-icons/gi'
import { GiMirrorMirror } from 'react-icons/gi'
import { ImAirplane } from 'react-icons/im'
import { BsFillPeopleFill } from 'react-icons/bs'
const Wrapper = styled.div`font-family:Playfair Display;main>section{background-color:white;display:flex;flex-direction:column;align-items:center;padding:0px 20px;}main>section>div:first-of-type{display:grid;grid-template-columns:repeat(5, 100px);grid-gap:30px 25px;}main>section>div:first-of-type>div{display:flex;flex-direction:column;}main>section>div:last-of-type{display:flex;flex-direction:column;margin-bottom:90px;}main>section>div:last-of-type>div{display:flex;flex-direction:row;}main>section>div:last-of-type>div>p{margin-right:50px;}h1{color:rgb(97,26,30);}`
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
                <FaWifi style={{width: `100px`, height: `100px`}}/>
                <p>Wifi</p>
              </div>
              <div>
                <BsCreditCard style={{width: `100px`, height: `100px`}}/>
                <p>Tarjeta de credito</p>
              </div>
              <div>
                <BiRestaurant style={{width: `100px`, height: `100px`}}/>
                <p>Restaurante</p>
              </div>
              <div>
                <FaDesktop style={{width: `100px`, height: `100px`}}/>
                <p>Tv-cable</p>
              </div>
              <div>
                <MdEventNote style={{width: `100px`, height: `100px`}}/>
                <p>Eventos</p>
              </div>
              <div>
                <div style={{height: `100px`, width: `100px`, background: `center / cover no-repeat url(/services/outdoor.jpg)`}}></div>
                <p>Jardin / Terraza</p>
              </div>
              <div>
                <MdLocalLaundryService style={{width: `100px`, height: `100px`}}/>
                <p>Lavanderia</p>
              </div>
              <div>
                <BsFillPeopleFill style={{width: `100px`, height: `100px`}}/>
                <p>Salas deReuniones</p>
              </div>
              <div>
                <GiCoffeePot style={{width: `100px`, height: `100px`}}/>
                <p>Taberna / Cafeteria</p>
              </div>
              <div>
                <GiMirrorMirror style={{width: `100px`, height: `100px`}}/>
                <p>Espejo de Maquillaje</p>
              </div>
            </div>
            <div style={{display: `flex`,flexDirection:`row`}}>
              <div style={{width:`200px`,height:`200px`,background:`center / cover no-repeat url(/services/food_1.jpg)`,margin:`0 50px`}}></div>
              <div style={{width:`200px`,height:`200px`,background:`center / cover no-repeat url(/services/food_2.jpg)`,margin:`0 50px`}}></div>
              <div style={{width:`200px`,height:`200px`,background:`center / cover no-repeat url(/services/food_3.jpg)`,margin:`0 50px`}}></div>
            </div>
            <div className="airplane">
              <h1>Pick up from airport</h1>
              <div>
                <p>We can go to the airport to pick you up and take you to the hotel at no extra charge</p>
                <ImAirplane style={{width: `150px`, height: `150px`}}/>
              </div>
            </div>
        </section>
        </main>
        <OtherFooter/>
      </Wrapper>)}}
export default withTranslation('common')(ServicesPage)
