import React from 'react';
import StickyHeader from 'react-sticky-header';
import { Link } from 'react-router-dom';
import './header.css';

function Header(){
    return(
        <div>
            <StickyHeader header={
				<section class="navbar">
					<ul>
                        <li><Link to='/'>Home</Link></li>
						<li><Link to='/CV'>CV</Link></li>
						<li><Link to='/Projects'>Projects</Link></li>
						<li><Link to='/Blog'>Blog</Link></li>
					</ul>
			    </section>
			}>
			</StickyHeader>
        </div>
    )
}

export default Header;