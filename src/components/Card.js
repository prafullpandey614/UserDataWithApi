import React, { useState, useEffect } from "react";
import "./cardd.css";
import "./Loading.jsx";
import "./Header";
import img from "./giphy.webp";
import Loading from "./Loading.jsx";
function Card() {
  const [isDataLoaded, setIsDataLoaded] = React.useState(false);

  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data.data);
        let gagan = data.data;
        console.log(gagan);
        setUser(gagan);
        setIsDataLoaded(true);
      });
  };
  let timeout;

  function myFunction() {
    timeout = setTimeout(fetchData, 4000);
  }

  useEffect(() => {
    myFunction();
  }, []);

  return (
    //
    <>
      <div className="container">
        <div className="row">
          {isDataLoaded ? (
            user.map((data, id) => (
              <div className="col-md-4 ">
                <div className="card users" style={{ width: "18rem" }}>
                  <img
                    src={data.avatar}
                    className="card-img-top"
                    alt="..."
                    style={{ borderRadius: "24px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {data.first_name + " " + data.last_name}
                    </h5>
                    <p className="card-text">{data.email}</p>
                    <a href="#" className="btn btn-success btn-sm">
                      {"Follow"}
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>
               <img src={img} alt="" className="lod" />
              
             
              <h4 className="container text-center">Loading Profiles</h4>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;

{
  /* <div className="container">
        <div className="img">
            <img src="https://tse2.mm.bing.net/th?id=OIP.fn9h4Ts0wgQ9jXlIBtihmwHaLH&pid=Api&P=0&w=102&h=154" alt="" />
            <h3>Andrew Liyana</h3>
            <p>Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate odio odit doloribus illum unde magni optio blanditiis maxime nobis, tempore temporibus recusandae modi.</p>
        </div>
    </div> */
}
