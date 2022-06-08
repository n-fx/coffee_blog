import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";


import { Pagination } from "swiper";

// import img_01 from '../public/images/pexels-pixabay-460257.jpg';
// import img_02 from '../public/images/pexels-engin-akyurt-2232704.jpg';
// import img_03 from '../public/images/pexels-kevin-menajang-982612.jpg';
// import img_04 from '../public/images/pexels-photo-4715450.jpg';
// import img_05 from '../public/images/pexels-photo-5192028.jpg';
// import img_06 from '../public/images/pexels-photo-683039.jpg';

export default function Merken() {

    const menu = ['1960', '1990', '1996', '2001', '2022']
    const data =
        [
            {
                "title": "1960",
                "imagepath": "images/history_01.jpg",
                "text": "Al sinds 1960 zijn wij een van de meest uniek koffiemerken in Nederland. Dit is een demotekst die bedoeld is om meer over uw bedrijf te vertellen. In dit geval gaat het om een tijdlijn, een leuke manier om de geschiedenis van het bedrijf te vertellen."
            },
            {
                "title": "1990",
                "imagepath": "images/history_02.jpg",
                "text": "Al sinds 1990 zijn wij een van de meest uniek koffiemerken in Nederland. Dit is een demotekst die bedoeld is om meer over uw bedrijf te vertellen. In dit geval gaat het om een tijdlijn, een leuke manier om de geschiedenis van het bedrijf te vertellen.Al sinds 1980 zijn wij een van de meest uniek koffiemerken in Nederland. Dit is een demotekst die bedoeld is om meer over uw bedrijf te vertellen. In dit geval gaat het om een tijdlijn, een leuke manier om de geschiedenis van het bedrijf te vertellen."
            },
            {
                "title": "1996",
                "imagepath": "images/history_03.jpg",
                "text": "Al sinds 1996 zijn wij een van de meest uniek koffiemerken in Nederland. Dit is een demotekst die bedoeld is om meer over uw bedrijf te vertellen. In dit geval gaat het om een tijdlijn, een leuke manier om de geschiedenis van het bedrijf te vertellen.Al sinds 1980 zijn wij een van de meest uniek koffiemerken in Nederland. Dit is een demotekst die bedoeld is om meer over uw bedrijf te vertellen. In dit geval gaat het om een tijdlijn, een leuke manier om de geschiedenis van het bedrijf te vertellen."
            },
            {
                "title": "2001",
                "imagepath": "images/history_04.jpg",
                "text": "Al sinds 2001 zijn wij een van de meest uniek koffiemerken in Nederland. Dit is een demotekst die bedoeld is om meer over uw bedrijf te vertellen. In dit geval gaat het om een tijdlijn, een leuke manier om de geschiedenis van het bedrijf te vertellen.Al sinds 1980 zijn wij een van de meest uniek koffiemerken in Nederland. Dit is een demotekst die bedoeld is om meer over uw bedrijf te vertellen. In dit geval gaat het om een tijdlijn, een leuke manier om de geschiedenis van het bedrijf te vertellen."
            },
            {
                "title": "2022",
                "imagepath": "images/history_05.jpg",
                "text": "Al sinds 2022 zijn wij een van de meest uniek koffiemerken in Nederland. Dit is een demotekst die bedoeld is om meer over uw bedrijf te vertellen. In dit geval gaat het om een tijdlijn, een leuke manier om de geschiedenis van het bedrijf te vertellen.Al sinds 1980 zijn wij een van de meest uniek koffiemerken in Nederland. Dit is een demotekst die bedoeld is om meer over uw bedrijf te vertellen. In dit geval gaat het om een tijdlijn, een leuke manier om de geschiedenis van het bedrijf te vertellen."
            }
        ]

    const pagination = {
        clickable: true,

        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (menu[index]) + "</span>";
        },
    }


    return (
        <div className="container-fluid position-relative history">
            <div className="row text-white">
                <h2 className="text-center pb-5 history_title text-uppercase heading-2">Onze geschiedenis</h2>

                <Swiper
                    spaceBetween={10}
                    slidesPerView={"auto"}
                    centeredSlides={true}
                    navigation={true}
                    pagination={pagination}
                    modules={[Pagination, Navigation]}
                    className="mySwiper">

                    {data.map(function (d, idx) {
                        return (
                            <SwiperSlide key={idx} className="p-5">
                                <div className="history_img_full_bg" style={{ backgroundImage: `url(${d.imagepath})` }}></div>
                                <div className="container history_container">
                                    <div className="row align-items-center pb-5 gx-5">
                                        <div className="col-12 col-lg-6">
                                            <div className="history_img" style={{ backgroundImage: `url(${d.imagepath})` }}>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <h2 className="text-white">{d.title}</h2>
                                            <p>{d.text}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide> 
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}