import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCTS } from '../JSON/item'
import ItemCardContainer from './ItemCardContainer'

const ItemListContainer = () => {

    const [items, setItems] = useState ([])
    const {idCategory} = useParams()
    console.log(idCategory, 'soy el idCategory')

    useEffect((/* idCategory */) => { /* Mi setItems = setproductList del profe */
        if(idCategory) {
            getProducts()
            .then(PRODUCTS => setItems(PRODUCTS.filter( product => product.category === idCategory)) )
            .catch(error => console.log(error))
        } else {
            getProducts()
            .then(PRODUCTS => setItems(PRODUCTS))
            .catch(error => console.log(error))
        }

        return () => setItems([])

    }, [idCategory])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(PRODUCTS)
            }, 500)
            
        })
    }


  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-full p-20 bg-black'>
        
        {items.map(i => <ItemCardContainer key={i.id} {...i} />)}
        
    </div>
  )
}

export default ItemListContainer