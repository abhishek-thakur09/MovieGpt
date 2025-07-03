
export const checkValidatedata = (email, password, name) => {

    const isEmailValid = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email);
    const isValidPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
     
    
    if (!name || name.trim() === "") {
        return "Please enter your name";
    }

    const trimmedName = name.trim();

    if(trimmedName < 4) return "Your name should be greater then 4 characters"
    if(!isEmailValid) return "Email iD is not valid";
    if(!isValidPassword) return "Password is not valid";

    return null;

}