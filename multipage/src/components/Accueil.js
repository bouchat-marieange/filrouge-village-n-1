import {Component} from "react"
import React from "react";

class Accueil extends React.Component {
    render() {
        return (
            <div className="accueil">
                <div className="container">
                    <header>
                        <div className="background">
                            <div className="intro">
                                <p>
                                    Les Entreprises du Village n°1, composées d'une entreprise de travail adapté
                                    et de sociétés d'insertion sociale, ont pour objectif principal de soutenir
                                    les personnes en situation de handicap et/ou exclues du circuit traditionnel
                                    du travail en leur offrant un emploi et un accompagnement social.
                                </p>
                            </div>
                        </div>
                    </header>

                    <div className="contenu">
                        <section className="blocks">
                            <div className="block">
                                <h3>Qui sommes-nous?</h3>
                                <hr/>
                                <p>
                                    Découvrez l'histoire et l'organisation actuelle
                                    de Village n°1 Entreprises.
                                </p>
                            </div>
                            <div className="block">
                                <h3>Services aux entreprises</h3>
                                <hr/>
                                <p>
                                    Retrouvez les activités de conditionnement,
                                    scanning, call & contact center et archivage du Village n°1.
                                </p>
                            </div>
                            <div className="block">
                                <h3>Entretien de jardin</h3>
                                <hr/>
                                <p>
                                    Vos jardins sont entre de bonnes mains
                                    avec notre équipe horticulture.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default Accueil;
