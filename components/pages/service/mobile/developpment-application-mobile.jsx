import ServicesDetails from '../../../../public/assets/img/service/mobile-developpment.png';
import image2 from '../../../../public/assets/img/icon/service-details-icon.png';

const Mobile = ({firstAndSecondWord}) => {
    return (
        <>
           <div className="service__details section-padding">
    <div className="container">
        <div className="row">
            <div className="col-xl-12">
                <div className="service__details-thumb">
                    <img src={ServicesDetails.src} alt="Développement mobile Android et iOS" />
                    <div className="service__details-thumb-icon">
                        {/* <div className="service__details-thumb-icon-wrapper">
                            <img src={image1.src} alt="Icône de service" />
                        </div> */}
                    </div>
                </div>
                <div className="service__details-content">
                    <h2>Développez votre application mobile Android et iOS sur mesure</h2>
                    <p>Une application mobile bien conçue est essentielle pour atteindre vos utilisateurs où qu'ils soient. Nous créons des solutions innovantes et performantes, adaptées à vos besoins spécifiques, pour vous aider à vous démarquer sur les plateformes Android et iOS.</p>

                    <h3 className="sub-heading">Une expérience utilisateur exceptionnelle</h3>
                    <p>Nous mettons un point d'honneur à offrir des applications mobiles avec des interfaces intuitives, une navigation fluide et des performances optimales. Que vous souhaitiez une application native ou hybride, nous avons les compétences nécessaires pour concrétiser vos idées.</p>

                    <div className="service__details-content-box">
                        <div className="service__details-content-box-single">
                            <h4>Des fonctionnalités sur mesure</h4>
                            <p>Chaque projet mobile est unique. Nous développons des applications qui répondent parfaitement à vos besoins et attentes.</p>
                            <ul className="service-qualities">
                                <li>Développement d’applications natives Android et iOS</li>
                                <li>Applications hybrides pour une compatibilité multiplateforme</li>
                                <li>Intégration avec vos systèmes existants</li>
                                <li>Design UX/UI moderne et attractif</li>
                                <li>Mises à jour et support technique</li>
                            </ul>
                        </div>
                        <div className="service__details-content-box-single">
                            <div className="icon">
                                <img src={image2.src} alt="Icône Développement Mobile" />
                            </div>
                            <h4 className="mb-4">Une stratégie mobile gagnante</h4>
                            <p className="m-0">Nos applications mobiles vous permettent de mieux engager vos utilisateurs, d’améliorer leur fidélité et d’accroître votre visibilité sur le marché mobile.</p>
                        </div>
                    </div>
                    <p>Confiez-nous votre projet mobile et bénéficiez d’une expertise complète pour concevoir une application performante et en accord avec vos objectifs. Contactez-nous dès maintenant pour en discuter.</p>
                </div>
            </div>
        </div>
    </div>
</div>

        </>
    );
};

export default Mobile;
