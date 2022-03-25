// import './Admin.css';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';




const Admin = () => {

    // const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [details, setDetails] = useState([]);
    const [IsDelete, setIsDelete] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/myOrder')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDetails(data)
            })
    }, [orders])


    //handleDelete
    const handleDelete = (_id) => {
        console.log(_id);
        fetch(`http://localhost:5000/deleteOrdersByUser/${_id}`, {
            method: 'DELETE',
            headers: { "content-type": "application/json" }
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    setIsDelete(true);
                } else {
                    setIsDelete(false)
                }
            })
    }


    // handle Updatee collection product..................... 
    const handleUpdate = (id) => {
        console.log(id);
        // useEffect(()=>{
        fetch(`http://localhost:5000/adminPannel/approved/${id}`, {
            method: 'PUT',
            headers: { "content-type": "application/json" },
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    let NewOrders = [];
                    orders.forEach(order => {
                        if (order._id === id) {
                            order.status = 'Approved';
                        }
                        NewOrders.push(order);
                    })
                    setOrders(NewOrders);
                }
            })
        // },[]);    
    }



    return (
        <div>
            <h2>Admin Dashbord</h2>
            <div className="pt-5 pb-5 container">
                <h2> Total confirm : {details.length}</h2>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>City</th>
                            <th>Phone</th>
                            <th>Travel ID</th>
                            <th>Event</th>
                            <th>Approval</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            details.map((p, index) => (
                                <tr>
                                    <th scope="row">1</th>
                                    <td>{p?.name}</td>
                                    <td>{p?.city}</td>
                                    <td>{p?.phone}</td>
                                    <td>{p?._id}</td>
                                    <td><Button onClick={() => handleDelete(p._id)} variant="danger">Delete</Button>{' '}</td>
                                    <td> <Button onClick={() => handleUpdate(p._id)} variant="danger">Approved</Button>{' '}</td>
                                    <td>{p?.status}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Admin;