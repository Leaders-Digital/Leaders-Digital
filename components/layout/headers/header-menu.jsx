import Link from 'next/link';

const MainMenu = () => {
    return (
        <>
            <ul>
                <li><Link href="/">Accueil</Link></li>
                <li><Link href="/about">À propos</Link></li>

                <li className="menu-item-has-children"><Link href="#">Service <i className="fas fa-angle-down"></i></Link>
                    <ul className="sub-menu">

                        <li className="menu-item-has-children"><Link href="#">Développement Web<i className="fas fa-angle-right"></i></Link>
                            <ul className="sub-menu">
                                <li><Link href="/vitrine-website">Création de sites vitrines</Link></li>
                                <li><Link href="/e-commerce-website">Développement de sites e-commerce</Link></li>
                                <li><Link href="/crm">Création de CRM personnalisés</Link></li>
                                <li><Link href="/maintenance">Maintenance et support technique</Link></li>
                            </ul>
                        </li>

                        <li className="menu-item-has-children"><Link href="#">Développement Mobile<i className="fas fa-angle-right"></i></Link>
                            <ul className="sub-menu">
                                <li><Link href="/mobile">Applications mobiles iOS et Android</Link></li>
                                <li><Link href="/team-two">Création d’applications PWA</Link></li>
                                <li><Link href="/team-two">Refonte et maintenance d’applications mobiles</Link></li>
                                <li><Link href="/team-two">Tests et déploiement sur les stores</Link></li>
                             

                            </ul>
                        </li>

                        <li className="menu-item-has-children"><Link href="#">Conception Graphique<i className="fas fa-angle-right"></i></Link>
                            <ul className="sub-menu">
                                <li><Link href="/team">Identité visuelle & branding</Link></li>
                                <li><Link href="/team-two">Design de supports imprimés</Link></li>
                                <li><Link href="/team-two">Web design & UI/UX Design</Link></li>
                                <li><Link href="/team-two">Création de visuels pour réseaux sociaux</Link></li>
                                <li><Link href="/team-two">Motion design et animations vidéo</Link></li>
                                <li><Link href="/team-two">Packaging design</Link></li>


                            </ul>
                        </li>

                        <li className="menu-item-has-children"><Link href="#">Référencement SEO & Marketing Digital<i className="fas fa-angle-right"></i></Link>
                            <ul className="sub-menu">
                                <li><Link href="/team">Audit SEO</Link></li>
                                <li><Link href="/team-two">Optimisation on-page et off-page</Link></li>
                                <li><Link href="/team-two">Web design & UI/UX Design</Link></li>
                                <li><Link href="/team-two">Rédaction de contenu optimisé SEO</Link></li>
                                <li><Link href="/team-two">Stratégie marketing sur les réseaux sociaux</Link></li>
                                <li><Link href="/team-two">Email marketing</Link></li>


                            </ul>
                        </li>

                        <li className="menu-item-has-children"><Link href="#">Gestion des Réseaux Sociaux<i className="fas fa-angle-right"></i></Link>
                            <ul className="sub-menu">
                                <li><Link href="/team">Community management</Link></li>
                                <li><Link href="/team-two">Création de contenu visuel et rédactionnel</Link></li>
                                <li><Link href="/team-two">Stratégie de contenu et planning éditorial</Link></li>


                            </ul>
                        </li>

                        <li className="menu-item-has-children"><Link href="#">Photographie et Vidéographie<i className="fas fa-angle-right"></i></Link>
                            <ul className="sub-menu">
                                <li><Link href="/team">Shooting photo professionnel</Link></li>
                                <li><Link href="/team-two">Production de vidéos d’entreprise</Link></li>
                                <li><Link href="/team-two">Montage et retouche vidéo</Link></li>


                            </ul>
                        </li>



                    </ul>
                </li>

                <li><Link href="/mesprojet">Portfolio</Link></li>

                {/* <li><Link href="/contact">Blog</Link></li> */}

                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;