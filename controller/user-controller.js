import User from "../model/userSchema.js";

export const userSignup = async (request, response) => {
  try {
    const exist = await User.findOne({ name: request.body.email });
    if (exist) {
      return response.status(401).json({ message: "Username already exists." });
    }
    const user = request.body;
    console.log(user);
    const newUser = new User(user);
    await newUser.save();

    response.status(200).json({ message: user });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const userLogin = async (request, response) => {
  try {
    const email = request.body.email;
    const password = request.body.password;

    let user = await User.findOne({ email: email, password: password });
    if (user) {
      return response.status(200).json({ data: user });
    } else {
      return response.status(401).json("Invalid login");
    }
  } catch (error) {
    response.status(500).json("Error", error.message);
  }
};

export const getUserByEmail = async (request, response) => {
  try {
    const email = request.params.email;
    const user = await User.findOne({ email: email });

    response.status(200).json(user);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
