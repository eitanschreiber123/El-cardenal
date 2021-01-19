import React, { Component } from 'react'
import dynamic from 'next/dynamic';
import Link from 'next/link'
import styled from 'styled-components'
import Header from '../components/header'
import OtherFooter from '../components/otherFooter'
import Rooms from '../data/rooms'
import { FaWifi } from 'react-icons/fa';
import { FaShower } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaDesktop } from 'react-icons/fa';
import { BiCloset } from 'react-icons/bi';
import { GiDesk } from 'react-icons/gi';
import { i18n, withTranslation } from '../i18n'
const Wrapper=styled.div`font-family:Playfair Display;main>section{background-color:white;display:flex;flex-direction:column;align-items:center;padding:0px 20px;}.list{display:flex;flex-direction:column;}.each{display:flex;flex-direction:row;height:170px;margin-bottom:50px;align-items:flex-end;}ul{list-style-type:none;}.middle{height:100%;display:flex;flex-direction:column;margin-right:50px;}.icons{display:flex;flex-direction:row;}button{color:white;background-color:black;padding:10px 20px;height:fit-content;width:fit-content;border:none;}a{text-decoration:none;color:black;}.top{width:100%;display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;}.top a{text-decoration:none;color:white;background-color:black;padding:10px 20px;width:fit-content;height:fit-content;}`
class RoomsPage extends Component {
  constructor(props) {
    super(props);
    }
  static async getInitialProps(ctx){
    return {namespacesRequired: ['common', 'header']}
  }
  render() {
    return (<Wrapper>
        <Header/>
        <main style={{width:`100%`,margin:0,position:`relative`,top:`7vh`,paddingTop:`90px`,paddingBottom:`90px`,display:`flex`,flexDirection:`column`,alignItems:`center`,zIndex:1,backgroundImage:`url(/roomsPage/background_1.png)`,backgroundPosition:`center`,backgroundSize:`cover`,backgroundRepeat:`no-repeat`}}>
          <section>
            <div className="top">
              <h1>Rooms</h1>
              <Link href="/reserve"><a>Reserve now</a></Link>
            </div>
            <div className="list">
              {Rooms.map((r,ind)=>{return<Link href="/eachRoom/[id]"as={`/eachRoom/${ind}`}><a><div className="each">
                <div style={{width:`240px`,height:`170px`,background:`center / cover no-repeat url(/roomsPage/${r.number}.jpg)`,marginRight:`30px`}}></div>
                <div className="middle">
                  <h1 style={{margin: 0,lineHeight: 1}}>{r.number}</h1>
                  <ul>
                    <li>size: {r.size}<sup>2</sup></li>
                    <li>beds:</li>
                      <ul>{Object.entries(r.beds).map(b=><li>{b[0]}: {b[1]}</li>)}</ul>
                  </ul>
                  <hr style={{width:`100%`}}/>
                  <div className="icons">
                    <FaWifi style={{color:`black`,width:`25px`,height:`25px`,marginRight:`20px`}}/>
                    <FaDesktop style={{color:`black`,width:`25px`,height:`25px`,marginRight:`20px`}}/>
                    <FaShower style={{color:`black`,width:`25px`,height:`25px`,marginRight:`20px`}}/>
                    <FaPhone style={{color:`black`,width:`25px`,height:`25px`,marginRight:`20px`}}/>
                    <GiDesk style={{color:`black`,width:`25px`,height:`25px`,marginRight:`20px`}}/>
                    <BiCloset style={{color:`black`,width:`25px`,height:`25px`}}/>
                  </div>
                </div>
                <button>More</button>
                </div></a></Link>})}
            </div>
          </section>
        </main>
        <OtherFooter/>
      </Wrapper>)}}
export default withTranslation('common')(RoomsPage)
