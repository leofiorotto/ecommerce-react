import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom"
import Footer from "../Footer/Footer"

import { getProducts } from "../../services/firebase/firestore/products"

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    


    const { categoryId } = useParams()

    useEffect ( () => {
        setLoading(true)

        getProducts(categoryId)
            .then (products => {
                setProducts(products)
        }).catch (error => {
            console.error(error)
        }).finally (() => {
            setLoading(false)
        })
     
    }, [categoryId])

    if(loading) {
        return <span className="loader"></span>
    }

    return (
    <>
        <div className="ItemListContainer">
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
        <Footer />
    </>

    )
}

export default ItemListContainer