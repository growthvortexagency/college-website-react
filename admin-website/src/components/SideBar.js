import '../styles/SideBar.css'

const SideBar = () => {

    return (
        <div id="nav-bar">
            <input id="nav-toggle" type="checkbox" />
            <div id="nav-header"><p id="nav-title" target="_blank">Admin Dashboard</p>
                <hr />
            </div>
            <div id="nav-content">
                <div class="nav-button"><i class="fas fa-dashboard"></i><span>Dashboard</span></div>
                <div class="nav-button"><i class="fas fa-users"></i><span>Students</span></div>
                <div class="nav-button"><i class="fas fa-user"></i><span>Faculties</span></div>
                <hr />
                <div class="nav-button"><i class="fas fa-money-bill"></i><span>Fees Management</span></div>
                <div class="nav-button"><i class="fas fa-file-invoice-dollar"></i><span>Invoices & Receipts</span></div>
                <div class="nav-button"><i class="fas fa-credit-card"></i><span>Transactions</span></div>
                <div class="nav-button"><i class="fas fa-hand-holding-usd"></i><span>Scholarships</span></div>
                <hr />
                <div class="nav-button"><i class="fas fa-user-edit"></i><span>Applications</span></div>
                <div class="nav-button"><i class="fas fa-id-card"></i><span>Admissions</span></div>
                <hr />
                <div class="nav-button"><i class="fas fa-book-open"></i><span>Courses</span></div>
                <div class="nav-button"><i class="fas fa-building"></i><span>Departments</span></div>
                <div class="nav-button"><i class="fas fa-table"></i><span>Timetable</span></div>
                <div id="nav-content-highlight"></div>
            </div>
            <input id="nav-footer-toggle" type="checkbox" />
            <div id="nav-footer">
                <div id="nav-footer-heading">
                    <div id="nav-footer-avatar"><img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547" alt='' /></div>
                    <div id="nav-footer-titlebox"><p id="nav-footer-title" target="_blank">Abhishek</p><span id="nav-footer-subtitle">Admin</span></div>
                    <label for="nav-footer-toggle"><i class="fas fa-caret-up"></i></label>
                </div>
                <div id="nav-footer-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </div>
        </div>
    );
}

export default SideBar
