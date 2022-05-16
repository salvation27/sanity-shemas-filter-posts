import React from 'react'
import { motion } from 'framer-motion';
import {aboutNumHover, titleAnimation} from '../../constants/animation'
import './About.css'
import { urlFor } from '../../client';


const AboutItem = ({item:{ title, description,imgUrl}}) => {
  return (
    <motion.span
      variant={(aboutNumHover, titleAnimation)}
      whileInView={titleAnimation.whileInView}
      whileHover={aboutNumHover.whileHover}
      // transition={{ duration: 0.3, type: "tween" }}
      className="about_card"
    >
      <img src={urlFor(imgUrl)} alt="" />
      <h2>{title}</h2>
      <span>{description}</span>
    </motion.span>
  );
};

export default AboutItem