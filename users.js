const users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const isUserConsists = users.find((user) => user.room === room && user.name ===  name);
  const user = { id, name, room };

  if(isUserConsists) {
    return { error: 'This user has already created here' };
  };

  users.push(user);
  return { user };
}

const removeUser = (id) => {
  const removeUserIndex = users.findIndex((user) => user.id === id);

  return removeUserIndex !== -1
    ? users.splice(removeUserIndex, 1)[0]
    : { error: "Can't find this user here" };
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => {
  users.filter((user) => user.room === room);
}

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
