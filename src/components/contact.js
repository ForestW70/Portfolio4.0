import { useState } from 'react';
import { contact } from '../assets/data/siteData'

export default function Contact(...props) {
    const [selectedChannel, changeChannel] = useState(contact[2])


    function ShowIcons() {
        function selectChannel(key) {
            changeChannel(contact[key])
        }
        return contact.map((item, key) => (
            <item.icon onClick={() => selectChannel(key)} />
        ))
    }

    function DisplayContact() {
        return (
            <div className="target-channel">
                <a href={selectedChannel.link}>{selectedChannel.link}</a>
            </div>
        )
    }

    return (
        <div className="contact-container">
            <h3>Let us get in touch.</h3>
            <div className="icon-bar">
                <ShowIcons />
            </div>
            <DisplayContact />
        </div>
    )
}