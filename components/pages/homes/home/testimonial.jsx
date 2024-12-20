import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from 'swiper/modules';
import testimonialBg from "../../../../public/assets/img/testimonial/testimonial.png";
import Link from "next/link";

const Testimonial = () => {
    const slideControl = {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 4000,
            reverseDirection: false,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
        }
    };

    return (
        <>
            <div className="testimonial__one section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="testimonial__one-left" style={{ backgroundImage: `url(${testimonialBg.src})` }}>
                                <div className="testimonial__one-left-title">
                                    <span className="subtitle-one">Témoignage Client</span>
                                    <h2>We brand your <span className="highlighted">business</span></h2>
                                    <Link href="/contact" className="btn-one">Obtenir de l'aide
                                        <i className="fas fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6">
                            <div className="testimonial__one-right">
                                <Swiper modules={[EffectFade, Autoplay, Navigation]} {...slideControl}>
                                    {/* Leaders Immobilier */}
                                    <SwiperSlide>
                                        <div className="single-slider">
                                            <div className="single-slider-user">
                                                <div className="single-slider-user-name">
                                                    <h4>Amel Rahmani</h4>
                                                    <span>Agent Immobilier</span>
                                                </div>
                                                <div className="single-slider-user-rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                            </div>
                                            <p>
                                                Une collaboration exceptionnelle ! Le site développé par l'agence a transformé notre visibilité en ligne.
                                                Clair, rapide et attractif, il a généré de nouveaux prospects dès les premières semaines.
                                            </p>
                                        </div>
                                    </SwiperSlide>

                                    {/* Leaders Building */}
                                    <SwiperSlide>
                                        <div className="single-slider">
                                            <div className="single-slider-user">
                                                <div className="single-slider-user-name">
                                                    <h4>Karim Chatti</h4>
                                                    <span>Chef de Projet Construction</span>
                                                </div>
                                                <div className="single-slider-user-rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star not-rated"></i>
                                                </div>
                                            </div>
                                            <p>
                                                Le site réalisé par l'équipe a permis une présentation moderne et professionnelle de nos projets
                                                immobiliers. Une équipe réactive et à l'écoute, un vrai plaisir de collaborer avec eux.
                                            </p>
                                        </div>
                                    </SwiperSlide>

                                    {/* Leaders Makeup */}
                                    <SwiperSlide>
                                        <div className="single-slider">
                                            <div className="single-slider-user">
                                                <div className="single-slider-user-name">
                                                    <h4>Fatma Ben Amara</h4>
                                                    <span>Makeup Artist</span>
                                                </div>
                                                <div className="single-slider-user-rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                            </div>
                                            <p>
                                                Grâce au site e-commerce développé, nous avons vu une augmentation significative de nos ventes en ligne.
                                                Le design est sublime et correspond parfaitement à l'image de notre marque de maquillage.
                                            </p>
                                        </div>
                                    </SwiperSlide>

                                    {/* Leaders Business */}
                                    <SwiperSlide>
                                        <div className="single-slider">
                                            <div className="single-slider-user">
                                                <div className="single-slider-user-name">
                                                    <h4>Hichem Bouslama</h4>
                                                    <span>Consultant en Affaires</span>
                                                </div>
                                                <div className="single-slider-user-rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star not-rated"></i>
                                                </div>
                                            </div>
                                            <p>
                                                L'agence a su comprendre nos besoins et concevoir un site web intuitif et professionnel.
                                                Nos clients sont ravis de l'expérience utilisateur, et nous avons gagné en crédibilité.
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>

                                <div className="testimonial__one-right-bottom">
                                    <div className="slider-arrow">
                                        <i className="swiper-button-prev fas fa-arrow-left"></i>
                                        <i className="swiper-button-next fas fa-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonial;