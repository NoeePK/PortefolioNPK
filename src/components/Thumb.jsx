import React from "react";
import { Link } from "react-router-dom";
import projects from "../datas/project.json";
import Tags from "../components/Tags";

export const Thumb = () => {
    return (
        <>
            {projects.map((project) => (
                <div className="thumb">
                    <Link
                        className="to-project-link"
                        to={`/Project/${project.id}`}
                        key={project.id}>
                        <img
                            src={project.cover}
                            className="project-cover"
                            alt="Miniature"
                        />
                        <h2>{project.title}</h2>
                    </Link>
                    <Tags name="tools-list" tags={project.tools} />
                </div>
            ))}
        </>
    );
};

export default Thumb;
