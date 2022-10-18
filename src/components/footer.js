import React from 'react';
import './footer.css';

function footer(){
    return(
        <div id="foot">
            <p>Site written by me, using ReactJS.<br/><br/></p>
				<h3>Contact Information & Links</h3>
				<ul>
					<li>Email: josephrose01@protonmail.com</li>
					<li>Tel: +44 7449095113</li>
					<li><a href="github.com/josep110">GitHub</a></li>
					<li><a href="linkedin.com/in/joseph-rose-446494164">LinkedIn</a></li>
					<li><a href="hackerrank.com/josephrose90">HackerRank</a></li>
				</ul>
        </div>
    )
}

export default footer;