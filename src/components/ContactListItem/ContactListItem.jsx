import PropTypes from 'prop-types';
import { Item, Button } from './ContactListItem.styled'

export const ContactListItem = ({ name, number, id, onDelete }) => {
    return (
        <Item className="ContactList-item">
            <p>{name}</p>
            <p>{number}</p>
            <Button onClick={() => onDelete(id)} type="button" >Delete</Button>
        </Item>
    )
}

export default ContactListItem

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}