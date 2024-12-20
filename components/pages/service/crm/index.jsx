"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../../common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import CustomCRM from "./crm-development";

const CRM = () => {
    return (
        <>
            <SEO pageTitle='CRM' />
            <HeaderOne />
            <BreadCrumb title="CRM" innerTitle="Création de CRM personnalisés" />
            <CustomCRM />
            <FooterOne />    
            <ScrollToTop />      
        </>
    );
};

export default CRM;