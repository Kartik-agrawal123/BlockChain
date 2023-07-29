import React, { useEffect, useState } from 'react';
import Data from './Data';
import axios from 'axios';
import { useAsyncValue } from 'react-router-dom';

const options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    'tiers[0]': '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
  },
  headers: {
    'X-RapidAPI-Key': 'f4c1df6375msh4dcc8ab32214294p142d29jsn9172a0f2f74d',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
};
let arr = [];
const Coins = () => {
  const[user,setUser] = useState([]);
  useEffect(()=>{
    async function fetchData(){
      const response = await axios.request(options);
      console.log(response.data);
    const allIndex = response.data.data.coins.map((val,index)=>{
        return index;
      })
      arr = allIndex.concat();
      setUser(response.data.data.coins);
    }
    fetchData();
  },[])
  
  return (
    <>
      {arr.map((val,index)=>(
      <Data iconUrl={user[index].iconUrl} name = {user[index].name} price = {user[index].price} symbol = {user[index].symbol} />
      ))}
    </>
  )

}

export default Coins;