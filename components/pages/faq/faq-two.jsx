import React, { useState } from 'react';

const FaqOne = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const faqs = [
        {
            question: "Avez-vous des partenariats ?",
            answer: "Oui, nous avons plusieurs partenariats internationaux ainsi que des collaborations locales pour répondre aux besoins de nos clients à l'échelle mondiale. Pour plus d'informations, veuillez contacter notre département des partenariats via cette page."
        },
        {
            question: "Quelle est votre approche en matière de cybersécurité ?",
            answer: "Nous adoptons une approche proactive et globale en matière de cybersécurité, en mettant en œuvre des mesures de sécurité multicouches pour protéger vos données, vos applications et vos réseaux contre les menaces."
        },
        {
            question: "Puis-je bénéficier d’une consultation gratuite pour mes besoins ?",
            answer: "Nous offrons une consultation initiale gratuite pour comprendre les besoins de votre entreprise et proposer comment nos services peuvent vous aider. Veuillez utiliser notre système de réservation en ligne ou nous appeler directement pour planifier votre consultation."
        },
        {
            question: "Comment puis-je soumettre une demande de support ?",
            answer: "Pour les clients actuels nécessitant une assistance technique, veuillez visiter la section Support de notre site web et soumettre une demande via notre système automatisé. Notre équipe technique s'efforce de répondre à toutes les demandes dans un délai de 24 heures."
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
