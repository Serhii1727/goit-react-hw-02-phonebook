const ContactList = ({ contacts }) => {
    return (
        <div>
            <ul>
                {contacts.map(({ name, number, id }) => (
                    <li key={id}>
                        <p>{name}</p>
                        <p>{number}</p>
                        <button type="button">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ContactList;