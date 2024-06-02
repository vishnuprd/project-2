import React from "react";

export default function AddEmployeeDetails() {
    return (
        <div className="employee-card-details">
            <div className="employee-details-container ml-[500px]">
                <div className="employee-details w-[700px]">
                    <div className="card-body">
                    <button className="back-page btn w-[100px] mr-[370px]">
                               <a href="/dashboard">Back</a>
                            </button>
                        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl">
                            Add New Employee
                        </h1>
                        <h1 className="flex justify-end">
                            <button className="date-picker btn">
                                {new Date().toLocaleDateString()}
                            </button>
                        </h1>
                    </div>
                    <div className="employee-details-form">
                    <select className="select select-ghost w-full max-w-xs mb-[100px]">
                                <option disabled selected>select Role</option>
                                <option>Team Lead/Manager</option>
                                <option>Employee</option>
                            </select>
                        <div className="employee-details-form-container grid grid-cols-2 gap-4">
                         
                            <input type="text" placeholder="Enter First Name here" className="input input-bordered w-[300px] max-w-xs" />
                            <input type="text" placeholder="Enter Last Name here" className="input input-bordered w-[300px] max-w-xs" />
                            <input type="text" placeholder="Generate an Email ID here" className="input input-bordered w-[300px] max-w-xs mt-4" />
                            <input type="text" placeholder="Generate a Password here" className="input input-bordered w-[300px] max-w-xs mt-4" />
                        </div>
                        <div className="reporting-person-container">
                        <select className="select select-ghost w-full max-w-xs mt-[40px]">
                                <option disabled selected>select Reporting Person</option>
                                <option>MD</option>
                                <option>Adminstration Department</option>
                                <option>HR Manager</option>
                                <option>IT Manager</option>
                                <option>Sales Manager</option>
                                <option>Marketing Manager</option>
                                <option>Sales Manager</option>
                                <option>Accounts Manager</option>
                            </select>
                            <select className="select select-ghost w-full max-w-xs mt-[40px] ml-8">
                                <option disabled selected>Department</option>
                                <option>MD</option>
                                <option>Adminstration Department</option>
                                <option>HR Manager</option>
                                <option>IT Manager</option>
                                <option>Sales Manager</option>
                                <option>Marketing Manager</option>
                                <option>Sales Manager</option>
                                <option>Accounts Manager</option>
                            </select>

                            </div>
                            
                        <div className="card-actions justify-center mt-9">
                            <button className="btn- btn ">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
