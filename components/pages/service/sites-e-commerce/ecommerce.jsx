import ServicesDetails from '../../../../public/assets/img/service/service-details.png';
import image1 from '../../../../public/assets/img/icon/service-details-icon-2.png';
import image2 from '../../../../public/assets/img/icon/service-details-icon.png';

const Commerce = ({firstAndSecondWord}) => {
    return (
        <>
      <div className="service__details section-padding">
    <div className="container">
        <div className="row">
            <div className="col-xl-12">
                <div className="service__details-thumb">
                    <img src={ServicesDetails.src} alt="Développement de sites e-commerce" />
                    <div className="service__details-thumb-icon">
                        {/* <div className="service__details-thumb-icon-wrapper">
                            <img src={image1.src} alt="Icône de service" />
                        </div> */}
                    </div>
                </div>
                <div className="service__details-content">
                    <h2>Boostez vos ventes </h2>
                    <p>Chez nous, le développement de sites e-commerce est bien plus qu’un simple service — c’est notre passion. Nous créons des plateformes de vente en ligne optimisées pour maximiser vos opportunités et atteindre vos clients où qu’ils soient.</p>

                    <h3 className="sub-heading">Transformez votre boutique en une machine à vendre</h3>
                    <p>Notre expertise en développement e-commerce permet de transformer des boutiques physiques ou naissantes en succès digitaux. Nous concevons des expériences utilisateur intuitives et des designs modernes qui convertissent vos visiteurs en clients fidèles.</p>

                    <div className="service__details-content-box">
                        <div className="service__details-content-box-single">
                            <h4>Des solutions e-commerce sur mesure</h4>
                            <p>Nous fournissons des sites robustes, rapides et sécurisés, adaptés à vos besoins spécifiques et à ceux de vos clients.</p>
                            <ul className="service-qualities">
                                <li>Intégration de systèmes de paiement sécurisés</li>
                                <li>Gestion avancée des stocks et des produits</li>
                                <li>Optimisation pour le référencement naturel (SEO)</li>
                                <li>Design responsive pour mobile et tablette</li>
                            </ul>
                        </div>
                        <div className="service__details-content-box-single">
                            <div className="icon">
                                <img src={image2.src} alt="Icône e-commerce" />
                            </div>
                            <h4 className="mb-4">Améliorez vos performances en ligne</h4>
                            <p className="m-0">Notre équipe met en œuvre des outils modernes pour analyser vos performances et améliorer continuellement votre stratégie e-commerce.</p>
                        </div>
                    </div>
                    <p>En investissant dans un site e-commerce de qualité, vous offrez à vos clients une expérience de shopping fluide et professionnelle tout en augmentant vos revenus. Faites équipe avec nous pour faire passer votre boutique à un niveau supérieur.</p>
                </div>
            </div>
        </div>
    </div>
</div>
    
        </>
    );
};

export default Commerce;