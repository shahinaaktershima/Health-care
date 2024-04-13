import { useContext,  } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Login/AuthProvider";
import UseAdmin from "../Login/UseAdmin";



const Navbar = () => {
    const {user,logOut}=useContext(AuthContext);

    const [userInfo]=UseAdmin();
    console.log(userInfo);
    const handleLogOut=()=>{
      logOut()
      .then()
      .catch()
    }

    const navlinks=<>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/doctor'>Doctors</Link></li>
    {
      userInfo.role === "admin"&&<li><Link className=" btn-sm" to="/dashboard">Dashboard</Link></li>
     
      }
    
    {/* {
      userInfo? <li>dashboard</li>:<></>
    } */}
    </>
    return (
        <div>
           <div className="navbar bg-blue-400">
  <div className="navbar-start">
    <div className="dropdown">
      
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navlinks}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Health Care</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navlinks}
    </ul>
  </div>
  <div className="navbar-end mr-20">
      {
    user?
    <div className="dropdown">
    <div tabIndex={0} role="button" className="m-1 lg:mr-12">
      {
        user?.photoURL?<img className="h-[50px] w-[50px] rounded-full" src={user?.photoURL} alt="" />: <div className="avatar">
        <div className="w-12 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      }
      </div>
    <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-44 text-center fixed">
      <li>{user?.displayName}</li>
     
     {/* <li><Link to="/dashboard">dashboard</Link></li> */}
      <button onClick={handleLogOut} className="btn btn-sm">LogOut</button>
    </ul>
  </div>:  <NavLink to='/login' className='btn'>Join us</NavLink>
  }
      </div>
</div> 
        </div>
    );
};

export default Navbar;