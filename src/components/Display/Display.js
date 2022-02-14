import React, { Component, useEffect, useState } from "react";
import Places from "../Places/Places";

const Display = () => {
    const [places, setPlaces] = useState([]);
    const [visitedPlacesList, setVisitedPlacesList] = useState([]);
    const [score, setScore] = useState(0);
    useEffect(() => {
        fetch('./places.json')
            .then(res=>res.json())
            .then(data=>setPlaces(data));
    }, []);

    const handleMarkVisited = (newPlace, placeScore) => {
        for(const place of visitedPlacesList){
            if(place === newPlace) return;
        }
        const newVisitedPlacesList = [...visitedPlacesList, newPlace];
        const newScore = score + placeScore;
        setVisitedPlacesList(newVisitedPlacesList);
        setScore(newScore);
        console.log(newVisitedPlacesList);
        console.log(score)
    }
    

    return (
        <div className="container mt-5">
            <div className="row g-2">
                <div className="col-9">
                <div className="row row-cols-1 row-cols-md-3 g-4 pe-5">
                        {
                        places.map(place => <Places key={place._id} place={place} handleMarkVisited={handleMarkVisited}></Places>)
                    }
                </div>
                </div>
                <div className="col-3">
                    <h3 className="h3">
                        Places Visited: <small className="text-muted">{visitedPlacesList.length}</small>
                    </h3>
                    <h4 className="h4 mt-3">
                        Score: <small className="text-muted">{score}</small>
                    </h4>
                    <div className="mt-3">
                    <h6 className="display-6">Places</h6>
                    <ul className="list-group">
                    {
                        visitedPlacesList.map(place => <li className="list-group-item d-flex justify-content-between align-items-center">
                        {place}
                    </li>)
                    }
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Display;
