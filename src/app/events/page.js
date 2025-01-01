"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Header from '../../components/header'
import Footer from '../../components/footer'
import styles from "./page.module.css";
import { useLang } from "@/app/context/lang";

const Home = () => {
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
    <div style={{margin:0,position:'relative',top:'50px',paddingTop:'90px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',zIndex:1,backgroundImage: "url('/events/background1.png')",backgroundPosition: 'center center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>
      <Header />
      <main style={{backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding:'0px 20px'}}>
        <h1 style={{color:'black',margin:'20px 0'}}>{trans.events_header}</h1>
        <section style={{
    display: 'flex',
    marginBottom:'50px',
    alignItems: 'space-evenly',flexWrap:'wrap',justifyContent:'center'}}>
            <div className={styles.first} style={{display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '442px',
    textAlign: 'center'}}>
            <Image
      src="/events/first.png"
      width={421}
      style={{width:'100%'}}
      height={251}
      alt="Picture of the author"
    />
                <h2 style={{color: 'rgb(97, 26, 30)',margin:'14px 0'}}>CLUB El CARDENAL</h2>
                <p className={styles.mar} style={{color:'black'}}>{trans.column_1_p_1}</p>
                <p className={styles.mar} style={{color:'black'}}>{trans.column_1_p_2}</p>
                <p className={styles.mar} style={{color:'black'}}>{trans.column_1_p_3}</p>
            </div>
            <div style={{display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '442px',
    textAlign: 'center'}}>
            <Image
      src="/events/second.png"
      width={421}
      style={{width:'100%'}}
      height={251}
      alt="Picture of the author"
    />
                <h2 style={{color: 'rgb(97, 26, 30)',margin:'14px 0'}}>{trans.column_2_header}</h2>
                <h2 style={{color: 'rgb(97, 26, 30)',margin:'14px 0'}}>{trans.column_2_p_1}</h2>
                <h2 style={{color: 'rgb(97, 26, 30)',margin:'14px 0'}}>{trans.column_2_p_2}</h2>
                <h2 style={{color: 'rgb(97, 26, 30)',margin:'14px 0'}}>{trans.column_2_p_3}</h2>
                <button className={styles.send}>{trans.column_2_button}</button>
            </div>
        </section>
        <section style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <Image
      src="/events/baby.jpg"
      width={350}
      height={300}
      alt="Picture of the author"
    />
            <h2 style={{color: 'rgb(97, 26, 30)',margin:'14px 0'}}>{trans.special}</h2>
            <div style={{marginBottom:'20px'}}>
            <div style={{display:'flex', margin:'20px 0',flexWrap:'wrap',justifyContent:'center'}}>
            <Image
      src="/events/special1.jpg"
      width={300}
      height={300}
      alt="Picture of the author"
      className={styles.firstImage}
    />
    <Image
      src="/events/special3.jpg"
      width={300}
      height={300}
      alt="Picture of the author"
    />
              </div>
              <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
              <Image
      src="/events/special2.jpg"
      width={300}
      height={300}
      alt="Picture of the author"
      className={styles.firstImage}
    />
    <Image
      src="/events/special4.jpg"
      width={300}
      height={300}
      alt="Picture of the author"
    />
            </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default Home