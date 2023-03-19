import axios from "axios";

const token = localStorage.getItem("token");

export const getBoard = async (boardId, token) => {
  const response = await axios.get(
    `https://api.trello.com/1/boards/${boardId}?key=${
      import.meta.env.VITE_API_KEY
    }&token=${token}`
  );

  if (response.data) {
    console.log(response.data.name);
    return response.data.name;
  } else {
    throw new Error(response.data.message);
  }
};

export const createBoard = async (creatorId, token) => {
  axios
    .post(
      `https://api.trello.com/1/boards/?name=${
        import.meta.env.VITE_BOARD_NAME
      }&idMemberCreator=${creatorId}&key=${
        import.meta.env.VITE_API_KEY
      }&token=${token}`
    )
    .then((response) => {
      const boardId = response.data.id;
      console.log(`Board created with ID: ${boardId}`);
      axios
        .post(
          `https://api.trello.com/1/lists/?name=List 1&pos=bottom&idBoard=${boardId}&key=${apiKey}&token=${apiToken}`
        )
        .then((response) => {
          const listId1 = response.data.id;
          console.log(`List 1 created with ID: ${listId1}`);
        })
        .catch((error) => {
          console.error(`Error creating list 1: ${error.response.data}`);
        });
    })
    .catch((error) => {
      console.error(`Error creating board: ${error.response.data}`);
    });
};
