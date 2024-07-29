import axios from "axios";

export const getRecipesList = async (tags = null, size) => {
  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/list",
    params: { from: "0", size: size || "20", tags },
    headers: {
      "X-RapidAPI-Key": "cfc2d650bcmsh17622b47f7138fbp1204edjsna0908b9fa7cf",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };
  return await axios.request(options);
};
