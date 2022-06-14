import React, { useEffect } from "react";
import axios from "axios";
const Cloth = () => {
  
    const options = {
        method: 'GET',
        url: 'https://domainr.p.rapidapi.com/v2/register',
        params: {'mashape-key': 'undefined', domain: 'example.com', registrar: 'namecheap.com'},
        headers: {
          'X-RapidAPI-Key': '3390f56e6bmsha1c8b460301ca2fp191037jsn46a2f206875b',
          'X-RapidAPI-Host': 'domainr.p.rapidapi.com'
        }
      };
      

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return <div>Cloth</div>;
};

export default Cloth;
