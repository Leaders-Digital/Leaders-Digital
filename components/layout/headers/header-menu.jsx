import Link from 'next/link';

const MainMenu = () => {
    return (
        <>
            <ul>
                <li><Link href="/contact">Accueil</Link></li>
                <li><Link href="/contact">À propos</Link></li>

                <li className="menu-item-has-children"><Link href="#">Service <i className="fas fa-angle-down"></i></Link>
                    <ul className="sub-menu">

                        <li className="menu-item-has-children"><Link href="#">Développement<i className="fas fa-angle-right"></i></Link>
                            <ul className="sub-menu">
                                <li><Link href="/team">Développement Web</Link></li>
                                <li><Link href="/team-two">Développement Mobile</Link></li>
                                <li><Link href="/team-two">Design Web</Link></li>
                            </ul>
                        </li>

                        <li className="menu-item-has-children"><Link href="#">Développement<i className="fas fa-angle-right"></i></Link>
                            <ul className="sub-menu">
                                <li><Link href="/team">Développement Web</Link></li>
                                <li><Link href="/team-two">Développement Mobile</Link></li>
                                <li><Link href="/team-two">Design Web</Link></li>
                            </ul>
                        </li>

                        <li className="menu-item-has-children">
                            <Link href="#">Marketing Digital <i className="fas fa-angle-right"></i></Link>
                            <ul className="sub-menu">
                                <li><Link href="/services/seo">SEO</Link></li>
                                <li><Link href="/services/social-media">Réseaux Sociaux</Link></li>
                                <li><Link href="/services/email-marketing">Email Marketing</Link></li>
                            </ul>
                        </li>

                    </ul>
                </li>

                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;