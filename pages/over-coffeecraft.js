import Head from 'next/head';
import HeroSmall from '../components/HeroSmall';

export default function OverCoffeeCraft() {

    const setHeadertitle = "Over ons";

    return (
        <> 
            <Head>
                <title>CoffeeCraft - Over ons</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Over ons pagina Coffee Craft" />
            </Head>

            <HeroSmall headertitle={setHeadertitle} />
            <section className="bg-white">
                <div className="container">
                    <div className="row align-items-center gx-5 overflow-hidden">

                        <div className="col-12 col-lg-12">
                            <h1 className="heading-1">Coffee Craft</h1>
                        </div>

                        <div className="col-12 col-lg-6">

                            <p className="hero-text">Welkom op deze website.
                                De tekst die je hier leest is slechts een demo tekst.
                                Deze is bedoeld om de website op te vullen.
                                Uiteraard zal hier uw eigen tekst komen te staan.</p>

                            <p>
                                <strong>Als opvul tekst wordt ook vaak Lorem ipsum gebruikt.</strong>
                            </p>
                            <br />

                            <h2>Wat is Lorem Ipsum?</h2>
                            <p>
                                Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren 60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.
                            </p>

                            <h2>Waar komt het vandaan?</h2>
                            <p>
                                In tegenstelling tot wat algemeen aangenomen wordt is Lorem Ipsum niet zomaar willekeurige tekst. het heeft zijn wortels in een stuk klassieke latijnse literatuur uit 45 v.Chr. en is dus meer dan 2000 jaar oud. Richard McClintock, een professor latijn aan de Hampden-Sydney College in Virginia, heeft ????n van de meer obscure latijnse woorden, consectetur, uit een Lorem Ipsum passage opgezocht, en heeft tijdens het zoeken naar het woord in de klassieke literatuur de onverdachte bron ontdekt. Lorem Ipsum komt uit de secties 1.10.32 en 1.10.33 van de Finibus Bonorum et Malorum De uitersten van goed en kwaad door Cicero, geschreven in 45 v.Chr. Dit boek is een verhandeling over de theorie der ethiek, erg populair tijdens de renaissance. De eerste regel van Lorem Ipsum, Lorem ipsum dolor sit amet.., komt uit een zin in sectie 1.10.32.
                            </p>

                            <p>
                                Het standaard stuk van Lorum Ipsum wat sinds de 16e eeuw wordt gebruikt is hieronder, voor wie er interesse in heeft, weergegeven. Secties 1.10.32 en 1.10.33 van de Finibus Bonorum et Malorum door Cicero zijn ook weergegeven in hun exacte originele vorm, vergezeld van engelse versies van de 1914 vertaling door H. Rackham.
                            </p>

                        </div>

                        <div className="col-12 col-lg-6">

                            <h2>Waar komt het vandaan?</h2>
                            <p>
                                In tegenstelling tot wat algemeen aangenomen wordt is Lorem Ipsum niet zomaar willekeurige tekst. het heeft zijn wortels in een stuk klassieke latijnse literatuur uit 45 v.Chr. en is dus meer dan 2000 jaar oud. Richard McClintock, een professor latijn aan de Hampden-Sydney College in Virginia, heeft ????n van de meer obscure latijnse woorden, consectetur, uit een Lorem Ipsum passage opgezocht, en heeft tijdens het zoeken naar het woord in de klassieke literatuur de onverdachte bron ontdekt. Lorem Ipsum komt uit de secties 1.10.32 en 1.10.33 van de Finibus Bonorum et Malorum De uitersten van goed en kwaad door Cicero, geschreven in 45 v.Chr. Dit boek is een verhandeling over de theorie der ethiek, erg populair tijdens de renaissance. De eerste regel van Lorem Ipsum, Lorem ipsum dolor sit amet.., komt uit een zin in sectie 1.10.32.
                            </p>

                            <h2>Waarom gebruiken we het?</h2>
                            <p>
                                Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een pagina, afgeleid wordt door de tekstuele inhoud. Het belangrijke punt van het gebruik van Lorem Ipsum is dat het uit een min of meer normale verdeling van letters bestaat, in tegenstelling tot Hier uw tekst, hier uw tekst wat het tot min of meer leesbaar nederlands maakt. Veel desktop publishing pakketten en web pagina editors gebruiken tegenwoordig Lorem Ipsum als hun standaard model tekst, en een zoekopdracht naar lorem ipsum ontsluit veel websites die nog in aanbouw zijn. Verscheidene versies hebben zich ontwikkeld in de loop van de jaren, soms per ongeluk soms expres ingevoegde humor en dergelijke.
                            </p>


                            <h2>Waar kan ik het vinden?</h2>
                            <p>
                                Er zijn vele variaties van passages van Lorem Ipsum beschikbaar maar het merendeel heeft te lijden gehad van wijzigingen in een of andere vorm, door ingevoegde humor of willekeurig gekozen woorden die nog niet half geloofwaardig ogen. Als u een passage uit Lorum Ipsum gaat gebruiken dient u zich ervan te verzekeren dat er niets beschamends midden in de tekst verborgen zit. Alle Lorum Ipsum generators op Internet hebben de eigenschap voorgedefinieerde stukken te herhalen waar nodig zodat dit de eerste echte generator is op internet. Het gebruikt een woordenlijst van 200 latijnse woorden gecombineerd met een handvol zinsstructuur modellen om een Lorum Ipsum te genereren die redelijk overkomt. De gegenereerde Lorum Ipsum is daardoor altijd vrij van herhaling, ingevoegde humor of ongebruikelijke woorden etc.
                            </p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}