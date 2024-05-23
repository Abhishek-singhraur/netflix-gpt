export const isValid = (email,password,name) => {
    const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    const isPasswordValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
    const isNameValid = /^([a-zA-Z ]){2,30}$/.test(name);

    if(!isEmailValid) {
        return " please enter valid email";
    }
    if(!isPasswordValid) {
        return "please enter strong password";
    }
    if(!isNameValid) {
        return "please enter valid name";
    }
    return null;
}