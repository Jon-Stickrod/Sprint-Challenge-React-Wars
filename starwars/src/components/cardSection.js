import React, {useState, useEffect } from 'react';
import axios from "axios";


const cardSection = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        axios
          .get(`https://swapi.py4e.com/api/people/`)
          .then(response => {
            console.log(response);
            setData(response.data);
          })
          .catch(error => {
            console.log("Sorry no star wars", error);
          });
      }, []);

};

export default cardSection;