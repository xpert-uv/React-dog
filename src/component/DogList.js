import React from 'react'
import { Link } from 'react-router-dom';
import "../css/DogList.css";
const DogList = ({ dogs }) => {

    console.log(dogs.dogs)
    const list = dogs.dogs;
    const dogList = list.map((dog, index) =>
        <div key={index}>
            <img src={dog.src} alt={dog.name} />
            <p><Link to={`/dogs/${dog.name}`}>{dog.name}</Link></p>
        </div>);

    return (
        <div className="doglist">
            {dogList}
        </div>
    )
}

export default DogList
