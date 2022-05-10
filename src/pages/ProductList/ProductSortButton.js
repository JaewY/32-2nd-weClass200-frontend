import { React, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

const ProductSortBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  padding: 10px 15px;
  background-color: white;
  border: 2px solid rgb(229, 229, 229);
  border-radius: 10px;
  font-weight: 600;

  &:hover {
    background-color: black;
    color: white;
    transform: scale(1.2);
  }
`;

const ProductSortButton = ({ title, query, setProductList }) => {
  const navigate = useNavigate();

  // 통신할때 쓸것

  // const location = useLocation();

  // 백이랑 통신할것

  // useEffect(() => {
  //   fetch("http://proudct${location.search}")
  //     .then(res => res.json())
  //     .then(data => setProductList(data));
  // }, [location.search]);

  const GoToQuery = query => {
    const queryString = `?sort=${query}`;
    navigate(queryString);
  };

  return (
    <ProductSortBtn
      onClick={() => {
        GoToQuery(query);
      }}
    >
      {title}
    </ProductSortBtn>
  );
};

export default ProductSortButton;
