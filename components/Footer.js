import Link from 'next/link';
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-light">
            <div className="container">
                <div className="row mb-5 pb-3 no-gutters">
                    <div className="col-md-4 mb-md-0 mb-4 d-flex">
                        <div className="con con-1 w-100 py-3 py-lg-5 border">
                            <div className="con-info w-100 text-center">
                                <Link href="tel:000000000">
                                    <a target="_blank" rel="noopener noreferrer">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <AiOutlinePhone />
                                        </div>
                                        <div className="text p-4">
                                            <span>(+00) 1234 5678</span>
                                        </div>
                                    </a>
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-md-0 mb-4 d-flex">
                        <div className="con con-2 w-100 py-3 py-lg-5 border">
                            <div className="con-info w-100 text-center">
                                <Link href="mailto:info@ngmedia.nl">
                                    <a target="_blank" rel="noopener noreferrer">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <AiOutlineMail />
                                        </div>
                                        <div className="text p-4">
                                            <span>info@ngmedia.nl</span>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-md-0 mb-4 d-flex ">
                        <div className="con con-3 w-100 py-3 py-lg-5 border">
                            <div className="con-info w-100 text-center">
                                <Link href="https://www.google.nl/maps/">
                                    <a target="_blank" rel="noopener noreferrer">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <FaMapMarkerAlt />
                                        </div>
                                        <div className="text p-4">
                                            <span>Zomaareenstraat, 7555 AB, Hengelo</span>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="row text-center text-lg-start">
                        <div className="col-12 col-lg-12 mb-md-0 mb-4">
                            <h2 className="footer-heading">Menu</h2>
                            <ul className="footer_menu">
                                <Link href="/">
                                    <li><a>Home</a></li>
                                </Link>
                                <Link href="/over-coffeecraft">
                                    <li><a>Over CoffeeCraft</a></li>
                                </Link>
                                <Link href="/nieuws">
                                    <li><a>Nieuws</a></li>
                                </Link>
                                <Link href="/contact">
                                    <li><a>Contact</a></li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid p-0 border-top mt-5">
                <div className="container">
                    <div className="row mt-4 pt-2">
                        <div className="col-12 col-lg-8 mb-md-0 mb-4">
                            <p className="copyright mb-0 text-center text-lg-start">
                                <strong>CoffeeCraft:</strong> Een demo blog website van ngmedia
                            </p>
                        </div>
                        <div className="col-md col-lg-4 text-center text-lg-end">
                            <ul className="ftco-footer-social p-0">
                                <Link href="https://www.facebook.com/">
                                    <a target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook">
                                        <li className="ftco-animate">
                                            <FaFacebookF />
                                        </li>
                                    </a>
                                </Link>

                                <Link href="https://twitter.com/">
                                    <a target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter">
                                        <li className="ftco-animate">
                                            <FaTwitter />
                                        </li>
                                    </a>
                                </Link>

                                <Link href="https://www.instagram.com/">
                                    <a target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="top" title="" data-original-title="Instagram">
                                        <li className="ftco-animate">
                                            <FaInstagram />
                                        </li>
                                    </a>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
} 