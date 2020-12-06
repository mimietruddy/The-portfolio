import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <>

      <div className="smartdisplay">
        <main role="main" className="content inner cover mt-4 p-4 d-md-flex flex-md-row">
          <div className="landing_image flex-md-grow-1 order-md-2 p-4">

          </div>
          <div className="landing_text fadeIn flex-md-grow-1 p-3 text-md-left">
            <h1 className="cover-heading p-1">Blogger</h1>

            <p className="p-2">
              In search of a good blogger, look no further i have got you covered. click on the button to learnmore about my work{" "}
            </p>
            <p className="lead pl-md-3">
              <Link to="/Contactme" className="btn btn-lg btn-secondary">
                contact Me Now!
        </Link>
            </p>
          </div>
        </main>
      </div>

    </>
  );
};

export default HomePage;