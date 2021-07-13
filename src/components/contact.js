import { useState } from 'react';
import { contact } from '../assets/data/siteData'

export default function Contact(props) {
    const [selectedChannel, changeChannel] = useState(contact[2])
    
    
    function ShowIcons() {
        function selectChannel(key) {
            changeChannel(contact[key])
        }
        return contact.map((item, key) => (
            <item.icon onClick={() => selectChannel(key)}/>
        ))
    }

    function DisplayContact() {
        return(
            <div>
                <p>{selectedChannel.name}</p>
                {selectedChannel.link}
            </div>
        )
    }

    return (
        <div>
            <ShowIcons />
            <DisplayContact />
        </div>
    )
}