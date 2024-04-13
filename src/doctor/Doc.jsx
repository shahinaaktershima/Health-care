import { Link } from "react-router-dom";


const Doc = ({item}) => {
    const {name,speciality,image,degree}=item;
    return (
        <div>
            <div className="card card-compact h-[400px] bg-base-100 shadow-xl">
  <figure><img className="w-full h-[200px]" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Name : {name}</h2>
    <p>Speciality : {speciality}</p>
    <p>Degree : {degree}</p>
    <div className="card-actions justify-end">
      <Link to='/addAppointment'><button className="btn btn-primary">Appointment</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Doc;