import React from 'react';

const Content = () => {
    return (
        <>
            <div className='mix'>
                <div className='trusted'>
                    <img src="/images/trusted.png" alt="" />
                </div>
                <img className='dot' src="/images/dots.png" alt="" />
                <div className='mainContent'>
                    <div className='investment'>
                        <h1>We provide The Best To Protect Your
                            Users And Their Investments</h1>
                        <p>Merklabs is a reputed name in the field of blockchain technology encompassing all the segments of this revolutionary field. Pioneering the essence of blockchain security and audits, we secure your present and future through the parameters of technology.
                        </p>
                    </div>
                    <div className='blocComp'>
                        <img src="/images/introimg.png" alt="inroIng"/>
                        <div className='hd'>
                        <h1>100+</h1>
                        <p>blockchain companies protected</p>
                        <h1 className='twoh'>200+</h1>
                        <p className='issues'>issues discovered</p>
                        <h1 className='threeh'>1000+</h1>
                        <p>analysis available per month</p>
                        </div>
                    </div>
                </div>
                <div className='mainContent1'>
                    <div className='investment1'>
                        <img src="/images/content.png" alt="" />
                        <img className='neon1' src="/images/neon1.png" alt="" />
                    </div>
                    <div className='blocComp1'>
                        <h3>DEFI</h3>
                        <h1>Scale the world of DeFi</h1>
                        <p>Being the veterans in the blockchain industry, we understand the hype of decentralized finance and the contemporary optimizations in the financial sector and hence taking the grasp of the moment , we have developed exceptional projects in the world of DeFi.</p>
                    </div>
                </div>
                <div className='mainContent2'>
                    <div className='investment2'>
                        <h3>DAAPS</h3>
                        <h1>Technology made easier</h1>
                        <p>Decentralized applications have found a huge user base right in the initial stage , and therefore we as a team have gained extensive expertise into the creation of dapps.</p>
                    </div>
                    <div className='blocComp2'>
                        <img src="/images/technology.png" alt="" />
                    </div>
                </div>
                <div className='mainContent3'>
                    <div className='investment3'>
                        <img src="/images/secure.png" alt="" />
                    </div>
                    <div className='blocComp3'>
                        <h3>AUDIT</h3>
                        <h1>Stay secure and safe</h1>
                        <p>Above all that matters is a secure and safe smart contract that is free from any vulnerability and does not hamper the investment of the various people who have trusted you. We also provide auditing services , so that you can stay assured of the security as we are quick in auditing and exposing the bugs of your smart contract.</p>
                        <img src="/images/neon2.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content;