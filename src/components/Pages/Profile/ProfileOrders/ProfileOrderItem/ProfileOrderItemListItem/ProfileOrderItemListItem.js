import { Link } from 'react-router-dom'
import BookItem from '../../../../../BookItem/BookItem'
import './ProfileOrderItemListItem.css'

function ProfileOrderItemListItem(props) {
    return <li className="list-group-item flex-fill profile-order-item-list-item">
        <div>
            <img src={props.book.coverUrl} alt="" />
            <h2 className=''>{props.book.title}</h2>
            <h3 className=''>({props.book.author})</h3>
            <p className='book-overview'>{props.book.summary.substring(0, 37) + '... '}<span><Link to={"/books/" + props.book.id} className='read-more-link'>Read more</Link></span></p>
            <p className=''>${props.book.price}</p>
        </div>
    </li>
}

export default ProfileOrderItemListItem