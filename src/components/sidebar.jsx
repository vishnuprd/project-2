import React from 'react';
import 'boxicons/css/boxicons.min.css'; 

export default function Sidebar() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    const routes = [
        {
            name: "Dashboard",
            path: "/dashboard",
            icons: "bx bxs-dashboard"
        },
        {
            name: "Employee",
            icons: "bx bxs-group",
            subRoutes: [
                {
                    name: "Payroll",
                    path: "/payroll",
                    icons: "bx bxs-wallet"
                },
                {
                    name: "Attendance",
                    path: "/attendance",
                    icons: "bx bxs-calendar"
                },
                {
                    name: "Statistics",
                    path: "/statistics",
                    icons: "bx bxs-bar-chart-alt-2"
                }
            ]
        },
        {
            name: "Schedule",
            path: "/schedule",
            icons: "bx bxs-calendar-event"
        },
        {
            name: "Reports",
            path: "/reports",
            icons: "bx bxs-file"
        }
    ];

    return (
        <div className="aside">
            <div className="aside-container flex flex-col w-[300px] min-h-screen border-r fixed ">
                <h5 className="scroll-m-20 text-2xl font-semibold tracking-tight ml-9 mt-[75px]">
                    Admin
                </h5>
                <div className="menu mt-2 gap-6">
                    {routes.map((route, index) => (
                        <div key={index}>
                            <div className="menu-item ml-9 mt-4 text-xl flex items-center" onClick={() => setOpen(index === open ? null : index)}>
                                <i className={`${route.icons} mr-2`}></i>
                                <a href={route.path}>{route.name}</a>
                            </div>
                            {open === index && route.subRoutes && route.subRoutes.map((subRoute, subIndex) => (
                                <div key={subIndex} className="menu-item ml-12 mt-4 text-xl flex items-center ">
                                    <i className={`${subRoute.icons} mr-2`}></i>
                                    <a href={subRoute.path}>{subRoute.name}</a>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
