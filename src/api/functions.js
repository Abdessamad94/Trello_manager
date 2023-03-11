import axios from "axios";
import { getBoard } from "./boards";
const token = localStorage.getItem("token");

export const getUser = async () => {
  const response = await axios.get(
    `https://api.trello.com/1/members/me?token=${token}&key=c6f34b581c35de2ce1660c00e4a2a027`
  );
  if (response.data) {
    return response.data;
  } else {
    throw new Error(response.data.message);
  }
};


export const checkBoards = async (idBoards) => {
  idBoards.forEach(idBoard => {
    getBoard(idBoard)
  });

};
