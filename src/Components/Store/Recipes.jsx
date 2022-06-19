import { Card, Col, Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchFilter from "./SearchFilter";

export const ReadMore = ({ children, len }) => {
  const text = children || "";
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p>
      {isReadMore ? text.slice(0, len) : text}
      {text?.length > len && (
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      )}
    </p>
  );
};

const Recipes = () => {
  const { Meta } = Card;
  const [storeData, setStoreData] = useState([]);
  const [rawData, setRawData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/list",
    params: { from: "0", size: "20", tags: "under_30_minutes" },
    headers: {
      "X-RapidAPI-Key": "8d4b99f80emsh7b77fb4099084bep11175bjsnca454bc0a5ec",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.results, "gaeuryfau");
        setStoreData(response.data.results);
        setRawData(response.data.results);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const searchData = (val) => {
    console.log(val, "beauty compo");
    setStoreData(val);
  };
  console.log(storeData, "storeData>>");
  return (
    <RecipesWrap>
      {isLoading ? (
        <div
          style={{
            padding: "30px",
          }}
        >
          <span>Loading...</span>
        </div>
      ) : (
        <>
          <Row justify="space-between" className="search__bar">
            <Col xs={24} sm={12} md={10} lg={10} xl={8} xxl={8}>
              <SearchFilter
                data={storeData}
                searchDataResult={searchData}
                rawData={rawData}
              />
            </Col>
          </Row>
          {storeData.length ? (
            <Row gutter={[30, 30]}>
              {storeData.map((data, index) => (
                <Col key={index} xs={24} sm={12} md={12} lg={6} xl={6} xxl={6}>
                  <Card
                    hoverable
                    // style={{ width: 240 }}
                    cover={<img alt="example" src={data.thumbnail_url} />}
                  >
                    <Meta
                      title={data.name}
                      description={
                        <ReadMore len="200">{data.description}</ReadMore>
                      }
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <h2>No Data Found!!</h2>
          )}
        </>
      )}
    </RecipesWrap>
  );
};

export default Recipes;

export const RecipesWrap = styled.div`
  padding: 30px;
  .search__bar {
    margin-bottom: 25px;
  }
  .read-or-hide {
    color: #000000;
  }
  .ant-card-cover img {
    max-height: 192px;
  }
  .ant-card {
    min-height: 390px;
  }
`;
