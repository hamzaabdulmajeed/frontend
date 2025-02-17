"use client";

import * as React from "react";
import { useState, useContext, useEffect } from "react";


import Box from "@mui/material/Box";
// import resturantDetail from ""
import Typography from "@mui/material/Typography";
// import ResponsiveAppBar from "../navbar/page";
import DropdownButton from "../button/page";
// import DropDown from "../menuItems/page";
import wifi from "../../assets/wifi.png";
import ac from "../../assets/ac.png";
import events from "../../assets/events.png";
import outdoor from "../../assets/outdoor.png";
import parking from "../../assets/parking.png";
import pet from "../../assets/pet.png";
import Pizza from "../../assets/pizza.png";
import RestaurantCard from "../Scard/page";
import Fcard from "../Fcard/page";
import Image from "next/image";
import FoodI from "../../assets/food.png";
// import Link from '@mui/material/Link'
import Link from "next/link";
import { Label } from "@mui/icons-material";
import { FavoriteItem } from "../../app/context";
import "./page.css"

const restaurants = [
  {
    description: "Indulge in a culinary journey like no other at flavourFusion",
    image: Pizza,
    rating: 3,
    sales: "50% Off",
    discount: "upto $100",
    Category: "Crab rangoon dip",
  },
  {
    description: "Indulge in a culinary journey like no other at flavourFusion",
    image: Pizza,
    rating: "4",
    sales: "50% Off",
    discount: "upto $100",
    Category: "Crab rangoon dip",
  },
  {
    description: "Indulge in a culinary journey like no other at flavourFusion",
    image: Pizza,
    rating: "4",
    sales: "50% Off",
    discount: "upto $100",
    Category: "Crab rangoon dip",
  },
  {
    description: "Indulge in a culinary journey like no other at flavourFusion",
    image: Pizza,
    rating: "4",
    sales: "50% Off",
    discount: "upto $100",
    Category: "Gyoza",
  },
];

// const food = [
//   {
//     id: "0",
//     description: "kids eat free",
//     image: FoodI,
//     name: "restaurant 1",
//     rating: "3",
//     distance: "10KM",
//     time: "30 mint",
//     Category: "sharin plates",
//   },
//   {
//     id: "1",
//     description: "kids eat free",
//     image: FoodI,
//     name: "restaurant 2",
//     rating: "3",
//     distance: "10KM",
//     time: "30 mint",
//     Category: "Crab rangoon dip",
//   },
//   {
//     id: "2",
//     description: "kids eat free",
//     image: FoodI,
//     name: "restaurant 3",
//     rating: "3",
//     distance: "10KM",
//     time: "30 mint",
//     Category: "Gyoza",
//   },
//   {
//     id: "3",
//     description: "kids eat free",
//     image: FoodI,
//     name: "restaurant 4",
//     rating: "3",
//     distance: "10KM",
//     time: "30 mint",
//     Category: "Fried tofu",
//   },
//   {
//     id: "4",
//     description: "kids eat free",
//     image: FoodI,
//     name: "restaurant 5",
//     rating: "3",
//     distance: "10KM",
//     time: "30 mint",
//     Category: "House salad",
//   },
//   {
//     id: "6",
//     description: "kids eat free",
//     image: FoodI,
//     name: "restaurant 6",
//     rating: "3",
//     distance: "10KM",
//     time: "30 mint",
//     Category: "Edamame",
//   },
//   {
//     id: "7",
//     description: "kids eat free",
//     image: FoodI,
//     name: "restaurant 7",
//     rating: "3",
//     distance: "10KM",
//     time: "30 mint",
//     Category: "Honey garlic shrimp",
//   },
//   {
//     id: "8",
//     description: "kids eat free",
//     image: FoodI,
//     name: "restaurant 8",
//     rating: "3",
//     distance: "10KM",
//     time: "30 mint",
//     Category: "Maru fried rice",
//   },
//   {
//     id: "9",
//     description: "kids eat free",
//     image: FoodI,
//     name: "restaurant 9",
//     rating: "3",
//     distance: "10KM",
//     time: "30 mint",
//     Category: "Roasted shishito",
//   },
//   {
//     id: "10",
//     description: "kids eat free",
//     image: FoodI,
//     name: "restaurant 10",
//     rating: "3",
//     distance: "10KM",
//     time: "30 mint",
//     Category: "Seaweed salad",
//   },
//   // {
//   //   id: "11",
//   //   description: "kids eat free",
//   //   image: FoodI,
//   //   name: "restaurant 11",
//   //   rating: "3",
//   //   distance: "10KM",
//   //   time: "30 mint",
//   //   Category: "",
//   // },
//   // {
//   //   id: "12",
//   //   description: "kids eat free",
//   //   image: FoodI,
//   //   name: "restaurant 12",
//   //   rating: "3",
//   //   distance: "10KM",
//   //   time: "30 mint",
//   //   Category: "House salad",
//   // },
//   // {
//   //   id: "13",
//   //   description: "kids eat free",
//   //   image: FoodI,
//   //   name: "restaurant 13",
//   //   rating: "3",
//   //   distance: "10KM",
//   //   time: "30 mint",
//   //   Category: "",
//   // },
//   // {
//   //   id: "14",
//   //   description: "kids eat free",
//   //   image: FoodI,
//   //   name: "restaurant 14",
//   //   rating: "3",
//   //   distance: "10KM",
//   //   time: "30 mint",
//   //   Category: "",
//   // },
//   // {
//   //   id: "15",
//   //   description: "kids eat free",
//   //   image: FoodI,
//   //   name: "restaurant 15",
//   //   rating: "3",
//   //   distance: "10KM",
//   //   time: "30 mint",
//   //   Category: "Honey garlic shrimp",
//   // },
//   // {
//   //   id: "16",
//   //   description: "kids eat free",
//   //   image: FoodI,
//   //   name: "restaurant 16",
//   //   rating: "3",
//   //   distance: "10KM",
//   //   time: "30 mint",
//   //   Category: "Honey garlic shrimp",
//   // },
//   // {
//   //   id: "17",
//   //   description: "kids eat free",
//   //   image: FoodI,
//   //   name: "restaurant 17",
//   //   rating: "3",
//   //   distance: "10KM",
//   //   time: "30 mint",
//   //   Category: "Honey garlic shrimp",
//   // },
//   // {
//   //   id: "18",
//   //   description: "kids eat free",
//   //   image: FoodI,
//   //   name: "restaurant 18",
//   //   rating: "3",
//   //   distance: "10KM",
//   //   time: "30 mint",
//   //   Category: "",
//   // },
//   // {
//   //   id: "19",
//   //   description: "kids eat free",
//   //   image: FoodI,
//   //   name: "restaurant 19",
//   //   rating: "3",
//   //   distance: "10KM",
//   //   time: "30 mint",
//   //   Category: "",
//   // },
//   // {
//   //   id: "20",
//   //   description: "kids eat free",
//   //   image: FoodI,
//   //   name: "restaurant 20",
//   //   rating: "3",
//   //   distance: "10KM",
//   //   time: "30 mint",
//   //   Category: "Roasted shishito",
//   // },
//   // {
//   //   id: "21",
//   //   description: "kids eat free",
//   //   image: FoodI,
//   //   name: "restaurant 21",
//   //   rating: "3",
//   //   distance: "10KM",
//   //   time: "30 mint",
//   //   Category: "",
//   // },
// ];

// const getUniqueData = (data, property) => {
//   let newValue = data.map((curElem) => {
//     return curElem[property];
//   });
//   return (newValue = ["All", ...new Set(newValue)]);
// };
// export default function Main() {
//   const { favorites, setFavorites } = useContext(FavoriteItem);
//   const [food, setFood] = useState([]); // State to store food items fetched from the backend
//   const [selectedCategory, setSelectedCategory] = useState("All");


//   useEffect(() => {
//     // Fetch food data from the backend
//     async function fetchFoods() {
//       try {
//         const response = await fetch("http://localhost:3002/foods/getFood", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });

//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json(); // Parse the JSON data
//         setFood(data); // Update the food state with fetched data
//       } catch (error) {
//         console.error("Error fetching food data:", error);
//       }
//     }

//     fetchFoods();
//   }, []); // Run this effect once on component mount


//   useEffect(() => {
//     const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
//     setFavorites(storedFavorites);
//   }, [setFavorites]);

//   console.log("favorites", favorites);
 
//   const onAddToFavorites = (foodItem) => {
 
//     const isAlreadyFavorite = favorites.some((fav) => fav.id === foodItem.id);

//   if (!isAlreadyFavorite) {
//     const updatedFavorites = [...favorites, foodItem];
//     setFavorites(updatedFavorites);
//     localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//   }
// };

//   // useEffect(() => {
//   //   const storage = localStorage.getItem("favorites");
//   //   if (storage) {
//   //     const favData = JSON.parse(storage);
//   //     init(favData);
//   //   }

//   // }, []);

//   const CategoryOnlyData = getUniqueData(food, "Category");

//   const filteredFood =
//     selectedCategory === "All"
//       ? food
//       : food.filter((item) => item.Category === selectedCategory);
// return(
//   <Box
//   component="section"
//   sx={{
//     height: "100%", 
//     width: "100%", 
//     display: "flex",
//     flexDirection: {
//       xs: "column", 
//       md: "row", 
//     },
//     overflowX: "hidden",
//   }}
// >
//   {/* Left Section */}
//   <Box
//     sx={{
//       width: {
//         xs: "100%",
//        md: "30%", 
//       },
//       height: "auto",
//       backgroundColor: "#F4F4ED",
//       padding: {
//         xs: "16px", 
//         md: "0", 
//       },
//     }}
//   >
//     <Box
//       sx={{
//         width: "90%", // Relative width for better responsiveness
//         height: "auto",
//         backgroundColor: "#F4F4ED",
//         margin: "auto",
//         position: "relative",
//         paddingTop: "20px",
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           borderBottom: "1px solid",
//           pb: 2,
//           mb: 2,
//         }}
//       >
//         <Typography sx={{ fontSize: "18px", color: "#030900" }}>
//           Menu
//         </Typography>
//         <Typography>All Items</Typography>
//       </Box>

//       <Box
//         sx={{
//           maxHeight: "308px",
//           overflowY: "auto",
//         }}
//       >
//         {CategoryOnlyData.map((category, index) => (
//           <button
//             key={index}
//             onClick={() => setSelectedCategory(category)}
//             style={{
//               backgroundColor:
//                 selectedCategory === category ? "#ccc" : "#fff",
//               border: "none",
//               cursor: "pointer",
//               margin: "5px 0",
//               padding: "10px",
//               textAlign: "left",
//               width: "100%",
//             }}
//           >
//             {category}
//           </button>
//         ))}
//       </Box>
//     </Box>

//     <Box
//       sx={{
//         width: "90%",
//         margin: "auto",
//         backgroundColor: "#F4F4ED",
//         mt: 4,
//         pb: 2,
//       }}
//     >
//       <DropdownButton buttonLabel="Daily Special" />
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           gap: 2,
//           mt: 2,
//         }}
//       >
//         {restaurants.map((restaurant, index) => (
//           <RestaurantCard
//             key={index}
//             description={restaurant.description}
//             image={restaurant.image}
//             rating={restaurant.rating}
//             sales={restaurant.sales}
//             discount={restaurant.discount}
//           />
//         ))}
//       </Box>
//     </Box>

//     <Box
//       sx={{
//         width: "90%",
//         margin: "auto",
//         mt: 4,
//         textAlign: "center",
//       }}
//     >
//       <Typography sx={{ fontSize: "18px", color: "#030900" }}>
//         Amenities
//       </Typography>
//     </Box>

//     <Box
//       sx={{
//         width: "90%",
//         margin: "auto",
//         display: "flex",
//         flexWrap: "wrap",
//         justifyContent: "space-between",
//         mt: 2,
//       }}
//     >
//       {[wifi, outdoor, pet, parking, ac, events].map((icon, index) => (
//         <Image
//           key={index}
//           src={icon}
//           width={80}
//           height={80}
//           alt={`Icon ${index + 1}`}
//           style={{ marginBottom: "10px" }}
//         />
//       ))}
//     </Box>
//   </Box>

//   {/* Right Section */}
//   <Box
//     sx={{
//       width: {
//         xs: "100%", // Full width for small screens
//         md: "70%", // 70% of the viewport for medium and larger screens
//       },
//       height: "auto",
//       backgroundColor: "white",
//       padding: "16px",
//     }}
//   >
//     <Box
//       sx={{
//         width: "90%",
//         // margin: "auto",
//         backgroundColor: "white",
//         p: 2,
//         borderRadius: "10px",
//       }}
//     >
//       <Typography variant="h5" sx={{ color: "#030900" }}>
//         {selectedCategory} <br />
//         {filteredFood.length} Items
//       </Typography>
//     </Box>

//     <Box
//       sx={{
//         display: "flex",
//         flexWrap: "wrap",
//         gap: 2,
//         mt: 4,
//         justifyContent: {
//           xs: "center", // Centered items for small screens
//           md: "flex-start", // Align to the left for larger screens
//         },
//       }}
//     >
//       {filteredFood.map((foodItem, index) => (
//         <Fcard
//           key={index}
//           description={foodItem.description}
//           image={foodItem.image}
//           rating={foodItem.rating}
//           name={foodItem.name}
//           id={foodItem.id}
//           isFavorite={favorites.some((fav) => fav.id === foodItem.id)}
//           addToFavorites={() => onAddToFavorites(foodItem)}
//         />
//       ))}
//     </Box>
//   </Box>
// </Box>

// )
// }


export default function Main() {
  const { favorites, setFavorites } = useContext(FavoriteItem);
  const [food, setFood] = useState([]); // State to store food items fetched from the backend
  // const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    // Define an async function inside the useEffect
    const fetchFoods = async () => {
      try {
        const response = await fetch("http://localhost:3002/foods/getFood", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const data = await response.json(); // Parse the JSON data
        setFood(data); // Update the food state with fetched data
      } catch (error) {
        console.error("Error fetching food data:", error);
      }
    };
  
    // Call the async function
    fetchFoods();
  }, []); // Empty dependency array to run this effect only once on mount
   // Run this effect once on component mount

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(storedFavorites);
  }, [setFavorites]);

  console.log("favorites", favorites);

  const onAddToFavorites = (foodItem) => {
    const isAlreadyFavorite = favorites.some((fav) => fav.id === foodItem.id);

    if (!isAlreadyFavorite) {
      const updatedFavorites = [...favorites, foodItem];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };
  const getUniqueData = (data, property) => {
    let newValue = data.map((curElem) => {
      return curElem[property];
    });
    return (newValue = ["All", ...new Set(newValue)]);
  };
  // Compute unique categories dynamically from food state
  const CategoryOnlyData = getUniqueData(food, "category");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFood =
    selectedCategory === "All"
      ? food
      : food.filter((item) => item.category === selectedCategory);

return(
  <Box
  component="section"
  sx={{
    height: "100%", 
    width: "100%", 
    display: "flex",
    flexDirection: {
      xs: "column", 
      md: "row", 
    },
    overflowX: "hidden",
  }}
>
  {/* Left Section */}
  <Box
    sx={{
      width: {
        xs: "100%",
       md: "25%", 
      },
      borderRight: "1px solid",
      height: "auto",
      backgroundColor: "#F4F4ED",
      padding: {
        xs: "16px", 
        md: "0", 
      },
    }}
  >
    <Box
      sx={{
        width: "90%", // Relative width for better responsiveness
        height: "auto",
        backgroundColor: "#F4F4ED",
        margin: "auto",
        position: "relative",
        paddingTop: "20px",

      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid",
          pb: 2,
          mb: 2,
        }}
      >
        <Typography sx={{ fontSize: "18px", color: "#030900" }}>
          Menu
        </Typography>
        <Typography>All Items</Typography>
      </Box>

      <Box
        sx={{
          maxHeight: "308px",
          overflowY: "auto",
        }}
      >
        {CategoryOnlyData.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            style={{
              backgroundColor:
                selectedCategory === category ? "#ccc" : "#fff",
              border: "none",
              cursor: "pointer",
              margin: "5px 0",
              padding: "10px",
              textAlign: "left",
              width: "100%",
            }}
          >
            {category}
          </button>
        ))}
      </Box>
    </Box>

    <Box
      sx={{
        width: "90%",
        margin: "auto",
        backgroundColor: "#F4F4ED",
        mt: 4,
        pb: 2,
      }}
    >
      {/* <DropdownButton buttonLabel="Daily Special" /> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 2,
        }}
      >
        {restaurants.map((restaurant, index) => (
          <RestaurantCard
            key={index}
            description={restaurant.description}
            image={restaurant.image}
            rating={restaurant.rating}
            sales={restaurant.sales}
            discount={restaurant.discount}
          />
        ))}
      </Box>
    </Box>

    <Box
      sx={{
        width: "90%",
        margin: "auto",
        mt: 4,
        textAlign: "center",
      }}
    >
      <Typography sx={{ fontSize: "18px", color: "#030900" }}>
        Amenities
      </Typography>
    </Box>

    <Box
      sx={{
        width: "90%",
        margin: "auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        mt: 2,
      }}
    >
      {[wifi, outdoor, pet, parking, ac, events].map((icon, index) => (
        <Image
          key={index}
          src={icon}
          width={80}
          height={80}
          alt={`Icon ${index + 1}`}
          style={{ marginBottom: "10px" }}
        />
      ))}
    </Box>
  </Box>

  {/* Right Section */}
  <Box
    sx={{
      width: {
        xs: "100%", // Full width for small screens
        md: "75%", // 70% of the viewport for medium and larger screens
      },
      height: "auto",
      backgroundColor: "#F4F4ED",
      padding: "16px",
    }}
  >
    <Box
      sx={{
        width: "90%",
        // margin: "auto",
        backgroundColor: "#F4F4ED",
        p: 2,
        borderRadius: "10px",
      }}
    >
      <Typography variant="h5" sx={{ color: "#030900" }}>
        {selectedCategory} <br />
        {filteredFood.length} Items
      </Typography>
    </Box>

    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 5,
        mt: 4,
        justifyContent: {
          xs: "center", // Centered items for small screens
          md: "flex-start", // Align to the left for larger screens
        },
      }}
    >
      {filteredFood.map((foodItem, index) => (
        <Fcard
          key={index}
          description={foodItem.description}
          image={foodItem.image}
          rating={foodItem.rating}
          name={foodItem.name}
          id={foodItem.id}
          isFavorite={favorites.some((fav) => fav.id === foodItem.id)}
          addToFavorites={() => onAddToFavorites(foodItem)}
        />
      ))}
    </Box>
  </Box>
</Box>

)
}
