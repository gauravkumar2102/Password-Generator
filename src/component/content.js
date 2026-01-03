import React, { useEffect } from "react";
import ReactDom from "react-dom/client";


function Content() {

    const [range, setrange] = React.useState(10);
    const [password, setPassword] = React.useState("");
    const [character, setCharacter] = React.useState(false);
    const [number, setNumber] = React.useState(false);
    const [copied, setCopied] = React.useState(false);

    function generatePassWord() {

        let STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (character) {
            STR += "`~!@#$%^&*()_-+={[}]:;<,>.?/|";
        }
        if (number) {
            STR += "1234567890";
        }
        let pass = ""
        for (let i = 0; i < range; i++) {
            let index = Math.floor(Math.random() * STR.length);
            pass += STR[index];
        }
        setPassword(pass);
    }

    useEffect(() => {
        generatePassWord();
    }, [range, character, number]);

    

    const handleCopy = async () => {
        await navigator.clipboard.writeText(password);
        setCopied(true);

        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            <div className="container">
                <h1>{password}</h1>
                <div className="input">
                    <input type="range" min={10} max={50} value={range} onChange={(e) => setrange(e.target.value)}></input>
                    <label>Length({range})</label>

                    <input type="checkbox" defaultChecked={character} onChange={() => setCharacter(!character)}></input>
                    <label >Character</label>
                    <input type="checkbox" defaultChecked={number} onChange={() => setNumber(!number)}></input>
                    <label >Number</label>
                </div>
                <div className="btn">
                    <button className="gen" onClick={() => generatePassWord()}>Generate</button>
                    <button className="copy-icon" onClick={handleCopy}>{copied ? "Copied!" : "Copy"}</button>

                </div>

            </div>

        </>
    )
}

export default Content;