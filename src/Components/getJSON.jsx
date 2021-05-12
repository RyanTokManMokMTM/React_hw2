import React from 'react'
import $ from 'jquery'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'

const following = "following"
const follower = "follower"

class GetJSON extends React.Component{

    
    constructor(props){
        
        super(props)
        this.state = {
            username : "",
            avatar :"",
            name : "",
            created : "",
            followers : 0 ,
            following : 0
        }
    }

    componentDidMount(){
        $.get(this.props.source,(result)=>{
            console.log(result)
            let isExist = result
            if(isExist){
                this.setState({
                    username : result.login,
                    avatar : result.avatar_url,
                    name : result.name,
                    created : result.created_at,
                    followers : result.followers,
                    following : result.following,
                })
            }
        })
    }

    componentWillUnmount(){

    }

    render(){
        return(
            <div>
              
                <Avatar alt="Remy Sharp" src={this.state.avatar} />
                <div>  <Chip label=  {this.state.name} variant="outlined" /></div>
                <div>  <Chip label= {this.state.username} variant="outlined" /></div>
                <div> <Chip label= {follower + ":" + this.state.followers} variant="outlined" /></div>
                <div>  <Chip label= {following + ":" + this.state.following} variant="outlined" /></div>
                <div>  <Chip label= {this.state.created} variant="outlined" /></div>


            </div>
        )
    }


}

export default GetJSON