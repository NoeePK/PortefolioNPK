// Description du projet
// Comment j'ai surmonté des problèmes
// Lien vers repo github
// 	Créer app conversion mesure

import React from "react";
import { useParams } from "react-router-dom";
import projects from "../datas/project.json";

import Error from "../pages/Error";
import Carrousel from "../components/Carrousel";
import Tools from "../components/Tools";
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
                <Carrousel source={project.pictures} />
            </section>
            <section className="language-wrap">
                <Tools
                    list-item=<ul>
                        {project.tools.map((tool, index) => (
                            <li key={index}>{tool}</li>
                        ))}
                    </ul>
                />
                <Tags
                    list-item=<ul>
                        {project.tags.map((tag, index) => (
                            <li key={index}>{tag}</li>
                        ))}
                    </ul>
                />
            </section>
            <section project-description>{project.description}</section>
            
        </main>
    );
};

export default Project;
