import React from 'react';
import './Section1.css';

import section1 from './../../../images/sec-1.png';
import section2 from './../../../images/sec-22-removebg-preview.png';
import section3 from './../../../images/sec-33-removebg-preview.png';

const Section1 = () => {
    return (
        <div className="section  ">
            <h1 className="red ">Fresh Pizza. Delivered.</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4 container mx-auto mt-5">
            
            <div class="col">
              <div class=" h-100">
                <img src={section1} class="card-img-top images1" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Choose Pizza</h5>
                  <p class="card-text">User generated content in will have multiple touchpoints for offshor.</p>
                </div>
               
              </div>
            </div>
            <div class="col">
              <div class=" h-100 ">
                <img src={section2} class="card-img-top images1" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Delivery or Takeaway</h5>
                  <p class="card-text">Nanotechnology immersion along the information will close the loop.</p>
                </div>
               
              </div>
            </div>
            <div class="col">
              <div class=" h-100">
                <img src={section3} class="card-img-top images1" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Enjoy Pizza</h5>
                  <p class="card-text">Praesent interdum mollis neque. In along egestas nulla eget pede.</p>
                </div>
               
              </div>
            </div>
          </div>
        </div>
    );
};

export default Section1;