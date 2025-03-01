import brand1 from "../../../public/assets/img/brand/brand-1.png";
import brand2 from "../../../public/assets/img/brand/brand-2.png";
import brand3 from "../../../public/assets/img/brand/brand-3.png";
import brand4 from "../../../public/assets/img/brand/brand-4.png";
import brand5 from "../../../public/assets/img/brand/brand-5.png";
import about1 from "../../../public/assets/img/about/about-1.png";
import about2 from "../../../public/assets/img/about/about-2.png";
import Link from "next/link";
import Count from "../common/count";
import WorkArea from "../homes/home/work";
import Testimonial from "../homes/home/testimonial";


const AboutMain = () => {
    return (
        <>
        <div className="about__one section-padding">
        <div className="container">
                    <div className="row align-items-center flex-wrap-reverse gy-4">
                        <div className="col-xl-6 col-lg-5">
                            <div className="about__one-image">
                                <div className="experience-bar animate-y-axis-slider">
                                    <i className="flaticon-consultant"></i>
                                    <div className="experience-bar-right">
                                        <div className="experience-bar-counter">
                                            <h4 className="counter"><Count number={10} /></h4>
                                            <span>+</span>
                                        </div>
                                        <span>Années d'expérience</span>
                                    </div>
                                </div>
                                <div className="about__one-image-wrapper">
                                    <img src={about1.src} alt="image" className="image-1" />
                                    <img src={about2.src} alt="image" className="image-2" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7 col-md-9">
                            <div className="about__one-content">
                                <span className="subtitle-one">À propos de nous</span>
                                <h2>Transformez votre entreprise grâce au numérique</h2>
                                <p>Leaders Digital met à votre disposition des solutions technologiques innovantes pour optimiser vos processus, développer vos activités et renforcer votre présence numérique.</p>
                                <div className="about__one-content-service">
                                    <div className="service">
                                        <i className="far fa-check-circle"></i>
                                        <span>Développement Web et Mobile</span>
                                    </div>
                                    <div className="service">
                                        <i className="far fa-check-circle"></i>
                                        <span>Stratégie de Marketing Digital</span>
                                    </div>
                                    <div className="service">
                                        <i className="far fa-check-circle"></i>
                                        <span>Branding et Design Graphique</span>
                                    </div>
                                    <div className="service">
                                        <i className="far fa-check-circle"></i>
                                        <span>Consultation et Analyse de Données</span>
                                    </div>
                                </div>
                                <Link href="/about" className="btn-one">En savoir plus<i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div className="brand__area section-padding pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="text__slider">
                            <div className="text-slide">
                                <div className="sliders scroll">
                                    <div className="brand__area-item">
                                        <img src={brand1.src} alt="image" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand2.src} alt="image" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand3.src} alt="image" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand4.src} alt="image" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand5.src} alt="image" />
                                    </div>
                                </div>
                                <div className="sliders scroll">
                                    <div className="brand__area-item">
                                        <img src={brand1.src} alt="image" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand2.src} alt="image" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand3.src} alt="image" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand4.src} alt="image" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand5.src} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <WorkArea />
        <Testimonial />
        </>
    );
};

export default AboutMain;