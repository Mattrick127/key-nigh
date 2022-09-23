import React from "react";
import coverImage from '../../assets/cover/2.jpg';
function About() {
    return (
        <section className="my-5">
        <h1 id="about">Who am I?</h1>
            <article>
                Yo yo yo, check it, it's yo boy KENAIIIII, coming at you live!!!
                
            <img src={coverImage} alt="cover" />
            </article>
        </section>
    );
}

export default About;