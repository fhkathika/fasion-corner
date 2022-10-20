import React from 'react';
import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
const FeaturedInfo = () => {
    return (
        <div className='featured'>
            <div className="featurtedItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2414</span>
                    <span className="featuredMoneyRate">
                        -11.4 <ArrowDownward  className='featuredIcon negative'/></span>
                </div>
                <span className="featuredSub">Compare to last month</span>
            </div>
            <div className="featurtedItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4414</span>
                    <span className="featuredMoneyRate">
                        -1.4 <ArrowDownward className='featuredIcon negative' /></span>
                </div>
                <span className="featuredSub">Compare to last month</span>
            </div>
            <div className="featurtedItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4414</span>
                    <span className="featuredMoneyRate">
                        +21.4 <ArrowUpward  className='featuredIcon'/></span>
                </div>
                <span className="featuredSub">Compare to last month</span>
            </div>
        </div>
    );
};

export default FeaturedInfo;