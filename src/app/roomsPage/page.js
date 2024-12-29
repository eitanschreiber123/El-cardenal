"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from '../../components/header'
import Footer from '../../components/footer'
import { useRouter } from 'next/navigation'
import Rooms from '../../data'
import { useLang } from "@/app/context/lang";
import{FaWifi,FaShower,FaPhone,FaDesktop}from'react-icons/fa';
import{BiCloset}from'react-icons/bi';
import{GiDesk}from'react-icons/gi';
import styles from './page.module.css'

export default function Home() {
  const [trans, setTrans] = useState({})
  const {lang, switchLang} = useLang()
  useEffect(() => {
    const loadTrans = async () => {
      const module = await import(`../../../public/locales/${lang}/common.json`);
        setTrans(module.default);
    }
    loadTrans()
  }, [lang])
  const router = useRouter()
  const goToReserve = r => router.push(`/reserve`)
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
      <main style={{backgroundColor:'white',color:'black',display:'flex',flexDirection:'column',alignItems:'center',padding:'0px 20px'}}>
        <div style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
            <h1 style={{margin:'.67em 0'}}>Rooms</h1>
            <button style={{color:'white',backgroundColor:'black',padding:'10px 20px'}} onClick={goToReserve}>reserve now</button>
        </div>
        <section style={{display:'flex',flexDirection:'column'}}>
            {Rooms.map(r => <Link className={styles.each} href={`/room/${r.number}`}>
            <Image src={`/roomsPage/${r.number}.jpg`}width={240}height={170}alt="Picture of the author"style={{marginRight:'30px'}}/>
                <div style={{height:'100%',display:'flex',flexDirection:'column',marginRight:'50px',justifyContent:'space-evenly'}}>
                  <h1 style={{margin: 0,lineHeight: 1,fontSize:'2em'}}>{r.number}</h1>
                  <ul style={{listStyleType:'none'}}>
                    <li>{trans.rooms_3}: {r.size}<sup>2</sup></li>
                    <li>{trans.rooms_4}:</li>
                      <ul style={{listStyleType:'none',padding:'revert'}}>{Object.entries(r.beds).map(b=><li>{b[0]}: {b[1]}</li>)}</ul>
                  </ul>
                  <hr style={{width:`100%`}}/>
                  <div style={{display:'flex',flexDirection:'row'}}>
                    <FaWifi style={{color:`black`,width:`25px`,height:`25px`,marginRight:`20px`}}/>
                    <FaDesktop style={{color:`black`,width:`25px`,height:`25px`,marginRight:`20px`}}/>
                    <FaShower style={{color:`black`,width:`25px`,height:`25px`,marginRight:`20px`}}/>
                    <FaPhone style={{color:`black`,width:`25px`,height:`25px`,marginRight:`20px`}}/>
                    <GiDesk style={{color:`black`,width:`25px`,height:`25px`,marginRight:`20px`}}/>
                    <BiCloset style={{color:`black`,width:`25px`,height:`25px`}}/>
                  </div>
                </div>
                <button style={{color:'white',backgroundColor:'black',padding:'10px 20px',height:'fit-content',width:'fit-content',border:'none'}}>{trans.rooms_5}</button>
                </Link>)}
        </section>
      </main>
      <Footer />
    </div>
  );
}
