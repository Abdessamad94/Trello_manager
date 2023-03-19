import axios from "axios";
import { getBoard, createBoard } from "./boards";
// const token = localStorage.getItem("token");

export const getUser = async (token) => {
  const response = await axios.get(
    `https://api.trello.com/1/members/me?token=${token}&key=c6f34b581c35de2ce1660c00e4a2a027`
  );
  if (response.data) {
    response.data.hasboard = "";
    console.log("in getuser function");
    checkBoards(response.data.id, token);
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  } else {
    throw new Error(response.data.message);
  }
};

//Check if there a board with name if is not i created with function createboard()
export const checkBoards = async (idMember, token) => {
  console.log("here in checkboard");
  axios
    .get(
      `https://api.trello.com/1/search?query=${
        import.meta.env.VITE_BOARD_NAME
      }&modelTypes=boards&boards_limit=1&idMemberCreator=${idMember}&key=${
        import.meta.env.VITE_API_KEY
      }&token=${token}`
    )
    .then((response) => {
      const boards = response.data.boards;
      const boardExists = boards.length > 0;
      if (boardExists) {
        const boardId = boards[0].id;
        localStorage.setItem("idBoard", boardId);
        console.log(`Board '${boardName}' already exists with ID '${boardId}'`);
      } else {
        createBoard(idMember, token);
      }
    })
    .catch((error) => {
      console.error(`Error searching for board: ${error.response.data}`);
    });
};
