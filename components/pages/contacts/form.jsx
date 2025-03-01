import React from 'react';

const FormArea = () => {
    return (
        <>
            <form action="#">
                <div className="row">
                    <div className="col-md-6 mb-30">
                        <div className="contact__form-area-item">
                            <input type="text" name="name" placeholder="Full Name" required="required" />
                        </div>
                    </div>
                    <div className="col-md-6 md-mb-30">
                        <div className="contact__form-area-item">
                            <input type="email" name="email" placeholder="Email Address" required="required" />
                        </div>
                    </div>
                    <div className="col-md-12 mb-30">
                        <div className="contact__form-area-item">
                            <input type="text" name="subject" placeholder="Subject" />
                        </div>
                    </div>
                    <div className="col-md-12 mb-30">
                        <div className="contact__form-area-item">
                            <select name="service" className="form-select" required>
                                <option value="" disabled selected>
                                    Sélectionnez un service
                                </option>
                                <option value="creation-site">Création de site web</option>
                                <option value="seo">Optimisation SEO</option>
                                <option value="marketing-digital">Marketing Digital</option>
                                <option value="design-graphique">Design Graphique</option>
                                <option value="maintenance">Maintenance</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-12 mb-30">
                        <div className="contact__form-area-item">
                            <textarea name="message" placeholder="Message"></textarea>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="contact__two-right-form-item">
                            <button className="btn-one" type="submit">Envoyer</button>
                        </div>
                    </div>
                </div>
            </form>            
        </>
    );
};

export default FormArea;