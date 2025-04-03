//total col. is 12
import React, { useState } from 'react';
import ServiceAPI from  "./API/ServiceAPI";

const Services = () => {
    const [Servicedata, setServicedata] = useState(ServiceAPI)
  return (
    <>
    <section className="service-main-container">
        <div className="container service-container">
            <h1 className='main-heading text-center fw-bold'>How to Send Money</h1>
            <div className="row">

            {Servicedata.map((curElem) => {
// To import different title ,icon and 
const { id,logo, title, info } = curElem;
return (
  <>
<div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv" key={id}>
<i className={`fontclass-style ${logo}`}></i>
<h2 className="sub-heading">{title}</h2>
<p className='main-hero-para'>{info}</p>
</div>
</>
);
            })};
            </div>
        </div>
    </section>

    </>
  )
}

export default Services
