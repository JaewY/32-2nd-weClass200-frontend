import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Product from "./Product";
import ProductSortButton from "./ProductSortButton";
import ProductListCarousel from "./ProductListCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 100px;
  display: inline-block;
  width: 100%;
  margin-top: 150px;
`;

const ProductSortButtons = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  gap: 10px;
  margin-bottom: 30px;
`;

const AllProduct = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-template-rows: auto;
  row-gap: 25px;
  column-gap: 20px;
`;

function ProductList() {
  const [productList, setProductList] = useState([]);

  const [offset, setOffSet] = useState(0);

  useEffect(() => {
    fetch(`http://10.58.7.33:8000/products?limit=${LIMIT}&offset=${offset}`)
      .then(res => res.json())
      .then(product => {
        setProductList(prev => [...prev, ...product.result]);
      });
  }, [offset]);

  window.onscroll = function () {
    window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight && setOffSet(prev => prev + 1);
  };

  return (
    <Wrapper>
      <ProductListCarousel />
      <ProductSortButtons>
        {ProductSortBtns.map(list => {
          return (
            <ProductSortButton
              title={list.title}
              key={list.id}
              query={list.query}
              setProductList={setProductList}
            />
          );
        })}
      </ProductSortButtons>
      <AllProduct>
        {productList.map((product, index) => {
          return (
            <Product
              key={index}
              id={product.id}
              contentName={product.content_name}
              creatorName={product.creator_name}
              thumbImg={product.thumb_img}
              discountCoupon={product.discount_coupon}
              likeAmount={product.like_amount}
              discountRate={product.discount_rate}
              f
              priceAmount={product.price_amount}
              month={product.month}
            />
          );
        })}
      </AllProduct>
    </Wrapper>
  );
}

export default ProductList;

const LIMIT = 5;
const ProductSortBtns = [
  {
    id: 1,
    title: "리뷰많은순",
    query: "review",
  },
  {
    id: 2,
    title: "찜많은순",
    query: "like",
  },
  {
    id: 3,
    title: "별점높은순",
    query: "star",
  },
  {
    id: 4,
    title: "최신순",
    query: "new",
  },
  {
    id: 5,
    title: "가격순",
    query: "price",
  },
];

const mockUpData = [
  {
    id: 1,
    content_name: "김코더의 뚝딱코딩",
    creator_name: "김코더",
    thumb_img:
      "https://images.unsplash.com/photo-1650853282913-9a3ecb60aa53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
    upload_date: 220510,
    price_amount: 50000, // int
    discount_rate: 30, // int
    discount_coupon: 300000, // int, 만원 단위로 해주세요(ex. 30000)
    month: 1, // 할부 개월 1~12 사이로 해주세요
    like_amount: 30, // int
    is_liked: false,
    status: "today", // "onepoint", "best" 추후 추가 예정
  },
  {
    id: 2,
    content_name: "김코더의 뚝딱코딩",
    creator_name: "김코더",
    thumb_img:
      "https://cdn.pixabay.com/photo/2021/11/06/16/13/greece-6773692_1280.jpg",
    upload_date: 220510,
    price_amount: 1000000, // int
    discount_rate: 50, // int
    discount_coupon: 10000, // int, 만원 단위로 해주세요(ex. 30000)
    month: 2, // 할부 개월 1~12 사이로 해주세요
    like_amount: 50, // int
    is_liked: false,
    status: "today", // "onepoint", "best" 추후 추가 예정
  },
  {
    id: 3,
    content_name: "김코더의 뚝딱코딩",
    creator_name: "김코더",
    thumb_img:
      "https://cdn.pixabay.com/photo/2022/05/04/09/13/bordeaux-7173548_1280.jpg",
    upload_date: 220510,
    price_amount: 100, // int
    discount_rate: 90, // int
    discount_coupon: 20000, // int, 만원 단위로 해주세요(ex. 30000)
    month: 3, // 할부 개월 1~12 사이로 해주세요
    like_amount: 900, // int
    is_liked: false,
    status: "today", // "onepoint", "best" 추후 추가 예정
  },
  {
    id: 4,
    content_name: "김코더의 뚝딱코딩",
    creator_name: "김코더",
    thumb_img:
      "https://cdn.pixabay.com/photo/2022/04/07/13/08/sheep-7117465_1280.jpg",
    upload_date: 220510,
    price_amount: 70000, // int
    discount_rate: 99, // int
    discount_coupon: 40000, // int, 만원 단위로 해주세요(ex. 30000)
    month: 72, // 할부 개월 1~12 사이로 해주세요
    like_amount: 70, // int
    is_liked: false,
    status: "today", // "onepoint", "best" 추후 추가 예정
  },
  {
    id: 5,
    content_name: "김코더의 뚝딱코딩",
    creator_name: "김코더",
    thumb_img:
      "https://cdn.pixabay.com/photo/2021/10/14/11/40/sea-6708858_1280.jpg",
    upload_date: 220510,
    price_amount: 30000, // int
    discount_rate: 5, // int
    discount_coupon: 50000, // int, 만원 단위로 해주세요(ex. 30000)
    month: 36, // 할부 개월 1~12 사이로 해주세요
    like_amount: 30, // int
    is_liked: false,
    status: "today", // "onepoint", "best" 추후 추가 예정
  },
];
