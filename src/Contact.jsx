import React,{ useState } from "react";

const Contact = () => {
  const [userData , setUserData] = useState({
    FirstName: "" ,         //cuz its object so we leave it alone
    LastName: "" ,
    Phone: "" ,
    address: "" ,
    email: "" ,
    message: "" ,
  });

  //without this we wont be abe to write anything
  let name,value;

  const postUserData = (event) => {
name = event.target.name;
value = event.target.value;
setUserData({ ...userData, [name]: value});
  };

//connect with firebase
  const submitData = async (event) => {
event.preventDefault();
const { FirstName, LastName , Phone , address , email, message } = userData;

//so we don't save empty file
if( FirstName && LastName && Phone && address && email && message){
// ------------------


const res = fetch(
  "https://reactfirebase-f90c9-default-rtdb.firebaseio.com/userDataRecord.json",

  {
    method:"POST",
    headers:{
      "Content-type":"application/json",
    },
    body:JSON.stringify({
      FirstName,
       LastName ,
        Phone ,
        address ,
         email,
         message,
    }),
  }
);

//to save update data in firebase
if (res){
  setUserData({
     FirstName,
    LastName ,
     Phone ,
     address ,
      email,
      message,
    });
    alert("data stored");
  }else{
      alert("fill the data");
    }
  }else{
    alert("fill the data");
  }
  };

  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Connect With Our <br />
                    Sales Teams
                  </h1>
                  <p className="main-hero-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore ea iure aperiam autem sapiente?
                  </p>

                  <figure>
                    <img
                      src="./image/contact.jpeg"
                      alt="contactusimg"
                      className="img-fluid"
                    />
                  </figure>
                </div>
                {/* form section */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="FirstName"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                          value={userData.FirstName}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="LastName"
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                          value={userData.LastName}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                        type="text"
                          name="Phone"
                          id=""
                          className="form-control"
                          placeholder="Phone Number"
                          value={userData.Phone}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Email ID"
                          value={userData.email}
                          onChange={postUserData}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 contact-input-feild">
                      <input
  type="text"
  name="address"
  className="form-control"
  placeholder="Add Address"
  value={userData.address}
  onChange={postUserData}
  style={{
    zIndex: 100,
    position: "relative",
    backgroundColor: "white"
  }}
/>
                      </div>
                    </div>
                     <div className="row">
                      <div className="col-12 ">
                        <input type="text"
                         name="message"
                          id=""
                         className="form-control"
                        placeholder="Enter your msg"
                        value={userData.message}
                        onChange={postUserData}
                         />
                      </div>
                    </div>

                    <div className="form-check form-checkbox-style">
  <input className="form-check-input"
   type="checkbox"
    value="" id="flexCheckChecked"
      />
  <label
   className="form-check-label main-hero-para">
 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dolore?
  </label>
</div>
<button type="submit"
 className="btn btn-style w-100"
 onClick={submitData}>submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
