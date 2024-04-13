import { FaAd, FaHome,  FaUsers } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex flex-col md:flex-row">
        <div className="md:w-64 w-full md:min-h-screen bg-base-300">
            <ul className="menu p-4 flex md:flex-col flex-row">
                <li ><NavLink to='/dashboard' ><FaUsers></FaUsers>All Users</NavLink></li>
                
                <li ><NavLink to='/' ><FaHome></FaHome>  Home</NavLink></li>
                
            <li><NavLink to='/dashboard/appointments'><FaAd></FaAd> All appointments request</NavLink></li>
              
              
              
            </ul>
        </div> 
      
        <div className="flex-1">
        <Outlet></Outlet>
        </div>
        </div>
    );
};

export default Dashboard;