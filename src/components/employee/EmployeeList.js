import React from 'react';
import { EmployeeCard } from './EmployeeCard';

export const EmployeeList = () => (
    <>
        <h2>Employees</h2>
        <section>
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
        </section>
    </>
)