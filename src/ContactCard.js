import React, { useState } from 'react'

function ContactCard(props) {
    const [ showEmail, setShowEmail ] = useState(false);
    return (
        <div>
            <div className='contact-card'>
                <img className='profile-img' src={props.avatarUrl} alt="profile-img"/>
                <div className='profile-det'>
                    <p>{props.name}</p>
                    <p>
                        {
                            showEmail ? 
                                props.email : 
                                    <button onClick={() => setShowEmail(true)}>
                                        Show Email
                                    </button>
                        }
                    </p>
                    <p>{props.age}</p>
                </div>
            </div>
        </div>
    )
}

export default ContactCard