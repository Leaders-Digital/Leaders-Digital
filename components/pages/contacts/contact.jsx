"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../common/scroll/scroll-to-top";
import FormArea from "./form";

const ContactUs = () => {
    return (
        <>
            <SEO pageTitle="Contactez-nous" />
            <HeaderOne />
            <BreadCrumb title="Contactez-nous" innerTitle="Contactez-nous" />
            <div className="contact__two section-padding">
                <div className="container">
                    <div className="row gy-4 align-items-center">
                        <div className="col-xl-6">
                            <div className="contact__two-content">
                                <div className="contact__two-title">
                                    <span className="subtitle-one">Contactez-nous</span>
                                    <h2>Besoin d'une solution digitale ?</h2>
                                    <p>
                                        Chez Leaders Digital, nous vous accompagnons dans la transformation
                                        digitale de votre entreprise. Contactez-nous pour des solutions
                                        innovantes adaptées à vos besoins.
                                    </p>
                                </div>
                                <div className="contact__two-form">
                                    <FormArea />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="contact__two-contact-info">
                                <div className="contact__two-single-info">
                                    <div className="contact__two-single-info-icon">
                                        <img src="assets/img/icon//service-1.png" alt="email" />
                                    </div>
                                    <div className="contact__two-single-info-content">
                                        <h4>Email</h4>
                                        <span>contact@leaders-digital.com</span>
                                    </div>
                                </div>
                                <div className="contact__two-single-info">
                                    <div className="contact__two-single-info-icon">
                                        <img src="assets/img/icon//service-2.png" alt="contact" />
                                    </div>
                                    <div className="contact__two-single-info-content">
                                        <h4>Contacts</h4>
                                        <span>(+216) 27 246 375</span>
                                        <span>(+216) 27 246 370</span>
                                    </div>
                                </div>
                                <div className="contact__two-single-info">
                                    <div className="contact__two-single-info-icon">
                                        <img src="assets/img/icon//service-3.png" alt="horaires" />
                                    </div>
                                    <div className="contact__two-single-info-content">
                                        <h4>Horaires</h4>
                                        <span>Lundi - Vendredi : 8:00h à 17:30h</span>
                                       
                                    </div>
                                </div>
                                <div className="contact__two-single-info">
                                    <div className="contact__two-single-info-icon">
                                        <img src="assets/img/icon/service-4.png" alt="adresse" />
                                    </div>
                                    <div className="contact__two-single-info-content">
                                        <h4>Adresse</h4>
                                        <span>Cité des Pins, Les berges du lac 2 1053 Tunis, Tunisie</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <FooterOne />
            <ScrollToTop />
        </>
    );
};

export default ContactUs;