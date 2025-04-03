import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Service from './pages/Service';
import Error from './pages/Error';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/service" element={<Service />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;

{/* <Route path ="/" componenet={home}></Route> we can write this way if we are using switch in react*/}
 {/* we put all our componenet in home page */}
    {/* url known as route whenevr we add path it it will show given component */}
    {/* it getting confuse cuz of / => not able to go other pg so add exact */}

    // <Route>: Route is the child component that renders a specific UI component when the URL matches the specified path.

    //<Switch> component is used to render components only when the path will be matched. and make sure visit one page at a time