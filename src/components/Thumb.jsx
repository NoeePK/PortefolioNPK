import React from "react";
import { Link } from "react-router-dom";
import projects from "../datas/project.json";
import Tags from "../components/Tags";

export const Thumb = () => {
    return (
        <>
            {projects.map((project) => (
                <Link
                    className="thumb"
                    to={`/Project/${project.id}`}
                    key={project.id}>
                    <img
                        src={project.cover}
                        className="thumb-cover"
                        alt={project.title}
                    />
                    <div className="thumb-text">
                        <h2>{project.title}</h2>
                        <p>{project.goal}</p>
                        
                    </div>
                    <Tags name="tags" tags={project.tools} />
                </Link>
            ))}
        </>
    );
};

export default Thumb;
