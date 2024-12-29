"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Header from '../components/header'
import Footer from '../components/footer'
import { useLang } from "@/app/context/lang";

const Home = () => {
  const [trans, setTrans] = useState({})
  const {lang, switchLang} = useLang()
  useEffect(() => {
    const loadTrans = async () => {
      const module = await import(`../../public/locales/${lang}/common.json`);
        setTrans(module.default);
    }
    loadTrans()
  }, [lang])

  return (
    <div>
      <Header/>
      <main style={{margin:0,paddingTop:'50px',paddingBottom:'50px',position:'relative',top:'50px',display:'flex',alignItems:'center',flexDirection: 'column',zIndex: 1,backgroundAttachment: 'fixed',backgroundImage: "url('/home/background1.png')",backgroundPosition: 'center center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundColor: 'grey',backgroundBlendMode: 'soft-light',width:'100vw'}}>
        <div style={{display: 'flex',flexDirection: 'column',alignItems: 'center',marginBottom: '50px'}}>
      <h1 style={{fontSize: '100px',
    lineHeight: '1.2em',
    textShadow: 'rgba(0, 0, 0, 0.298) 0px 5px 0px',
    color: 'white',
    marginBottom: '20px',
    fontWeight: 500}}>{trans.header_1}</h1>
        <h1 style={{fontSize: '30px',
    lineHeight: '1.2em',
    textShadow: 'rgba(0, 0, 0, 0.298) 0px 5px 0px',marginBottom:'20px',color:'black'}}>{trans.header_2}</h1>
        <Link href="/rooms"><button className={styles.rooms} style={{width: '261px',
    height: '40px',color:'black'}}>{trans.button}</button></Link>
    </div>
        <section style={{display:'flex',flexWrap:'wrap',width:'100%',justifyContent:'space-evenly',marginBottom:'20px'}}>
        <Image
      src="/award2023.jpg"
      width={200}
      height={200}
      alt="Picture of the author"
    />
          <Image
      src="/award2024.jpg"
      width={200}
      height={200}
      alt="Picture of the author"
    />
        </section>
        <video style={{marginBottom:'20px'}} width="400" height="240" controls preload="auto" muted autoplay loop>
      <source src="\VID-20241120-WA0002.mp4" type="video/mp4" />
    </video>
        <section style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <h1 style={{color: 'white',
    textShadow: 'rgba(0, 0, 0, 0.298) 0px 5px 0px',marginBottom:'20px'}}>{trans.header_3}</h1>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(235px, 1fr))',maxWidth:'70vw',marginBottom:'20px'}}>
          <Image src="/home/table.png" width={235} height={276} alt="Picture of the author"/>
          <div style={{width:'235px',color:'black',height:'276px',display:'flex',flexDirection:'column',textAlign:'center',backgroundColor:'white',padding:'30px 10px 0px'}}>
            <h1 style={{textAlign:'center',color: 'rgb(97, 26, 30)'}}>{trans.grid_header_1}</h1>
            <p style={{textAlign:'center'}}>{trans.grid_p_1}</p>
          </div>
          <Image src="/home/enter.png" width={235} height={276} alt="Picture of the author"/>
          <div style={{width:'235px',color:'black',height:'276px',display:'flex',flexDirection:'column',textAlign:'center',backgroundColor:'white',padding:'30px 10px 0px'}}>
            <h1 style={{textAlign:'center',color: 'rgb(97, 26, 30)'}}>{trans.grid_header_2}</h1>
            <p style={{textAlign:'center'}}>{trans.grid_p_2}</p>
          </div>
          <div style={{width:'235px',color:'black',height:'276px',display:'flex',flexDirection:'column',textAlign:'center',backgroundColor:'white',padding:'30px 10px 0px'}}>
            <h1 style={{textAlign:'center',color: 'rgb(97, 26, 30)'}}>{trans.grid_header_3}</h1>
            <p style={{textAlign:'center'}}>{trans.grid_p_3}</p>
          </div>
          <Image src="/home/view.png" width={235} height={276} alt="Picture of the author"/>
          <div style={{width:'235px',color:'black',height:'276px',display:'flex',flexDirection:'column',textAlign:'center',backgroundColor:'white',padding:'30px 10px 0px'}}>
            <h1 style={{textAlign:'center',color: 'rgb(97, 26, 30)'}}>{trans.grid_header_4}</h1>
            <p style={{textAlign:'center'}}>{trans.grid_p_4}</p>
          </div>
          <Image src="/home/corner.png" width={235} height={276} alt="Picture of the author"/>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default Home