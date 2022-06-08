import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';
import Merken from '../components/Merken';
import History from '../components/History';
import Parallax from 'react-rellax'

import dynamic from "next/dynamic";
import ReactPlayer from 'react-player';

import { useRef, useState } from "react";

import smaak_beleving from '../public/images/smaak_beleving.jpg';
import tijd_voor_koffie from '../public/images/tijd_voor_koffie.jpg';


import coffee_blend_01 from '../public/images/coffee_blend_01.png';
import coffee_blend_02 from '../public/images/coffee_blend_02.png';
import coffee_blend_03 from '../public/images/coffee_blend_03.png';


import { FaRegPlayCircle } from 'react-icons/fa';


export default function Home({ posts }) {

  const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
  const [playing, setPlaying] = useState(false)

  return (
    <>
      <Head>
        <title>CoffeeCraft - Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Home pagina Coffee Craft" />
        <link rel="shortcut icon" href="fav/favicon.ico" />
      </Head>

      <Hero />


      <section className="bg-white overflow-hidden">
        <Parallax speed={6} className="rellax_01"></Parallax>
        <Parallax speed={9} className="rellax_02"></Parallax>

        <div className="container">
          <div className="row align-items-center gx-5">

            <div className="col-12 col-lg-8 col-xl-8 col-xxl-5 p-5 m-auto">
              <h1 className="heading-2">OVER ONS</h1>
              <p>Welkom op deze website. De tekst die je hier leest is slechts een demo tekst. Deze is bedoeld om de website op te vullen. Uiteraard zal hier uw eigen tekst komen te staan.
              </p>
            </div>

            <div className="col-12 col-lg-8 col-xl-8 col-xxl-7  m-auto">

              <div className='VideoPlayer'>
                <ReactPlayer
                  url="video/bg_coffee_small.mp4"
                  controls={false}
                  playing={playing}
                  progressInterval={200}
                  width="100%"
                  height="100%"
                />

                <div className='PlayPause'>
                  {playing ? (
                    <div className="playing" onClick={() => setPlaying(false)}></div>
                  ) : (
                    <div className="pausing" onClick={() => setPlaying(true)}><div className="playicon"><FaRegPlayCircle /></div></div>
                  )}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="bg-light overflow-hidden">
        <Parallax speed={6} className="rellax_03"></Parallax>
        <Parallax speed={9} className="rellax_04"></Parallax>
        <div className="container">
          <div className="row align-items-center gx-5">
            <div className="p-4 col-12 col-md-8 m-auto col-lg-7">
              <h2 className="heading-2">Een Unieke smaak beleveing!</h2>
              <p>Wat maakt de smaak van CraftCoffee zo heerlijk, uniek en eigen? We zullen je een deel van ons geheim verklappen.
                Dit is een demo tekst voor de opvulling van deze demo website. De tekst die u hier leest is dus fictief. Mocht je interesse hebben in een website als deze dan komt hier uiteraard jouw tekst te staan.
              </p>
              <p>Als opvul tekst wordt ook vaak Lorem ipsum gebruikt. Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren 60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.</p>
            </div>
            <div className="col-12 col-md-8 col-lg-5 m-auto">
              <Image
                src={smaak_beleving}
                alt="Coffee"
                width="1080px"
                height="720px"
                layout="intrinsic"
                className='border'
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark p-0">
        <History />
      </section>

      <section className="bg-white">
        <div className="container">
          <div className="row align-items-center gx-5">
            <div className="col-12 col-md-8 col-lg-6 m-auto">
              <Image
                src={tijd_voor_koffie}
                alt="More Coffee"
                width="1080px"
                height="720px"
                layout="intrinsic"
                className='border'
              />
            </div>
            <div className="p-4 col-12 col-md-8 m-auto col-lg-6">
              <h2 className="heading-2">Tijd voor Koffie?</h2>
              <p>Wat maakt de smaak van CraftCoffee zo heerlijk, uniek en eigen? We zullen je een deel van ons geheim verklappen.

                Dit is een demo tekst voor de opvulling van deze demo website. De tekst die u hier leest is dus fictief. Mocht je interesse hebben in een website als deze dan komt hier uiteraard jouw tekst te staan.
              </p>

              <p>Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een pagina, afgeleid wordt door de tekstuele inhoud. Het belangrijke punt van het gebruik van Lorem Ipsum is dat het uit een min of meer normale verdeling van letters bestaat, in tegenstelling tot Hier uw tekst, hier uw tekst wat het tot min of meer leesbaar nederlands maakt. Veel desktop publishing pakketten en web pagina editors gebruiken tegenwoordig Lorem Ipsum als hun standaard model tekst, en een zoekopdracht naar lorem ipsum ontsluit veel websites die nog in aanbouw zijn. Verscheidene versies hebben zich ontwikkeld in de loop van de jaren, soms per ongeluk soms expres ingevoegde humor en dergelijke.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container">
          <div className="row align-items-center gx-2">
            <h2 className="heading-2 pt-5 text-center text-uppercase">Onze smaken</h2>
            <h5 className='text-center'>Keuze uit drie verschillende blends.</h5>
            <div className="col-12 col-md-4 col-lg-4 m-auto">
              <Image
                src={coffee_blend_01}
                alt="Coffee Blend A"
                width="100%"
                height="100%"
                layout="responsive"
              />
            </div>
            <div className="col-12 col-md-4 col-lg-4 m-auto">
              <Image
                src={coffee_blend_02}
                alt="Coffee Blend B"
                width="100%"
                height="100%"
                layout="responsive"
              />
            </div>
            <div className="col-12 col-md-4 col-lg-4 m-auto">
              <Image
                src={coffee_blend_03}
                alt="Coffee Blend C"
                width="100%"
                height="100%"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark bg_01">
        <Merken />
      </section>
    </>
  )
}