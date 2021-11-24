import PropTypes from 'prop-types'

const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <button className='button--add'>+</button>
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