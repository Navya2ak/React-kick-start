import React from "react";
 class TestClasscomp extends React.Component
{
    // constructor(props)
    // {
    //     super(props)
    // }
    render()
    {
        return(
            <h2>Hey {this.props.name} This is a class component</h2>
        )
    }
}
export default TestClasscomp