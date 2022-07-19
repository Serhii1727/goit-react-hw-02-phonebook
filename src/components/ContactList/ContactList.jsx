import PropTypes from 'prop-types';
import { List } from "./ContactList.styled"
import ContactListItem from 'components/ContactListItem';


export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <div>
            <List>

                {contacts.map(({ name, number, id }) => (
                    <ContactListItem
                        name={name}
                        number={number}
                        id={id}
                        key={id}
                        onDelete={onDeleteContact}
                    />
                ))}
            </List>
        </div>
    )
}

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    })),
    onDeleteContact: PropTypes.func.isRequired,
}