import { useState } from 'react';
import '../styles/SideBar.css'
import { ReactComponent as DashboardIcon } from '../assets/icons/dashboard.svg';
import { ReactComponent as PagesIcon } from '../assets/icons/file-solid.svg';
import { ReactComponent as Users } from '../assets/icons/users-solid.svg';
import { ReactComponent as Expand } from '../assets/icons/arrow-left-solid.svg';
import { ReactComponent as Collapse } from '../assets/icons/arrow-left-solid.svg';
import { ReactComponent as Right } from '../assets/icons/chevron-right-solid.svg';
import { ReactComponent as User } from '../assets/icons/user-solid.svg';
import { ReactComponent as Envelope } from '../assets/icons/envelope-solid.svg';
import { ReactComponent as GalleryIcon } from '../assets/icons/photo-film-solid.svg';
import { ReactComponent as Blog } from '../assets/icons/blog-solid.svg';
import { ReactComponent as Comment } from '../assets/icons/comment-solid.svg';
import { ReactComponent as Gear } from '../assets/icons/gear-solid.svg';
import Logo from '../assets/logo/St_Anthonys_College_Logo.png'
const SideBar = () => {

    const [open, setOpen] = useState(true);
    const [subMenus, setSubMenus] = useState({
        dashboard: false,
        email: false,
        photogallery: false,
        blogmanagement: false,
        testimonials: false,
    });

    const toggleSubMenu = (menu) => {
        setSubMenus((prev) => ({
            ...prev, [menu]: !prev[menu],
        }));
    };

    const Menus = [
        { title: "Dashboard", icon: <DashboardIcon width='20px' height='20px' fill='white' /> },
        { title: "Pages", icon: <PagesIcon width='20px' height='20px' fill='white' />, subMenu: ["Home", "News & Events", "Upcoming Events", "Faculties", "Library", "Newsletter"], key: "Pages" },
        { title: "Students", icon: <Users width='20px' height='20px' fill='white' />, subMenu: [ "Overview", "Add/Manage Students", "Exam Results"], key: "Students" },
        { title: "Faculties", icon: <User width='20px' height='20px' fill='white' />, subMenu: [ "Overview", "Add/Manage Faculty"], key: "Faculties" },
        { title: "Email", icon: <Envelope width='20px' height='20px' fill='white' /> },
        { title: "Photo Gallery", icon: <GalleryIcon width='20px' height='20px' fill='white' /> },
        { title: "Blog Management", icon: <Blog width='20px' height='20px' fill='white' /> },
        { title: "Testimonials", icon: <Comment width='20px' height='20px' fill='white' /> },
        { title: "Settings", icon: <Gear width='20px' height='20px' fill='white' />, subMenu: [ "Database Management", "Website Configuration", "User Role Assignment"], key: "Settings"},
    ];


    return (
        <div className={`sidebar ${open ? "open" : "closed"}`}>
            <div className={`toggle-button ${!open ? 'active' : ''}`} onClick={() => setOpen(!open)}>
                {open ? <Collapse width='20px' height='20px' /> : <Expand width='20px' height='20px' />}
            </div>
            <div className='logo-section'>
                <img src={Logo} alt='logo' className='college-logo' />
                <h1 className={`college-name ${!open ? "closed" : ""}`}>
                    Admin Dashboard
                </h1>
            </div>
            <ul className='menu-items'>
                {Menus.map((Menu, index) => (
                    <li key={index} className={`menus ${Menu.gap ? "gap-large" : "gap-small"} ${index === 0 ? "highlight" : ""}`}>
                        <div className='item' onClick={() => toggleSubMenu(Menu.key)}>
                            <div className='icon-title'>
                                <span className='menu-icon'>
                                    {Menu.icon}
                                </span>
                                <span className={`menu-title ${!open ? "hidden" : ""}`}>
                                    {Menu.title}
                                </span>
                            </div>
                            {Menu.subMenu && (
                                <span className={`sub-menu ${subMenus[Menu.key] ? "rotated" : ""} ${!open ? "submenu-hidden" : ""}`}>
                                    {subMenus[Menu.key] ? <Right width='20px' height='20px' fill='white' /> : <Right width='20px' height='20px' fill='white' />}
                                </span>
                            )}
                        </div>
                        {Menu.subMenu && subMenus[Menu.key] && (
                            <ul className='ul-items'>
                                {Menu.subMenu.map((subMenu, subIndex) => (
                                    <li key={subIndex} className='li-items'>
                                        <span className='submenu-icon'>
                                        </span>
                                        {subMenu}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SideBar
