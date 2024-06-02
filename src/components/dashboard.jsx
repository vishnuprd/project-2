import React from "react"; // Capitalized "React"
import Sidebar from '../components/sidebar.jsx';
import Avatar from '../components/avatar.jsx';
import Stats from '../components/stats.jsx';
import Chart from "../components/chart.jsx";
import Employee from '../components/employee.jsx';

export default function Dashboard() {
    return (
        <div>
             <Sidebar />
             <Avatar />
<Stats/>
 <Chart/>  
<Employee/>

        </div>
    );
}
