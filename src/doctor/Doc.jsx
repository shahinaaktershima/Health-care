

const Doc = ({item}) => {
    const {name,speciality,image,degree}=item;
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Name:{name}</h2>
    <p>Speciality:{speciality}</p>
    <p>Degree:{degree}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Appointment</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Doc;