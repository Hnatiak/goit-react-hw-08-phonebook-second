const isAuthenticated = (state) => state.auth.isAuthenticated;
const userName = (state) => state.auth.user.name;
const userMail = (state) => state.auth.user.email;

const filterSelector = {
    isAuthenticated, userName, userMail
}
  
export default filterSelector;