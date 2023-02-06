import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import Water from '@/styles/Water'

import logo from '../public/logo.jpg'
import TitleLink from '../components/TitleLink'

export default function Home() {
  return (
    <>
	<TitleLink />
	<Water />
	<p>A mix of tech stacks and tone stacks🤘.</p>
	<p>Travel safe, the menu below will take you where you need.</p>

	<ul>
	  <li><Link href="/About">About</Link></li>
	  <li><Link href="/Podcast">Podcast</Link></li>
	  <li><a>Articles</a></li>
	  <li><a href="https://www.github.com/dav4621" target="_blank">Other Projects</a></li>
	</ul>

	<hr/>

	<h2 className="homeArticlesTitle">Articles</h2>
	<p>If I find it interesting, I just might write about it...</p>

	<ul>
	  <li><Link href="/articles/nov20_22">11/20/22</Link>🎸 Prologue</li>

	</ul>
    </>
  )
}
