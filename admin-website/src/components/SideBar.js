import { useState } from 'react';
import '../styles/SideBar.css'
import Dashboard from '../pages/Dashboard';
import Pages from '../pages/Pages';
import Students from '../pages/Students';

const SideBar = () => {

    const [open, setOpen] = useState(true);
    const [subMenus, setSubMenus] = useState({
        calender: false,
        support: false,
        tables: false,
        analytics: false,
    });

    const toggleSubMenu = (menu) => {
        setSubMenus((prev) => ({
            ...prev, [menu]: !prev[menu],
        }));
    };

    const Menus = [
        { title: "Dashboard", icon: <Dashboard /> },
        { title: "Pages", icon: <Pages />, gap: true, subMenu: ["Home", "News & Events", "Upcoming Events", "Faculties", "Library", "Newsletter"], key: "Pages" },
        { title: "Students", icon: <Students /> },
    ];


    return (
        <div className={`sidebar ${open ? "open" : "closed"}`}>
            <div className={`toggle-button ${!open ? 'active' : ''}`} onClick={() => setOpen(!open)}>
            </div>
            <div className='logo-section'></div>
            <ul className='menu-items'></ul>
        </div>
    )
}

export default SideBar
