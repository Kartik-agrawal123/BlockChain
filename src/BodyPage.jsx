import React from 'react';

const BodyPage = () => {
  return (
    <>
      <div className='page'>
        <div className='aside'>
          <p>PK194-ABI
            San Francisco</p>
          <img src="/images/uintyimg.png" alt="img" />

        </div>
        <div className='Bheading'>
          <div className='head'>
            <p>MERKLABS BLOCKCHAIN DEVELOPMENT AND SECURITY SOLUTIONS</p>
            <div className='explore'>
              <img src="/images/explore.png" alt="" />
            </div>
          </div>
          <img className='hbd' src="/images/headbg.png" alt="" />
          <img className="bitcoin" src="/images/btcimg.png" alt="bit" />
          <i className="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
          <div className='vertical'></div>
        </div>
      </div>
    </>
  )
}

export default BodyPage;