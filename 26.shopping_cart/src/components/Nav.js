import { Link } from 'react-router-dom';

const Nav = () => {
    const bar_style = {
        backgroundColor: '#000',
        padding: '10px 0'
    }

    const list_style = {
        textDecoration: 'none',
        color: '#fff',
        textTransform: 'capitalize'
    }
    const menu = [
        {
            name: 'home',
            url: '/',
            style : list_style
        },
        {
            name: 'about',
            url: '/about',
            style : list_style
        },
        {
            name: 'shop',
            url: '/shop',
            style : list_style
        },
        {
            name: 'cart',
            url: '/cart',
            style : list_style
        },
    ]
    return(
        <div style={bar_style} className="navbar">
            <ul>
                {menu.map((val) => {
                    return (
                        <li key={val.name}>
                            <Link style={val.style} to={val.url}>{val.name}</Link>
                        </li>   
                    ) 
                })}
            </ul>
        </div>
    )
}

export default Nav;