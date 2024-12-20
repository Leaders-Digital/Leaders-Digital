import workBg from "../../../../public/assets/img/work-process/work-process-bg.png";
import image1 from "../../../../public/assets/img/work-process/work-process-1.png";
import image2 from "../../../../public/assets/img/work-process/work-process-2.png";
import Count from "../../common/count";

const WorkArea = () => {
    return (
        <div
        className="work-process-area__one section-padding"
        style={{ backgroundImage: `url(${workBg.src})` }}
      >
        <div className="container">
          <div className="row align-items-end work-process-area__one-title">
            <div className="col-xl-7 col-lg-7">
              <div className="work-process-area__one-content-left">
                <span className="subtitle-one">Nos Services</span>
                <h2>Solutions Digitales Sur-Mesure pour Votre Entreprise</h2>
              </div>
            </div>
            <div className="col-xl-4 offset-xl-1 col-lg-4 offset-lg-1">
              <div className="work-process-area__one-content-right">
                <p>
                  Nous offrons des solutions innovantes pour le développement de votre
                  présence en ligne, l'optimisation de vos stratégies digitales et la
                  gestion de vos besoins technologiques.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center gy-4">
            <div className="col-xl-6">
              <div className="work-process-area__one-single-work">
                <span>01</span>
                <div className="work-process-area__one-single-work-content">
                  <h4>Analyse des Besoins</h4>
                  <p>
                    Nous étudions en profondeur vos objectifs pour vous proposer des
                    solutions digitales parfaitement adaptées à vos attentes.
                  </p>
                </div>
              </div>
              <div className="work-process-area__one-single-work">
                <span>02</span>
                <div className="work-process-area__one-single-work-content">
                  <h4>Création de Solutions Personnalisées</h4>
                  <p>
                    Développement de sites web, plateformes e-commerce et outils de
                    gestion sur-mesure pour booster votre activité.
                  </p>
                </div>
              </div>
              <div className="work-process-area__one-single-work">
                <span>03</span>
                <div className="work-process-area__one-single-work-content">
                  <h4>Accompagnement et Support</h4>
                  <p>
                    Intégration, maintenance et support technique pour garantir la
                    performance et l'évolution de vos outils digitaux.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="work-process-area__one-right-img">
                <img src={image1.src} alt="Leaders Digital" />
              </div>
              <div className="work-process-area__one-right-counter-img">
                <div className="img-counter">
                  <div className="counter-only">
                    <h2 className="counter">
                      <Count number={10} />
                    </h2>
                    <h2>+</h2>
                  </div>
                  <span>années d'expertise digitale</span>
                </div>
                <img src={image2.src} alt="Leaders Digital Expertise" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
};

export default WorkArea;