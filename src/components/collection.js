// import React,{useState,useEffect} from 'react'

// const Collection = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//      fetch("https://reqres.in/api/users?page=1").then((response)=>{
//         console.log(response.json());
//      return response.json()
    
//     }).then((result)=>{
//         setData(result);
//         setLoading(false);
//         console.log(data);
//     })
//   }, [])
  
//   console.log("loading")
 
//   return (
//     <div>Collection</div>
//   )
// }
