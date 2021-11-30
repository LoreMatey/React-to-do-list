import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
    const addTask = () => {
        console.log('clicked')
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text='+' onClick={addTask} />
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