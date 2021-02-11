import React,{Component}from'react'
import dynamic from'next/dynamic';
import Link from'next/link'
import styled from'styled-components'
import {i18n,withTranslation}from'../../i18n'
const Wrapper=styled.div`background-color:black;height:50px;width:100%;position:fixed;z-index:10;.desk{display:flex;flex-direction:row;background-color:black;height:50px;align-items:center;justify-content:space-evenly;width:100%;position:fixed;z-index:10;}.ho,.first,.last{padding:1px;color:white;background-color:rgb(97,26,30);text-decoration:none;}.ho:hover,.first:hover,.last:hover{color:rgb(97,26,30);background-color:white;}.hol{display:flex;flex-direction:row;}.hol>p{cursor:pointer;}.corr{color:rgb(97,26,30)!important;}.wrong{color:white!important;}.mob{display:none;}.bur{position:absolute;top:5%;left:2rem;display:flex;flex-direction:column;justify-content:space-around;width:2rem;height:2rem;background:transparent;border:none;cursor:pointer;padding:0;z-index:10;&:focus{outline:none;}}.mob nav a{padding:1px;color:white;background-color:rgb(97,26,30);text-decoration:none;}.mob nav a:hover{color:rgb(97,26,30);background-color:white;}.mob_wrong{color:grey;}.mob.hol{width:100%;justify-content:space-evenly;}@media(max-width: 800px){.desk{display:none;}.mob{display:flex;}}`
const StyledMenu=styled.nav`display:flex;flex-direction:column;justify-content:center;background:#EFFFFA;transform:${({open})=>open?'translateX(0)':'translateX(-100%)'};height:100vh;text-align:left;padding:2rem;position:absolute;top:0;left:0;transition:transform 0.3s ease-in-out;justify-content:space-evenly`
  class Menu extends Component{
    constructor(props){
      super(props);
    }
    render(){return<StyledMenu style={{height:this.props.dim}}open={this.props.open}>{this.props.children}</StyledMenu>}}
const StyledBurger=styled.button`top:5%;left:2rem;display:flex;flex-direction:column;justify-content:space-around;width:2rem;height:2rem;background:transparent;border:none;cursor:pointer;padding:0;z-index:10;margin:10px 30% 0 10px;&:focus{outline:none;}div{width:2rem;height:0.25rem;background:${({open})=>open?'#0D0C1D':'#EFFFFA'};border-radius:10px;transition:all 0.3s linear;position:relative;transform-origin:1px;:first-child {transform:${({open})=>open?'rotate(45deg)':'rotate(0)'};}:nth-child(2){opacity:${({open})=>open?'0':'1'};transform:${({open})=>open?'translateX(20px)':'translateX(0)'};}:nth-child(3){transform:${({open})=>open?'rotate(-45deg)':'rotate(0)'};}}`
class Burger extends Component{
  constructor(props){
    super(props);
  }
  render(){return(<StyledBurger open={this.props.open}onClick={()=>this.props.setOpen(!this.props.open)}>
      <div />
      <div />
      <div />
    </StyledBurger>)}}
class Header extends Component{
  constructor(props){
    super(props);
    this.state={active:`en`,open:false,w:``}}
  static async getInitialProps(ctx) {
  return{namespacesRequired:['header'],func}}
  componentDidMount(){this.checkHeight()
    window.addEventListener('resize',this.checkHeight)}
checkHeight=()=>this.setState({w:window.innerHeight})
changeLang=n=>{this.setState({active:n})
i18n.changeLanguage(n)
this.props.func&&this.props.func()}
setOpen=()=>this.setState({open:!this.state.open});
  render(){return(<Wrapper>
      <section className="desk">
      <Link href="/rooms"><a className="first">{this.props.t("bedrooms")}</a></Link>
      <Link href="/events"><a className="ho">{this.props.t("events")}</a></Link>
      <Link href="/services"><a className="ho">{this.props.t("services")}</a></Link>
      <Link href="/"><a><div style={{width:`151px`,height:`123px`,background:`center / cover no-repeat url(header.png)`,marginTop:`80px`}}></div></a></Link>
      <Link href="/location"><a className="ho">{this.props.t("location")}</a></Link>
      <Link href="/contact"><a className="last">{this.props.t("contact")}</a></Link>
      <div className="hol">
        <p className={this.state.active==`en`?`corr`:`wrong`}style={{marginRight:`10px`}}onClick={()=>this.changeLang(`en`)}>EN</p>
        <p className={this.state.active==`es`?`corr`:`wrong`}onClick={()=>this.changeLang(`es`)}>ES</p>
      </div>
      </section>
      <section className="mob">
        <Burger open={this.state.open}setOpen={this.setOpen} />
        <Link href="/"><a><div style={{display:this.state.open?`none`:`block`,width:`151px`,height:`123px`,background:`center / cover no-repeat url(header.png)`}}></div></a></Link>
        <Menu dim={this.state.w}open={this.state.open}setOpen={this.setOpen}>
          <Link href="/rooms"><a>{this.props.t("bedrooms")}</a></Link>
          <Link href="/events"><a>{this.props.t("events")}</a></Link>
          <Link href="/services"><a>{this.props.t("services")}</a></Link>
          <Link href="/location"><a>{this.props.t("location")}</a></Link>
          <Link href="/contact"><a>{this.props.t("contact")}</a></Link>
          <div className="hol">
            <p className={this.state.active==`en`?`corr`:`mob_wrong`}style={{marginRight:`10px`}}onClick={()=>this.changeLang(`en`)}>EN</p>
            <p className={this.state.active==`es`?`corr`:`mob_wrong`}onClick={()=>this.changeLang(`es`)}>ES</p>
          </div>
        </Menu>
      </section>
      </Wrapper>)}}
export default withTranslation('header')(Header)
