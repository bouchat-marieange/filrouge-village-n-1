import React, {Component} from "react"


class Cleaning extends Component {
    render() {
        return (
            <div style={container} className="sub_category">
                <h1>Cleaning</h1>
                <h2> Un service de nettoyage sur mesure pour votre entreprise. Faites appel à notre équipe de
                    professionnels
                    pour l'entretien de vos locaux !
                </h2>
                <div style={imgContainer}>
                    <img style={imageStyle} src="/images/renovation.jpeg" alt=""/>
                </div>
                <h3 className="subtitle">
                    Nos Services
                    <div className="underline"></div>
                </h3>
                <ul>
                    <li>- Nettoyage de bureaux, communs d'immeuble, show-rooms, espaces de stockage, commerces
                        pharmacies
                    </li>
                    <li>- Nettoyage après travaux, incendie, déménagement</li>
                    <li> Traitement spécifique des sols (vinyl, parquet, marbre)</li>
                </ul>

                <h3 className="subtitle">
                    Nos Forces
                    <div className="underline"></div>
                </h3>
                <ul>
                    <li>- 20 ans d'expérience</li>
                    <li>- Organisation, flexibilité, souplesse</li>
                    <li>- Tarifs attractifs</li>
                    <li>- Personnel formé et qualifié</li>
                    <li>- Relation de confiance et à long-terme avec nos clients</li>
                    <li>- Gestion des procédures et contrôle qualité</li>
                    <li>- Focus sur la sécurité</li>
                    <li>- Équipements de pointe</li>
                </ul>
                <p> Vous êtes intéressés par nos services ?
                    Contactez-nous par téléphone au 0800 11 112 ou 0471/50.98.45
                    par mail à nettoyage@levillage1.be.</p>
            </div>
        )
    }
}

const container = {
    maxWidth: '600px',
};

const imgContainer = {
    height: '337px',
    overflow: 'hidden'
};

const imageStyle = {
    width: '120%',
    transform: 'translateX(-10%)',
    borderRadius: '3px'
};

export default Cleaning;