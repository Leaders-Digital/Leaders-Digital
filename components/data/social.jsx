import Link from 'next/link';
import React from 'react';

const Social = () => {
    return (
        <>
            <ul>
                <li><Link href="https://www.facebook.com/Leadersdigital123/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                <li><Link href="https://www.instagram.com/leaders_digital/" target="_blank"><i className="fa-brands fa-instagram"></i></Link></li>
                <li><Link href="https://www.linkedin.com/company/leaders-digital9" target="_blank"><i className="fab fa-linkedin-in"></i></Link></li>
            </ul>            
        </>
    );
};

export default Social;