import './AddService.css';
import { useForm } from 'react-hook-form';
import React from 'react';
//import { useHistory } from 'react-router';
import { Link, useNavigate } from 'react-router-dom';

const AddService = () => {

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();


    // Add Service on database.................
    const onSubmit = data => {
        console.log(data);
        fetch(`http://localhost:5000/addServiceDB`, {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate.push('/home')
            })
    }



    return (
        <div>
            <div className="addServices mt-5 mb-5">
                <h2>Add Your Services</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div class="form-group">
                        <input
                            type="text"
                            className="p-2 m-2"
                            {...register("name", { required: true })}
                            required
                            class="form-control"
                            placeholder="Your Product Title"
                        />
                    </div> <br />

                    <div class="form-group">
                        <input
                            type="text"
                            className="p-2 m-2"
                            {...register("price", { required: true })}
                            required
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Price"
                        />
                    </div> <br />

                    <div class="form-group">
                        <input
                            type="text"
                            className="p-2 m-2"
                            {...register("img", { required: true })}
                            required
                            class="form-control"
                            placeholder="Image-Url"
                        />
                    </div> <br />

                    <div class="form-group">
                        <input
                            type="text"
                            className="p-2 m-2"
                            {...register("key", { required: true })}
                            required
                            class="form-control"
                            placeholder="Product key Should be unique."
                        />
                    </div> <br />

                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Add Product Details</label>
                        <textarea {...register("description", { required: true })} required class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div> <br />

                    <button class="btn btn-warning" type="submit">Add Service</button>
                    <Link to="/admin" class="btn btn-info" type="submit"> Admin</Link>
                </form>
            </div>
        </div>
    );
};

export default AddService;