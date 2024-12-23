import icon from '../../../../public/assets/img/icon/project-details-icon.png';
import image1 from '../../../../public/assets/img/portfolio/project-details.png';
import image2 from '../../../../public/assets/img/portfolio/project-details-2.png';

const PortfolioDetailsMain = ({ singleData }) => {
    return (
        <div className="project__details section-padding">
            <div className="container">
                {/* <div className="row gy-4 mb-40 justify-content-center">
                    <div className="col-xl-4 col-lg-5">
                        <div className="project-feature">
                            <h4>Database Management</h4>
                            <div className="project-feature-icon">
                                <img src={icon.src} alt="image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="project-feature">
                            <h4>Cloud Computing</h4>
                            <div className="project-feature-icon">
                                <img src={icon.src} alt="image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="project-feature">
                            <h4>Network Security</h4>
                            <div className="project-feature-icon">
                                <img src={icon.src} alt="image" />
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-xl-12">
                        <div className="project__details-thumb">
                            <img src={singleData.image.src} alt="image" />
                            <div className="project-info">
                                <div className="project-info-top">
                                    <h4>Détails du Projet</h4>
                                </div>
                                <ul>
                                    <li>Nom :<span>Leaders Makeup</span></li>
                                    <li>Description :<span>Développement de site web et CRM pour gestion du stock</span></li>
                                    <li>Charte Graphique :<span>Incluse</span></li>
                                    <li>Lien du site web :<span><a href="https://wakeup-cosmetics.tn/" target="_blank" rel="noopener noreferrer">wakeup-cosmetics.tn</a></span></li>
                                    <li>Date :<span>23 Décembre 2023</span></li>
                                    <li>Tags :<span>Web, CRM, Gestion de Stock</span></li>
                                    <li>Valeur :<span className="value">Sur demande</span></li>
                                    <li className="project-rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="col-xl-8">
                        <div className="project__details-content">
                            <div className="project__details-content-mid">
                                <p>Leaders Makeup est une marque ambitieuse qui a entrepris un projet stratégique visant à transformer son infrastructure digitale. Le projet inclut le développement d'un site web moderne et d'un CRM personnalisé pour la gestion efficace des stocks et des opérations commerciales.</p>
                                <h3>Une Solution Digitale Complète</h3>
                                <p>Le site web conçu pour Leaders Makeup offre une expérience utilisateur intuitive et met en valeur leur gamme de produits cosmétiques. Parallèlement, le CRM développé permet une gestion centralisée des stocks, offrant des outils d’analyse, de suivi des commandes et de gestion des approvisionnements.</p>
                                <p>Le projet inclut également la création d’une charte graphique sur mesure, garantissant une cohérence visuelle et une identité forte pour la marque sur toutes ses plateformes digitales.</p>
                            </div>
                        </div>
                    </div>
                    <div className="project__details-images">
                        <img src={image1.src} alt="capture d'écran du site web" />
                        <img src={image2.src} alt="interface CRM" />
                    </div>
                    <div className="project__details-images">
                        <img src={image1.src} alt="capture d'écran du site web" />
                        <img src={image2.src} alt="interface CRM" />
                    </div>
                    <div className="project__details-content">
                        <div className="project__details-content-bottom">
                            <p>Grâce à ce projet, Leaders Makeup renforce sa position sur le marché des cosmétiques en Tunisie. Le site web et le CRM apportent des solutions fiables pour répondre aux besoins de leur clientèle et faciliter la gestion interne de leurs opérations. Ce projet incarne l’innovation et la performance au service de la beauté.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PortfolioDetailsMain;