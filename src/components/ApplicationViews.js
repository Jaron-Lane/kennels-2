import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from './Home';
import { AnimalList } from './animal/AnimalList';
import { AnimalProvider } from './animal/AnimalProvider'

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <AnimalProvider>
                <Route exact path="/animals">
                    <AnimalList />
                </Route>
            </AnimalProvider>

        </>
    )
}