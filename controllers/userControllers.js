import User from '../models/user.js';

async function addUser() {
    const user = await User.create({
        firstName: 'first name',
        lastName: 'last name',
        email: "someone@gmail.com",
      
      });
      
      console.log("added to database\n" + user);
}
export { addUser };
