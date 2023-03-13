import axios from "axios";
import { getBoard,createBoard } from "./boards";
// const token = localStorage.getItem("token");

export const getUser = async (token) => {
  const response = await axios.get(
    `https://api.trello.com/1/members/me?token=${token}&key=c6f34b581c35de2ce1660c00e4a2a027`
  );
  if (response.data) {
    response.data.hasboard = ""
    const idBoards = response.data.idBoards

    idBoards.forEach(element => {
      // console.log("hellow: ",element)
      const board = getBoard(element,token)
      board.then((data) => {
        console.log(data === import.meta.env.VITE_BOARD_NAME)
        // if(data === import.meta.env.VITE_BOARD_NAME){
        //   response.data.hasboard = element
        //   return;
        // }else{
        //   const res = createBoard(token)
        //   res.then((result) =>{
        //     console.log(result)
        //   })
        //   return;
        // }
      });
      
    });

    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  } else {
    throw new Error(response.data.message);
  }
};

export const getUserAvatar = async (userId, token) => {
  const response = await axios.get(
    `https://api.trello.com/1/members/${userId}/avatarUrl?key=${
      import.meta.env.VITE_API_KEY
    }&token=${token}`
  );
  if (response.data) {
    console.log("avatar", response.data);
    return response.data;
  } else {
    throw new Error(response.data.message);
  }
};

export const checkBoards = async (idBoards) => {
  idBoards.forEach((idBoard) => {
    getBoard(idBoard);
  });
};
