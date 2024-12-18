import image1 from "../../../../public/assets/img/why-choose-us/why-choose.png";
import image2 from "../../../../public/assets/img/shape/why-choose-shape.png";

const ChooseUs = () => {
    return (
        <>
        <div className="why-choose-us__one section-padding">
    <div className="container">
        <div className="row gy-4 align-items-center">
            <div className="col-xl-6 col-lg-7 col-md-9">
                <div className="why-choose-us__one-left">
                    <div className="why-choose-us__one-title">
                        <span className="subtitle-one">Pourquoi Nous Choisir</span>
                        <h2>Des Solutions Digitales Adaptées à Votre Entreprise</h2>
                        <p>Nous concevons des stratégies personnalisées en utilisant les dernières innovations technologiques pour atteindre vos objectifs et stimuler votre croissance.</p>
                    </div>
                    <div className="why-choose-us__one-quality">
                        <div className="why-choose-us__one-quality-single">
                            <div className="icon">
                                <i className="flaticon-machine-repair"></i>
                            </div>
                            <div className="why-choose-us__one-quality-single-content">
                                <h4>Expertise et Innovation</h4>
                                <p>Grâce à notre savoir-faire, nous proposons des solutions innovantes et performantes pour vous démarquer sur le marché.</p>
                            </div>
                        </div>
                        <div className="why-choose-us__one-quality-single">
                            <div className="icon">
                                <i className="flaticon-web-research"></i>
                            </div>
                            <div className="why-choose-us__one-quality-single-content">
                                <h4>Support Fiable et Réactif</h4>
                                <p>Notre équipe vous accompagne 24/7, en assurant un support technique fiable et une assistance continue.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-5 offset-xl-1 col-lg-6 col-md-10">
                <div className="why-choose-us__one-image">
                    <div className="why-choose-us__one-image-shape">
                        <div className="shape shape-1 animate-x-axis"></div>
                        <div className="shape shape-2 animate-x-axis"></div>
                        <img src={image2.src} alt="image" className="shape shape-3 animate-y-axis" />
                    </div>
                    <img src={image1.src} alt="image" />
                </div>
            </div>
        </div>
    </div>
</div>
    
        </>
    );
};

export default ChooseUs;