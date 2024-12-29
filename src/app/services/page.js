"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Header from '../../components/header'
import Footer from '../../components/footer'
import { useLang } from "@/app/context/lang";
import{BsCreditCard,BsFillPeopleFill}from'react-icons/bs';
import{FaWifi,FaDesktop}from'react-icons/fa';
import{BiRestaurant}from'react-icons/bi';
import{MdEventNote,MdLocalLaundryService}from'react-icons/md';
import{GiCoffeePot,GiMirrorMirror}from'react-icons/gi'
import{ImAirplane}from'react-icons/im'
import styles from './page.module.css'

const Home =() => {
  const [trans, setTrans] = useState({})
  const {lang, switchLang} = useLang()
  useEffect(() => {
    const loadTrans = async () => {
      const module = await import(`../../../public/locales/${lang}/common.json`);
        setTrans(module.default);
    }
    loadTrans()
  }, [lang])
  return (
    <div style={{margin: '0px',
      position: 'relative',
      top: '50px',
      paddingTop: '90px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1,
      backgroundImage: "url('/events/background1.png')",
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'}}>
      <Header />
      <main style={{backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0px 20px',
    width: '90%',color:'black'}}>
        <h1 style={{margin:'revert'}}>{trans.services_1}</h1>
        <div className={styles.grid} style={{display:'grid',width:'90%',justifyContent:'space-evenly',gridGap:'30px 25px',color:'black',marginBottom:'20px'}}>
              <div style={{display:'flex',flexDirection:'column',textAlign:'center'}}>
                <FaWifi style={{width: `100px`,height:`100px`}}/>
                <p>Wifi</p>
              </div>
              <div style={{display:'flex',flexDirection:'column',textAlign:'center'}}>
                <BsCreditCard style={{width:`100px`,height:`100px`}}/>
                <p>{trans.services_2}</p>
              </div>
              <div style={{display:'flex',flexDirection:'column',textAlign:'center'}}>
                <BiRestaurant style={{width:`100px`,height:`100px`}}/>
                <p>{trans.services_3}</p>
              </div>
              <div style={{display:'flex',flexDirection:'column',textAlign:'center'}}>
                <FaDesktop style={{width:`100px`,height:`100px`}}/>
                <p>Tv-cable</p>
              </div>
              <div style={{display:'flex',flexDirection:'column',textAlign:'center'}}>
                <MdEventNote style={{width:`100px`,height:`100px`}}/>
                <p>{trans.services_4}</p>
              </div>
              <div style={{display:'flex',flexDirection:'column',textAlign:'center'}}>
                <div style={{height:`100px`,width:`100px`,background:`center / cover no-repeat url(/services/outdoor.jpg)`}}></div>
                <p>{trans.services_5}</p>
              </div>
              <div style={{display:'flex',flexDirection:'column',textAlign:'center'}}>
                <MdLocalLaundryService style={{width:`100px`,height:`100px`}}/>
                <p>{trans.services_6}</p>
              </div>
              <div style={{display:'flex',flexDirection:'column',textAlign:'center'}}>
                <BsFillPeopleFill style={{width:`100px`,height:`100px`}}/>
                <p>{trans.services_7}</p>
              </div>
              <div style={{display:'flex',flexDirection:'column',textAlign:'center'}}>
                <GiCoffeePot style={{width:`100px`,height:`100px`}}/>
                <p>{trans.services_8}</p>
              </div>
              <div style={{display:'flex',flexDirection:'column',textAlign:'center'}}>
                <GiMirrorMirror style={{width:`100px`,height:`100px`}}/>
                <p>{trans.services_9}</p>
              </div>
            </div>
        <div style={{display:'flex',width:'100%',justifyContent:'space-evenly',marginBottom:'20px',flexWrap:'wrap'}}>
        <Image
      src="/services/cooking.jpg"
      width={200}
      height={200}
      alt="Picture of the author"
      style={{margin:'10px 0'}}
    />
            <Image
      src="/services/food2.jpg"
      width={200}
      height={200}
      alt="Picture of the author"
      style={{margin:'10px 0'}}
    />
            <Image
      src="/services/food3.jpg"
      width={200}
      height={200}
      alt="Picture of the author"
      style={{margin:'10px 0'}}
    />
        </div>
        <div style={{display:'flex',width:'100%',justifyContent:'space-evenly',alignItems:'center',flexWrap:'wrap'}}>
            <div>
                <h1>{trans.services_10}</h1>
                <p>{trans.services_11}</p>
            </div>
            <ImAirplane style={{width:`150px`,height:`150px`,margin:'20px 0'}}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default Home