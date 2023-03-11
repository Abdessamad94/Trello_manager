import axios from "axios";

const token = localStorage.getItem("token");

export const addCard = async (ListId, due,name,desc) => {
    const response = await axios.post(
      `https://api.trello.com/1/cards?idList=${ListId}&key=${import.meta.env.VITE_API_KEY}&token=${token}`, {
        due, 
        name,
        desc
      },{
        'Content-Type': 'application/json'
      });

    if (response.data) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  };
  
