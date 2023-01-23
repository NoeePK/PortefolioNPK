// Comment j'ai surmonté des problèmes

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
        <main className="project-wrap" key={project.id}>
            <h1>{project.title}</h1>
            <h2>{project.goal}</h2>
            <section className="carrousel-wrap">
                <Carrousel
                    source={project.pictures}
                    slides={project.pictures.length}
                />
            </section>
            <section className="language-wrap">
                <Tags name="tags-list" tags={project.tags} />
                <Tags name="tags-list" tags={project.tools} />
                
            </section>
            <section project-description>{project.description}</section>
            <a href={project.link}>Voir sur GitHub</a>
        </main>
    );
};

export default Project;
