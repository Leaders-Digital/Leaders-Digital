"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../../common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import Mobile from "./developpment-application-mobile";

const MobileIOS = () => {
    return (
        <>
            <SEO pageTitle='Application Mobile et IOS' />
            <HeaderOne />
            <BreadCrumb title="Mobile" innerTitle="Développement d'applications mobiles" />
            <Mobile />
            <FooterOne />    
            <ScrollToTop />      
        </>
    );
};

export default MobileIOS;