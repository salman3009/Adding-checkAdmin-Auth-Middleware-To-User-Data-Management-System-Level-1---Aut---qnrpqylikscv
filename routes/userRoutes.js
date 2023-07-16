const express = require("express");

const {
    getAllUsers,
    getUserByID,
    createUser,
    updateUser,
    deleteUser,
} = require("../controllers/userControllers");

const checkAdmin = require("../middlewares/checkAdmin");

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserByID);
router.post("/", checkAdmin, createUser);

// Add the checkAdmin middleware to the routes below
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;