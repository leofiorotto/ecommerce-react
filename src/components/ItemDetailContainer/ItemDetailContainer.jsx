import { useEffect, useState } from "react"
// import { fetchProductById } from "../../asyncMock"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"
import { db } from "../../services/firebase/firebaseConfig"
import { getDoc, doc, QueryDocumentSnapshot } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productRef = doc (db,'products', productId)

        getDoc (productRef)
        .then (documentSnapshot => {
            const fields = documentSnapshot.data()
            const productsAdapted = {id: documentSnapshot.id, ...fields}
            setProduct(productsAdapted)
        })
        .catch (error => {
            console.error (error)
        }).finally (() => {
            setLoading(false)
        })
        // fetchProductById(productId)
        //     .then(response => {
        //         setProduct(response)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
        //     .finally(() => {
        //         setLoading(false)
        //     })
    }, [productId])

    if(loading) {
        return <h1>Cargando Producto</h1>
    }

    return (
        <main className='detailContainer'>
            <ItemDetail {...product}/>
        </main>
    )
}

export default ItemDetailContainer