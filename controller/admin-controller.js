import Admin from "../model/adminSchema.js";

export const adminLogin = async (request, response) => {
  try {
    const email = request.body.email;
    const password = request.body.password;

    let admin = await Admin.findOne({ email: email, password: password });
    if (admin) {
      return response.status(200).json({ data: admin });
    } else {
      return response.status(401).json("Invalid login");
    }
  } catch (error) {
    response.status(500).json("Error", error.message);
  }
};
