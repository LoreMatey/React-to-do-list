// import PropTypes from 'prop-types';
const Button = ({ text, onClick }) => {
    return (
        <button 
            onClick={onClick} 
            className='button--add'
        >
            {text}
        </button>
    )
}

// Button.propTypes = {
//     onClick: PropTypes.func,
//     text: PropTypes.string
// }

export default Button;