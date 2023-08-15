import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

         <Link href="/leer">Leer</Link>
         <Link href="/escribir">Escribir</Link>
      <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
           
          </p>
          
        </div>

       
      </main>
    </>
  )
}
