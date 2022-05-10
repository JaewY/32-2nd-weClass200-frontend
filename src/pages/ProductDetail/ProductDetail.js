import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductDetailMain from "./ProductDetailMain/ProductDetailMain";
import ProductDetailAside from "./ProductDetailAside/ProductDetailAside.js";

const ProductDetail = () => {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    fetch("http://10.58.6.184:8000/products/1/1", {
      method: "GET",
    })
      .then(res => res.json())
      .then(res => setDetail(res.product));
  }, []);

  return (
    <Wrapper>
      <ProductDetailMain detail={detail} setDetail={setDetail} />
      <ProductDetailAside detail={detail} />
    </Wrapper>
  );
};

export default ProductDetail;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 150px;
`;
