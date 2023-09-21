// Dashboard.js
import React from 'react';
import Filters from './filters';
import Visualization from './visualization';

function Dashboard() {
    return (
        <div>
            <h1>Data Visualization Dashboard</h1>
            <Filters />
            <Visualization />
        </div>
    );
}

export default Dashboard;
