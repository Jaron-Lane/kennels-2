import React from 'react';
import { CustomerCard } from './CustomerCard';
import "./Customer.css";

export const CustomerList = () => (
    <>
        <h2>Customers</h2>
        <section className="customers">
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
        </section>
    </>
)