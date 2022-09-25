import React from 'react';
import { useState } from 'react';
import $ from 'jquery';
import StickyHeader from 'react-sticky-header';
import { Link } from 'react-router-dom';
import './header.css';

function Header(){

	const [uname, setUname] = useState("");
	const [passw, setPassw] = useState("");
	const [result, setResult] = useState("");

	const handleUname = (e) => {
		setUname(e.target.value);
	};

	const handlePassw = (e) => {
		setPassw(e.target.value);
	};

	const handleLogin = (e) => {
		e.preventDefault();
		const form = $(e.target);
		$.ajax({
			type: "POST",
			url: form.attr("action"),
			data: form.serialize(),
			success(data){
				setResult(data);
			},
		});
	};

    return(
        <div>
            <StickyHeader header={
				<div>
				<section class="navbar">
					<ul>
                        <li><Link to='/'>Home</Link></li>
						<li><Link to='/CV'>CV</Link></li>
						{/* <li><Link to='/Projects'>Projects</Link></li>
						<li><Link to='/Blog'>Blog</Link></li> */}
						<form class="login-area"
							action='https://localhost:8000/server.php'
							method='post'
							onSubmit={(event) => handleLogin(event)}
						>
						<input
							type='text'
							id='uname'
							name='uname'
							value={uname}
							onChange={(event) => handleUname(event)}
						/>	
						<input
							type='password'
							id='passw'
							name='passw'
							value={passw}
							onChange={(event) => handlePassw(event)}
						/>	
						 <button type="submit">Submit</button>
					</form>
				</ul>
			    
				
				</section>
				</div>
			}/>
        </div>
    );
}

export default Header;