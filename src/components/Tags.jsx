import React from "react";

const Tags = (props) => {
    const tags = props.tags;
    const style = props.name;
    return (
        <ul className={style}>
            {tags.map((tag, index) => (
                <li key={index}>{tag}</li>
            ))}
        </ul>
    );
};

export default Tags;
