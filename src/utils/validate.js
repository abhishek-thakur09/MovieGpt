export const checkValidatedata = (email, password, name, isSignInForm) => {
  const isEmailValid =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
      email
    );
  const isValidPassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  if (!isSignInForm) {
    if (!name || name.trim() === "") {
      return "Please enter your name";
    }

    if (name.trim().length < 4) {
      return "Your name should be greater then 4 characters";
    }
  }

  if (!isEmailValid) return "Email iD is not valid";
  if (!isValidPassword) return "Password is not valid";

  return null;
};
