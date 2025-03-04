import React from 'react';

export default function Avatar() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
            <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
    <a href="/dashboard"> Shiva TexYarn</a>
    </h2>
           
            </div>
            <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
            </button>
            <div className="dropdown dropdown-end">
            <div class="avatar placeholder">
  <div class="bg-neutral text-neutral-content rounded-full w-12">
    <span>SY</span>
  </div>
</div> 
                <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    );
}
