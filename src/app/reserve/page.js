"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Header from '../../components/header'
import Footer from '../../components/footer'
import { useLang } from "@/app/context/lang";
import moment from'moment';
import '../../date';
import styles from './page.module.css'
import Rooms from '../../data'

const Week = ({date,isCurrentMonth,isToday,number,startingPoint,select,selected,month,d}) => {
  let days = []
  for (var i=0;i<7;i++) {
    let day={name:date.format("dd").substring(0, 1),number:date.date(),isCurrentMonth:date.month()===month.month(),isToday:date.isSame(new Date(),"day"),date:date};
    days.push(<span key={day.date.toString()}onClick={!day.date.isBefore(day.startingPoint)?()=>select(day):null}className={`${styles.day} ${day.isToday?styles.today:null} ${(day.isCurrentMonth && !day.date.isSame(selected))?styles.grey:null} ${day.isCurrentMonth?styles.different_month:null} ${day.date.isSame(selected)?styles.selected:null} ${day.date.isBefore(day.startingPoint)?styles.before:null}`}>{day.number}</span>);
    date=date.clone();
    date.add(1,"day");
  }
  return<div key={days[0]} style={{borderTop: '1px solid rgb(204, 204, 204)',display: 'flex',width: '100%',fontSize: '1rem',textAlign: 'center'}}>{days}</div>
}
const start=moment()
start.locale(`en`)

const Home = () => {
  const [firstMonth, setFirstMonth] = useState(start)
  const [secondMonth, setSecondMonth] = useState(start)
  const [firstSelected, setFirstSelected] = useState(start.startOf('day'))
  const [secondSelected, setSecondSelected] = useState(start.startOf('day'))
  const [firstShow, setFirstShow] = useState(false)
  const [secondShow, setSecondShow] = useState(false)
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [trans, setTrans] = useState({})
  const {lang, switchLang} = useLang()
  const [adults, setAdults] = useState(0)
  const [children, setChildren] = useState(0)
  const [food, setFood] = useState(null)
  const [payment, setPayment] = useState(null)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [rooms, setRooms] = useState([false,false,false,false,false,false])
  const [price, setPrice] = useState(null)
  const [thank_you, setThank] = useState(false)

  useEffect(() => {
    const loadTrans = async () => {
      const module = await import(`../../../public/locales/${lang}/common.json`);
        setTrans(module.default);
    }
    loadTrans()
  }, [lang])
  useEffect(() => {
    if (firstSelected!==moment().startOf('day')&&secondSelected!==moment().startOf('day') && adults && food && !secondSelected.isBefore(firstSelected) && !secondSelected.isSame(firstSelected)) {
      let per;
        const ch=children*7;
        if(food==`yes`){
          if(adults==1){per=24;
        }else if(adults==2){per=33;
        }else if(adults==3){per=46;
          }else{const extra=(adults-3)*.25;
            per=46+(46*extra);
          }}else{if(adults==1){per=22;
          }else if(adults==2){per=29;
          }else if(adults==3){per=44;
          }else{const extra=(adults-3)*.25;
            per=44+(44*extra);}}
      setPrice(((secondSelected._d.getTime()-firstSelected._d.getTime())/(1000*3600*24))*(per+children))
    }
  })
  const selectRoom = n => {
    setRooms(rooms.map((r, ind) => ind == n ? !r : r))
    setThank(false)
  }
  const submitForm = async (sendTo,rooms,date,payment,price,people,food,name,number) => {
    setThank(true)
    try {
        const response = await fetch('/api/email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({sendTo,rooms,date,payment,price,people,food,name,number}),
        });

        const result = await response.json();
    } catch (error) {
        console.error('Error sending email:', error);
    }
};
  const renderFirstWeeks = () => {
    let weeks=[];
        let done=false;
        let date=firstMonth.clone().startOf("month").add("w" -1).day("Sunday");
        let count=0;
        let monthIndex=date.month();
        while(!done){weeks.push(<Week key={date}date={date.clone()}month={firstMonth}select={(day)=>{
          setFirstShow(true)
          setFirstSelected(day.date)
          setFirstMonth(day.date.clone())
          setSecondMonth(day.date.clone())
        }}selected={firstSelected}startingPoint={moment().startOf('day')}/>);
          date.add(1,"w");
          done=count++ >2&&monthIndex!==date.month();
          monthIndex=date.month();
        }return weeks;
  }
  const renderSecondWeeks = () => {
    let weeks=[];
    let done=false;
    let date=secondMonth.clone().startOf("month").add("w" -1).day("Sunday");
    let count=0;
    let monthIndex=date.month();
    while(!done){weeks.push(<Week key={date}date={date.clone()}month={secondMonth}select={(day)=>{
      setSecondShow(true)
          setSecondSelected(day.date)
          setSecondMonth(day.date.clone())
    }}selected={secondSelected}startingPoint={moment().startOf('day')}/>);
      date.add(1,"w");
      done=count++ >2&&monthIndex!==date.month();
      monthIndex=date.month();
    }return weeks;
  };
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
    padding:'0px 20px',width:'90%',color:'black'}}>
        <section className="people" style={{width: '100%',display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
            <h1 style={{fontSize:'2em',margin:'.67em 0'}}>How many people</h1>
            <div style={{width: '100%',justifyContent: 'space-evenly',display:'flex',flexWrap:'wrap'}}>
              <div style={{display: 'flex',alignItems:'center',margin:'10px 0'}}>
                <p style={{marginRight: '10px'}}>Adults</p>
                <select value={adults} onChange={e=>setAdults(e.target.value)} style={{backgroundColor:'white',color:'black'}}>
                  {Array.from({length: 10}, (v)=> v).map((v, ind) => <option value={ind}>{ind}</option>)}
                </select>
              </div>
              <div style={{display: 'flex',alignItems:'center',margin:'10px 0'}}>
                <p style={{textAlign:'center',marginRight: '10px'}}>Children: 10 - 17<br/>(free for children under 10 years old)</p>
                <select value={children} onChange={e=>setChildren(e.target.value)} style={{backgroundColor:'white',color:'black'}}>
                {Array.from({length: 10}, (v)=> v).map((v, ind) => <option value={ind}>{ind}</option>)}
                </select>
              </div>
            </div>
        </section>
        <section className="room" style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <h1 style={{fontSize:'2em',margin:'.67em 0'}}>Select your room</h1>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(240px, 1fr))',maxWidth:'70vw',gridGap:'30px'}}>
          {Rooms.map((r,ind) => <div onClick={()=>selectRoom(ind)} style={{display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
                  <h1 style={{fontSize:'2em',margin:'.67em 0'}}>{r.number}</h1>
                  <div style={{width:`240px`,height:`170px`,background:`center / cover no-repeat url(/roomsPage/${r.number}.jpg)`,backgroundColor:rooms[ind] ? `grey` : null,backgroundBlendMode:`multiply`}}></div>
                </div>)}
        </div>
        </section>
        <section className="break">
        <h1 style={{margin:'revert'}}>Do you want breakfast</h1>
        <div class="food" style={{width: '100%',justifyContent: 'space-evenly',display:'flex',flexWrap:'wrap'}}>
          <div style={{display:'flex'}}>
            <div onClick={()=>setFood('yes')} style={{height:'15px',marginRight:'10px',width:'15px',borderRadius:'50px',backgroundColor:'white',border:'1px solid black',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <div style={{height:'7px',width:'7px',borderRadius:'50px',backgroundColor:food == 'yes' ?'black':'white'}}></div>
            </div>
            <p>yes</p>
          </div>
          <div style={{display:'flex'}}>
          <div onClick={()=>setFood('no')} style={{height:'15px',marginRight:'10px',width:'15px',borderRadius:'50px',backgroundColor:'white',border:'1px solid black',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <div style={{height:'7px',width:'7px',borderRadius:'50px',backgroundColor:food == 'no' ?'black':'white'}}></div>
            </div>
            <p>no</p>
          </div>
        </div>
        </section>
        <div style={{display: 'flex',flexDirection: 'column',alignItems: 'center',width:'100%'}}>
          <h1 style={{margin:'revert'}}>Select the date</h1>
          <div style={{display: 'flex',width:'100%',justifyContent:'space-evenly',flexWrap:'wrap'}}> 
                <div>
                  <p>Check in</p>
                  <section>
                    {firstShow&&<p>{firstSelected.format("ll")}</p>}
                    <section style={{backgroundColor:'rgb(255,255,255)',width:'300px',border:'1px solid rgb(204,204,204)',margin:'10px auto',boxShadow:'rgb(192,192,192) 0px 0px 15px 0px',fontSize:'1rem',textAlign:'center',display:'flex',flexDirection:'column'}}>
                      <header style={{color:'rgb(255,255,255)',fontSize:'1.1rem',fontWeight:'bold',textTransform:'uppercase',userSelect:'none'}}>
                        <div style={{alignItems:'center',height:'40px',backgroundColor:'rgb(97,26,30)',display:'flex',width:'100%',color:'rgb(255,255,255)',fontSize:'1.1rem',fontWeight:'bold',textTransform:'uppercase',userSelect:'none',textAlign:'center'}}>
                          {firstMonth.format("MMMM YYYY")!=start.format("MMMM YYYY")&&firstMonth.format("MMMM YYYY")!=moment().format("MMMM YYYY")&&<button onClick={()=>setFirstMonth(firstMonth.clone().subtract(1,'month'))}>e</button>}
                          <span style={{flex:'1 1 0%',color:'rgb(255,255,255)',cursor:'default',fontSize:'1.1rem',fontWeight:'bold',textTransform:'uppercase',userSelect:'none',textAlign:'center'}}>{firstMonth.format("MMMM YYYY")}</span>
                          <button onClick={()=>setFirstMonth(firstMonth.clone().add(1,'month'))}>e</button>
                        </div>
                        <div style={{color: 'rgb(97, 26, 30)',fontWeight: 'bold',cursor: 'default',fontSize: '1rem',display: 'flex',width: '100%'}}>
                            <span className={styles.day}>{trans.day_1}</span>
                            <span className={styles.day}>{trans.day_2}</span>
                            <span className={styles.day}>{trans.day_3}</span>
                            <span className={styles.day}>{trans.day_4}</span>
                            <span className={styles.day}>{trans.day_5}</span>
                            <span className={styles.day}>{trans.day_6}</span>
                            <span className={styles.day}>{trans.day_7}</span>
                          </div>
                      </header>
                      {renderFirstWeeks()}
                    </section>
                  </section>
                </div>
                <div>
                  <p>Check out</p>
                  <section>
                    {secondShow&&<p>{secondSelected.format("ll")}</p>}
                    <section style={{backgroundColor:'rgb(255,255,255)',width:'300px',border:'1px solid rgb(204,204,204)',margin:'10px auto',boxShadow:'rgb(192,192,192) 0px 0px 15px 0px',fontSize:'1rem',textAlign:'center',display:'flex',flexDirection:'column'}}>
                      <header style={{color:'rgb(255,255,255)',fontSize:'1.1rem',fontWeight:'bold',textTransform:'uppercase',userSelect:'none'}}>
                        <div style={{alignItems:'center',height:'40px',backgroundColor:'rgb(97,26,30)',display:'flex',width:'100%',color:'rgb(255,255,255)',fontSize:'1.1rem',fontWeight:'bold',textTransform:'uppercase',userSelect:'none',textAlign:'center'}}>
                          {secondMonth.format("MMMM YYYY")!=start.format("MMMM YYYY")&&secondMonth.format("MMMM YYYY")!=moment().format("MMMM YYYY")&&<button onClick={()=>setSecondMonth(secondMonth.clone().subtract(1,'month'))}>e</button>}
                          <span style={{flex:'1 1 0%',color:'rgb(255,255,255)',cursor:'default',fontSize:'1.1rem',fontWeight:'bold',textTransform:'uppercase',userSelect:'none',textAlign:'center'}}>{secondMonth.format("MMMM YYYY")}</span>
                          <button onClick={()=>setSecondMonth(secondMonth.clone().add(1,'month'))}>e</button>
                        </div>
                        <div style={{color: 'rgb(97, 26, 30)',fontWeight: 'bold',cursor: 'default',fontSize: '1rem',display: 'flex',width: '100%'}}>
                            <span className={styles.day}>{trans.day_1}</span>
                            <span className={styles.day}>{trans.day_2}</span>
                            <span className={styles.day}>{trans.day_3}</span>
                            <span className={styles.day}>{trans.day_4}</span>
                            <span className={styles.day}>{trans.day_5}</span>
                            <span className={styles.day}>{trans.day_6}</span>
                            <span className={styles.day}>{trans.day_7}</span>
                          </div>
                      </header>
                      {renderSecondWeeks()}
                    </section>
                  </section>
                </div>
                </div>
              </div>
          <p style={{margin:'revert'}}>price {price}$</p>
        <button style={{color:'white',backgroundColor:'black',padding:'10px 20px',width:'fit-content',height:'fit-content',border:'none'}}>See whats included</button>
        <section className="payment" style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}>
          <h1 style={{margin:'revert'}}>{trans.reserve_11}</h1>
          <div style={{display:'flex',width:'100%',justifyContent:'space-evenly',flexWrap:'wrap'}}>
                <div style={{display:'flex',margin:'10px 0'}}>
                <div onClick={()=>setPayment('advance')} style={{height:'15px',marginRight:'10px',width:'15px',borderRadius:'50px',backgroundColor:'white',border:'1px solid black',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <div style={{height:'7px',width:'7px',borderRadius:'50px',backgroundColor:payment == 'advance' ?'black':'white'}}></div>
            </div>
                  <p>{trans.reserve_12}</p>
                </div>
                <div style={{display:'flex',margin:'10px 0'}}>
                <div onClick={()=>setPayment('arrival')} style={{height:'15px',marginRight:'10px',width:'15px',borderRadius:'50px',backgroundColor:'white',border:'1px solid black',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <div style={{height:'7px',width:'7px',borderRadius:'50px',backgroundColor:payment == 'arrival' ?'black':'white'}}></div>
            </div>
                  <p>{trans.reserve_13}</p>
                </div>
                </div>
              </section>
              <div className="inputs" style={{width:'60%',display:'flex',flexDirection:'column',alignItems:'center'}}>
              <div style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap'}}>
              <p style={{margin:'revert'}}>{trans.first_input}</p>
              <input  type="text"id="name"name="name_name"value={name} onChange={e=>setName(e.target.value)} onChangeText={e=>setName(e)} style={{backgroundColor:'white',color:'black',border: '1px solid black',borderRadius: '2px'}}/>
              </div>
              <div style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap'}}>
              <p style={{margin:'revert'}}>{trans.second_input}<br/>{`(${trans.op})`}</p>
              <input type="text"id="number"name="number_name"value={phone}onChange={e=>setPhone(e.target.value)} style={{backgroundColor:'white',border: '1px solid black',borderRadius: '2px',color:'black'}}/>
              </div>
              <div style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap'}}>
              <p style={{margin:'revert'}}>{trans.last_input}</p>
              <input type="text"id="em"name="em_name"value={email}onChange={e=>setEmail(e.target.value)} style={{backgroundColor:'white',border: '1px solid black',borderRadius: '2px',color:'black'}}/>
              </div>
              <button type="submit"disabled={rooms==[false,false,false,false,false,false]||email==``||!payment||!food||adults==0||secondSelected.isBefore(firstSelected)||secondSelected.isSame(firstSelected)||firstSelected==moment().startOf('day')||secondSelected==moment().startOf('day')||name==``}onClick={()=>submitForm(email,Rooms.filter((r,ind)=>rooms[ind]),[firstSelected,secondSelected],payment,price,[adults,children],food,name,phone)}style={{color:'white',backgroundColor:'black',padding:'10px 20px',width:'fit-content',height:'fit-content',border:'none',cursor:rooms==[false,false,false,false,false,false]||email==``||!payment||!food||adults==0||secondSelected.isBefore(firstSelected)||secondSelected.isSame(firstSelected)||firstSelected==moment().startOf('day')||secondSelected==moment().startOf('day')||name==``?'not-allowed':'pointer'}}>{trans.r_14}</button>
              {thank_you&&<p>{trans.reserve_15}</p>}
              </div>
      </main>
      <Footer />
    </div>
  );
}
export default Home