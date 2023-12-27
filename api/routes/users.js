import express from "express"
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utilis/verifyToken.js";

const router = express.Router()


// router.get("/checkauthenication", verifyToken, (req, res, next) => {
//     res.send("Hello User You Are Logged In!!!")
// })


// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("Hello User You Are Logged In You Can Delete Your Account ...")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("Hello Admin You Are Logged In You Can Delete All Accounts...")
// })

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

//GET ALL
router.get("/", verifyAdmin, getUsers);


export default router