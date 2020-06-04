import React from 'react';
import '../App.css';

const Hero = props => {
    return(
        <div className="HERO-GRID">
            <div className="align-items-center">
                <div className="d-block justify-content-center col text-center">
                    success
                </div>
            </div>
            <div className="HERO-CHILDREN-GRID">
                <div className="align-items-center d-flex flex-row">
                    <div className="d-block justify-content-center col text-center">
                        success
                    </div>
                </div>
                <div className="align-items-center d-flex flex-row">
                    <div className="d-block justify-content-center col text-center">
                        success
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;