import React from "react"
import ReactDOM from "react-dom"

function Page() {
    return (
        <div>
          <header>
           <nav>
            <img src ="./react-logo.png" width="10px"/>
            <h1> Reasons I'm excited to learn React</h1>
           </nav>
        
         </header>
         <ol>
            <li>It's a popular library, so I'll be 
            able to fit in with the cool kids!</li>
            <li>I'm more likely to get a job as a developer
            if I know React</li>
         </ol>
         <footer> 
           <p>© 20xx last name here development. All rights reserved.</p>
         </footer>
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
