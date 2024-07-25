
import { Link } from 'react-router-dom'

const Navebar = () => {
    
return (
    <>
        <nav >
            <Link
                className='mx-6 p-1 bg-slate-400 text-white rounded-lg shadow-md'
                to="/">Home
            </Link>
            <Link
                className='mx-6 p-1 bg-slate-400 text-white rounded-lg shadow-md'
                to="/Weather">Weather
            </Link>
            <Link
                className='mx-6 p-1 bg-slate-400 text-white rounded-lg shadow-md'
                to="/Weather1">Weather1
            </Link>
        </nav>
    </>
)
}

export default Navebar