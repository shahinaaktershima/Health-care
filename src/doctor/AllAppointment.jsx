import { useEffect, useState } from "react";
import useAxios from "../Login/useAxios";
import Swal from "sweetalert2";
import { FaRegQuestionCircle } from "react-icons/fa";

const AllAppointment = () => {
    const [users,setUsers]=useState([]);
    const axios=useAxios();
    useEffect(()=>{
        axios.get('/product')
        .then(res=>setUsers(res.data))
       },[])

       const handleMakeAdmin=(user)=>{
        console.log(user);
        axios.patch(`/product/request/${user._id}`)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount>0){
               
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name}'s appointment accepted now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
       }
    return (
        <div>
        <div className="flex justify-evenly my-8">
         <h2 className="text-4xl font-bold">All Appointment</h2>
        <h2 className="text-4xl font-bold">Total Appointment:{users.length}</h2>
        </div>
        <div className="overflow-x-auto w-full mx-auto">
<table className="table overflow-x-auto">
 {/* head */}
 <thead>
   <tr>
     <th></th>
     <th>Name</th>
     <th>email</th>
      {/* <th>Role</th> */}
     <th>Gender</th>
     <th>Request</th>
   </tr>
 </thead>
  <tbody>
   {/* row 1 */}
   {
     users.map((user,index)=><tr key={user._id}>
         <th>{index+1}</th>
         <td>{user.name}</td>
         <td>{user.email}</td>
         <td >
        {user.category}
         </td>
        <td className="text-purple-400 font-bold">  {user.role==='confirmed'?'Confirmed': <button onClick={()=>handleMakeAdmin(user)} className="btn btn-ghost btn-xs  bg-orange-400 text-white text-xl flex items-center">
       <FaRegQuestionCircle></FaRegQuestionCircle>
           </button>}
           </td>
       </tr>
       )
   }
</tbody>
</table>
</div>
     </div>
    );
};

export default AllAppointment;