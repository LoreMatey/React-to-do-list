import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
    const addTask = () => {
        console.log('clicked')
    }
    return (
        <header className='header'>
            <h1 style={{textTransform: 'uppercase'}}>{title}</h1>
            <Button text='+' onClick={addTask} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
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