import React, { useContext, useEffect } from 'react';
import { AnimalCard } from './AnimalCard';
import { AnimalContext } from './AnimalProvider';
import "./Animal.css";

export const AnimalList = () => {

    const { animals, getAnimals } = useContext(AnimalContext)

    useEffect(() => {
        console.log("AnimalList: useEffect - getAnimals")
        getAnimals()
    }, [])

    return (
        <div className="animals">
            {console.log("AnimalList: Render", animals)}
            {
                animals.map(animal => {
                    return <AnimalCard key={animal.id} animal={animal} />
                })
            }
        </div>
    )
}
