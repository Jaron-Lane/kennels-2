import React from 'react';
import { AnimalCard } from './AnimalCard';
import "./Animal.css";

export const AnimalList = () => {
    <>
        <h2>Animals</h2>
        <section className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </section>
    </>
}
