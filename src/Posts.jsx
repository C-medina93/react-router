const Posts = ({post})=>{
  return(
    <>
    <h1>Posts</h1>
    <ul>
      {
        post.map( post => {
          return(
            <li key ={post.id}> {post.title}</li>
        );
        })
      }
    </ul>
    </>
  );
};

export  default Posts;