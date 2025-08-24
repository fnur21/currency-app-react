import React, { useState } from 'react'
import axios from "axios"; 
import '../css/currency.css';  //  Stil dosyamızı dahil ediyoruz
import { MdArrowCircleRight } from "react-icons/md";





let BASE_URL="https://api.freecurrencyapi.com/v1/latest";

let API_KEY ="fca_live_XTKUyGLFhHwAQj6Vk9kwKGeESWWQ8TnSY5W7gQnb";


function Currency() {

const [amount, setAmount] =useState(0);
const [fromCurrency,setFromCurrency]=useState('USD');
const [toCurrency,setToCurrency]=useState('TRY');
const [result,setResult]=useState(0);

const exchange = async () => {
// console.log(fromCurrency);
// console.log(amount);
// console.log(toCurrency);

const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
const result=(response.data.data[toCurrency]) * amount;
setResult(result);
}


  return (
    <div className='currency-div'> 
      
      {/* Başlık */}
      <h3 className='baslık'>DÖVİZ KURU UYGULAMASI</h3>
      
      {/*  Form alanı */}
      <div className="currency-form">
        
        {/*  Soldaki input + select grubu */}
        <div className="currency-group">
          {/* Kullanıcı miktar giriyor */}
          <input 
          value={amount}
          onChange={(e)=> setAmount(e.target.value)}
            type="number" 
            className='amount' 
            placeholder="Miktar" 
          />
          
          {/* Çevrilecek para birimi seçiliyor */}
          <select onChange={(e)=> setFromCurrency(e.target.value)} className='from-currency-option'>
            <option>USD</option>
            <option>EUR</option>
            <option>TRY</option>
          </select>
        </div>
        
        {/*  Ortadaki ok ikonu */}
        <MdArrowCircleRight className="arrow-icon" />

        {/*  Sağdaki select + result grubu */}
        <div className="currency-group">
         

          {/* Çeviri sonucu burada gösterilecek */}
          <input value={result} onChange={(e)=> setResult(e.target.value)} 
            type="number" 
            className='result' 
            placeholder="Sonuç" 
            readOnly 
          />

           {/* Hedef para birimi seçiliyor */}
          <select  onChange={(e)=> setToCurrency(e.target.value)}  className='to-currency-option'>
            
            <option>TRY</option>
            <option>EUR</option>
            <option>USD</option>
          </select>
        </div>
      </div>

      {/* Çevir Butonu */}
      <button  onClick={exchange}
      className='button'>ÇEVİR</button>

    </div>
  )
}

export default Currency;
