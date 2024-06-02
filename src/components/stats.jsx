import React from "react";

export default function Stats() {
    return (
        <div className="flex flex-col w-[900px]">
            <div class="stats shadow ml-[330px]">
  
  <div class="stat place-items-center">
    <div class="stat-title">Total Employees</div>
    <div class="stat-value">45</div>
    <div class="stat-value "><i class='bx bx-user-plus'></i></div>
   
  </div>
  
  <div class="stat place-items-center">
    <div class="stat-title">Present Today</div>
    <div class="stat-value text-secondary">42</div>
    <div class="stat-value text-secondary"><i class='bx bx-happy'></i></div>
  </div>
 
  <div class="stat place-items-center">
    <div class="stat-title">New Registers</div>
    <div class="stat-value">3</div>
    <div class="stat-value text-secondary"><i class='bx bx-sad'></i></div>
  </div>
  
</div>
        </div>
    );
}