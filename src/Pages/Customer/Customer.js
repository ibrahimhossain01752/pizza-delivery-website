import './Customer.css';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
//import { useHistory } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import useAuth from '../../hook/useAuth';
// import { Link } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';


const Customer = () => {

    const { user } = useAuth();
     //let history = useHistory();
     const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [booking, setBooking] = useState([]);



    // getting customert information & inserting database.
    const onSubmit = data => {
        console.log(data)
        const status = "Pending";
        data.status = status;

        fetch(`http://localhost:5000/customerInfo`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    navigate.push('/myOrder')
                }
            })
    };


    //Show Booking data on customer info pages.
    useEffect(() => {
        fetch(`http://localhost:5000/myOrder`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBooking(data)
            })
    }, [booking])



    return (
        <div className="bg-cover pt-5 pb-5">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 ">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="mt-2" readOnly defaultValue={user.displayName} {...register("name")} /> <br />
                        <input className="mt-2" readOnly defaultValue={user.email} {...register("eamil")} /> <br />
                        <input className="mt-2" placeholder="City" type="text" {...register("city")} /> <br />
                        <input className="mt-2" placeholder="Phone" type="number" {...register("phone", { required: true })} /> <br />
                        {errors.exampleRequired && <span>This field is required</span>} <br />
                        <input className="btn btn-success" type="submit" />
                        {/* <Link to="/myOrder">
                        <button  className="btn btn-success" type="submit">Submit</button>
                        </Link> */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Customer;



/* 

  <div className="bg-cover pt-5 pb-5">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 ">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="mt-2" readOnly defaultValue={user.displayName} {...register("name")} /> <br />
                        <input className="mt-2" readOnly defaultValue={user.email} {...register("eamil")} /> <br />
                        <input className="mt-2" placeholder="City" type="text" {...register("city")} /> <br />
                        <input className="mt-2" placeholder="Phone" type="number" {...register("phone", { required: true })} /> <br />
                        {errors.exampleRequired && <span>This field is required</span>} <br />
                        <input className="btn btn-success" type="submit" />
                       



*/


















// import React, { useEffect, useState } from 'react';
// import useAuth from '../../hook/useAuth';

// import './Customer.css';
// import { useForm } from 'react-hook-form';
// import { useHistory } from 'react-router-dom';
// const Customer = () => {
//     const {user} = useAuth();
//     let history = useHistory();

//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const [booking, setBooking] = useState([]);

    //Getting customer information information and inserting database
        // const onSubmit = data => {
        //     console.log(data)
        //     const status = "Pending";
        //     data.status = status;

        //     fetch('http://localhost:5000/customerInfo',{
        //         method: 'POST',
        //         headers:{'content-type': 'application/json'},
        //         body: JSON.stringify(data),
        //     })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if(data.insertedId){
        //             history.push('/myOrder')
        //         }
        //     })
        // };

        //Show Booking data on customer info pages
//         useEffect(() => {
//             fetch('http://localhost:5000/getOrder')
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 setBooking(data)
//             })
//         },[booking])
//     return (
//         <div className="bg-cover pt-5 pb-5">
//             <div className="row">
//                 <div className="col-lg-12 col-md-12 col-sm-12 ">
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                     <input className="mt-2" readOnly defaultValue={user.displayName} {...register("name" )} /> <br/>
//                     <input className="mt-2" readOnly defaultValue={user.email} {...register("email")} /> <br/>
//                     <input className="mt-2" placeholder="City" type="text" {...register("city")} /> <br/>
//                     <input className="mt-2" placeholder="Phone" type="number" {...register("phone", {required:true})} /> <br/>
//                     {errors.exampleRequired && <span>This filed is required</span>} <br/>
//                     <input className="btn btn-sucess" type="submit" />
//                 </form>
                   
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Customer;

