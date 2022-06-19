import { Button, Card, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Cart = () => {
  const { Meta } = Card;
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("item")) || []
  );
  const [datas, setData] = useState([]);
  useEffect(() => {
    const data = localStorage.getItem("item");
    if (data) {
      setCartData(JSON.parse(data));
    }
  }, [datas]);
  const deleteHandler = (id) => {
    const data = cartData.filter((item) => {
      return id !== item.id;
    });
    setData(data);
    localStorage.setItem("item", JSON.stringify(data));
  };

  return (
    <CartCompoWrap>
      {cartData.length ? (
        <Row gutter={[30, 30]}>
          {cartData.map((data, index) => (
            <Col key={index} xs={24} sm={8} md={8} lg={6} xl={4} xxl={6}>
              <Card
                hoverable
                cover={
                  <img
                    alt="example"
                    src={data?.image_link ? data?.image_link : ""}
                  />
                }
              >
                <Meta title={data.name.slice(0, 40)} />
                <h4>${data.price}</h4>
                <Button
                  onClick={() => {
                    deleteHandler(data.id);
                  }}
                >
                  Remove
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <h2>Cart is empty!!</h2>
      )}
    </CartCompoWrap>
  );
};

export default Cart;

export const CartCompoWrap = styled.div`
  padding: 30px;
  h4 {
    margin: 15px 0;
    font-size: 26px;
    color: #777777;
  }
  .search__bar {
    margin-bottom: 25px;
  }
  .ant-card {
    min-height: 300px;
  }
  .ant-card-cover img {
    max-height: 150px;
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
  .ant-btn {
    border: none;
    margin: 15px 0px;
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
  }
`;
