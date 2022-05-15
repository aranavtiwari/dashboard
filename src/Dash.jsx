import React, {useState} from "react";
import DatePicker from "react-datepicker";
import Flags from 'country-flag-icons/react/3x2'
import "react-datepicker/dist/react-datepicker.css";
import { AiFillBank,AiOutlineTeam,AiFillDashboard,AiFillReconciliation,AiFillDollarCircle } from "react-icons/ai";



const Dash = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="dashmain">
            <div className="balance-main">
                <h3 >Total balance</h3>
                <div className="balance">
                    <div className="date">
                        <p style={{color: "white"}}className="deposite-n">Select Date</p> <DatePicker className="date-o" selected={startDate} onChange={(date:Date) => setStartDate(date)} />
                    </div>
                    <div className="bal-content">
                        
                        <div className="bal-pla">
                            <div className="flag">
                            <Flags.US title="United States" className="flag-i"/>
                            </div>
                            <div className="curr-type">
                                <div className="curr">USD</div>
                                <div className="curr-val">$23030030.04</div>
                            </div>
                        </div>

                        <div className="bal-pla">
                        <div className="flag">
                            <Flags.SG title="United States" className="flag-i"/>
                            </div>
                            <div className="curr-type">
                                <div className="curr">SGD</div>
                                <div className="curr-val">$23030.04</div>
                            </div>
                        </div>

                        <div className="bal-pla">
                        <div className="flag">
                        <Flags.GB title="United States" className="flag-i"/>
                            </div>
                            <div className="curr-type">
                                <div className="curr">GB</div>
                                <div className="curr-val">$23030030.04</div>
                            </div>
                        </div>
                        <div className="bal-pla">
                        <div className="flag">
                            <Flags.EU title="United States" className="flag-i"/>
                            </div>
                            <div className="curr-type">
                                <div className="curr">EU</div>
                                <div className="curr-val">$23030030.04</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="summary">
                <h3>Summary</h3>
                <div className="bal-content">
                        <div className="bal-pla">
                        <div className="flag">
                            <AiOutlineTeam className="icon" />
                            </div>
                            <div className="curr-type">
                                <div className="curr-o">Number of Merchants</div>
                                <div className="curr-val">10</div>
                            </div>
                        </div>
                        <div className="bal-pla">
                        <div className="flag">
                            <AiFillDashboard className="icon" />
                            </div>
                            <div className="curr-type">
                                <div className="curr-o">Number of pending payout</div>
                                <div className="curr-val">10</div>
                            </div>
                        </div>
                        <div className="bal-pla">
                        <div className="flag">
                            <AiFillReconciliation className="icon" />
                            </div>
                            <div className="curr-type">
                                <div className="curr-o">Number of Collection amount</div>
                                <div className="curr-val">44</div>
                            </div>
                        </div>
                        <div className="bal-pla">
                        <div className="flag">
                            <AiFillDollarCircle className="icon" />
                            </div>
                            <div className="curr-type">
                                <div className="curr-o">Total revenue</div>
                                <div className="curr-val">10</div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="deposite">
                <h3>Deposite & Payouts</h3>
                <div className="deposite-main">
                <div className="deposite-content">
                    <p className="deposite-n">
                        Select date
                    </p>
                    <DatePicker className="date-o" selected={startDate} onChange={(date:Date) => setStartDate(date)} />
                    
                    <DatePicker className="date-oi" selected={startDate} onChange={(date:Date) => setStartDate(date)} />
                </div>
                <div className="deposite-currency">
                    <p className="deposite-no">
                        Select currency
                    </p>
                    <div className="curr-n">
                    <div className="flag">
                            <Flags.US title="United States" className="flag-io"/>
                            </div>
                        <div>
                            USD
                        </div>
                    </div>
                    <div className="curr-n">
                    <div className="flag">
                            <Flags.EU title="United States" className="flag-io"/>
                            </div>
                        <div>
                            EU
                        </div>
                    </div>
                    <div className="curr-n">
                    <div className="flag">
                            <Flags.SG title="United States" className="flag-io"/>
                            </div>
                        <div>
                            SGD
                        </div>
                    </div>
                    <div className="curr-n">
                    <div className="flag">
                            <Flags.GB title="United States" className="flag-io"/>
                            </div>
                        <div>
                            GB
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
            <div className="estimate">
                <div className="bal-content">
                        <div className="bal-pla">
                        <div className="flag">
                        <AiFillBank className="icon" />
                            </div>
                            <div className="curr-type">
                                <div className="curr-o">Total Deposite</div>
                                <div className="curr-val">10</div>
                            </div>
                        </div>
                        <div className="bal-pla">
                        <div className="flag">
                        <AiFillBank className="icon" />
                            </div>
                            <div className="curr-type">
                                <div className="curr-o">Number of Deposite</div>
                                <div className="curr-val">10</div>
                            </div>
                        </div>
                        <div className="bal-pla">
                        <div className="flag">
                        <AiFillBank className="icon" />
                            </div>
                            <div className="curr-type">
                                <div className="curr-o">Total payout</div>
                                <div className="curr-val">10</div>
                            </div>
                        </div>
                        <div className="bal-pla">
                        <div className="flag">
                            <AiFillBank className="icon" />
                            </div>
                            <div className="curr-type">
                                <div className="curr-o">Number of Payout</div>
                                <div className="curr-val">10</div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Dash;