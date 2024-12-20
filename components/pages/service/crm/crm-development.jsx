import ServicesDetails from '../../../../public/assets/img/service/crm.png';
import image2 from '../../../../public/assets/img/icon/service-details-icon.png';

const CustomCRM = ({firstAndSecondWord}) => {
    return (
        <>
            <div className="service__details section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="service__details-thumb">
                                <img src={ServicesDetails.src} alt="Création de CRM personnalisés" />
                                <div className="service__details-thumb-icon">
                                    {/* <div className="service__details-thumb-icon-wrapper">
                                        <img src={image1.src} alt="Icône de service" />
                                    </div> */}
                                </div>
                            </div>
                            <div className="service__details-content">
                                <h2>Optimisez votre gestion client avec un CRM sur mesure</h2>
                                <p>Un CRM (Customer Relationship Management) personnalisé est essentiel pour gérer efficacement vos relations client et centraliser toutes vos données importantes. Nous créons des solutions adaptées à vos besoins spécifiques afin de maximiser votre productivité et d’améliorer vos performances.</p>

                                <h3 className="sub-heading">Une gestion simplifiée et efficace</h3>
                                <p>Nos CRMs personnalisés permettent de simplifier vos processus internes tout en offrant une vue complète de vos interactions clients. Que vous soyez une petite entreprise ou une grande organisation, notre expertise vous aide à atteindre vos objectifs commerciaux plus rapidement.</p>

                                <div className="service__details-content-box">
                                    <div className="service__details-content-box-single">
                                        <h4>Des fonctionnalités adaptées à votre entreprise</h4>
                                        <p>Chaque entreprise a des besoins uniques. Nos solutions CRM sont conçues pour répondre à vos défis spécifiques et vous offrir un avantage compétitif.</p>
                                        <ul className="service-qualities">
                                            <li>Gestion des contacts et des leads</li>
                                            <li>Suivi des ventes et des performances</li>
                                            <li>Automatisation des tâches récurrentes</li>
                                            <li>Rapports et analyses personnalisés</li>
                                            <li>Intégration avec vos outils existants</li>
                                        </ul>
                                    </div>
                                    <div className="service__details-content-box-single">
                                        <div className="icon">
                                            <img src={image2.src} alt="Icône CRM" />
                                        </div>
                                        <h4 className="mb-4">Boostez vos performances</h4>
                                        <p className="m-0">Un CRM sur mesure vous permet de mieux comprendre vos clients, d’améliorer votre taux de conversion et de fidéliser votre audience grâce à une gestion centralisée et efficace.</p>
                                    </div>
                                </div>
                                <p>Avec un CRM personnalisé, vous disposez d’un outil puissant pour organiser, analyser et optimiser vos opérations commerciales. Contactez-nous dès aujourd'hui pour développer une solution sur mesure qui correspond parfaitement à vos besoins.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomCRM;
