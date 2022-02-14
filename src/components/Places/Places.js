import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faCoffee, faCheck } from '@fortawesome/free-solid-svg-icons';

const Places = (props) => {
    const {name, picture, location, latitude, longitude, point } = props.place;
    return (  
        <div className="col">
                            <div className="card">
                                <img src={picture} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title mb-4">{name}</h5>
                                    <p className="fw-bold">Location: <small className="text-muted">{location}</small></p>
                                    <p className="fw-bold">Lat & Long: <small className="text-muted">{latitude} | {longitude} </small></p>
                                    <p className="fw-bold">Point: <small className="text-muted">{point}</small></p>
                                    <a className="btn btn-primary" onClick={() => props.handleMarkVisited(name, point)}>
                                    <FontAwesomeIcon icon={faCheck} /> Mark as Visited
                                    </a>
                                </div>
                            </div>
                        </div>
    );
}
 
export default Places;