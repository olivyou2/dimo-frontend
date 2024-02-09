import { loginState } from "../states/loginState";

loginState.subscribe(state => {
    // localStorage.setItem('loginState', JSON.stringify(state));
    console.log(state);
});