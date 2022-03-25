import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    
    const [services, setServices] = useState([]);
    
    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    const addOrder = (index)=> {
        const order = (services[index]);
        console.log(order);

        fetch(`http://localhost:5000/Addbooking`,{
            method: 'POST',
            headers:{"content-type":"application/json"},
            body:JSON.stringify(order),
        })

        .then(res => res.json())
        .then(data => {
            console.log(data);
            
        })
        
    }
    return (
        
       <div className="pizza-2 ">
            <div id="services" className="container text-center ">
            <h2 className="mt-5 text-color-danger card-name card-section">Special Feature</h2>
            <div className="row">
                {services.map((p, index)=>(
                    // <div className="col-lg-4 col-md-6 col-sm-12 card-group container ">
                    //     <div className="service text-center shadow review h-75">
                    //         <img className="image1 img-fluid w-50 user  " src={p?.img} alt=""/>
                    //         <div className="card-body">
                    //         <h5>{p?.title}</h5>
                    //         <p className="p-2 text-center">{p?.details}</p>
                    //         <p className="">{p?.price}</p>
                    //         <Link to="/customer">
                    //         <button onClick={() => addOrder(index)} className="btn22">ADD TO CART</button>
                    //         </Link>
                    //         </div>
                    //     </div>
                    // </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 card-group container pizza ">
                         <div class="card rounded shadow-sm border-0 pizza-card">
        <div class="card-body p-4"><img src={p?.img} alt="" class="img-fluid d-block mx-auto mb-1 image1 img-fluid w-50 "/>
          <h5 class="text-dark"> {p?.title}</h5>
          <p class="small text-muted font-italic">{p?.details}</p>
          <p className="">{p?.price}</p>
          <Link to="/customer">
                            <button onClick={() => addOrder(index)} className="btn22">ADD TO CART</button>
                         </Link>
         
        </div>
      </div>
                    </div>
                    
                ))}
            </div>
        </div>
       </div>
    );
};

export default Services;