const ContactList = ({ visibleContacts, id }) => {
    return (
        <div>
            <ul>
                {<li key={id}><p>{visibleContacts}</p></li>}
            </ul>
        </div>
    )
}

export default ContactList;