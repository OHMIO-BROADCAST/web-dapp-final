import React, { useRef, useEffect, useState } from 'react'
import './ReferLink.css'
import { API, Auth } from 'aws-amplify';


function ReferLink() {

    const buttonCopy = useRef()
    const iconCopy = useRef()

    const [user, setuser] = useState()

    useEffect(() => {
        Auth.currentAuthenticatedUser().then((user) => {
            // console.log("REFERRRR", user);
            setuser(user);
        });
    }, [])


    const ClickCopyRefer = () => {
        buttonCopy.current.className = "link-button success"
        if (user != null) {
            navigator.clipboard.writeText(`https://app.bmaker.pro/invite/${user.username}`)
        }

        setTimeout(() => {
            buttonCopy.current.className = "link-button"
        }, 2000);
    };

    return (
        <a className="link-button" href="#" ref={buttonCopy} role="button" onClick={() => ClickCopyRefer()}>
            <span className="refer-link">
                {" "}
                https://app.bmaker.pro/invite/
            </span>
            <div className="icon" ref={iconCopy} >
                <div className="copy-link">
                    <i className="fa fa-link" />
                    <i className="text">Copy Link</i>
                </div>
                <i className="fa fa-check" />
            </div>
        </a>

    )
}

export default ReferLink