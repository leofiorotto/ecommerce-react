import { useEffect, useState } from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"
import './ItemDetailContainer.css'
import Footer from "../Footer/Footer"
import { getProductsById } from "../../services/firebase/firestore/products"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        setLoading(true)

        getProductsById (productId)
            .then (product => {
                setProduct(product)
            })
        
        .catch (error => {
            console.error (error)
        }).finally (() => {
            setLoading(false)
        })
    }, [productId])

    if(loading) {
        return <span className="loader"></span>
    }

    return (
        <main className='detailContainer'>
            <ItemDetail {...product}/>
            <Footer />

        </main>
    )
}

export default ItemDetailContainer