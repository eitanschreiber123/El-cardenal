"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { useLang } from "@/app/context/lang";
import Header from '../../components/header'
import Footer from '../../components/footer'

const Home =() => {
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
    <div style={{margin: 0,
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
      <main style={{backgroundColor:'white',display:'flex',flexDirection:'column',alignItems:'center',padding:'0px 20px',width:'90%',paddingBottom:'100px'}}>
        <h1 style={{color:'black',marginBottom:'20px'}}>{trans.location}</h1>
        <section style={{alignSelf:'center',display:'grid',width:'90%',gridTemplateColumns:'repeat(auto-fill, 200px)',justifyContent:'space-evenly',gridGap:'5vh 2%',marginBottom:'100px'}}>
        <Image
      src="/location/first.jpg"
      width={200}
      height={200}
      alt="Picture of the author"
      key={1}
    />
    <Image
      src="/location/second.jpg"
      width={200}
      height={200}
      alt="Picture of the author"
      key={2}
    />
    <Image
      src="/location/third.JPG"
      width={200}
      height={200}
      alt="Picture of the author"
      key={3}
    />
    <Image
      src="/location/hotel.jpg"
      width={200}
      height={200}
      alt="Picture of the author"
      key={4}
    />
    <Image
      src="/location/church.jpg"
      width={200}
      height={200}
      alt="Picture of the author"
      key={5}
    />
    <Image
      src="/location/church2.JPG"
      width={200}
      height={200}
      alt="Picture of the author"
      key={6}
    />
    <Image
      src="/location/gate.JPG"
      width={200}
      height={200}
      alt="Picture of the author"
      key={7}
    />
    <Image
      src="/location/statue.JPG"
      width={200}
      height={200}
      alt="Picture of the author"
      key={8}
    />
        </section>
        <section>
            <article style={{color:'black',marginBottom:'20px'}}>La ciudad de loja es la capital musica de Ecuador, se encuentraen el sur del pais, es considerada un ejemplo del exito en la riqueza, religion, cultura y tradicion. En 1594, la Virgen Maria coronada de rosas fragantes se aparecio en la montaña a una doncella indigena que pastoreaba las ovejas...
            El Santuario de "El cisne". Su advocacion se origino desde Alemania con la leyenda de Lohengrin cabarello cristiano del Santo Grial. Aquellos antepasados antiguos deben haber visto de inmediato lo especial que era la tierra ya que los seres humanos viven mas tiempo. Loja, ciudad milenaria, cruce de diferentes culturas: nativa, judia y cristiana. En ese entorno tiene monumentos, plazas y memoriales; museos y restaurantes; danzas, comidas tradicionales y juegos. El arte en Loja es muy importante especialmente la musica, la literatura y la pintura.</article>
            <article style={{color:'black',marginBottom:'20px'}}>The city of Loja is the musical capital of Ecuador, located in the south of the country is considered an example of success in wealth, religion, culture, and tradition, In 1594, The Virgin Mary crowned with fragrant roses appeared at the mountain to a native woman who grazed the sheep...
            The zion "El cisne". Its dedication originated from Germany with the legend of Lohengrin, Christian Knight of the holy grail. Those ancient ancestors must have immediately seen how special earth was since humans live longer, Loja, ancient city, mixture of different cultures: native jewish and Christian has monuments, squares and memorials; museums and restaurans; dances, traditional foods and games. Art in Loja is very important especially music, literature and painting</article>
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default Home