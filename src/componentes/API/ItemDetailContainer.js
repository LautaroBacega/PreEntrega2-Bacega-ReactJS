import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CharCount from './ItemCount'
import { PRODUCTS } from '../JSON/item'

const ItemDetailContainer = ({destino, category, precio, disponibilidad, fechaSalida, fechaLlegada, duracion, img, stock }) => {

    const [item, setItem] = useState({})
    const {id} = useParams()

    useEffect( () => {
        getItemDetail().then( res => {
            setItem(res)
        })
    }, [ id ])

    const getItemDetail = () => {
        return new Promise( (resolve, reject) => {
            const item = PRODUCTS.find( p => p.id == id)
            setTimeout(() => {
                resolve(item)
            }, 500);
        })
     }


  return (
    <div className="grid grid-cols-2 grid-rows-2 p-20 bg-black">
        <div className="bg-white row-span-2 p-5 m-5 container mx-auto">
            <div className="grid grid-rows-1 p-5 m-5 place-items-center">
                <div className="carousel w-full object-cover h-48 w-96">
                    <div id="slide1" className="carousel-item relative w-full object-cover h-48 w-96">
                        <img src={item.img} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle bg-black text-white">❮</a> 
                            <a href="#slide2" className="btn btn-circle bg-black text-white">❯</a>
                        </div>
                    </div> 
                    <div id="slide2" className="carousel-item relative w-full oobject-cover h-48 w-96">
                        <img src={`${item.img}`}  className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle bg-black text-white">❮</a> 
                            <a href="#slide3" className="btn btn-circle bg-black text-white">❯</a>
                        </div>
                    </div> 
                    <div id="slide3" className="carousel-item relative w-full object-cover h-48 w-96">
                        <img src={`${item.img}`} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle bg-black text-white">❮</a> 
                            <a href="#slide4" className="btn btn-circle bg-black text-white">❯</a>
                        </div>
                    </div> 
                    <div id="slide4" className="carousel-item relative w-full object-cover h-48 w-96">
                        <img src={`${item.img}`} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle bg-black text-white">❮</a> 
                            <a href="#slide1" className="btn btn-circle bg-black text-white">❯</a>
                        </div>
                    </div>
                </div>

                <div className='grid grid-rows-1 p-5 m-5  place-items-center'>
                    
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Qjm-qmIWgn0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

            </div>
        </div>          

        <div className= "bg-white row-span-2 p-5 m-5 container mx-auto">
            <div className='grid grid-rows-3 text-black'>

                <div className='row-span-1 p-1 m-1'>
                    <h1 className='text-2xl font-bold p-1 m-1'>{item.destino}</h1>

                    <p className='p-1 m-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div className='row-span-1 p-1 m-1'>
                    <ul className='p-5 m5'>
                        <li className='list-disc p-1 m-1'>Fecha de Salida: {item.fechaSalida}</li>
                        <li className='list-disc p-1 m-1'>Fecha de Llegada: {item.fechaLlegada}</li>
                        <li className='list-disc p-1 m-1'>Asientos Disponibles: {item.disponibilidad} </li>
                        <li className='list-disc p-1 m-1'>Transporte: {item.category}</li>
                        <li className='list-disc p-1 m-1'>Duracion: {item.duracion}</li>
                    </ul>
                    
                </div>

                <div className='row-span-1 p-1 m-1'>
                    <div className='grid grid-cols-2 '>

                        <div className='flex justify-center'>
                            <CharCount stock={item.stock }/>
                        </div>

                        <div className='flex justify-center'>
                            <div className='btn bg-black text-white'>
                                Agregar al carrito
                            </div>
                        </div>

                    </div>
                </div>

            </div>            
        </div> 
    </div>

    
  )
}

export default ItemDetailContainer