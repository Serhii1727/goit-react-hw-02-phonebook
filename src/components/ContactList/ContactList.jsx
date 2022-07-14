import { ItemList, Button } from "./ContactList.styled";

const ContactList = ({ contacts }) => {
    return (
        <div>
            <ul>
                {contacts.map(({ name, number, id }) => (
                    <ItemList className="ContactList-item" key={id}>
                        <p>{name}</p>
                        <p>{number}</p>
                        <Button type="button">Delete</Button>
                    </ItemList>
                ))}
            </ul>
        </div>
    )
}

export default ContactList;