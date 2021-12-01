import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
                text={showAdd ? '-' : '+' } 
                onClick={onAdd} 
            />
        </header>
    )
}

Header.defaultProps = {
    title: 'What do we have today?',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// EXAMPLE OF CSS IN JS
// const headingStyle= {
//     color: 'pink',
//     backgroundColor: 'black',
// }

export default Header