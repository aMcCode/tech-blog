module.exports = {

    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
      },

    isUsersObj: (obj_ownername, auth_username) => {
      console.log(`objOwner: ${obj_ownername}, authUser: ${auth_username}`)
      return obj_ownername === auth_username;
    }
}