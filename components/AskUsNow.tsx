import type {ReactElement} from "react";
import {useEffect, useState} from "react";
import Link from "next/link";

export default function AskUsNow(): ReactElement {
    const [blinkOn, setBlinkOn] = useState(false);
    useEffect(() => {
        const handle = setInterval(() => {
            setBlinkOn(!blinkOn);
        }, 250);
        return () => clearInterval(handle);
    });
    const blinkOnStyle = {
        "color": "rgb(255, 255, 255)",
    };
    const blinkOffStyle = {
        "color": "rgb(51, 0, 51)",
    };
    return <div id="ask-box">
        <div className="padding">
            <div className="box-title">
                <Link href="/contact">
                    <a style={blinkOn ? blinkOnStyle : blinkOffStyle} id="flash">ASK US NOW!</a>
                </Link>
            </div>
            <div className="box-content">
                We provide you with a no cost,<br/>
                no obligation review and comparison of your insurance portfolio.
            </div>
        </div>
    </div>;
}
