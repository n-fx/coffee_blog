import React, { useEffect, useRef } from 'react';

export default function HeroSmall({headertitle}) {
 
    return (
        <div className="hero_small bg_02">
            <div className="container">
                <div className="row">
                    <div className="col text-center hero-in">
                        <h1 className="text-white text-uppercase">{headertitle}</h1> 
                    </div>
                </div>
            </div>
        </div>
    )
}