import UserClass from "./UserClass"
import User from "./User"
import React from "react"

class AboutUs extends React.Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div className="m-5">
                im about us page
                <User name = {"swathi"} location={"madhanapalle"}/>
                <UserClass name = {"swathi"} location={"madhanapalle"}/>
            </div>
        )
    }
}

// const AboutUs = () => {
//     return(
//         <div>
//             im about us page
//             <User name = {"swathi"} location={"madhanapalle"}/>
//             <UserClass name = {"swathi"} location={"madhanapalle"}/>
//         </div>
//     )
// }
export default AboutUs