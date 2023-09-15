import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ id, name, category, img, price, stock, description, ca, scanCollection, NFTcollection}) => {
    
    const handleOnAdd = (count) => {
        const objProductToAdd = {
            id, name, price, count
        }
    }

    return (
        <article className='ItemDetailContainer'>
            <header>
                <img src={img} alt={name}/>
            </header>
            <div className='DescriptionDetail'>
                <picture>
                    <h2>{name}</h2>
                </picture>

                <section>
                    <b className='price'>Precio: {price} ETH</b><br />
                    <b>Contract Address: {ca}</b><br />
                    <a href={scanCollection}>Contract DeGods</a><br />
                    <a href={NFTcollection}>Ver historial e información de {name}</a><br />
                </section> 

                <footer>
                    <ItemCount onAdd={handleOnAdd} stock={stock}/>
                </footer>
            </div>

        </article>
    )
}

export default ItemDetail