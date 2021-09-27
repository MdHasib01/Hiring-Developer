import React from 'react';
import './Developer.css'

const Developer = (props) => {
    const {image,name,country,experience,experties,payment} =props.developer
    return (
        <div className="developer">
            <img className="dev-img" src={image} alt="" />
            <h4>{name}</h4>
            <p>Country: {country}</p>
            <p>Experties: {experties}</p>
            <p>Experience: {experience}</p>
            <p>Payment: ${payment}</p>
            <button onClick={()=>props.handleHire(props.developer)} className="btn-primary"><i class="fas fa-share-square"></i> Hire now</button>

        </div>
    );
};

export default Developer;