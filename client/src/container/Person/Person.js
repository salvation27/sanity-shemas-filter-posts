import React,{useState,useEffect} from 'react'
import { client } from '../../client';

const Person = () => {
      const [person, setPerson] = useState([]);

      useEffect(() => {
        const query = '*[_type == "person"]';
        client.fetch(query).then((data) => setPerson(data));
      }, []);

    //   console.log(person);

  return (
    <div>Person</div>
  )
}

export default Person