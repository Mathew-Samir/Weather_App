
import { Link } from 'react-router-dom'

const Navebar = () => {
    
return (
    <>
        <nav  className='bg-slate-200 py-4 w-[100%]'>
            <Link
                className='mx-1 p-1 bg-slate-400 text-white rounded-lg shadow-md'
                to="/">Weather design 1
            </Link>
            <Link
                className='mx-1 p-1 bg-slate-400 text-white rounded-lg shadow-md'
                to="/Weather2">Weather design 2
            </Link>
        </nav>
    </>
)
}

export default Navebar
