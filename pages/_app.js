import App from'next/app'
import{appWithTranslation}from'../i18n'
import React from'react'
class MyApp extends App{
  static async getInitialProps(ac){return({...await App.getInitialProps(ac)});
  }
  render(){const{Component,pageProps}=this.props
    return<Component {...pageProps}/>
  }}
export default appWithTranslation(MyApp)
