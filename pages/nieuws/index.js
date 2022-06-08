import Head from 'next/head';
import Link from "next/link";
import fakePosts from "../../posts";
import Image from 'next/image';
import HeroSmall from '../../components/HeroSmall';
import Sidebar from "../../components/Sidebar";
import { FaArrowRight } from "react-icons/fa";

export async function getStaticProps() {
    const posts = fakePosts;

    return {
        props: { posts }
    };
}


export default function Index({ posts }) {

    const setHeadertitle = "Nieuws";

    return (
        <>
            <Head>
                <title>CoffeeCraft - Nieuws</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Nieuws pagina Coffee Craft" />
            </Head>
            <HeroSmall headertitle={setHeadertitle} />
            <section className="bg-white">
                <div className="container">
                    <div className="row pt-5 gx-5">

                        <div className="col-12 col-lg-8">
                            <h1 className="heading-1">Het laatste nieuws</h1>
                            <div>
                                {posts.slice(0, 4).map((post) => (
                                    <div key={post.Id} className="blog_item">
                                        <Link href={`/nieuws/${post.Slug}`}>
                                            <div className="row">
                                                <h3>{post.Title}</h3>
                                                <div className="col-12 col-md-6 col-lg-4"> 
                                                    <div className='border'>
                                                        <div className="img-fluid bg_img" style={{ backgroundImage: `url( ${post.Image} )`, width: "100%", height: "220px" }}></div>
                                                    </div> 
                                                </div>
                                                <div className="col-12 col-md-6 col-lg-8">
                                                    <div className="pb-2" dangerouslySetInnerHTML={{ __html: post.Excerpt + "..." }}></div>
                                                    <Link href={`/nieuws/${post.Slug}`}><a className='blog_item_link'>Lees meer <FaArrowRight /></a></Link>
                                                </div>
                                            </div>
                                        </Link> 
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="d-none d-lg-block col-4">
                            <div className="border p-5">
                                <h2 className="heading-3">Laatste berichten</h2>
                                {posts.map((post) => (
                                    <div key={post.Id}>
                                        <Link href={`/nieuws/${post.Slug}`}>
                                            <p className='blog_item_link'>{post.Title}</p>
                                        </Link>
                                    </div>
                                ))}
                                <hr className="mt-5"></hr>
                                <Sidebar />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}