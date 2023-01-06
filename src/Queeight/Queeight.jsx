import React,{Component} from "react";

class Queeight extends Component{ 

    constructor(props){ 
        super(props)
        this.state = { 
            users:[],
            isloading:false,
            isError:false
        }
    }

    //async function get request

      async componentDidMount(){ 
        this.setState({isloading:true})
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
         if (response.ok){ 
            const users =  await response.json()
            console.log(users);
            this.setState({users,isloading:false})

         }else{ 
            this.setState({isError:true, isloading:false})
         }
      }
      
      renderTableHeader = ()=>{ 
        return Object.keys(this.state.users[0]).map(attr => <th key={attr}> 
        {attr.toUpperCase()} 
        </th>)
      }


      renderTableRow =()=>{ 
      return this.state.users.map(user=>{ 
        return ( 
            <tr key={user.id}> 
            <td>{user.id}</td> 
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td> 
                {`${user.address.street}, ${user.address.city}`}
            </td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
            <td>{user.company.name}</td>
            </tr>
            
        )
      })
      }


    render(){ 
        const  [users, isloading, isError] = this.setState

        if(isloading){ 
            return <div>isloading...</div>
        }

        if(isError){ 
            return <div>Error...</div>
        }
        return users.length > 0
        ? ( 
            <table> 
                <thead> 
                    <tr> 
                     {this.renderTableHeader()}
                    </tr>
                </thead>
                <tbody> 
                    {this.renderTableRow()}
                </tbody>
            </table>
        ):( 
            <div> No Users</div>
        )
            
        
    }
};

export default Queeight;
