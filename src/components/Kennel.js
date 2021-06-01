import React from "react";
import { AnimalCard } from "./animal/AnimalCard";
import { CustomerCard } from "./customer/CustomerCard";
import { EmployeeCard } from "./employee/EmployeeCard";
import "./Kennel.css"
import { LocationCard } from "./location/LocationCard";

export const Kennel = () => (
    <>

        <h2>Animals</h2>
        <section className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </section>
        
        <h2>Customers</h2>
        <section className="customers">
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
        </section>
        
        <h2>Employees</h2>
        <section className="employees">
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
        </section>
        
        <h2>Locations</h2>
        <section className="locations">
            <LocationCard />
            <LocationCard />
        </section>
    </>
)
