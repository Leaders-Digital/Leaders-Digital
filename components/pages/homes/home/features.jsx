import image from "../../../../public/assets/img/service/services.png";

const Features = () => {
    return (
        <>
       <div className="services__one section-padding">
    <div className="container">
        <div className="row justify-content-center text-center">
            <div className="col-xl-7 col-lg-7 col-md-9 services__one-title">
                <span className="subtitle-one">Nos Services Principaux</span>
                <h2>Des Solutions Innovantes en Marketing et Développement</h2>
            </div>
        </div>
        <div className="row align-items-center justify-content-center">
            <div className="col-xl-3">
                <div className="row">
                    <div className="col-xl-12 col-md-6">
                        <div className="single-service">
                            <div className="services__one-single-service-icon">
                                <i className="flaticon-graphic-design"></i>
                            </div>
                            <div className="services__one-single-service-content">
                                <h4>Branding et Identité Visuelle</h4>
                                <p>Création de logos, chartes graphiques et designs uniques pour représenter votre marque.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12 col-md-6 xl-mb-30">
                        <div className="single-service">
                            <div className="services__one-single-service-icon">
                                <i className="flaticon-web-design"></i>
                            </div>
                            <div className="services__one-single-service-content">
                                <h4>Développement Web et Mobile</h4>
                                <p>Solutions web et applications mobiles sur mesure pour répondre à vos besoins.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-6 col-lg-7">
                <div className="services-image-wrapper">
                    <img src={image.src} alt="Nos Services" />
                </div>
            </div>
            <div className="col-xl-3">
                <div className="row">
                    <div className="col-xl-12 col-md-6">
                        <div className="single-service">
                            <div className="services__one-single-service-icon">
                                <i className="flaticon-digital-marketing"></i>
                            </div>
                            <div className="services__one-single-service-content">
                                <h4>Marketing Digital</h4>
                                <p>Stratégies SEO, publicités en ligne et gestion des réseaux sociaux pour accroître votre visibilité.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12 col-md-6">
                        <div className="single-service">
                            <div className="services__one-single-service-icon">
                                <i className="flaticon-analysis"></i>
                            </div>
                            <div className="services__one-single-service-content">
                                <h4>Analyse et Conseil</h4>
                                <p>Études de marché, analyses de performance et conseils stratégiques pour booster votre activité.</p>
                            </div>
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

export default Features;