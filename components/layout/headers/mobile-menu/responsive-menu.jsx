"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const ResponsiveMenu = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const active = (value) => setActiveMenu(value === activeMenu ? null : value),
        activeIcon = (value) => (activeMenu == value ? "mean-clicked" : ""),
        activeSubMenu = (value) => value == activeMenu ? { display: "block" } : { display: "none" };

    const [activeMenus, setActiveMenus] = useState(null);
    const actives = (value) => setActiveMenus(value === activeMenus ? null : value),
        activeIcons = (value) => (activeMenus == value ? "mean-clicked" : ""),
        activeSubMenus = (value) => value == activeMenus ? { display: "block" } : { display: "none" };
    return (
        <>
            <ul>

                <li><Link href="/">Accueil</Link></li>

                <li><Link href="/about">À propos</Link></li>


                <li className='menu-item-has-children'>
                    <Link href='#'>Services</Link>
                    <ul className='sub-menu' style={activeSubMenu("pages")}>

                        <li className='menu-item-has-children'><Link href='#'>Développement Web</Link>
                            <ul className='sub-menu' style={activeSubMenus("web")}>
                                <li><Link href="/vitrine-website">Création de sites vitrines</Link></li>
                                <li><Link href="/e-commerce-website">Développement de sites e-commerce</Link></li>
                                <li><Link href="/crm">Création de CRM personnalisés</Link></li>
                                <li><Link href="/maintenance">Maintenance et support technique</Link></li>
                            </ul>
                            <a className={`mean-expand ${activeIcons("web")}`} onClick={() => actives("web")}></a>
                        </li>

                        <li className='menu-item-has-children'><Link href='#'>Développement Mobile</Link>
                            <ul className='sub-menu' style={activeSubMenus("mobile")}>
                                <li><Link href="/mobile">Applications mobiles iOS et Android</Link></li>
                                <li><Link href="#">Création d’applications PWA</Link></li>
                                <li><Link href="#">Refonte et maintenance d’applications mobiles</Link></li>
                                <li><Link href="#">Tests et déploiement sur les stores</Link></li>
                            </ul>
                            <a className={`mean-expand ${activeIcons("mobile")}`} onClick={() => actives("mobile")}></a>
                        </li>

                    </ul>
                    <a className={`mean-expand ${activeIcon("pages")}`} onClick={() => active("pages")}></a>
                </li>

                <li><Link href="/mesprojet">Portfolio</Link></li>

                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    );
};

export default ResponsiveMenu;