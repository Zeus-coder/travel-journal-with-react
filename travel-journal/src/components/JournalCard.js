import React from "react";


export default function JournalCard(props){
    return( 
        <div className="card-container">
            <div className="image">
                <img id="card-image" src={props.dataa.imageUrl} alt="cardimage"></img>
            </div>
            <div className="desc">
                <p id="location">{props.dataa.location} <a href={props.dataa.googleMapsUrl}>View on Google Maps</a></p>
                <h3 id="card-title">{props.dataa.title}</h3>
                <p id="date">{props.dataa.startDate} - {props.dataa.endDate}</p>
                <p id="card-desc">{props.dataa.description}</p>
            </div>
        </div>
    )
}