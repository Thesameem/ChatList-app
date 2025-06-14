let LocalStorage = window.localStorage;

// get chat list user from local storage
export const GetChatList = () => {
    // let list = LocalStorage.getItem('chat-list-users');
    // return JSON.parse(list);
    //  return Array.isArray(list) ? list : [];
        let list = window.localStorage.getItem('chat-list-users');
    try {
        let parsed = JSON.parse(list);
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

/**
 * save chat list users to local storage
 * @param { Array } list array of chat users
 * @returns true after saving data to local storage
*/

export const SetChatList = (list) => {
    LocalStorage.setItem('chat-list-users', JSON.stringify(list));
    return true;
}
