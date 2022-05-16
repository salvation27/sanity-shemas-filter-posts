import React, { useState, useEffect } from "react";
import "./About.css";
import { motion } from "framer-motion";
import { titleAnimation, aboutNumHover } from "../../constants/animation";
import {  client } from "../../client";
import AboutItem from "./AboutItem";

const aboutArr = [1, 2, 3, 4, 5, 6];

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => setAbouts(data));
  }, []);


  // console.log("abouts", abouts);


  return (
    <div className="app_about">
      <div className="container">
        <motion.div
          variant={titleAnimation}
          whileInView={titleAnimation.whileInView}
          className="app__header_info"
        >
          <h2 style={{ textAlign: "center" }}>Title About</h2>
        </motion.div>
        <div className="about_map_wrap">
          {abouts.map((item) => <AboutItem key={item._id} item={item} />)}
        </div>
      </div>
    </div>
  );
};

export default About;
