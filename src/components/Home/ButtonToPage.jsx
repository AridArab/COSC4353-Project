import PropTypes from 'prop-types'

function ButtonToPage(props) {

    return(
        <div className="button-animation" id={props.buttonid}>
            <a id={props.linkid} href={props.hyperlink}>{props.text}</a>
        </div>
    );

}

ButtonToPage.propTypes = {
    hyperlink: PropTypes.string,
    text: PropTypes.string,
    buttonid: PropTypes.string,
    linkid: PropTypes.string
}



export default ButtonToPage