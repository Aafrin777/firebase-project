import React from 'react'

const Header = () => {
  return (
    <>
      <header>
        <section className='container main-hero-container'>
          <div className="row">

            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start order-lg-first order-last">
<h1 className="display-2">
  Seamless Online Payments <br /> Made Simple for You
</h1>
<p className="main-hero-para">
  Experience fast, secure, and hassle-free transactions—anytime, anywhere. Designed to make your digital payments effortless.
</p>
<h3>Get early access today</h3>


            <div className="input-group mt-3">
              <input
              type="text"
              className='rounded-pill w-75 w-lg-75 me-3 p-2 form-control-text' placeholder='Enter your text' />

              <div className="input-group-button">Get it Now</div>
            </div>
          </div>

          {/* main header right side------- */}
          <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images order-md-first order-sm-first">
           {/* md => medium device sm => small device------- */}

<img src="./image/img1.jpg" alt="heroimg"
className='img-fluid' />

<img src="./image/img2.webp" alt="heroimg"
className='img-fluid main-hero-img2' />
</div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
