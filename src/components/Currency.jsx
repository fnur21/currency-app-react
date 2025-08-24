import React from 'react'
import '../css/currency.css';  //  Stil dosyamızı dahil ediyoruz
import { MdArrowCircleRight } from "react-icons/md";

function Currency() {
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
            type="number" 
            className='amount' 
            placeholder="Miktar" 
          />
          
          {/* Çevrilecek para birimi seçiliyor */}
          <select className='from-currency-option'>
            <option>USD</option>
            <option>EUR</option>
            <option>TL</option>
          </select>
        </div>
        
        {/*  Ortadaki ok ikonu */}
        <MdArrowCircleRight className="arrow-icon" />

        {/*  Sağdaki select + result grubu */}
        <div className="currency-group">
         

          {/* Çeviri sonucu burada gösterilecek */}
          <input 
            type="number" 
            className='result' 
            placeholder="Sonuç" 
            readOnly 
          />

           {/* Hedef para birimi seçiliyor */}
          <select className='to-currency-option'>
            <option>TL</option>
            <option>EUR</option>
            <option>USD</option>
          </select>
        </div>
      </div>

      {/* Çevir Butonu */}
      <button className='button'>ÇEVİR</button>

    </div>
  )
}

export default Currency;
