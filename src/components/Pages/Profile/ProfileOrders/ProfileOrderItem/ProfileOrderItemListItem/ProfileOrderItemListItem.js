import { Link } from 'react-router-dom'
import BookItem from '../../../../../BookItem/BookItem'
import './ProfileOrderItemListItem.css'

function ProfileOrderItemListItem(props) {
    console.log(props)
    return <li className="list-group-item flex-fill profile-order-item-list-item">
        <div>
            <img src={props.book.book.coverUrl} alt="" />
            <h2 className=''>{props.book.book.title}</h2>
            <h3 className=''>({props.book.book.author})</h3>
            <p className='book-overview'>{props.book.book.summary.substring(0, 37) + '... '}<span><Link to={"/books/" + props.book.book.id} className='read-more-link'>Read more</Link></span></p>
            <p className=''>${props.book.book.price} x {props.book.quantity}</p>
        </div>
    </li>
}

export default ProfileOrderItemListItem