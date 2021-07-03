import React ,{useState} from 'react'

export default function Contact() {
      const [title, settitle] = useState("Contact app");
    return (
        <div>
            <header className="App-header">
                <h1>{title}</h1>
            </header>       
       </div>
    )
}
