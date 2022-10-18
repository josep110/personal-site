import React, { useEffect } from 'react';
import 'react-sticky-header/styles.css';
import './Home.css';
function Home(){
	
	useEffect(() => {
		document.title = "Joseph Rose";
	}, []);

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
					A final year Bachelor’s student at Queen Mary University of London, undertaking the Computer Science course. Alongside studying I like 
					researching and experimenting with new technologies, and being a mentor for younger CS students in my role as a teaching assistant. I am seeking an
opportunity to begin my career in software engineering with a role that will allow me to learn and develop a powerful technical skill set, and a
deep understanding of computing and software.</p>
				
				</article>
				<div id="me-img">
					<img src="images/logo.png" alt="me" width="128" height="128"/>
				</div>
			</div>
            {/* <div id="picture"></div> */}
			{/* <div id="experience">
				<h3>Experience</h3>
				<ul id="horizontal-ul">
					<li>Participated in a Google Developer Student Club.</li>
					<li>Developed a fully-functional computer game, along with documentation, as part of A-Level coursework.</li>
				</ul>
			</div>	 */}
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
