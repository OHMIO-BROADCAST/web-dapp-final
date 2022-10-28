import React, { useRef } from 'react'
import './ReferLink.css'

function ReferLink() {

    const buttonCopy = useRef()
    const iconCopy = useRef()


    const ClickCopyRefer = () => {
        buttonCopy.current.className = "link-button success"

        setTimeout(() => {
            buttonCopy.current.className = "link-button"
        }, 2000);
    };

    return (
        <a className="link-button" href="#" ref={buttonCopy} role="button" onClick={() => ClickCopyRefer()}>
            <span className="refer-link">
                {" "}
                https://app.livefreedom.org/#/distributor/{"{"}username{"}"}
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