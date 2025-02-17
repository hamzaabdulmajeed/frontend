{/* <Box */}
        // sx={{
          // Hide on small screens
        //   height: "auto",
        //   backgroundColor: "#F4F4ED",
        //   position: "relative",
        //   width: { xs: "0", md: "264px" },
        //   display: { xs: "none", md: "block" }, // Hide content on smaller screens
        // }}
    //   >
        {/* <Box
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
        </Box> */}
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
    //   </Box>
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
      {/* <Box
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
      </Box> */}