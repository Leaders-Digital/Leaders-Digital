import React, { useState } from 'react';

const FaqOne = () => {

    const [activeIndex, setActiveIndex] = useState(1);
    const faqs = [
        {
            question: "Quels services proposez-vous ?",
            answer: "Nous sommes spécialisés dans une large gamme de services digitaux, notamment la création de sites web, le développement d'applications, le marketing numérique, la gestion des réseaux sociaux, et le référencement SEO. Consultez notre page Services pour plus de détails."
        },
        {
            question: "Comment puis-je demander un devis pour mon projet ?",
            answer: "Remplissez le formulaire de contact sur cette page en fournissant autant de détails que possible sur votre projet. Un membre de notre équipe vous contactera sous un jour ouvrable pour discuter de vos besoins et vous fournir un devis personnalisé."
        },
        {
            question: "Quelle est votre démarche pour les demandes des clients ?",
            answer: "Nous nous engageons à répondre rapidement à vos demandes. Une fois votre demande soumise, elle sera transmise à l'équipe appropriée qui examinera vos informations et vous contactera avec les prochaines étapes ou pour demander des précisions supplémentaires."
        },
        {
            question: "Quels sont vos horaires d'ouverture ?",
            answer: "Nos bureaux sont ouverts du lundi au vendredi de 9h à 17h [Fuseau horaire]. Pour un support en dehors de ces heures, veuillez consulter les détails de nos forfaits d'assistance ou utiliser les méthodes de contact d'urgence indiquées."
        },
    ];
    
    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-collapse">
            {faqs.map((faq, index) => (
                <div className="faq-collapse-item" key={index}>
                    <div className={`faq-collapse-item-card ${activeIndex === index ? 'active' : ''}`}>
                        <div className="faq-collapse-item-card-header" onClick={() => toggleFaq(index)}>
                            <i className={`fas ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
                            <h6>{faq.question}</h6>
                        </div>
                        <div className={`faq-collapse-item-card-header-content ${activeIndex === index ? 'active' : 'display-none'}`}>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FaqOne;
