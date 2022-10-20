import React from 'react';
import './widgetlg.css'
const WidgetLg = () => {
    const Button=({type})=>{
return <button className={"widgetLgButton" + type}>{type}</button>
    }
    return (
        <div className='widgetLg'>
            <h3 className="widgetLgTitle">Latest Transection</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
<img src="/img/prodileImg.png" alt="" className="widgetLgImg" />
<span className="widgetLgName">Tayba</span>
                    </td>
                    <td className='widgetLgDate'>2 june 2023</td>
                    <td className='widgetLgAmount'>$122.43</td>
                    <td className='widgetLgStatus'>
                        <Button type="Approved"/>
                        </td>
                </tr>  <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
<img src="/img/prodileImg.png" alt="" className="widgetLgImg" />
<span className="widgetLgName">Tayba</span>
                    </td>
                    <td className='widgetLgDate'>2 june 2023</td>
                    <td className='widgetLgAmount'>$122.43</td>
                    <td className='widgetLgStatus'>
                        <Button type="Declined"/>
                        </td>
                </tr> 
                 <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
<img src="/img/prodileImg.png" alt="" className="widgetLgImg" />
<span className="widgetLgName">Tayba</span>
                    </td>
                    <td className='widgetLgDate'>2 june 2023</td>
                    <td className='widgetLgAmount'>$122.43</td>
                    <td className='widgetLgStatus'>
                        <Button type="Pending"/>
                        </td>
                </tr>
            </table>
        </div>
    );
};

export default WidgetLg;