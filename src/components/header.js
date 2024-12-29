"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { useLang } from "@/app/context/lang";

const Header = () => { 
  const [open, setOpen] = useState(false)
  const [trans, setTrans] = useState({})
  const {lang, switchLang} = useLang()
  useEffect(() => {
    const loadTrans = async () => {
      const module = await import(`../../public/locales/${lang}/header.json`);
        setTrans(module.default);
    }
    loadTrans()
  }, [lang])
  return (
    <div style={{backgroundColor: 'black',height: '50px',width: '100%',position: 'fixed',top:0,zIndex: 10}}>
        <div className={styles.desk}>
        <Link style={{padding:'1px',textDecoration:'none'}} href="/roomsPage">{trans.bedrooms}</Link>
        <Link style={{padding:'1px',textDecoration:'none'}} href="/events">{trans.events}</Link>
        <Link style={{padding:'1px',textDecoration:'none'}} href="/services">{trans.services}</Link>
        <Image
      src="/header.png"
      width={151}
      height={123}
      alt="Picture of the author"
      style={{marginTop:'80px'}}
    />
        <Link style={{padding:'1px',textDecoration:'none'}} href="/about">{trans.location}</Link>
        <Link style={{padding:'1px',textDecoration:'none'}} href="/contact">{trans.contact}</Link>
        <div style={{display:'flex'}}>
        <p style={{cursor:'pointer',color:lang=='en'?'rgb(97,26,30)':'white',marginRight:'10px'}} onClick={()=>switchLang('en')}>EN</p>
        <p style={{cursor:'pointer',color:lang=='en'?'white':'rgb(97,26,30)'}} onClick={()=>switchLang('es')}>ES</p>
        </div>
        </div>
        <section className={styles.mob}>
        <div style={{top:'5%',left:'2rem',display:'flex',flexDirection:'column',justifyContent:'space-around',width:'2rem',height:'2rem',background:'transparent',border:'none',cursor:'pointer',padding:0,zIndex:10,margin:'10px 30% 0 10px'}} onClick={()=>setOpen(!open)}>
      <div style={{width:'2rem',height:'0.25rem',background:open?'#0D0C1D':'#EFFFFA',borderRadius:'10px',transition:'all 0.3s linear',position:'relative',transformOrigin:'1px',transform:open?'rotate(45deg)':'rotate(0)'}}/>
      <div style={{width:'2rem',height:'0.25rem',background:open?'#0D0C1D':'#EFFFFA',borderRadius:'10px',transition:'all 0.3s linear',position:'relative',transformOrigin:'1px',opacity:open?'0':'1',transform:open?'translateX(20px)':'translateX(0)'}}/>
      <div style={{width:'2rem',height:'0.25rem',background:open?'#0D0C1D':'#EFFFFA',borderRadius:'10px',transition:'all 0.3s linear',position:'relative',transformOrigin:'1px',transform:open?'rotate(-45deg)':'rotate(0)'}}/>
    </div>
        {open&&<Link href="/"><div style={{display:open?`none`:`block`,width:`151px`,height:`123px`,background:`center / cover no-repeat url(header.png)`}}></div></Link>}
        <div style={{height:'100vh',display:'flex',flexDirection:'column',justifyContent:'center',background:'#EFFFFA',transform:open?'translateX(0)':'translateX(-100%)',height:'100vh',textAlign:'left',padding:'2rem',position:'absolute',top:0,left:0,transition:'transform 0.3s ease-in-out',justifyContent:'space-evenly'}}>
          <Link href="/rooms"><a>{trans.bedrooms}</a></Link>
          <Link href="/events"><a>{trans.events}</a></Link>
          <Link href="/services"><a>{trans.services}</a></Link>
          <Link href="/location"><a>{trans.location}</a></Link>
          <Link href="/contact"><a>{trans.contact}</a></Link>
          <div style={{display:'flex'}}>
        <p style={{cursor:'pointer',color:lang=='en'?'rgb(97,26,30)':'white',marginRight:'10px'}} onClick={()=>switchLang('en')}>EN</p>
        <p style={{cursor:'pointer',color:lang=='en'?'white':'rgb(97,26,30)'}} onClick={()=>switchLang('es')}>ES</p>
        </div>
          </div>
      </section>
    </div>
  );
}

export default Header