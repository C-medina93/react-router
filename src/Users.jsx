const Users = ({user})=>{
    return(
    <>
      <h1>Users</h1>
      <ul>
        {
            user.map( user =>{
                return( 
                    <li key = {user.id}> {user.name}</li>
                );
            })
        }
      </ul>
    </>
    );
  };
export default Users;