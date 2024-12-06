// "use client"
// import Image from "next/image";
// import styles from "./page.module.css";
// import ResponsiveAppBar from "../components/navbar/page";
// import BoxBasic from "../components/banner/page";
// import Main from "../components/main/page";
// import SimplePaper from "../components/footer/page";
// import React, { useContext, useState, useEffect } from 'react';
// import Footer from "../components/footer/page"
// import { FavoriteItem } from "./context";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useRouter } from 'next/navigation'
// // import ResponsiveAppBar from "../components/navbar/page";
// // import { ThemeContext } from './components/theme/context';
// // import {ThemeContext}  from  "./context"
// // import Page from "../components/";
// // import SignUp from "../components/signup/signup";
// // import Main from "./components/main/page";
// export default function Home() {
//   const [favorites, setFavorites] = useState([]);
//   const router = useRouter();

 

//   return (
//     <FavoriteItem.Provider value={{ favorites, setFavorites }}>

      
//     <div>
//       {/* <SignUp /> */}
//       <ToastContainer />
//       <ResponsiveAppBar />    
//       <BoxBasic />
//       <Main />
//       <Footer />
//       {/* <SimplePaper /> */}
//     </div>
    
//     </FavoriteItem.Provider>
//   );
// }
"use client";
import Image from "next/image";
import styles from "./page.module.css";
import ResponsiveAppBar from "../components/navbar/page";
import BoxBasic from "../components/banner/page";
import Main from "../components/main/page";
import Footer from "../components/footer/page";
import React, { useContext, useState, useEffect } from 'react';
import { FavoriteItem } from "./context";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [favorites, setFavorites] = useState([]);
  const router = useRouter();

  // useEffect(() => {
  //   // Helper function to get cookies
  //   const getCookie = (name) => {
  //     const value = `; ${document.cookie}`;
  //     const parts = value.split(`; ${name}=`);
  //     if (parts.length === 2) return parts.pop().split(';').shift();
  //   };

  //   const user = getCookie('user'); // Replace 'userId' with your cookie name

  //   if (!user) {
  //     router.push('/signin'); // Redirect to signin if user is not authenticated
  //   }
  // }, [router]);

  return (
    <FavoriteItem.Provider value={{ favorites, setFavorites }}>
      <div>
        <ToastContainer />
        <ResponsiveAppBar />
        <BoxBasic />
        <Main />
        <Footer />
      </div>
    </FavoriteItem.Provider>
  );
}
