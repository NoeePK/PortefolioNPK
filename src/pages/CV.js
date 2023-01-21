// Lien vers Linkedin

import React from "react";
import diplomas from "../datas/diploma.json";
import works from "../datas/work.json";

const CV = () => {
    return (
        <main>
            <h1>CV</h1>
            <section className="education-wrap">
                <h2>Formation</h2>
                {diplomas.map((diploma) => (
                    <div className="education" key={diploma.id}>
                        <h3>{diploma.title}</h3>
                        <p>
                            {diploma.start} - {diploma.end}
                        </p>
                        <a href={diploma.link}>{diploma.where}</a>
                        <p>{diploma.description}</p>
                    </div>
                ))}
            </section>
            <section className="experience-wrap">
                <h2>Expérience professionnelle</h2>
                {works.map((work) => (
                    <div className="work" key={work.id}>
                        <h3>{work.title}</h3>
                        <p>{work.date}</p>
                        <a href={work.link}>{work.where}</a>
                        <p>{work.description}</p>
                    </div>
                ))}
            </section>
        </main>
    );
};

export default CV;
