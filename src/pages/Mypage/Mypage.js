import React from "react";
import styled from "styled-components";

function Mypage() {
  return (
    <Wrapper>
      <MypageMenuList>
        <UserInfo>
          <p>송재관</p>
          <p>abc@gmail.com</p>
        </UserInfo>

        <LevelTitle>
          <p>내 등급</p>
        </LevelTitle>
        <LevelBox>
          <p>Lv.Amateur</p>
          <p>혜택보기</p>
        </LevelBox>

        <MyInfoTitle>내 정보</MyInfoTitle>
        <MyInfoList>
          <p>내 캐시</p>
          <p>내 포인트</p>
          <p>내 쿠폰</p>
          <p>내 응원</p>
          <p>주문 내역</p>
          <p>내 후기</p>
        </MyInfoList>

        <MembershipTitle>멤버쉽</MembershipTitle>
        <MembershipList>
          <p>101 Prime</p>
          <p>Money+</p>
        </MembershipList>

        <MenuTitle>메뉴</MenuTitle>
        <MenuList>
          <p>친구 초대하고 30,000원 쿠폰 받기</p>
          <p>클래스 101 앱 설치하기</p>
          <p>크리에이터 지원하기</p>
          <p>로그아웃</p>
        </MenuList>
      </MypageMenuList>

      <MypageContent>
        <MypageContentList>
          <LikeTitle>찜하기</LikeTitle>
          <LikeCotentBox />
        </MypageContentList>

        <ViewTitle>내가 본 상품</ViewTitle>
        <LikeCotentBox />

        <PurchaseTitle>구매내역</PurchaseTitle>
        <LikeCotentBox />
      </MypageContent>
    </Wrapper>
  );
}

export default Mypage;

const Wrapper = styled.div`
  display: flex;
  padding-top: 13%;
`;

const MypageMenuList = styled.div`
  padding-left: 130px;
  margin-bottom: 10px;
`;

const UserInfo = styled.div`
  padding-bottom: 60px;
  & :first-child {
    font-size: 28px;
    font-weight: bold;
    padding-bottom: 10px;
  }
  & :last-child {
    font-size: 12px;
    color: gray;
  }
`;

const LevelTitle = styled.div`
  font-weight: bold;
  padding-bottom: 20px;
  /* & :nth-child(2) {} */
`;

const LevelBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  width: 280px;
  height: 80px;
  background-color: #00b031;
  color: white;
  border: none;
  font-size: 12px;
  letter-spacing: 1px;
  & :first-child {
    font-weight: bold;
  }
`;

const MyInfoTitle = styled.div`
  font-weight: bold;
  padding-bottom: 20px;
  margin-top: 20px;
`;

const MyInfoList = styled.div`
  font-size: 14px;
  padding-bottom: 10px;
  line-height: 24px;
  & :first-child {
    cursor: pointer;
  }
`;

const MembershipTitle = styled.div`
  font-weight: bold;
  padding-bottom: 10px;
  margin-top: 20px;
`;

const MembershipList = styled.div`
  font-size: 14px;
  padding-bottom: 10px;
  line-height: 24px;
`;

const MenuTitle = styled.div`
  font-weight: bold;
  padding-bottom: 10px;
  margin-top: 20px;
`;

const MenuList = styled.div`
  font-size: 14px;
  padding-bottom: 10px;
  line-height: 24px;
`;

const MypageContent = styled.div`
  padding-left: 170px;
  padding-top: 100px;
`;

const MypageContentList = styled.div``;

const LikeTitle = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 15px;
  padding-bottom: 20px;
`;

const LikeCotentBox = styled.div`
  display: flex;
  flex-direction: row;
  border: none;
  width: 150px;
  height: 150px;
  background-color: #d8d8d8;
`;

const ViewTitle = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 15px;
  padding-top: 60px;
  padding-bottom: 20px;
`;

const PurchaseTitle = styled.div`
  font-weight: bold;
  font-size: 15px;
  padding-top: 60px;
  padding-bottom: 20px;
`;
