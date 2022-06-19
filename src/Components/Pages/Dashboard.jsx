import { Card, Col, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Dashboard = () => {
  const { Meta } = Card;
  const navigate = useNavigate();
  return (
    <DashboardWrap>
      <Row gutter={[30, 30]}>
        <Col xs={24} sm={12} md={12} lg={6} xl={6} xxl={6}>
          <Card
            hoverable
            style={{ width: 240 }}
            onClick={() => {
              navigate("/dashboard/beauty");
            }}
            cover={
              <img
                alt="example"
                src="https://cdn.theculturetrip.com/wp-content/uploads/2018/01/shutterstock_372453505.jpg"
              />
            }
          >
            <Meta
              title="Beauty products"
              // description=""
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6} xl={6} xxl={6}>
          <Card
            hoverable
            style={{ width: 240 }}
            onClick={() => {
              navigate("/dashboard/recipes");
            }}
            cover={
              <img
                alt="example"
                src="https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/27e868e06ffb49aeb558572a9187f56b.png"
              />
            }
          >
            <Meta
              title="Recipes"
              // description=""
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[30, 30]}>
        <Col>
          <h3>Shop By Store</h3>
        </Col>
      </Row>
      <Row gutter={[30, 30]}>
        <Col xs={24} sm={12} md={12} lg={6} xl={6} xxl={6}>
          <Card
            hoverable
            style={{ width: 240 }}
            onClick={() => {
              navigate("/dashboard/recipes");
            }}
            cover={
              <img
                alt="example"
                src="https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/2fe96fbb83cb4023aef32f209aa7c1c7.jpeg"
              />
            }
          >
            <Meta
              title="Cooking chef- Food Fever"
              // description=""
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6} xl={6} xxl={6}>
          <Card
            hoverable
            style={{ width: 240 }}
            onClick={() => {
              navigate("/dashboard/beauty");
            }}
            cover={
              <img
                alt="example"
                src="https://d3t32hsnjxo7q6.cloudfront.net/i/fb79e7facf701176d4113527c284613f_ra,w158,h184_pa,w158,h184.png"
              />
            }
          >
            <Meta
              title="Maybelline"
              // description=""
            />
          </Card>
        </Col>
      </Row>
    </DashboardWrap>
  );
};

export default Dashboard;

export const DashboardWrap = styled.div`
  padding: 30px;
  background-color: rgb(238, 238, 238);
  min-height: calc(100vh - 80px);

  h3 {
    font-weight: 700;
    font-size: 26px;
    color: #aaaaaa;
    margin: 20px 0;
  }
  .ant-card-cover img {
    height: 160px;
  }
  .ant-card {
    min-height: 200px;
  }
`;
