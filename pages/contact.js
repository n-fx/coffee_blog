import { useState } from 'react';
import Head from 'next/head';
import HeroSmall from '../components/HeroSmall';
import Image from 'next/image';
import contact_img from '../public/images/contact.jpg';

const Contact = () => {

    const setHeadertitle = "Contact";

    const [submitted, setSubmitted] = useState(false);

    const Userdata = async event => {
        event.preventDefault()
        console.log('Sending')
        setSubmitted(true);

        let userdata = {
            Name: event.target.Name.value,
            Email: event.target.Email.value,
            Message: event.target.Message.value
        }

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userdata)
        })
    }


    return (
        <>
            <Head>
                <title>CoffeeCraft - Contact</title> 
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Contact pagina Coffee Craft" />
            </Head>
            <HeroSmall headertitle={setHeadertitle} />
            <section className="bg-white">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-12">
                            <h1 className="heading-1">Contact</h1>
                            <p>Neem vrijblijvend contact met ons op. <br /><small>Let er wel op dat dit een demo website. De email wordt verstuurd naar info@ngmedia.nl</small></p>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className='contactForm'>
                                <form onSubmit={(e) => Userdata(e)}>
                                    <label htmlFor="Name">Name</label>
                                    <input name="Name" id="Name" type='text' required />
                                    <label htmlFor="Email">Email</label>
                                    <input name="Email" id="Email" type='email' required />
                                    <label htmlFor="Message">Message</label>
                                    <textarea id="Message" name="Message" required></textarea>
                                    <div className="submit_btn">
                                        <input type='submit' value="Verzenden" />
                                        {(submitted == true) ? alert("submitted") : ""}
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 mt-5">
                            <Image
                                src={contact_img}
                                alt="Contact Coffee Craft"
                            /> 
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact;

