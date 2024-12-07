"use client";

import * as React from "react";
import Box from "@mui/material/Box";
// import resturantDetail from ""
import Typography from "@mui/material/Typography";

// import DropdownButton from "../../components/button/page.js";
import dog from "../../../assets/Dogicon.png";
import senior from "../../../assets/Seniorsicon.png";
import medal from "../../../assets/Medalicon.png";
import stroller from "../../../assets/Strollericon.png";
import parking from "../../../assets/parking.png";
import pet from "../../../assets/pet.png";
import Hotle from "../../../assets/hotel.jpeg";
import DetailScard from "../../../components/detailScard/page";
import CardS from "../../../components/cards/page";
import Image from "next/image";
import FoodI from "../../../assets/food.png";
// import Link from '@mui/material/Link'
import Link from "next/link";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
// import TextField from '@mui/material/TextField';
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Divider } from "@mui/material";
import { useEffect } from "react";
import ResponsiveAppBar from "@/components/navbar/page";
import Page from "@/components/footer/page"
import { FavoriteItem } from "../../context";
import { useContext} from "react";


function IndeterminateCheckbox({
  parentLabel = "Parent",
  childLabels = ["Child 1", "Child 2", "Child 3", "Child 4"],
}) {
  const [checked, setChecked] = React.useState(
    Array(childLabels.length).fill(false)
  );

  const handleParentChange = (event) => {
    const newChecked = Array(childLabels.length).fill(event.target.checked);
    setChecked(newChecked);
  };

  const handleChildChange = (index) => (event) => {
    const newChecked = [...checked];
    newChecked[index] = event.target.checked;
    setChecked(newChecked);
  };

  // Determine parent checkbox state based on child checkboxes
  const allChecked = checked.every(Boolean);
  const someChecked = checked.some(Boolean) && !allChecked;

  const children = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      {childLabels.map((label, index) => (
        <FormControlLabel
          key={index} // Use index as key for mapping
          label={label}
          control={
            <Checkbox
              checked={checked[index]}
              onChange={handleChildChange(index)}
            />
          }
        />
      ))}
    </Box>
  );

  return (
    <div>
      <FormControlLabel
        label={parentLabel}
        control={
          <Checkbox
            checked={allChecked}
            indeterminate={someChecked}
            onChange={handleParentChange}
          />
        }
      />
      {children}
    </div>
  );
}
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function DropdownButton({ buttonLabel = "Options", menuItems = [] }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        sx={{
          backgroundColor: "transparent",
          color: "black",
          "&:hover": {
            backgroundColor: "transparent",
          },
          borderRadius: "4px",
          textTransform: "none",
          width: "100px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {buttonLabel}
        <ArrowDropDownIcon sx={{}} />
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={handleClose}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

const restaurants = [
  {
    time: "10",
    image: Hotle,
    rating: "4",
    name: "Nina's cafe",
    kilometer: "3KM",
  },
  {
    time: "10",
    image: Hotle,
    rating: "4",
    name: "Nina's cafe",
    kilometer: "3KM",
  },
  {
    time: "10",
    image: Hotle,
    rating: "4",
    name: "Nina's cafe",
    kilometer: "3KM",
  },
  {
    time: "10",
    image: Hotle,
    rating: "4",
    name: "Nina's cafe",
    kilometer: "3KM",
  },
];

const food = [
  {
    description: "kids eat free",
    image: FoodI,
    name: "Bibo's",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
    price: "10$",
  },
  {
    description: "kids eat free",
    image: FoodI,
    name: "Bibo's",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
    price: "20$",
  },
  {
    description: "kids eat free",
    image: FoodI,
    name: "Bibo's",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
    price: "30$",
  },
  {
    description: "kids eat free",
    image: FoodI,
    name: "Bibo's",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
    price: "40$",
  },
  {
    description: "kids eat free",
    image: FoodI,
    name: "Bibo's",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
    price: "50$",
  },
  {
    description: "kids eat free",
    image: FoodI,
    name: "Bibo's",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
    price: "60$",
  },
  {
    description: "kids eat free",
    image: FoodI,
    name: "Bibo's",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
    price: "70$",
  },
  {
    description: "kids eat free",
    image: FoodI,
    name: "Bibo's",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
    price: "80$",
  },
  {
    description: "kids eat free",
    image: FoodI,
    name: "Bibo's",
    rating: "3",
    distance: "10KM",
    time: "30 mint",
    price: "90$",
  },
];

console.log(food);
// ../../assets/phone.png
export default function DetailUI() {
  const [selectedFood, setSelectedFood] = useState(null);
  const [value, setValue] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [cart, setCart] = useState([]);
  // const [favorites, setFavorites] = useState([]);
  // const { favorites, setFavorites } = useContext(FavoriteItem);
 
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, [setCart]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClos = () => {
    setAnchorEl(null);
  };

  const removeFromCart = (index) => {
    // setCart((prevCart) => prevCart.filter((_, i) => i !== index));
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((_, i) => i !== index);
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
      return updatedCart; // Update state
    });
  };

  const handleClickOpen = (foodItem) => {
    setSelectedFood(foodItem); // Set the selected food data
    setOpen(true); // Open the dialog
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedFood(null); // Clear the selected food data
  };

  const addToCart = () => {
    if (selectedFood) {
      const updatedCart = [...cart, selectedFood];

      // Update state and localStorage
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      handleClose(); // Close the dialog after adding
      console.log(`Added to cart: ${selectedFood.name}`, updatedCart);
    }
  };

  return (

    // <FavoriteItem.Provider value={{ favorites, setFavorites }}>
    <Box>

          <ResponsiveAppBar/>

    <Box
      component="section"
      sx={{
        height: "auto", // Allow auto height for responsiveness
        width: "100%", // Full width
        backgroundColor: "#F4F4ED",
        display: "flex",
        flexWrap: "wrap",
      }}
    >

      <Box
        sx={{
          // Hide on small screens
          height: "auto",
          backgroundColor: "#F4F4ED",
          position: "relative",
          width: { xs: "0", md: "264px" },
          display: { xs: "none", md: "block" }, // Hide content on smaller screens
        }}
      >
        <Box
          width="184px"
          height="564px"
          backgroundColor="#F4F4ED"
          top="42px"
          left="48px"
          position="absolute"
        >
          <Box>Featured Special</Box>
          <Box
            // width={184}
            // height={106}
            display="flex"
            flexDirection="column"
            gap={4}
          >
            {restaurants.map((restaurant, index) => (
              <DetailScard
                key={index}
                name={restaurant.name}
                image={restaurant.image}
                rating={restaurant.rating}
                time={restaurant.time}
                kilometer={restaurant.kilometer}
              />
            ))}
          </Box>
        </Box>
        {/* <Box
          width="196px"
          height="1078px"
          backgroundColor="#F4F4ED"
          top="596px"
          left="48px"
          position="absolute"
        >
          <Box display="flex" justifyContent="space-between" borderBottom={1}>
            <Typography width={113} color="#030900">
              Filter
            </Typography>
          </Box>
          <Box width="196px" height="1026px" backgroundColor="white">
            <IndeterminateCheckbox
              parentLabel=" Establishment Type"
              childLabels={[
                "Restaurants",
                "Quick bites",
                "Dessert",
                "Coffee & Tea",
              ]}
            />
            <br />

            <IndeterminateCheckbox
              parentLabel="Special offers"
              childLabels={["Restaurant with special deal or promotion"]}
            />
            <IndeterminateCheckbox
              parentLabel="Meals"
              childLabels={["Breakfast", "Lunch", "Dinner"]}
            />
            <IndeterminateCheckbox
              parentLabel="Cuisines"
              childLabels={["Ameracan", "Asian", "Bar", "Mexican"]}
            />
            <IndeterminateCheckbox
              parentLabel="Dietary Restrictions"
              childLabels={[
                "Vegetarian Friendly",
                "Vegan Options",
                "Gluten Free options",
                "Hala",
              ]}
            />
          </Box>
        </Box> */}
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "90%", md: "744px" }, // Full width on extra-small and small screens, fixed on medium+
          height: "auto",
          backgroundColor: "white",
          position: "relative",
          padding: { xs: "10px", md: "20px" }, // Smaller padding on small screens
          margin: "0 auto", // Center content horizontally
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "56px",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            flexDirection: { xs: "column", sm: "row" }, // Stack on extra-small screens
          }}
        >
          {/* <Button
            variant="text"
            sx={{ color: "black", fontSize: { xs: "12px", sm: "16px" } }}
          >
            <Link href="/" underline="hover">
              Home
            </Link>
          </Button> */}
          <Box>
            {/* Cart Button */}
            <Button
              onClick={handleClick}
              sx={{ fontSize: { xs: "10px", sm: "14px" } }}
            >
              {cart?.length}
              <ShoppingCartIcon fontSize="small" />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClos}
              MenuListProps={{
                "aria-labelledby": "cart-button",
              }}
            >
              {/* Display items in the cart */}
              {cart?.length > 0 ? (
                cart.map((item, index) => (
                  <MenuItem
                    key={index}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Box display="flex" flexDirection="column" width="100%">
                      <Image
                        src={item.image}
                        width={250}
                        height={100}
                        alt={item.name}
                        style={{ borderRadius: 4 }}
                      />
                      <Box ml={2} flex="1">
                        <Typography
                          fontWeight="bold"
                          fontSize={{ xs: "12px", sm: "14px" }}
                        >
                          {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          ⭐ {item.rating} · ⏱ {item.time} min · 📍{" "}
                          {item.distance} <br />
                          Price: {item.price}
                        </Typography>
                      </Box>
                      <Button
                        variant="text"
                        color="error"
                        size="small"
                        onClick={() => removeFromCart(index)} // Remove by index
                        sx={{
                          alignSelf: "center",
                          fontSize: { xs: "10px", sm: "12px" },
                        }}
                      >
                        Remove From Cart
                      </Button>
                    </Box>
                    <Divider sx={{ width: "100%", my: 1 }} />
                  </MenuItem>
                ))
              ) : (
                <MenuItem>
                  <Typography>No items in cart</Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
          <TextField
            variant="outlined"
            placeholder="Search..."
            sx={{
              width: { xs: "100%", sm: "300px" }, // Full-width search on small screens
              marginTop: { xs: "10px", sm: "0" }, // Add margin for stacked layout
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", sm: "space-between" }, // Center items on small screens
            gap: 2,
            position: "relative",
            marginTop: { xs: "80px", sm: "0px" },
          }}
        >
          {food.map((item, index) => (
            <Box
              key={index}
              onClick={() => handleClickOpen(item)} // Pass the clicked food item
              sx={{
                width: { xs: "100%", sm: "calc(50% - 10px)", md: "200px" }, // Adjust width for breakpoints
                height: "auto",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CardS
                key={index}
                description={item.description}
                image={item.image}
                rating={item.rating}
                name={item.name}
                distance={item.distance}
                time={item.time}
              />
            </Box>
          ))}

          {/* Dialog to display selected food details */}
          <Dialog onClose={handleClose} open={open}>
            <DialogTitle>
              {selectedFood?.name}
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                {selectedFood ? (
                  <>
                    <Box
                      sx={{
                        width: { xs: "100%", sm: "500px" }, // Image adjusts to container
                        height: "auto",
                        borderRadius: "8px",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={selectedFood?.image}
                        alt={selectedFood?.name}
                        style={{width:"100%", height:"100%"}}
                        
                        
                      />
                    </Box>
                    <Typography variant="body1" mt={2}>
                      {selectedFood.description}
                    </Typography>
                    <Typography variant="body2" mt={1}>
                      Rating: {selectedFood.rating}
                    </Typography>
                    <Typography variant="body2" mt={1}>
                      Distance: {selectedFood.distance}
                    </Typography>
                    <Typography variant="body2" mt={1}>
                      Estimated Time: {selectedFood.time}
                    </Typography>
                    <Typography variant="body2" mt={1}>
                      Price: {selectedFood.price}
                    </Typography>
                  </>
                ) : (
                  <Typography>No food selected</Typography>
                )}
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
              <Button onClick={() => addToCart()}>Add to Cart</Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
      {/* <Box> */}
      {/* <Box
  position="absolute"
  top="120px"
  left="20px"
  display="flex"
  flexWrap="wrap"
  gap={4}
>
  {food.map((foodItem, index) => (
    <Link
      key={index}
      href={{
        pathname: `/restaurant/${index}`, // The dynamic route
        query: {
          description: foodItem.description,
          image: foodItem.image.src,
          rating: foodItem.rating,
          name: foodItem.name,
          distance: foodItem.distance,
          time: foodItem.time,
        },
      }}
      passHref
    >
      
        <Fcard
          description={foodItem.description}
          image={foodItem.image}
          rating={foodItem.rating}
          name={foodItem.name}
          distance={foodItem.distance}
          time={foodItem.time}
        />
      
    </Link>
  ))}
</Box> */}

      {/* <Box
            // width={882}
            // height={648}
            position="absolute"
            top="120px"
            left="20px"
            display="flex"
            flexWrap="wrap"
            // flexDirection="column"
            
            gap={4}
          >
            {food.map((food, index) => (
              <Fcard
                key={index}
                description={food.description}
                image={food.image}
                rating={food.rating}
                name={food.name}
                distance={food.distance}
                time={food.time}
              />
            ))}
          </Box> */}
      {/* </Box> */}
      <Box
        sx={{
          width: { xs: "0", md: "168px" }, // Hide on small screens
          height: "auto",
          backgroundColor: "#DAE7C9",
          position: "relative",
          display: { xs: "none", md: "block" }, // Hide content on smaller screens
          flexDirection: "column",
          alignItems: "center",
          padding: "30px 0",
        }}
      >
        <Box
          width="128px"
          height="500px"
          backgroundColor="#DAE7C9"
          py="30px"
          my="50px"
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            backgroundColor="white"
            my="12px"
            border="1px solid"
            gap={2}
          >
            <Image src={dog} width={48} height={48} alt="Wifi Icon" />

            <Typography> Pet Friendly </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            backgroundColor="white"
            my="12px"
            border="1px solid"
            gap={2}
          >
            <Image src={stroller} width={48} height={48} alt="Wifi Icon" />

            <Typography> Kids </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            backgroundColor="white"
            my="12px"
            border="1px solid"
            gap={2}
          >
            <Image src={senior} width={48} height={48} alt="Wifi Icon" />
            <Typography> Seniors </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            backgroundColor="white"
            my="12px"
            border="1px solid"
            gap={2}
          >
            <Image src={medal} width={48} height={48} alt="Wifi Icon" />
            <Typography> Veterans </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
    <Page />
    </Box>

    // </FavoriteItem.Provider>

  );
}

