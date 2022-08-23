import React from 'react';
import 'react-sticky-header/styles.css';
import './Home.css';

function Home(){
	console.log("Home");
	return(
        <div>
			<section id="welcome-message">
				<h1 >Joseph Rose.</h1>
				<h2 id="tagline">Software & Web Development</h2>
			</section>
			<section id="about-experience">
			<div id="about-div">
				<article id="about">
					<h3>About Me</h3>
					<p>
					My long-term aspiration is to work as a Computer Science researcher, specialising in Security Engineering,
					Computability or Software Performance. After attaining my bachelor's degree at QMUL, I aim to attain a Master's Degree 
					and Doctorate in Computer Science, I aim to contribute to the field through scientific research.</p>
				</article>
			</div>
            
			<div id="experience">
				<h3>Experience</h3>
				<ul id="horizontal-ul">
					<li>Participated in a Google Developer Student Club.</li>
					<li>Developed a fully-functional computer game, along with documentation, as part of A-Level coursework.</li>
				</ul>
			</div>	
			</section>
			<section id="skills-education-login">
			<div id="skills">
				<h3>Skills</h3>
				<ul>
					<li>Python 2/3</li>
					<li>Java</li>
					<li>x86 Assembly</li>
				</ul>
			</div>
			<div id="education">
				<h3>Education</h3>
				<ul id="horizontal-ul">
					<li>Queen Mary, University of London<br/>BSc. Computer Science (currently enrolled)</li>
					<li>Holcombe Grammar School, Chatham<br/>1 AS-Level, 3 A2-Levels (AABB)(2020)</li>
				</ul>
			</div>
			</section>	
    </div>
	)
}


export default Home;
