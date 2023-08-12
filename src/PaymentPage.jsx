import React, { useState } from 'react'
import './PaymentPage.css'
import hat from './hat.svg'
import book from './book.svg'
import timer from './timer.svg'
import live from './live.svg'
import ads from './ads.svg'
import Stage1 from './Stage 1.svg'
import Stage2 from './Stage 2.svg'
import defaultradio from './defaultradio.svg'
import circleradio from './onlycircleradiobutton.svg'
import greenradiobutton from './greenradiobutton.svg'
import razorpay from './razorpay.svg'
import lateicon from './iconclock.svg'


const PaymentPage = () => {
    const [icon1, setIcon1] = useState(false);
    const [icon2, setIcon2] = useState(false);
    const [icon3, setIcon3] = useState(false);
    const [checked, setChecked] = useState(true);
    const [monthtotal1, setMonthTotal1] = useState("179");
    const [monthtotal2, setMonthTotal2] = useState("149");
    const [monthtotal3, setMonthTotal3] = useState("99");
    const [permonth1, setpermonth1] = useState("₹15");
    const [permonth2, setpermonth2] = useState("₹25");
    const [permonth3, setpermonth3] = useState("₹33");
    const [total, setTotal] = useState("179");

    // let icon = false;
    let discount = 18500 - total
    return (
        <>
            <div>
                <div className="maindiv">

                    <div className='main-first'><div className="subdiv1">
                        <div className="subdiv1-header1">
                            <div className="subdiv-header2">Access curated courses worth</div>
                            <div className="subdiv-header2">
                                <div>₹ 18,500 at just <span className='hr'></span></div> <span className="blue">₹{total}</span> <div>per year!</div>
                            </div>

                        </div>
                    </div>
                        <div className="details">
                            <div className="icon"><img src={book} alt="" /></div>
                            <div className="text"><span className="blue">100+</span> Job relevant courses </div>
                        </div>
                        <div className="details">
                            <div className="icon"><img src={timer} alt="" /></div>
                            <div className="text"><span className="blue">20,000+</span> Hours of content </div>
                        </div>
                        <div className="details">
                            <div className="icon"><img src={live} alt="" /></div>
                            <div className="text"><span className="blue">Exclusive</span> webinar access </div>
                        </div>
                        <div className="details">
                            <div className="icon"><img src={hat} alt="" /></div>
                            <div className="text"> Scholarship worth <span className="blue">₹94,500</span></div>
                        </div>
                        <div className="details">
                            <div className="icon"><img src={ads} alt="" /></div>
                            <div className="text"><span className="blue">Ad Free</span> learning experience </div>
                        </div>
                    </div>
                    <div className="subdiv2">

                        <div className="progressbar">
                            <div className="progressimg">
                                <img src={Stage1} alt="" />
                            </div>
                            <div className="progressimg">
                                <img src={Stage2} alt="" />
                            </div>
                        </div>
                        <div className="payment-header">
                            Select your subcription plan
                        </div>
                        <div className="plan-container grey">
                            <div className="plan-icon">
                                <div className="uppercircle">
                                    <div className="innercircle"></div>
                                </div>
                            </div>
                            <div className="plan-text">
                                <div className="text1">12 Months Subscription </div>
                                <div className="text2 grey-color">
                                    <div className="upper">
                                        <span className="upper-first">Total</span>
                                        <span className="upper-second">₹99</span>

                                    </div>
                                    <div className="text2-2">
                                        <div className="lower">
                                            <span className="lower-first">{permonth1}</span>
                                            <span className="lower-second">/mo</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="plan-container green">
                            <div className="plan-icon" onClick={() => {
                                setChecked(!checked);
                                setIcon2(false); setIcon3(false); setTotal(monthtotal1); console.log(icon1)
                            }}>
                                {checked ? <img src={greenradiobutton} alt="" /> : <div className="uppercircle" >
                                    <div className="innercircle"></div>
                                </div>}
                            </div>
                            <div className="plan-text">
                                <div className="text1">12 Months Subscription </div>
                                <div className="text2">
                                    <div className="upper">
                                        <span className="upper-first">Total</span>
                                        <span className="upper-second">{monthtotal1}</span>

                                    </div>
                                    <div className="text2-2">
                                        <div className="lower">
                                            <span className="lower-first">{permonth1}</span>
                                            <span className="lower-second">/mo</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="plan-container">
                            {/* <div className="expired">Offer expired</div> */}
                            <div className="plan-icon" onClick={() => { setIcon2(!icon2); setIcon3(false); setChecked(false); setTotal(monthtotal2); console.log(icon2) }}>
                                {icon2 ? <img src={greenradiobutton} alt="" /> : <div className="uppercircleblank" >
                                    <div className="innercircleblank"></div>
                                </div>}
                            </div>
                            <div className="plan-text">
                                <div className="text1">6 Months Subscription </div>
                                <div className="text2">
                                    <div className="upper">
                                        <span className="upper-first">Total</span>
                                        <span className="upper-second">{monthtotal2}</span>

                                    </div>
                                    <div className="text2-2">
                                        <div className="lower">
                                            <span className="lower-first">{permonth2}</span>
                                            <span className="lower-second">/mo</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="plan-container">
                            {/* <div className="expired">Offer expired</div> */}
                            <div className="plan-icon" onClick={() => { setIcon3(!icon3); setIcon2(false); setChecked(false); setTotal(monthtotal3); console.log(icon3) }}>
                                {icon3 ? <img src={greenradiobutton} alt="" /> : <div className="uppercircleblank" >
                                    <div className="innercircleblank"></div>
                                </div>}
                            </div>
                            <div className="plan-text">
                                <div className="text1">3 Months Subscription </div>
                                <div className="text2">
                                    <div className="upper">
                                        <span className="upper-first">Total</span>
                                        <span className="upper-second">{monthtotal3}</span>

                                    </div>
                                    <div className="text2-2">
                                        <div className="lower">
                                            <span className="lower-first">{permonth3}</span>
                                            <span className="lower-second">/mo</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="subdiv3">
                            <div className="subdiv-upper">
                                <div className="first-upper">Subscription Fee</div>
                                <div className="second">₹18,500</div>
                            </div>
                            <div className="subdiv-medium ">
                                <div className="firstcover">
                                    <div className="first">Limited time offer</div>
                                    <div className="second">- ₹{discount}</div>
                                </div>
                                <div className="third"><img src={lateicon} alt="" />Offer valid till 25th March 2023 </div>
                            </div>
                            <div className="subdiv-upper">
                                <div className="first-upper"><span className="bold">Total</span> (Incl. of 18% GST)</div>
                                <div className="bold bold-second">₹{total}</div>
                            </div>
                        </div>
                        <div className="subdiv4">
                            <button className="button red-button">CANCEL</button><button className="button green-button">PROCEED TO PAY</button>
                        </div>
                        <div className="paymenticon">
                            <img src={razorpay} alt="" />
                        </div>
                        <span className="recommended">Recommended</span>
                        <span className="expired">Offer expired</span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PaymentPage