// import { useLocation } from "react-router";
// import Header from "../../components/header/Header";
// import Posts from "../../components/posts/Posts";
// import Sidebar from "../../components/sidebar/Sidebar";
// import "./homepage.css";
// import axios from "axios";
// import { useEffect,useState } from "react";

// export default function Homepage() {
// const [posts,setPosts] = useState([]);

// useEffect(()=>{
//   const fetchPosts = async () =>{
//     const res = await axios.get("/posts")
//     console.log(res);
//   } 
// })


  
//   const location = useLocation();
//   console.log(location);
//   return (
//     <>
//       <Header />
//       <div className="home">
//         <Posts />
//         <Sidebar />
//       </div>
//     </>
//   );
// }



import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}