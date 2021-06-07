import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from './Home';
import { AnimalList } from './animal/AnimalList';

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/animals">
                <AnimalList />
            </Route>
        </>
    )
}