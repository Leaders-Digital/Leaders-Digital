import icon from '../../../../public/assets/img/icon/project-details-icon.png';
import image1 from '../../../../public/assets/img/portfolio/project-details.png';
import image2 from '../../../../public/assets/img/portfolio/image1.jpg';
import image3 from '../../../../public/assets/img/portfolio/project-details.png';

const PortfolioDetailsMain = ({singleData}) => {
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
                                    <li>Nom :<span>{singleData.title}</span></li>
                                    <li>Description :<span>{singleData.subdis}</span></li>
                                    <li>Lien du site web :<span><a href={singleData.link}>Cliquez ici</a></span></li>
                                    <li>Tags:<span>{singleData.tags}</span></li>
                                 
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="project__details-content">
                            <div className="project__details-content-mid">
                                <p>{singleData.description1}</p>
                                <h3>{singleData.subtitle}</h3>
                                <p>{singleData.description2}</p>

                            </div>
                        </div>
                    </div>
                    <div className="project__details-images">
                  
                        <img src={image3.src} alt="image" />
                              <img src={singleData.image3.src} alt="image" />
                    </div>
                    <div className="project__details-images">
                        <img src={image3.src} alt="image" />
                        <img src={image2.src} alt="image" />
                    </div>
                    <div className="project__details-content">
                        <div className="project__details-content-bottom">
                            <p>{singleData.description3}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetailsMain;