const express = require("express");
const {getAllStudents, getAllStudentsNotAssigned, assignMentor} = require("../controllers/student-controller");
const router = express.Router();


router.get("/all", async (req, res) => {

    await getAllStudents(req, res);
    
});

router.get("/notassigned", async (req, res) => {

    await getAllStudentsNotAssigned(req, res);
    
});
router.put("/assign", async (req, res) => {
    
        await assignMentor(req, res);
        
});

module.exports = router;