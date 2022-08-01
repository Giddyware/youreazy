import "./sidebar.scss";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import HandymanIcon from '@mui/icons-material/Handyman';
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import logo from "../../assets/images/logo_colored.png";
import { getAuth, signOut } from "firebase/auth";

const Sidebar = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo" style={{ display: "flex" }}>
            <span style={{ fontSize: "16px", paddingTop: "4px" }}>
              Your Eazy
            </span>
            <img
              src={logo}
              alt="logo"
              style={{ width: "45px", height: "45px", objectFit: "contain" }}
            />
          </span>
        </Link>
      </div>

      <hr />

      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/customers" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Customers</span>
            </li>
          </Link>
          <Link to="/service_provider" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Service Provider</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" />
            <span>Booking</span>
          </li>
          <li>
            <HandymanIcon className="icon" />
            <span>Service</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li  onClick={() => signOut(auth).then(navigate("/"))}>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};
export default Sidebar;
