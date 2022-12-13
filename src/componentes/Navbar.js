import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({id}) => {
return (
    <div className="navbar bg-white text-black">
        <div className="flex-1">
            <Link to='/' className=" btn-ghost normal-case text-xl m-2 p-2">Melatini Turismo</Link>
            <ul className="menu menu-horizontal bg-white text-black rounded-box">

                <div className="dropdown dropdown-end ">
                    <a tabIndex={0} className="btn btn-ghost rounded-btn normal-case m-1 p-1">Destinos</a>
                    <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-white text-black rounded-box w-52 mt-4">
                        
                        {/* {PRODUCTS.map(lugar => <li><a><Link to={`/item/${lugar.id}`}>{lugar.destino}</Link></a></li> )} */}
                        <li><a><Link to={`/item/1`}>Cataratas</Link></a></li> 
                        <li><a><Link to={`/item/2`}>Federacion</Link></a></li> 
                        <li><a><Link to={`/item/3`}>Camboriu</Link></a></li> 
                        <li><a><Link to={`/item/4`}>Glaciar</Link></a></li> 
                    </ul>
                </div>

                <div className="dropdown dropdown-end">
                    <a tabIndex={0} className="btn btn-ghost rounded-btn normal-case m-1 p-1">Filtrar por: </a>
                    <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-white text-black rounded-box w-52 mt-4">
                        <li><a><Link to={`/category/avion`}>Avion</Link></a></li> 
                        <li><a><Link to={`/category/colectivo`}>Colectivo</Link></a></li> 
                    </ul>
                </div>

                <li className='btn btn-ghost rounded-btn normal-case m-1 p-1'><a>Quienes Somos</a></li>
                <li className='btn btn-ghost rounded-btn normal-case m-1 p-1'><a>Contacto</a></li>
            </ul>
        </div>

        <div className="flex-none">
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span className="badge badge-sm indicator-item">8</span>
                    </div>
                </label>

            <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                    <span className="font-bold text-lg">8 productos</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                        <button className="btn btn-primary btn-block">Ver carrito</button>
                    </div>
                </div>
            </div>

        </div>
            <div className="dropdown dropdown-end">

                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" />
                    </div>
                </label>

                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <a className="justify-between">
                            Perfil
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <li><a>Configuracion</a></li>
                    <li><a>Salir</a></li>
                </ul>

            </div>
        </div>
    </div>
)
}

export default Navbar