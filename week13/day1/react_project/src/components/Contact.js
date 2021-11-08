import React from 'react'
import { ContactDiv, Form, ContactInput, ContactName, Submit } from "../styled-components/ContactStyled"

export default function Contact() {
    return (
        <ContactDiv className="contact">
            <h1>CONTACT SECTION</h1>
            <div>
            <Form>
                <ContactName type="text" placeholder="First Name"/>
                <ContactName type="text" placeholder="Last Name"/>
                <ContactName type="text" placeholder="Email"/>
                <ContactInput type="text" placeholder="How can we help you?"/>
                <Submit >Submit</Submit>
            </Form>
            </div>
        </ContactDiv>
    )
}
