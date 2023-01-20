//  + tags des techno utilisées

import React from "react";
import { Link } from "react-router-dom";
import projects from "../datas/project.json";

export const Thumb = () => {
    return (
        <>
            {projects.map((project) => (
                <Link
                    className="to-project-link"
                    to={`/Project/${project.id}`}
                    key={project.id}>
                    <img src={project.cover} className="project-cover" alt="Miniature" />
                    <h2>{project.title}</h2>
                </Link>
            ))}
        </>
    );
};

export default Thumb;