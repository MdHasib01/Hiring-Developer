import React from 'react';
import './Header.css'
import background from '../../images/dev-team.png'
const Header = () => {
    return (
        <div className="header">
            {/* Header hero area background image  */}
            <div className="bg-img" style={{ backgroundImage: `url(${background})` }}>
                <div className="header-transbox">
                <h2><i class="fab fa-connectdevelop"></i> Make a developers team</h2>
                <p>You can hire a developer multiple time on a project based on your need</p>
                <h2>Total Budget: $1M</h2>
                </div>
            </div>
                
        </div>
    );
};

export default Header;