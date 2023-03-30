export  const filterdata = (inputVal,allRestaurants) => {
    return allRestaurants.filter((restaurant)=>{
      return restaurant?.data?.name?.toLowerCase()?.includes(inputVal?.toLowerCase())
    })
  }