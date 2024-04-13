import { useEffect, useState } from "react";
import Doc from "./Doc";


const Doctor = () => {
    const [datas,setData]=useState([]);
    useEffect(()=>{
        fetch('/fakedata.js')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div className="grid grid-cols-4 gap-4 mb-10 mt-1 container mx-auto">
            {
                datas.map(item=><Doc key={item.id} item={item}></Doc>)
            }
        </div>
    );
};

export default Doctor;