import React, { useEffect, useState } from 'react';
import useAuth from '../../hook/useAuth';
import {useHistory} from 'react-router-dom';
import './Customer.css';
import { useForm } from 'react-hook-form';
const Customer = () => {
    const {user} = useAuth();
    let history = useHistory();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [booking, setBooking] = useState([]);

    //Getting customer information information and inserting database
        const onSubmit = data => {
            console.log(data)
            const status = "Pending";
            data.status = status;

            fetch('http://localhost:5000/customerInfo',{
                method: 'POST',
                headers:{'content-type': 'application/json'},
                body: JSON.stringify(data),
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.unsertedId){
                    history.push('/myOrder')
                }
            })
        };

        //Show Booking data on customer info pages
        useEffect(() => {
            fetch('http://localhost:5000/getOrder')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBooking(data)
            })
        },[booking])
    return (
        <div className="bg-cover pt-5 pb-5">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="mt-2" readOnly defaultValue={user.displayName} {...register("name" )} /> <br/>
                    <input className="mt-2" readOnly defaultValue={user.email} {...register("email")} /> <br/>
                    <input className="mt-2" placeholder="City" type="text" {...register("city")} /> <br/>
                    <input className="mt-2" placeholder="Phone" type="number" {...register("phone", {required:true})} /> <br/>
                    {errors.exampleRequired && <span>This filed is required</span>} <br/>
                    <input className="btn btn-sucess" type="submit" />
                </form>
                   
                </div>
            </div>
        </div>
    );
};

export default Customer;

