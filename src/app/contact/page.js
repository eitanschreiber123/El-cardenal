"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Header from '../../components/header'
import Footer from '../../components/footer'
import { MapProvider } from "@/providers/map";
import { MapComponent } from "../../components/map";
import { useLang } from "@/app/context/lang";

const Home = () => {
  const [trans, setTrans] = useState({})
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const {lang, switchLang} = useLang()
  useEffect(() => {
    const loadTrans = async () => {
      const module = await import(`../../../public/locales/${lang}/common.json`);
        setTrans(module.default);
    }
    loadTrans()
  }, [lang])
  const submitForm = async (name, email, message) => {
    try {
        const response = await fetch('/api/email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name, email, message}),
        });

        const result = await response.json();
    } catch (error) {
        console.error('Error sending email:', error);
    }
};
  return (
    <MapProvider>
    <div style={{margin: 0,
      position: 'relative',
      top: '50px',
      paddingTop: '90px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      zIndex: 1,
      backgroundImage: "url('/events/background1.png')",
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',minHeight:'100vh'}}>
      <Header />
      <main style={{backgroundColor:'white',display:'flex',flexDirection:'column',alignItems:'center',padding:'0 20px'}}>
            <h1 style={{color:'black'}}>{trans.contact_header_1}</h1>
            <p style={{color:'black'}}>{trans.contact_header_2}</p>
            <hr style={{width:`10px`,color:'black'}}/>
            <div style={{display:'flex',flexDirection:'row',marginBottom:'100px',alignItems:'center',flexWrap:'wrap',justifyContent:'center'}}>
              <MapComponent />
              <div style={{margin:`0 40px`,display:'flex',flexDirection:'column',color:'black',height:'200px',justifyContent:'space-evenly'}}>
                <p>Gladiolos Street 154-42, Loja 110150, Ecuador<br/>elcardenalhotel@gmail.com</p>
                <p>Tel: +593 99 642 4583</p>
              </div>
              <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
                <input placeholder={`${trans.form_1} *`}style={{backgroundColor:'white',border: '1px solid black',borderRadius: '2px',marginBottom:`10px`,fontSize:`17px`,lineHeight:`23.8px`,padding:`3px 3px 3px 5px`,width:`276px`}}value={name}onChange={e=>setName(e.target.value)}/>
                <input placeholder={`${trans.last_input} *`}style={{backgroundColor:'white',border: '1px solid black',borderRadius: '2px',marginBottom:`10px`,fontSize:`17px`,padding:`3px 3px 3px 5px`,width:`276px`}}value={email}onChange={e=>setEmail(e.target.value)}/>
                <textarea placeholder={`${trans.form_3} *`}style={{backgroundColor:'white',border: '1px solid black',borderRadius: '2px',marginBottom:`10px`,fontSize:`17px`,padding:`3px 3px 3px 5px`,width:`276px`}}rows="5"value={message}onChange={e=>setMessage(e.target.value)}></textarea>
                <button style={{padding:'10px',backgroundColor:'black',color:'white',width:'fit-content',border:'none'}} type="submit"onClick={()=>submitForm(name,email,message)}>{trans.form_button}</button>
              </div>
            </div>
        </main>
      <Footer />
    </div>
    </MapProvider>
  );
}
export default Home