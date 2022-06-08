import Link from "next/link";
import fakePosts from "../../posts";
import Head from 'next/head';
import { FaArrowLeft } from "react-icons/fa";
import Sidebar from "../../components/Sidebar";
import HeroSmall from '../../components/HeroSmall';


export default function Post({ post }) {

    const setHeadertitle = post.Title;
    const setHeaderImage = post.Title;

    return (
        <>
            <Head>
                <title>CoffeeCraft - {post.Title}</title> 
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content={post.Excerpt}/>
            </Head>
            <HeroSmall headertitle={setHeadertitle} />
            <section className="bg-white">
                <div className="container">
                    <div className="row pt-5 gx-5">
                        <div className="col-12 col-lg-8">
                            <Link href={`/nieuws`}>
                                <button className="btn btn-primary mt-3"><FaArrowLeft />&nbsp;<strong>Ga terug</strong></button>
                            </Link>
                            <h2 className="heading-2">{post.Title}</h2>

                            <div className="border mb-4">
                                <div className="blog_image_full" style={{ backgroundImage: `url( ${'../' + post.Image})` }}></div>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: post.Content }}></div>

                            <Link href={`/nieuws`}>
                                <button className="btn btn-primary mt-3"><FaArrowLeft />&nbsp;<strong>Ga terug</strong></button>
                            </Link>
                        </div>
                        <div className="d-none d-lg-block col-4">
                            <div className="border p-5">
                                <Sidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export async function getStaticPaths() {
    const posts = fakePosts;
    const paths = posts.map((post) => ({
        params: { slug: post.Slug }
    }));

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const { slug } = params;
    const post = fakePosts.find((p) => p.Slug === slug);

    return {
        props: { post }
    };
}
