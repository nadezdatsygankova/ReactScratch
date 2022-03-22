import React from 'react'
import ReactDOM from 'react-dom'

/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */


function LearningReact (){
    return (<ol>
       <li> That is easy</li>
       <li> It is reausable </li>
    </ol>
    )
}

ReactDOM.render(<LearningReact/>, document.getElementById("root"));
