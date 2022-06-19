import React, { useEffect, useState } from "react";
import { Input } from "antd";
import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";
const SearchFilter = ({ data, searchDataResult, rawData }) => {
  const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [delay, value]);

    return debouncedValue;
  };

  const [searchData, setSearchData] = useState("");
  const searchValue = useDebounce(searchData, 1000);
  const [newData, setNewData] = useState([]);
  const { Search } = Input;
  let arr = [];

  const filterData = () => {
    newData.forEach((i) => {
      console.log(i, "i");
      if (searchValue) {
        if (i.name.toLowerCase().includes(searchValue.toLowerCase())) {
          arr.push(i);
        } else if (
          i.product_type
            ? i.product_type.toLowerCase() === searchValue.toLowerCase()
            : ""
        ) {
          arr.push(i);
        } else {
          searchDataResult([]);
        }
      }
    });
  };

  useEffect(() => {
    setNewData(data);
    filterData();

    if (arr.length) {
      searchDataResult(arr);
    }
    if (searchValue.trim().length === 0) {
      searchDataResult(rawData);
    }
  }, [searchValue]);

  return (
    <SearchFilterWrap>
      <Search
        prefix={<BiSearchAlt2 />}
        placeholder="Search products,stores and recipes"
        allowClear
        size="large"
        onChange={(e) => {
          setSearchData(e.target.value);
        }}
      />
    </SearchFilterWrap>
  );
};

export default SearchFilter;

const SearchFilterWrap = styled.div`
  .ant-input-search .ant-input-group .ant-input-affix-wrapper:not(:last-child) {
    border-radius: 10px;
    background: #cbcbcb;
  }
  .ant-input-group-addon {
    display: none;
  }
  .ant-input-group > .ant-input-affix-wrapper:not(:last-child) .ant-input {
    background: #cbcbcb;
  }
  input::-webkit-input-placeholder,
  .ant-input-prefix {
    color: #777;
  }
  .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
    border-color: #777777;
  }
`;
