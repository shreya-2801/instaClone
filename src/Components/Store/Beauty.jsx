import { Select, Modal, Button, Row, Col, Card, message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchFilter from "./SearchFilter";
import { GrCart } from "react-icons/gr";

const Beauty = () => {
  const { Meta } = Card;
  const [beautyData, setBeautyData] = useState([]);
  const [rawData, setRawData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { Option } = Select;
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("item")) || []
  );
  useEffect(() => {
    axios
      .get(
        "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      )
      .then(function (response) {
        setIsLoading(false);
        setBeautyData(response.data);
        setRawData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  function sortObj(obj) {
    let priceArr = [];
    let sortedObj = [];
    obj.forEach((num) => {
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
    const sorted_data = sortObj(beautyData);
    console.log(sorted_data);

    value === "high"
      ? setBeautyData(sorted_data.flat().reverse())
      : setBeautyData(sorted_data.flat());
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showModal = (id) => {
    const show_data = beautyData.find((item) => item.id === id);
    setModalData(show_data);
    setIsModalVisible(true);
  };
  const searchData = (val) => {
    setBeautyData(val);
  };
  const handleOrder = () => {
    let id__array = [];
    cartData.forEach((element) => {
      id__array.push(element.id);
    });
    if (!id__array.includes(modalData.id)) {
      const updatedData = [...cartData, modalData];
      setCartData(updatedData);
      localStorage.setItem("item", JSON.stringify(updatedData));
      setIsModalVisible(false);
    } else {
      message.warning("Item is already in cart");
    }
  };
  return (
    <>
      {isLoading ? (
        <div
          style={{
            padding: "30px",
          }}
        >
          <span>Loading...</span>
        </div>
      ) : (
        <BeautyCompoWrap>
          <Row justify="space-between" className="search__bar">
            <Col xs={24} sm={12} md={10} lg={10} xl={8} xxl={8}>
              <SearchFilter
                data={beautyData}
                searchDataResult={searchData}
                rawData={rawData}
              />
            </Col>
            <Col xs={24} sm={10} md={8} lg={6} xl={4} xxl={4}>
              <Select placeholder="Sort by price" onChange={handleChange}>
                <Option value="high">price : high-low</Option>
                <Option value="low">price : low-high</Option>
              </Select>
            </Col>
          </Row>
          {beautyData.length ? (
            <Row gutter={[30, 30]}>
              {beautyData.map((data, index) => (
             <Col key={index} xs={24} sm={12} md={6} lg={4} xl={4} xxl={4}>
                  <Card
                    hoverable
                    onClick={() => showModal(data.id)}
                    cover={
                      <img
                        alt="example"
                        src={data?.image_link ? data?.image_link : ""}
                      />
                    }
                  >
                    <Meta title={data.name} description={`$ ${data.price}`} />
                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <h2>No Data Found!!</h2>
          )}
        </BeautyCompoWrap>
      )}

      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <ModalCardWrap>
          <Card
            cover={
              <img alt="example" src={modalData ? modalData.image_link : ""} />
            }
          >
            <Meta
              title={modalData ? modalData.name : ""}
              description={modalData ? modalData.description : ""}
            />
            <h4>${modalData ? modalData.price : ""}</h4>
            <Button
              onClick={() => {
                handleOrder();
              }}
            >
              Add to cart <GrCart />
            </Button>
          </Card>
        </ModalCardWrap>
      </Modal>
    </>
  );
};

export default Beauty;

export const ModalCardWrap = styled.div`
  .ant-card-cover img {
    height: 360px;
  }
  .ant-card {
    min-height: 200px;
  }
  h4 {
    margin: 15px 0;
    font-size: 26px;
    color: #777777;
  }
  .ant-btn {
    border: none;
    margin: 0px 12px;
    cursor: pointer;
    user-select: none;
    touch-action: manipulation;
    position: relative;
    background-color: #cbcbcb;
    color: #777777;
    font-size: 15px;
    line-height: 22px;
    font-weight: 600;
    height: 40px;
    border-radius: 24px;
    padding: 8px 12px;
    width: 120px;
    :hover {
      color: #777777;
      text-decoration: none;
      background: #aaaaaa;
    }
    svg {
      margin-left: 10px;
    }
  }
`;
export const BeautyCompoWrap = styled.div`
  padding: 30px;
  .search__bar {
    margin-bottom: 25px;
  }
  .ant-card {
    min-height: 390px;
  }
  .ant-card-cover img {
    max-height: 192px;
  }
  .ant-card-meta-title {
    white-space: pre-line;
  }

  .ant-select {
    width: 100%;
  }
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    background-color: #cbcbcb;
    border-radius: 10px;
  }
  .ant-select-selection-placeholder {
    color: #777;
  }
`;
