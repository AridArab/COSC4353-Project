import HistoryTableRow from "./HistoryTableRow";
import axios from "axios";
import {useEffect, useState} from "react";


function HistoryTable() {
    let [Data, setData] = useState([]);

    // Loads api data once
    useEffect(() => {
        let ignore = false;
        console.log("here");
        axios.get('http://localhost:8000/api/user/me/quote')
        .then((response) => {
            if (!ignore) {
                setData(response.data);
            }
        })
        return () => {
            // Set to false so data does not keep loading
            ignore = true;
        }
    }, [])

    
    const rows = [];

    // Adds rows for each quote entry
    for (let i = 0; i < Data.length; i++) {
        rows.push(<HistoryTableRow key={Data[i].id} gallons={Data[i].gallons} address={Data[i].address} date={Data[i].date} price={Data[i].suggestedprice} total={Data[i].total} />)
    }
    
    

    return(
        <div className="history-table">
            <table>
                <thead>
                    <tr>
                        <th>Gallons Requested</th>
                        <th>Delivery Address</th>
                        <th>Delivery Date</th>
                        <th>Suggested Price</th>
                        <th>Total Amount Due</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
}

export default HistoryTable