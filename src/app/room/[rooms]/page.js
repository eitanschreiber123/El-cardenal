"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import { notFound } from 'next/navigation';
import { useLang } from "@/app/context/lang";
import Link from 'next/link'
import Rooms from '../../../data'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FaWifi } from 'react-icons/fa';
import { FaShower } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaDesktop } from 'react-icons/fa';
import { BiCloset } from 'react-icons/bi';
import { GiDesk } from 'react-icons/gi';

const Home = ({ params }) => {
  const { rooms } = params;
  const thisRoom = Rooms.filter(r => r.number == rooms)[0]
  const v = ['201', '301', '302', '304']
  const [trans, setTrans] = useState({})
  const { lang, switchLang } = useLang()
  const [topMedia, setTopMedia] = useState({ type: 'image', source: 1 }); // Updated to track both type and source
  useEffect(() => {
    const loadTrans = async () => {
      const module = await import(`../../../../public/locales/${lang}/common.json`);
      setTrans(module.default);
      console.log(v.includes(rooms))
    }
    loadTrans()
  }, [lang])
  return (
    <div style={{ margin: 0, position: 'relative', top: '50px', paddingTop: '90px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 1, backgroundImage: "url('/events/background1.png')", backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <Header />
      <main style={{ backgroundColor: 'white', color: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0px 20px' }}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <h1 style={{ color: 'black', margin: '.67em 0' }}>{trans.rooms_1}</h1>
          <Link style={{ color: 'white', backgroundColor: 'black', padding: '10px 20px' }} href="/reserve">{trans.rooms_2}</Link>
        </div>
        <div>
          <div style={{ display: `flex`, flexDirection: `row`, alignItems: `flex-end`, marginBottom: `20px` }}><Link href="/roomsPage"><AiOutlineArrowLeft style={{ color: `black`, width: `25px`, height: `25px` }} /></Link><h1 style={{ margin: 0, lineHeight: 1, color: 'black' }}>{rooms}</h1></div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {topMedia.type === 'image' ? (
              <div className="current" style={{ height: `408px`, background: `center / cover no-repeat url(/rooms/${rooms}/big${topMedia.source}.jpg)`, marginBottom: `20px`, width: '649px' }}></div>
            ) : (
              <video className="current" style={{ height: `408px`, marginBottom: `20px`, width: '649px' }} controls>
                <source src={`/rooms/${rooms}/VID${rooms}.mp4`} type="video/mp4" />
              </video>
            )}
            <div style={{ display: 'flex' }}>
              {v.includes(rooms) && <div onClick={() => setTopMedia({ type: 'video', source: 0 })} style={{ width: `58px`, height: `48px`, background: `center / cover no-repeat url(/rooms/${rooms}/VID${rooms}.mp4)`, marginRight: '10px' }}>
                <div style={{ width: `58px`, height: `48px`, background: `center / cover no-repeat url(/v/${rooms}v.jpg)`, marginRight: '10px' }}></div>
              </div>}
              {[`/rooms/${rooms}/small1.jpg`, `/rooms/${rooms}/small2.jpg`, `/rooms/${rooms}/small3.jpg`].map((i, ind) => {
                return (
                  <div
                    key={ind}
                    onClick={() => setTopMedia({ type: 'image', source: ind + 1})}
                    style={{ width: `58px`, height: `48px`, background: `center / cover no-repeat url(${i})`, marginRight: '10px' }}
                  ></div>
                );
              })}
            </div>
          </div>
          <div className="info_1" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <div><p style={{ margin: 'revert' }}>{trans.rooms_3}: {thisRoom.size}<sup>2</sup></p></div>
            <div>
              <p style={{ margin: 'revert' }}>{trans.rooms_4}:</p>
              <ul style={{ margin: 'revert', padding: 'revert' }}>{Object.entries(thisRoom.beds).map((b, i) => <li key={i}>{b[0]}: {b[1]}</li>)}</ul>
            </div>
          </div>
          <hr style={{ width: `100%` }} />
          <div className="info_2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 40%)', paddingLeft: '25%', gap: '20px 30px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FaWifi style={{ color: `black`, width: `25px`, height: `25px`, marginRight: `10px` }} />
              <p style={{ margin: 'revert' }}>Wifi</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FaDesktop style={{ color: `black`, width: `25px`, height: `25px`, marginRight: `10px` }} />
              <p style={{ margin: 'revert' }}>TV</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FaShower style={{ color: `black`, width: `25px`, height: `25px`, marginRight: `10px` }} />
              <p style={{ margin: 'revert' }}>{trans.each_1}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FaPhone style={{ color: `black`, width: `25px`, height: `25px`, marginRight: `10px` }} />
              <p style={{ margin: 'revert' }}>{trans.each_2}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <GiDesk style={{ color: `black`, width: `25px`, height: `25px`, marginRight: `10px` }} />
              <p style={{ margin: 'revert' }}>{trans.each_3}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <BiCloset style={{ color: `black`, width: `25px`, height: `25px`, marginRight: `10px` }} />
              <p style={{ margin: 'revert' }}>{trans.each_4}</p>
            </div>
          </div>
          <hr style={{ width: `100%` }} />
          <div className="info_3" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <p style={{ margin: 'revert' }}>{trans.each_5}: 02:00 PM</p>
            <p style={{ margin: 'revert' }}>{trans.each_6}: 11:00 AM</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default Home
