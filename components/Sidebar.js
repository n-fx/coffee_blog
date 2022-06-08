import Link from 'next/link';
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Sidebar() {
    return (
        <>
            <h2 className="heading-3 my-4">Contact</h2>
            <ul className='social_menu'>

                <Link href="tel:000000000">
                    <a target="_blank" rel="noopener noreferrer">
                        <li>
                            <div className="icon"><AiOutlinePhone /></div>
                            <span>&nbsp;(+00) 1234 5678</span>
                        </li>
                    </a>
                </Link>

                <Link href="mailto:info@ngmedia.nl">
                    <a target="_blank" rel="noopener noreferrer">
                        <li>
                            <div className="icon"><AiOutlineMail /></div>
                            <span>&nbsp;info@ngmedia.nl</span>
                        </li>
                    </a>
                </Link>

                <Link href="https://www.google.nl/maps/">
                    <a target="_blank" rel="noopener noreferrer">
                        <li>
                            <div className="icon"><FaMapMarkerAlt /></div>
                            <span>&nbsp;Zomaareenstraat, <br />7555 AB, Hengelo</span>
                        </li>
                    </a>
                </Link>
            </ul>

            <p className='mt-5'><i>Volg ons op:</i></p>
            <ul className='social_menu'>
                <Link href="https://www.facebook.com/">
                    <a target="_blank" rel="noopener noreferrer">
                        <li>
                            <div className="icon"><FaFacebookF /></div><span>Facebook</span>
                        </li>
                    </a>
                </Link>
                <Link href="https://twitter.com/">
                    <a target="_blank" rel="noopener noreferrer">
                        <li>
                            <div className="icon"><FaTwitter /></div><span>Twitter</span>
                        </li>
                    </a>
                </Link>
                <Link href="https://www.instagram.com/">
                    <a target="_blank" rel="noopener noreferrer">
                        <li>
                            <div className="icon"><FaInstagram /></div><span>Instagram</span>
                        </li>
                    </a>
                </Link>
            </ul>
        </>
    )
}