import PropTypes from 'prop-types'

function ButtonToPage(props) {

    return(
        <div className="button-animation">
            <a id={props.id} href={props.hyperlink}>{props.text}</a>
        </div>
    );

}

ButtonToPage.propTypes = {
    hyperlink: PropTypes.string,
    text: PropTypes.string,
    id: PropTypes.string
}



export default ButtonToPage