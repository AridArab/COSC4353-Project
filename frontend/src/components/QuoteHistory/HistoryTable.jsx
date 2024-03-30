import HistoryTableRow from "./HistoryTableRow";


function HistoryTable() {

    let data = [
        {
            id: 1,
            gallons: 30,
            address: "062 EastPark Ln",
            date: "January 5th, 2024",
            price: 200,
            total: 6000
        },
        {
            id: 2,
            gallons: 10,
            address: "9174 BrownWood Dr",
            date: "January 17th, 2024",
            price: 150,
            total: 1500
        },
        {
            id: 3,
            gallons: 50,
            address: "30621 Lipton Ln",
            date: "February 2nd, 2024",
            price: 500,
            total: 25000
        },
        {
            id: 4,
            gallons: 40,
            address: "605 AppleTree Dr",
            date: "January 29th, 2024",
            price: 300,
            total: 12000
        },
        {
            id: 5,
            gallons: 5,
            address: "773 Daniels Ln",
            date: "February 9th, 2024",
            price: 700,
            total: 3500
        }
    ]

    const rows = [];

    for (let i = 0; i < data.length; i++) {
        rows.push(<HistoryTableRow id={data[i].id} gallons={data[i].gallons} address={data[i].address} date={data[i].date} price={data[i].price} total={data[i].total} />)
        rows.push(<HistoryTableRow id={data[i].id} gallons={data[i].gallons} address={data[i].address} date={data[i].date} price={data[i].price} total={data[i].total} />)
        rows.push(<HistoryTableRow id={data[i].id} gallons={data[i].gallons} address={data[i].address} date={data[i].date} price={data[i].price} total={data[i].total} />)
        rows.push(<HistoryTableRow id={data[i].id} gallons={data[i].gallons} address={data[i].address} date={data[i].date} price={data[i].price} total={data[i].total} />)
        rows.push(<HistoryTableRow id={data[i].id} gallons={data[i].gallons} address={data[i].address} date={data[i].date} price={data[i].price} total={data[i].total} />)
    }

    return(
        <div className="history-table">
            <table>
                <tr>
                    <th>Gallons Requested</th>
                    <th>Delivery Address</th>
                    <th>Delivery Date</th>
                    <th>Suggested Price</th>
                    <th>Total Amount Due</th>
                </tr>
                {rows}
            </table>
        </div>
    );
}

export default HistoryTable