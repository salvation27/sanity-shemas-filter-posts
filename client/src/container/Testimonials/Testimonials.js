import React, { useState, useEffect } from "react";
import { client,urlFor} from "../../client";

const Testimonials = () => {
  const [testiData, setTestiData] = useState({});
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    client.fetch(query).then((data) => {
      setTestiData(data[0]);
      setReviews(data[0].reviews);
    });
  }, []);

  // console.log("testiData", testiData);

// console.log("reviews", reviews);
  return (
    <div className="test_app">
      <div className="container">
        <h2 style={{ textAlign: "center", textDecoration: "underline" }}>
          {testiData.name}
        </h2>
        <h3 style={{ textAlign: "center" }}>{testiData.company}</h3>
        {/* <img src={urlFor(testiData.imgUrl)} alt="" /> */}
        <div className="testi_wrap dflex jcsb">
          {reviews.map((item, i) => {
            return (
              <div key={i}>
                <div>{item.reviewName}</div>
                <div>{item.reviewPrice}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
