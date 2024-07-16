import { NavLink  } from 'react-router-dom';
import navList from "../../router/ruter.js"
import "./style.scss";


const index = () => {
    return <>
        <header className='py-3 bg-slate-400'>
            <div className="container mx-auto px-2 5">
                <nav className='flex items-center justify-between'>
                    <NavLink to="/" >Logo</NavLink>
                    <ul className='flex items-center gap-3'>
                        {
                            navList.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink to={item.path} activeClassName="active">{item.title}</NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
        </header>
    </>
};

export default index;