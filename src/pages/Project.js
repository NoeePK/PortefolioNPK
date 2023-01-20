// Description du projet
// Comment j'ai surmonté des problèmes
// Lien vers repo github
// 	Créer app conversion mesure

import React from "react";
import { useParams } from "react-router-dom";
import projects from "../datas/project.json";

import Error from "../pages/Error";
import Carrousel from "../components/Carrousel";
import Tags from "../components/Tags";

const Project = () => {
    const url = useParams();
    const project = projects.find((p) => p.id === url.id);

    if (!project) return <Error />;

    return (
        <main>
            <section className="carrousel-wrap" key={project.id}>
                <h1>{project.title}</h1>
                <h2>{project.goal}</h2>
                <Carrousel source={project.pictures}
                slides={project.pictures.length} />
            </section>
            <section className="language-wrap">
                <Tags name="tools-list" tags={project.tools} />
                <Tags name="tags-list" tags={project.tags} />
            </section>
            <section project-description>{project.description}</section>
            <Link to={project.link}>Voir sur GitHub</Link>
        </main>
    );
};

export default Project;
