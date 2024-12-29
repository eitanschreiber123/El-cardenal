import Image from "next/image";
import styles from "./page.module.css";

export default function Footer() {
  return (
    <div className={styles.footer} style={{backgroundColor: 'black',width:'100vw',display: 'flex', flexWrap:'wrap',padding: '15px 1vw',justifyContent: 'space-evenly',alignItems: 'center',position: 'relative',zIndex: 10}}>
          <div className={styles.first} style={{display:'flex', flex:'1 1 auto', justifyContent:'space-evenly'}}>
         <Image
      src="/facebook.png"
      width={24}
      height={24}
      alt="Picture of the author"
    />
    <Image
      src="/instagram.png"
      width={24}
      height={24}
      alt="Picture of the author"
    />
    <Image
      src="/twitter.png"
      width={24}
      height={24}
      alt="Picture of the author"
    />
    <Image
      src="/trip.png"
      width={24}
      height={24}
      alt="Picture of the author"
    />
         </div>
         <p>© 2018 by EL CARDENAL HOTEL</p>
         <div className={styles.last} style={{display:'grid', flex:'1 1 auto',gridTemplateColumns:'repeat(auto-fit,minmax(51px,1fr))',maxWidth:'183px',gridGap:'15px'}}>
         <Image
      src="/master.png"
      width={51}
    height={27}
      alt="Picture of the author"
    />
    <Image
      src="/visa.png"
      width={51}
    height={27}
      alt="Picture of the author"
    />
    <Image
      src="/discover.jpg"
      width={51}
    height={27}
      alt="Picture of the author"
    />
    <Image
      src="/express.png"
      width={51}
    height={27}
      alt="Picture of the author"
    />
    <Image
      src="/jcb.png"
      width={51}
    height={27}
      alt="Picture of the author"
    />
    <Image
      src="/maestro.png"
      width={51}
    height={27}
      alt="Picture of the author"
    />
         </div>
    </div>
  );
}
