import React from 'react'
import { useParams } from 'react-router-dom';
import "../css/DogDetails.css";


const DogDetails = ({ dogs }) => {
    const list = dogs.dogs;
    const { name } = useParams();
    const dog = list.find(n => n.name === name);
    if (dog) {
        const facts = (dog.facts).map((fact, index) =>
            <li key={index}>{fact}</li>
        );

        return (
            <div className="dogs">
                <img src={dog.src} alt={dog.name} />
                <p> Name :{dog.name}</p>
                facts:
                <ul>
                    {facts}
                </ul>

            </div >
        )
    }



}



export default DogDetails;
