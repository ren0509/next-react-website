import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const subtitle = 'アウトプットしていくサイト'
    return (
                <header>HEADER</header>
    <main>
        <div className='hero'>
            <h1 style={{ color: 'red',fontSize: '80'  }}>
                CUBE
            </h1>
            <p>{subtitle}</p>    
        </div>
    <main/>
                <footer>HEADER</footer>
    )
}