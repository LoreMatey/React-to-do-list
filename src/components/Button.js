import PropTypes from 'prop-types';
const Button = ({text, addTask}) => {
    return (
        <button 
            onClick={addTask} 
            className='button--add'
        >
            {text}
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string
}

export default Button;