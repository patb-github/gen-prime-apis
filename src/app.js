import 'dotenv/config';
import express from 'express';
import db from './prisma-client.js'
import usersRoute from './router/user-route.js'

const PORT = process.env.PORT;
const app = express();

// if content type is application/json, put the json in req.body
app.use(express.json());

app.get('/', (req, res) => {
  return res.json({ message: 'Hi' });
});

app.use('/users', usersRoute);
// GET /users
// app.get("/users", async (req, res, next) => {
//     // find users in db
//     const users = await db.user.findMany();
//     return res.json(users);
// })

// GET /users/2
// app.get("/users/:id", async (req, res, next) => {
//     // Step 1: extract path parameters from request object
//     const params = req.params;
//     const userId = params.id;

//     // Step 2: find user in db
//     const user = await db.user.findUnique({where : {id : +userId}});
    
//     // Step 3: check if user is in db
//     // if not found
//     if (!user) return res.status(404).json({message: 'user not found'});
//     // if found
//     return res.json(user);
// })

// app.post("/users", async (req, res, next) => {
    
//     const { email, name, password, confirmPassword, isAdmin = false } = req.body;

//     // Step 1: validate
//     if (!email || !name || !password || !confirmPassword) {
//         res.status(400).json({ message: 'All fields required' });
//     }

//     if (password !== confirmPassword) {
//         res.status(400).json({ message: 'password mismatch' });
//     }

//     // HW: Check whether email is already registered
//     const user = await db.user.findUnique({where : {email : email}});
//     if (user) { // user is not null/undefined, so the email is registered already
//         return res.status(400).json({ message: 'email already registered' });
//     }

//     // Step 2: create new ser
//     const newUser = await db.user.create({
//         data: {
//             email: email,
//             name: name,
//             password: password,
//             isAdmin: isAdmin
//         }
//     })
//     res.status(201).json(newUser);
// })

app.listen(PORT, () => {
  console.log('server running at port', PORT);
});
