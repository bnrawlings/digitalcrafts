import React from 'react'
import { ContactDiv } from "../styled-components/ContactStyled"

export default function Contact() {
    return (
        <ContactDiv className="contact">
            <h1>CONTACT SECTION</h1>
            <div>
            <form>
                <input type="text"/>
                <input type="text"/>
                <button >Submit</button>
            </form>
            </div>
        </ContactDiv>
    )
}
