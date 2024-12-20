import ServicesDetails from '../../../../public/assets/img/service/maintenance-website.png';
import image2 from '../../../../public/assets/img/icon/service-details-icon.png';

const WebMaintenance = ({firstAndSecondWord}) => {
    return (
        <>
            <div className="service__details section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="service__details-thumb">
                                <img src={ServicesDetails.src} alt="Maintenance et support technique" />
                                <div className="service__details-thumb-icon">
                                    {/* <div className="service__details-thumb-icon-wrapper">
                                        <img src={image1.src} alt="Icône de service" />
                                    </div> */}
                                </div>
                            </div>
                            <div className="service__details-content">
                                <h2>Assurez la fiabilité et la sécurité de votre site web avec {firstAndSecondWord}</h2>
                                <p>La maintenance et le support technique sont essentiels pour garantir que votre site web reste performant, sécurisé et à jour. Nous offrons des services complets pour gérer tous les aspects techniques de votre site et vous permettre de vous concentrer sur votre activité.</p>

                                <h3 className="sub-heading">Un site web toujours opérationnel</h3>
                                <p>Nous surveillons, entretenons et optimisons régulièrement votre site pour prévenir tout problème technique. Notre équipe est disponible pour répondre à vos besoins en cas de mise à jour, de bug ou de toute autre demande spécifique.</p>

                                <div className="service__details-content-box">
                                    <div className="service__details-content-box-single">
                                        <h4>Nos services de maintenance</h4>
                                        <p>Nous proposons une gamme complète de services pour garantir que votre site web reste fonctionnel et sécurisé à tout moment.</p>
                                        <ul className="service-qualities">
                                            <li>Mises à jour régulières (CMS, plugins, thèmes)</li>
                                            <li>Surveillance de la sécurité et protection contre les cyberattaques</li>
                                            <li>Optimisation des performances (vitesse, temps de chargement)</li>
                                            <li>Sauvegardes régulières et restauration des données</li>
                                            <li>Correction de bugs et support technique 24/7</li>
                                        </ul>
                                    </div>
                                    <div className="service__details-content-box-single">
                                        <div className="icon">
                                            <img src={image2.src} alt="Icône support technique" />
                                        </div>
                                        <h4 className="mb-4">Un partenaire technique fiable</h4>
                                        <p className="m-0">Avec nos services de maintenance, vous êtes assuré d'avoir un site web performant et prêt à répondre aux attentes de vos utilisateurs, quel que soit le moment.</p>
                                    </div>
                                </div>
                                <p>Protégez votre investissement en ligne grâce à nos services de maintenance et de support technique. Nous vous aidons à anticiper et résoudre les problèmes avant qu'ils n'affectent vos visiteurs ou vos ventes. Faites appel à nous pour garder votre site web à son meilleur niveau.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WebMaintenance;
