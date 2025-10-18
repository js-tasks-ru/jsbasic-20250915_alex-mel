function makeFriendsList(friends) {
  let createFriendsList = document.createElement('UL');

  for (let friend of friends) {
    let createItemFriendsList = document.createElement('LI');
    createItemFriendsList.textContent = `${friend.firstName} ${friend.lastName}`;
    createFriendsList.appendChild(createItemFriendsList);
  }
  return createFriendsList;
}

