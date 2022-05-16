import React,{useState,useEffect} from "react";
import { motion } from "framer-motion";
import { titleAnimation, emodziAnimation } from "../../constants/animation";
import { client,urlFor } from "../../client";
import './Header.css'

const Header = () => {

const [headerData,setHeaderData] = useState([])
const [headerDataNum,setHeaderDataNum] = useState([])
const [headerDataImage, setHeaderDataImage] = useState([]);


  useEffect(() => {
    const query = '*[_type == "header"]';
    client.fetch(query).then((data) => {
      setHeaderData(data[0]);
      setHeaderDataNum(data[0].nums);
      setHeaderDataImage(data[0].image);
    });
  }, []);

  // console.log("headerData", headerData);


  return (
    <div className="app_header">
      <motion.div
        variant={emodziAnimation}
        whileInView={emodziAnimation.whileInView}
        className="app__header_info"
      >
        <div className="app__header_badge" style={{ textAlign: "center" }}>
          <span>{headerData.emodji}</span>
        </div>
      </motion.div>
      <motion.div
        variant={titleAnimation}
        whileInView={titleAnimation.whileInView}
        className="app__header_info"
      >
        <h2 style={{ textAlign: "center" }}>{headerData.title}</h2>
        <span style={{ textAlign: "center", display: "block" }}>
          {headerData.description}
        </span>
        <span style={{ textAlign: "center", display: "block" }}>
           {
           headerData.propertyType ==='about' ? 'Эбоут': 'Другое'
           }
        </span>
      </motion.div>
      <motion.div
        whileInView={{
          // y:[-30,0],
          scale: [0, 1],
        }}
        transition={{ duration: 0.7, ease: "easeInOut", delayChildren: 0.5 }}
        className="app__header_num"
      >
        <ul>
          {headerDataNum.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
          {/* <li>1</li> */}
        </ul>
      </motion.div>
      <div className="container">
        <div className="foto_wrap">
          {headerDataImage.map((item, i) => (
            <img key={i} src={urlFor(item.asset._ref)} alt='' />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
