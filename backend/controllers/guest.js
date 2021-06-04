// Import function from Guest Model
import { getGuests, getGuestById, insertGuest, updateGuestById, deleteGuestById } from "../models/guestModel.js";
 
// Get All Guests
export const showGuests = (req, res) => {
    getGuests((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Get Single Guest 
export const showGuestById = (req, res) => {
    getGuestById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New Guest
export const createGuest = (req, res) => {
    const data = req.body;
    insertGuest(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update Guest
export const updateGuest = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateGuestById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete Guest
export const deleteGuest = (req, res) => {
    const id = req.params.id;
    deleteGuestById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
