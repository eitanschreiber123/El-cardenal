import React, { Component } from 'react'
import dynamic from 'next/dynamic';
import Link from 'next/link'
import styled from 'styled-components'
import Header from '../components/header'
import OtherFooter from '../components/otherFooter'
import { sendContactMail } from "../components/networking/mail-api"
import Rooms from '../data/rooms'
import moment from 'moment';
import { GoArrowLeft } from 'react-icons/go';
import { GoArrowRight } from 'react-icons/go';
import { i18n, withTranslation } from '../i18n'
import axios from 'axios';
import '../components/moment/locale/es.js';
const Wrapper=styled.div`font-family:Playfair Display;main>section{background-color:white;display:flex;flex-direction:column;align-items:center;padding:0px 20px;}.top_list{display:grid;grid-template-columns:repeat(3, 240px);grid-gap:30px;}.top_list>div{display:flex;flex-direction:column;align-items:center;cursor:pointer;}.vertical-center{display:flex;justify-content:center;align-items:center;}.row{display:flex;width:100%;}.calendar{display:block;background:#FFFFFF;width:300px;border:solid 1px #CCCCCC;margin:10px auto;box-shadow:0 0 15px 0 #C0C0C0;font-size:1rem;text-align:center;font-family:sans-serif;
    header {
        .vertical-center;
        color: #FFFFFF;
        cursor: default;
        font-size:1.1rem;
        display: block;
        font-weight: bold;
        text-transform: uppercase;
        user-select: none;
        .month-display{align-items:center;height:40px;background:rgb(97, 26, 30);}.month-label{flex:1;}.arrow{text-align:center;flex-basis:15%;font-weight:bold;cursor:pointer;transition:background .2s;height:100%;display:flex;justify-content:center;align-items:center;}}.week{border-top:solid 1px #CCCCCC;&:first-child{border-top:none;}}.day-names{color:rgb(97, 26, 30);font-weight:bold;cursor:default;font-size:1rem;.day{cursor:default;&:hover{background:inherit;}}}
    .day {.vertical-center;
        flex: 1;
        height: 35px;
        border-left: solid 1px #CCCCCC;
        cursor: pointer;
        transition: all .2s;
        &:hover{background:#EFEFEF;}&:first-child{border-left:none;}&.today{background:lighten(#2875C7,45%);}&.different-month{color:#C0C0C0;}&.selected{background:rgb(97, 26, 30);color:#FFFFFF;}&.before{background:grey !important;color:#FFFFFF !important;cursor:not-allowed;}}}.dates{width:100%;justify-content:space-evenly;display:flex;flex-direction:row;}.bottom{display:flex;flex-direction:column;padding-left:60px;margin-bottom:30px;}.bottom>div{display:flex;flex-direction:row;align-items:center;}.bottom p{margin-right:10px;}.bottom input{height:fit-content;}button{color:white;background-color:black;padding:10px 20px;width:fit-content;height:fit-content;border:none;}button:hover{background-color:white;color:black;border:1px solid black;}.bottom>button[type=submit]:disabled{cursor:not-allowed;}.people,.adults,.children,.payment,.payment>div,.price{display:flex;flex-direction:row;}.people,.payment{width:100%;justify-content:space-evenly;}.adults,.children,.payment>div,.price{align-items:center;text-align:center;}.adults p,.children p,.payment input,.price button{margin-right:10px;}.adults select,.children select{height:fit-content;}`
class Week extends Component {
  render() {
    let days = [];
    let {
      date,
      startingPoint,
    } = this.props;
    const {
      month,
      selected,
      select,
    } = this.props;
    for (var i = 0; i < 7; i++) {
      let day = {
          name: date.format("dd").substring(0, 1),
          number: date.date(),
          isCurrentMonth: date.month() === month.month(),
          isToday: date.isSame(new Date(), "day"),
          date: date
      };
      days.push(<Day day={day}selected={selected}select={select}startingPoint={startingPoint}/>);
      date = date.clone();
      date.add(1, "day");
    }
    return <div className="row week" key={days[0]}>{days}</div>;
  }}
class Day extends Component {
  render() {
    const {
      day,
      day: {
        date,
        isCurrentMonth,
        isToday,
        number,
        startingPoint
      },
      select,
      selected
    } = this.props;
    return <span key={date.toString()}className={"day" + (isToday ? " today" : "") + (isCurrentMonth ? "" : " different-month") + (date.isSame(selected) ? " selected" : "") + (date.isBefore(startingPoint) ? " before" : "")}onClick={!date.isBefore(startingPoint) ? ()=>select(day) : null}>{number}</span>;
  }}
const which = [201, 202, 301, 302, 303, 304];
class ReservePage extends Component {
  constructor(props) {
    super(props);
    this.state={rooms:[false,false,false,false,false,false],em:``,firstMonth:moment(),secondMonth:moment(),firstSelected:moment().startOf('day'),firstShow:false,secondSelected:moment().startOf('day'),secondShow:false,thank_you:false,adults:0,children:0,payment:``,price:null}}
  static async getInitialProps(ctx){
    return {namespacesRequired: ['common', 'header']}
  }
  componentDidMount() {
    moment().locale(`en`)
  }
  selectRoom = n => {
    const y = n
    this.setState(prev => {
      const rooms = prev.rooms.map((r, ind) => {if (ind == y) {return !r
      } else {return r}})
      return { rooms, thank_you: false }
    })}
    submitForm = async e => {
      e.preventDefault();
      const senderMail = `eitanschreiber97@gmail.com`
        const res = await sendContactMail(senderMail, this.state.em, which.filter((w, ind) => this.state.rooms[ind]), [this.state.firstSelected.format("ll"),this.state.secondSelected.format("ll")], this.state.payment, this.state.price, [this.state.adults,this.state.children])
        if (res.status < 300) {
          this.setState({lang:`en`,rooms:[false,false,false,false,false,false],thank_you:true,em: ``,firstSelected:moment().startOf('day'),firstShow:false,secondSelected:moment().startOf('day'),secondShow:false,payment:``,price:null,firstMonth:moment(),secondMonth:moment()})
        }}
      firstPrevious = () => {
        const {
          firstMonth,
        } = this.state;
        this.setState({firstMonth:firstMonth.subtract(1,'month')});
      }
      secondPrevious = () => {
        const {
          secondMonth,
        } = this.state;
        this.setState({secondMonth:secondMonth.subtract(1,'month')});
      }
      firstNext = () => {
        const {
          firstMonth,
        } = this.state;
        this.setState({firstMonth:firstMonth.add(1,'month')});
      }
      secondNext = () => {
        const {
          secondMonth,
        } = this.state;
        this.setState({secondMonth:secondMonth.add(1,'month')});
      }
      firstSelect = day => this.setState({firstShow:true,firstSelected:day.date,firstMonth:day.date.clone(),secondMonth:day.date.clone()})
      secondSelect = day => this.setState({secondShow:true,secondSelected:day.date,secondMonth:day.date.clone()})
      renderFirstWeeks() {
        let weeks = [];
        let done = false;
        let date = this.state.firstMonth.clone().startOf("month").add("w" -1).day("Sunday");
        let count = 0;
        let monthIndex = date.month();
        const {
          firstSelected,
          firstMonth,
        } = this.state;
        while (!done) {
          weeks.push(<Week key={date}date={date.clone()}month={firstMonth}select={(day)=>this.firstSelect(day)}selected={firstSelected}startingPoint={moment().startOf('day')}/>);
          date.add(1, "w");
          done = count++ > 2 && monthIndex !== date.month();
          monthIndex = date.month();
        }
        return weeks;
      };
      renderSecondWeeks() {
        let weeks = [];
        let done = false;
        let date = this.state.secondMonth.clone().startOf("month").add("w" -1).day("Sunday");
        let count = 0;
        let monthIndex = date.month();
        const {
          secondSelected,
          secondMonth,
        } = this.state;
        while (!done) {
          weeks.push(<Week key={date}date={date.clone()}month={secondMonth}select={(day)=>this.secondSelect(day)}selected={secondSelected}startingPoint={moment().startOf('day')}/>);
          date.add(1, "w");
          done = count++ > 2 && monthIndex !== date.month();
          monthIndex = date.month();
        }
        return weeks;
      };
      calculatePrice = (s, e) => {
        const people = (20 + (this.state.adults - 1) * 10) + (this.state.children * 5);
        this.setState({price:((e - s) / (1000 * 3600 * 24)) * people})
      }
      changeEverything = () => {
          if (this.state.lang == `es`) {
            this.setState(prev => {
              const firstMonth = prev.firstMonth
              const secondMonth = prev.secondMonth
              firstMonth.locale(`en`)
              secondMonth.locale(`en`)
              moment().locale(`en`)
              return {firstMonth, secondMonth, lang: `en`}
            })} else {
            this.setState(prev => {
              const firstMonth = prev.firstMonth
              const secondMonth = prev.secondMonth
              firstMonth.locale(`es`)
              secondMonth.locale(`es`)
              moment().locale(`es`)
              return {firstMonth, secondMonth, lang: `es`}
            })}}
  render() {
    const { rooms, date, em } = this.state
    const test = moment()
    test.locale(`en`)
    return (<Wrapper>
        <Header func={this.changeEverything}/>
        <main style={{width:`100%`,margin:0,position:`relative`,top:`7vh`,paddingTop:`90px`,paddingBottom:`90px`,display:`flex`,flexDirection:`column`,alignItems:`center`,zIndex:1,backgroundImage:`url(/roomsPage/background_1.png)`,backgroundPosition:`center`,backgroundSize:`cover`,backgroundRepeat:`no-repeat`}}>
          <section>
            <h1>How many people</h1>
            <div className="people">
              <div className="adults">
                <p>Adults</p>
                <select value={this.state.adults}onChange={e=>this.setState({adults:e.target.value})}>{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(f => <option value={f}>{f}</option>)}</select>
              </div>
              <div className="children">
                <p>Children: 10 - 17<br/>(free for children under 10 years old)</p>
                <select value={this.state.children}onChange={e=>this.setState({children:e.target.value})}>{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(f => <option value={f}>{f}</option>)}</select>
              </div>
            </div>
            <h1>Select your room</h1>
            <div className="top_list">
            {Rooms.map((r,ind)=>{
              return <div onClick={()=>this.selectRoom(ind)}>
                  <h1>{r.number}</h1>
                  <div style={{width:`240px`,height:`170px`,background:`center / cover no-repeat url(/roomsPage/${r.number}.jpg)`,backgroundColor:this.state.rooms[ind] ? `grey` : null,backgroundBlendMode:`multiply`}}></div>
                </div>})}
              </div>
              <h1>Select the date</h1>
              <div className="dates">
                <div>
                  <p>Check in</p>
                  <section>
                    {this.state.firstShow ? <p>{this.state.firstSelected.format("ll")}</p> : null}
                    <section className="calendar">
                      <header className="header">
                        <div className="month-display row">{moment().format("MMMM YYYY") != this.state.firstMonth.format("MMMM YYYY") || test.format("MMMM YYYY") != this.state.firstMonth.format("MMMM YYYY") ? <GoArrowLeft onClick={this.firstPrevious}/> : null}<span className="month-label">{this.state.firstMonth.format("MMMM YYYY")}</span><GoArrowRight onClick={this.firstNext}/></div>
                        <div className="row day-names">
                            <span className="day">{this.props.t("day_1")}</span>
                            <span className="day">{this.props.t("day_2")}</span>
                            <span className="day">{this.props.t("day_3")}</span>
                            <span className="day">{this.props.t("day_4")}</span>
                            <span className="day">{this.props.t("day_5")}</span>
                            <span className="day">{this.props.t("day_6")}</span>
                            <span className="day">{this.props.t("day_7")}</span>
                          </div>
                      </header>
                      {this.renderFirstWeeks()}
                    </section>
                  </section>
                </div>
                <div>
                  <p>Check out</p>
                  <section>
                    {this.state.secondShow ? <p>{this.state.secondSelected.format("ll")}</p> : null}
                    <section className="calendar">
                      <header className="header">
                        <div className="month-display row">{moment().format("MMMM YYYY") != this.state.secondMonth.format("MMMM YYYY") ? <GoArrowLeft onClick={this.secondPrevious}/> : null}<span className="month-label">{this.state.secondMonth.format("MMMM YYYY")}</span><GoArrowRight onClick={this.secondNext}/></div>
                        <div className="row day-names">
                            <span className="day">{this.props.t("day_1")}</span>
                            <span className="day">{this.props.t("day_2")}</span>
                            <span className="day">{this.props.t("day_3")}</span>
                            <span className="day">{this.props.t("day_4")}</span>
                            <span className="day">{this.props.t("day_5")}</span>
                            <span className="day">{this.props.t("day_6")}</span>
                            <span className="day">{this.props.t("day_7")}</span>
                          </div>
                      </header>
                      {this.renderSecondWeeks()}
                    </section>
                  </section>
                </div>
              </div>
              <div className="price">
              <button onClick={() => this.calculatePrice(this.state.firstSelected._d.getTime(),this.state.secondSelected._d.getTime())}>See price</button>
              <p style={{fontSize: `1.5em`}}>{this.state.price}$</p>
              </div>
              <div className="bottom">
              <div style={{margin: `20px 0`, width: `100%`, display: `flex`, justifyContent: `center`}}><Link href="/services"><a><button>See whats included</button></a></Link></div>
              <h1>How would you like to pay</h1>
              <div className="payment">
                <div>
                  <input type="radio" id="advance" name="pay" value="advance"onChange={e=>this.setState({payment:e.target.value})}/>
                  <p>Pay in advance</p>
                </div>
                <div>
                  <input type="radio" id="arrival" name="pay" value="arrival"onChange={e=>this.setState({payment:e.target.value})}/>
                  <p>Pay at time of arrival</p>
                </div>
              </div>
              <div>
              <p>Email</p>
              <input type="text"id="em"name="em_name"value={em}onChange={e=>this.setState({em:e.target.value})}/>
              </div>
              <button type="submit"disabled={this.state.rooms==[false,false,false,false,false,false]||this.state.em==``||this.state.payment==``||this.state.adults==0||this.state.secondSelected.isBefore(this.state.firstSelected)||this.state.secondSelected.isSame(this.state.firstSelected)||this.state.firstSelected==moment().startOf('day')||this.state.secondSelected==moment().startOf('day')}onClick={this.submitForm}>Reserve</button>
              {this.state.thank_you && <p>thank you</p>}
              </div>
          </section>
        </main>
        <OtherFooter/>
      </Wrapper>)}}
export default withTranslation('common')(ReservePage)
