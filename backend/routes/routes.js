// import express
import express from "express";

// import function from controller
import { showGuests, showGuestById, createGuest, updateGuest, deleteGuest } from "../controllers/guest.js";

// init express router
const router = express.Router();

// Get All Guest
router.get('/guest', showGuests);

// Get Single Guest
router.get('/guest/:id', showGuestById);

// Create New Guest
router.post('/guest', createGuest);

// Update Guest
router.put('/guest/:id', updateGuest);

// Delete Guest
router.delete('/guest/:id', deleteGuest);

// export default router
export default router;