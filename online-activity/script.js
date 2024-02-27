const whosOnline = (friends) => {
  const users = {
    online: [],
    offline: [],
    away: [],
  };

  for (let i = 0; i < friends.length; i++) {
    const user = friends[i];
    if (user.status === "offline") {
      users.offline.push(user.username);
    } else if (user.status === "online" && user.lastActivity <= 10) {
      users.online.push(user.username);
    } else {
      users.away.push(user.username);
    }
  }
  if (users.online.length === 0) {
    delete users.online;
  }
  if (users.offline.length === 0) {
    delete users.offline;
  }
  if (users.away.length === 0) {
    delete users.away;
  }

  return users;
};
