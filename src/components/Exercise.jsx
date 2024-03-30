import '../App.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Exercise({ exerciseName, shortDescription, descriptionId, buttonId, descriptionTxt, exerciseLink }) {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <li className="list-item">
            <div className="exercise">
                <div className="container-exercise">
                    <div className="exercise-info">
                        <h3 className="exercise-name">{exerciseName}</h3>
                        <h4 className="short-description">{shortDescription}</h4>
                    </div>
                    <button className="btn-details" onClick={toggleDetails} id={buttonId}>
                        {showDetails ? 'Show less' : 'Show more'}
                    </button>
                </div>
                {showDetails && (
                    <div className="container-description" id={descriptionId}>
                        <p className="description">{descriptionTxt}</p>
                        <Link to={exerciseLink} className="show">See solution</Link>
                    </div>
                )}
            </div>
        </li>
    );
}
