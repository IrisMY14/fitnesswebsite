// import connection
import db from "../config/database.js";
 
// Get All Guests
export const getGuests = (result) => {
    db.query("SELECT * FROM guest", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Get Single Guest
export const getGuestById = (id, result) => {
    db.query("SELECT * FROM guest WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Guest to Database
export const insertGuest = (data, result) => {
    db.query("INSERT INTO guest SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Guest to Database
export const updateGuestById = (data, id, result) => {
    db.query("UPDATE guest  SET vorname = ?, nachname = ?, email = ?, phone = ?, message = ? WHERE id = ?", [data.vorname, data.nachname, data.email, data.phone, data.message, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Guest to Database
export const deleteGuestById = (id, result) => {
    db.query("DELETE FROM guest WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
