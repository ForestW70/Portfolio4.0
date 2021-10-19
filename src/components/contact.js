import { useState } from 'react';
import { ImPointDown } from "react-icons/im";

import { contact } from '../assets/data/siteData';

export default function Contact() {
    const [selectedChannel, changeChannel] = useState(contact[2])

    // map through contact data and create click event to change state 
    function ShowIcons() {
        function selectChannel(key) {
            changeChannel(contact[key])
        }
        return contact.map((item, key) => (
            <item.icon
                key={key}
                onClick={() => selectChannel(key)}
            />
        ))
    }

    // show large contact
    function DisplayContact() {
        return (
            <div className="target-channel">
                <ImPointDown />
                {selectedChannel.type === "link" &&
                    <a href={selectedChannel.link} rel="noopener noreferrer" target="_blank">{selectedChannel.link}</a>
                }
                {selectedChannel.type === "email" &&
                    <a href={`mailto:${selectedChannel.link}`}>{selectedChannel.link}</a>
                }
                {selectedChannel.type === "cell" &&
                    <a href="no spam pls">{selectedChannel.link}</a>
                }
            </div>
        )
    }

    // return contact bar
    return (
        <div className="contact-container">
            <h3>Let's get in touch.</h3>
            <div className="icon-bar">
                <ShowIcons />
            </div>
            <DisplayContact />
        </div>
    )
}