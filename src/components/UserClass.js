import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           userInfo : {
            name : "swathi",
            location : "uk"
           }
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/akshaysaini7")
        const json = await data.json()

        this.setState({
            userInfo : json
        })
    }
    render(){
        const {login , followers , avatar_url} = this?.state?.userInfo

        // const {count , count1}  =this.state
        return (
            <div className="border border-current m-5">
                     {/* <h2>count :{count}</h2>
                     <button onClick={()=>{
                        this.setState({
                            count : this.state.count + 1
                        })
                     }}>click</button> */}
                     {/* <h2>count1 :{count1}</h2> */}

                     <img className="w-[200]" src={avatar_url}/>

             <h2>name :{login} class</h2>
             <h3>location :{followers}</h3>
             <h3>contact : golla@okok</h3>
            </div>
        )
        }
        }
        export default UserClass