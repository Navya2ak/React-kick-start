import React from 'react'
function Test(props)
{
    return (
       <>
         <h1>
            Hey {props.name},This is my functional component
        </h1>  
        <p>There was a famous picture about a lady  </p> 
        <img src={process.env.PUBLIC_URL+"./lady.png"} alt="lady"></img>
       </> 
         )
}
export default Test