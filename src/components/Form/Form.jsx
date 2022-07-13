import React, { Component } from "react";
import { FormContact, Name, Input, Button } from "./Form.styled";

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }


    handleChange = (e) => {
        const { name, value } = e.currentTarget
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.onSubmit(this.state.name, this.state.number)
        this.reset()
    }

    reset = () => {
        this.setState({ name: '', number: '' })
    }
    render() {
        return (
            <FormContact className="Form" onSubmit={this.handleSubmit}>
                <label htmlFor=''>
                    <Name>Name</Name>
                    <Input className="Input"
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </label>
                <label htmlFor="">
                    <Name>Number</Name>
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={this.state.number}
                        onChange={this.handleChange}
                    />
                </label>
                <Button className="Button" type="submit">Add name</Button>
            </FormContact>
        )
    }
}


export default ContactForm;
