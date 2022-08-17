import React from "react";
import coverImage from '../../assets/cover/bowhat2.jpg';
function About() {
    return (
        <section>
            <p>Kenai yo!</p>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
    );
}

export default About;