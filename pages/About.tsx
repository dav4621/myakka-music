import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Water from '@/styles/Water.tsx'
import TitleLink from '../components/TitleLink.tsx'

import Mugshot from '../public/mugshot.jpg'
import AwsBadge from '../public/aws-certified-solutions-architect-associate.png'
import College from '../public/cal-logo.png'


export default function About() {
  return (
    <>
      <Water />
      <TitleLink />
      <h2>About Me</h2>
      <hr />

      <div className="aImageRow">
    <Image className="mugshot" src={Mugshot} />
    <Image className="awsbadge" src={AwsBadge} />
    <Image className="college" src={College} />
      </div>

      <p>Hello! My name is John Davis, and I am currently a Sales Manager at Guitar Center. Outside of work, I am a freelance IT Professional, focusing in software and the cloud. I have a B.S. in Computer Science from CalU (now PennWest California), and have my Certified Solutions Architect - Associate from Amazon Web Services. When I'm not coding, I'm playing guitar, watching hockey, and lounging at the beach.</p>

      <p>Here's quick access to my <a href="https://github.com/dav4621" target="_blank">GitHub</a> & my <a href="https://www.linkedin.com/in/john-davis-1117361a4/" target="_blank">LinkedIn</a>.</p>
    </>
  )}
