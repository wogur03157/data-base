import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Body, BodyText, BodyWrap, Container, Head, HeadText, Main } from './style'
const TablePage = () => {
  const[users, setUsers] = useState([])
  useEffect(()=>{
    axios.post('https://api.mever.me:8080/paymentList', {
    }).then((data)=>{
      setUsers(data.data)
    });

    // console.log(users);
    
    // fetch('https://api.mever.me:8080/paymentList')
    //   .then(response => response.json())
    //   .then((data)=>{
    //     console.log(data);
    //   })
  }, [users])
  return (
    <Container>
      <Main>
        {users.length}
        <Head>
          <HeadText>일자</HeadText>
          <HeadText>이름</HeadText>
          <HeadText>이메일</HeadText>
          <HeadText>전화번호</HeadText>
          <HeadText>설문 조사 결과</HeadText>
          <HeadText>상품명</HeadText>
        </Head>
        <BodyWrap>
          {users.map((user)=>(
            <Body key={user.id}>
              <BodyText>{user.regdate}</BodyText>
              <BodyText>{user.name}</BodyText>
              <BodyText>{user.email}</BodyText>
              <BodyText>{user.phone}</BodyText>
              <BodyText>{user.dcrp}</BodyText>
              <BodyText>{user.orderName}</BodyText>
            </Body>
          ))}
        </BodyWrap>
        

      </Main>
    </Container>
  )
}

export default TablePage
