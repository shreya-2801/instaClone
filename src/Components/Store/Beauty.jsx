import { Select, Modal } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";


import { BlogWrap } from "../Style/Style";
import useFetch from "../UseFetch";

const Beauty = () => {
  const [beautyData, setBeautyData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState();
  const { Option } = Select;
  const {data,loading} = useFetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline");

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
  //     )
  //     .then(function (response) {
  //       console.log(response.data,"beauty")

  //       setBeautyData(response.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, []);

  function sortObj(obj) {
    let priceArr = [];
    let sortedObj = [];
    obj.map((num) => {
      priceArr.push(Number(num["price"]));
    });

    while (priceArr.length > 0) {
      let minIndex = priceArr.indexOf(Math.min(...priceArr));
      priceArr.splice(minIndex, 1);
      sortedObj.push(obj.splice(minIndex, 1));
    }

    return sortedObj;
  }

  const handleChange = (value) => {
    const data = sortObj(beautyData);
   

    value === "high"
      ? setBeautyData(data.flat().reverse())
      : setBeautyData(data.flat());
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showModal = (id) => {
    const data = beautyData.find((item) => item.id === id);
    setModalData(data.description);
    setIsModalVisible(true);
  };

  return (
    <>
      <Select
        placeholder="Sort by price"
        style={{
          width: "200px",
        }}
        onChange={handleChange}
      >
        <Option value="high">price : high-low</Option>
        <Option value="low">price : low-high</Option>
      </Select>
      <br />
      <br />
      {beautyData.map((data, index) => {
        return (
          <BlogWrap key={index} style={{ width: "25rem" }}>
            <h1>{data.name}</h1>
            <span>
              {data.description.slice(0, 125)}
              <a onClick={() => showModal(data.id)}> Read more...</a>
            </span>{" "}
            <h4>${data.price}</h4>
            <img
              src={data.image_link}
              alt="icons"
              style={{ height: "100px", width: "100px" }}
            />
          </BlogWrap>
        );
      })}
      <Modal
        title="Read Description"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <span>{modalData}</span>{" "}
      </Modal>
    </>
  );
};

export default Beauty;
