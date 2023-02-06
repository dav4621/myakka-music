import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import TitleLink from '../components/TitleLink.tsx'
import Water from '@/styles/Water.tsx'


export default function Podcast() {
  return(
    <>
      <Water />
      <TitleLink />

      <h2>If We Only Had a Podcast?...</h2>
      <hr />

      <p>Three friends hanging out and blowing off steam from the world. On occasion it's entertaining.</p>
    </>
  )}
