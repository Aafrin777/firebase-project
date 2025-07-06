//To import API Data from workAPI we need to use Hook useState 
import React , { useState } from 'react'
import workAPI from './API/workAPI.js';

const Workapi = () => {
const [workData, setworkData] = useState(workAPI);
console.log(workData);

  return (
    <>
    <section>
     <div className="work-container container">
<h1 className="main-heading text-center">How Does it work</h1>
{/* TO import API Data */}
<div className="row">
{workData.map((curElem) => {

    // To import different title ,icon and 
    const {id ,logo, title ,info} = curElem;
return(
    <>
<div className="col-12 col-lg-4 text-center work-container-subdiv" key={id}>
<i className={`fontclass-style ${logo}`}></i>
<h2 className='sub-heading'>{title}</h2>
<p className='main-hero-para w-100'>{info}</p>
</div>
</>
);
})}

</div>
     </div>
        </section> 
    </>
  )
}

export default Workapi
