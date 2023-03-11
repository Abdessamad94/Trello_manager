import axios from "axios";

const token = localStorage.getItem("token");

export const getBoard = async (boardId) => {
    const response = await axios.get(
        `https://api.trello.com/1/boards/${boardId}?key=${import.meta.env.VITE_API_KEY}&token=${token}`
    );
        
    if (response.data) {
        return response.data;
    } else {
      throw new Error(response.data.message);
    }
};

