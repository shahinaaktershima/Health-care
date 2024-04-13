import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Appointment = () => {
    const { register, handleSubmit ,reset } = useForm();
    const location=useLocation();
    const navigate=useNavigate();
    
    const onSubmit =async (data) => {console.log(data)
    
      fetch('http://localhost:5000/product',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
       })
       .then(res=>res.json())
   
       .then(datas=>{
        console.log(datas);
        if(datas.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Appointment request sent Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            navigate(location?.state?location?.state:'/')  
        }
       })
    
    }
    return (
        <div className="mx-10 my-10">
        <h2 className="text-3xl font-bold">Add Appointment</h2>
         <form onSubmit={handleSubmit(onSubmit)}>
    
    <div className="form-control w-full my-6">
<label className="label">
  <span className="label-text"> Name</span>
 
</label>
<input
 {...register("name")}
type="text" placeholder="Your name" className="input input-bordered w-full " />

</div>
   <div className="flex gap-10">
      {/* category */}
      <div className="form-control w-full my-6">
<label className="label">
  <span className="label-text">category</span>
 
</label>
<select defaultValue={'default'}  {...register("category",{required:true})} className="select select-bordered w-full ">
<option  value={'default'}>Select a category</option>
<option value="female">Female</option>
      <option value="male">Male</option>
     
</select>

</div>
{/* price */}
<div className="form-control w-full my-6">
<label className="label">
  <span className="label-text">Email</span>
 
</label>
<input
 {...register("email",{required:true})}
type="email" placeholder="email" className="input input-bordered w-full " />

</div>
<div className="form-control w-full my-6">
<label className="label">
  <span className="label-text">Phone Number</span>
 
</label>
<input
 {...register("number",{required:true})}
type="number" placeholder="your phone number" className="input input-bordered w-full " />

</div>
   </div>
   <div className="form-control">
<label className="label">
  <span className="label-text">description</span>
 
</label>
<textarea   {...register("description",{required:true})} className="textarea textarea-bordered h-24" placeholder="describe your symptomps clearly"></textarea>

</div>
<div>

  </div>
    
   <button className="btn  ml-4 flex">Add Request </button>
  </form> 
      </div>
    );
};

export default Appointment;