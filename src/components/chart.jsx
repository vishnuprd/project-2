import React, { useState } from "react";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Chart() {
    const [selectedMonth, setSelectedMonth] = useState('January');
    const [selectedYear, setSelectedYear] = useState('2023');
    const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
    const [selectedStatus, setSelectedStatus] = useState('All');

    const departments = ['HR', 'Admin', "IT",'Marketing',"Sales","Accounts","Others"];

    const data = {
        labels: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 
            'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        datasets: [
            {
                label: 'Attendance status',
                data: [65, 59, 80, 81, 56, 55, 40, 62, 73, 81, 90, 95],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Monthly Attendance Status',
            },
        },
    };

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
    };

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };

    const handleDepartmentChange = (event) => {
        setSelectedDepartment(event.target.value);
    };

    const handleStatusChange = (event) => {
        setSelectedStatus(event.target.value);
    };

    return (
        <div className="w-[750px] ml-[330px] mt-10 ">
            <div className="filters mb-4 ">
                <select onChange={handleMonthChange} value={selectedMonth} className="mr-2 text-center">
                    {data.labels.map((month, index) => (
                        <option key={index} value={month}>{month}</option>
                    ))}
                </select>
                <select onChange={handleYearChange} value={selectedYear} className="mr-2 text-center">
                    {[2022, 2023, 2024,2025,2026].map((year, index) => (
                        <option key={index} value={year}>{year}</option>
                    ))}
                </select>
                <select onChange={handleDepartmentChange} value={selectedDepartment} className="mr-2 text-center">
                    <option value="All Departments">All Departments</option>
                    {departments.map((dept, index) => (
                        <option key={index} value={dept}>{dept}</option>
                    ))}
                </select>
                <select onChange={handleStatusChange} value={selectedStatus} className="mr-2 text-center">
                    <option value="All">All</option>
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                    <option value="On Leave">On Leave</option>
                </select>
            </div>
            <Bar data={data} options={options} />
        </div>
    );
}
