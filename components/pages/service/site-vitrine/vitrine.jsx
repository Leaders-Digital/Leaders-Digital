import ServicesDetails from '../../../../public/assets/img/service/service-details.png';
import ServicesDetails2 from '../../../../public/assets/img/service/developpment-site-vitrine.png';
import image1 from '../../../../public/assets/img/icon/service-details-icon-2.png';
import image2 from '../../../../public/assets/img/icon/service-details-icon.png';

const Showcase = ({firstAndSecondWord}) => {
    return (
        <>
            <div className="service__details section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="service__details-thumb">
                                <img src={ServicesDetails2.src} alt="Développement de sites vitrines" />
                                <div className="service__details-thumb-icon">
                                    {/* <div className="service__details-thumb-icon-wrapper">
                                        <img src={image1.src} alt="Icône de service" />
                                    </div> */}
                                </div>
                            </div>
                            <div className="service__details-content">
                                <h2>Faites rayonner votre entreprise avec {firstAndSecondWord}</h2>
                                <p>Un site vitrine est bien plus qu’une simple page web — c’est la carte de visite numérique de votre entreprise. Nous concevons des sites élégants et fonctionnels qui captent l’attention de vos visiteurs et renforcent votre crédibilité.</p>

                                <h3 className="sub-heading">Attirez l’attention de vos clients potentiels</h3>
                                <p>Grâce à nos compétences en création de sites vitrines, nous aidons les entreprises à présenter leur activité, leurs services et leurs valeurs de manière professionnelle et engageante. Offrez à vos visiteurs une expérience utilisateur exceptionnelle, adaptée à leur appareil.</p>

                                <div className="service__details-content-box">
                                    <div className="service__details-content-box-single">
                                        <h4>Des sites vitrines sur mesure</h4>
                                        <p>Chaque entreprise est unique, et votre site vitrine doit l’être aussi. Nous travaillons avec vous pour créer un site qui reflète fidèlement votre image de marque et vos objectifs.</p>
                                        <ul className="service-qualities">
                                            <li>Design personnalisé et moderne</li>
                                            <li>Adapté aux mobiles et tablettes</li>
                                            <li>Optimisation pour le référencement naturel (SEO)</li>
                                            <li>Intégration de formulaires de contact et de cartes interactives</li>
                                        </ul>
                                    </div>
                                    <div className="service__details-content-box-single">
                                        <div className="icon">
                                            <img src={image2.src} alt="Icône site vitrine" />
                                        </div>
                                        <h4 className="mb-4">Renforcez votre présence en ligne</h4>
                                        <p className="m-0">Un site vitrine bien conçu est le premier pas vers une stratégie digitale réussie. Nous veillons à ce que votre site soit visible, attractif et facile à utiliser.</p>
                                    </div>
                                </div>
                                <p>En investissant dans un site vitrine professionnel, vous ouvrez la porte à de nouvelles opportunités commerciales et facilitez la mise en avant de vos produits et services. Contactez-nous pour transformer votre présence en ligne.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Showcase;
