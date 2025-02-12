import { useEffect, useState } from "react";
import useAxios from "../Login/useAxios";
import Swal from "sweetalert2";
import { FaRegQuestionCircle } from "react-icons/fa";

const AllAppointment = () => {
    const [users,setUsers]=useState([]);
    const [searchItem,setSearchItem]=useState('')
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
    //    const handleSearchItem=e=>{
    //     setSearchItem(e.target.value);
    //     const filteredBrands = brands.filter(
    //         brand => brand.name.toLowerCase().includes(searchItem.toLowerCase())
    //       );
    //       setData(filteredBrands)
    // }
       const handleSearchItem=(e)=>{
setSearchItem(e.target.value);
const filteredAppointment = users.filter(
          user => user.docname.toLowerCase().includes(searchItem.toLowerCase())
        );
        setUsers(filteredAppointment)
       }
    return (
        <div>
        <div className="flex justify-evenly my-8">
         <h2 className="text-4xl font-bold">All Appointment</h2>
        <h2 className="text-4xl font-bold">Total Appointment:{users.length}</h2>
        </div>
        <div className="flex grow ml-2">
  <label className="input  py-0 input-bordered flex items-center gap-1">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
  <input type="text"  onChange={handleSearchItem} className="flex  grow" placeholder="Search" />
  
</label>
  </div>
        <div className="overflow-x-auto w-full mx-auto">
<table className="table overflow-x-auto">
 {/* head */}
 <thead>
   <tr>
     <th></th>
     <th>Name</th>
     <th>email</th>
      
     <th>Gender</th>
     <th>Doctor Name</th>
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
         <td>{user.docname}</td>
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