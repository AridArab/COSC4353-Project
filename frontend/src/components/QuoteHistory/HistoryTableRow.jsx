import PropTypes from 'prop-types'

function HistoryTableRow(props) {
    return(
        <tr className="history-row">
            <td>{props.gallons}</td>
            <td>{props.address}</td>
            <td>{props.date}</td>
            <td>{props.price}</td>
            <td>{props.total}</td>
        </tr>
    );
}


HistoryTableRow.propTypes = {
    gallons: PropTypes.number,
    address: PropTypes.string,
    date: PropTypes.string,
    price: PropTypes.number,
    total: PropTypes.number
}

export default HistoryTableRow