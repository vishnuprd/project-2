import React from "react";
import AdduserJpg from "../assets/adduser.jpg";
import { Link } from "react-router-dom";
export default function Employee() {
    return (
        <div className="relative"> 
            <div className="absolute mt-[-500px] ml-[1150px]"> 
                <div className="card card-compact w-[200px] bg-base-100 shadow-xl">
                    <figure>
                        <img src={AdduserJpg} alt="Add-user" />
                    </figure>
                    <div className="card-body">
                    <div className="flex justify-center">
                        <Link to="/add-employee-details" >
    <span className="flex items-center text-xl">
        Add Employee
        <i className='bx bx-plus-circle ml-2 text-2xl'></i>
    </span>
    </Link>
</div>
</div>
    </div>
  </div>

                    </div>
    );
}
