import { useState } from 'react';
import '../styles/SideBar.css';
import { Link } from 'react-router-dom';
import { ReactComponent as DashboardIcon } from '../assets/icons/dashboard.svg';
import { ReactComponent as PagesIcon } from '../assets/icons/file-solid.svg';
import { ReactComponent as Users } from '../assets/icons/users-solid.svg';
import { ReactComponent as Right } from '../assets/icons/chevron-right-solid.svg';
import { ReactComponent as User } from '../assets/icons/user-solid.svg';
import { ReactComponent as Envelope } from '../assets/icons/envelope-solid.svg';
import { ReactComponent as GalleryIcon } from '../assets/icons/photo-film-solid.svg';
import { ReactComponent as Blog } from '../assets/icons/blog-solid.svg';
import { ReactComponent as Comment } from '../assets/icons/comment-solid.svg';
import { ReactComponent as Gear } from '../assets/icons/gear-solid.svg';
import Logo from '../assets/logos/St_Anthony_College_Logo.png';

const SideBar = () => {
  const [open] = useState(true);
  const [subMenus, setSubMenus] = useState({
    pages: false,
    students: false,
    settings: false,
  });

  const toggleSubMenu = (menu) => {
    setSubMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const Menus = [
    { title: "Dashboard", icon: <DashboardIcon width='20px' height='20px' fill='white' />, route: "dashboard" },
    {
      title: "Pages",
      icon: <PagesIcon width='20px' height='20px' fill='white' />,
      subMenu: [
        { title: "Home", route: "/" },
        { title: "News & Events", route: "newsandevents" },
        { title: "Upcoming Events", route: "/" },
        { title: "Faculties", route: "/" },
        { title: "Library", route: "/" },
        { title: "Newsletter", route: "/" },
      ],
      key: "pages",
    },
    {
      title: "Students",
      icon: <Users width='20px' height='20px' fill='white' />,
      subMenu: ["Overview", "Add/Manage Students", "Exam Results"],
      key: "students",
    },
    { title: "Faculties", icon: <User width='20px' height='20px' fill='white' />, route: "faculties" },
    { title: "Email", icon: <Envelope width='20px' height='20px' fill='white' />, route: "email" },
    { title: "Photo Gallery", icon: <GalleryIcon width='20px' height='20px' fill='white' />, route: "photo-gallery" },
    { title: "Blog Management", icon: <Blog width='20px' height='20px' fill='white' />, route: "blog-management" },
    { title: "Testimonials", icon: <Comment width='20px' height='20px' fill='white' />, route: "testimonials" },
    {
      title: "Settings",
      icon: <Gear width='20px' height='20px' fill='white' />,
      subMenu: ["Database Management", "Website Configuration", "User Role Assignment"],
      key: "settings",
    },
  ];

  return (
    <div className={`admin-sidebar ${open ? "admin-open" : "admin-closed"}`}>
      <div className='admin-logo-section'>
        <img src={Logo} alt='logo' className='admin-college-logo' />
        <h1 className={`college-name ${!open ? "admin-closed" : ""}`}>Admin Dashboard</h1>
      </div>
      <ul className='menu-items'>
        {Menus.map((Menu, index) => (
          <li key={index} className={`menus ${Menu.gap ? "gap-large" : "gap-small"} ${index === 0 ? "highlight" : ""}`}>
            <div className='item' onClick={() => toggleSubMenu(Menu.key)}>
              <Link to={Menu.route ? `/admin-dashboard/${Menu.route}` : "#"} className='main-link'>
                <div className='icon-title'>
                  <span className='menu-icon'>{Menu.icon}</span>
                  <span className={`menu-title ${!open ? "hidden" : ""}`}>{Menu.title}</span>
                </div>
              </Link>
              {Menu.subMenu && (
                <span className={`sub-menu ${subMenus[Menu.key] ? "rotated" : ""} ${!open ? "submenu-hidden" : ""}`}>
                  <Right width='20px' height='20px' fill='white' />
                </span>
              )}
            </div>
            {Menu.subMenu && subMenus[Menu.key] && (
              <ul className='ul-items'>
                {Menu.subMenu.map((subMenu, subIndex) => (
                  <li key={subIndex} className="li-items">
                    <Link to={subMenu.route ? `/admin-dashboard/${subMenu.route}` : "#"} className="submenu-link">
                      {subMenu.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
