const express = require("express");
const studentController = require("../controllers/student-controller");
const router = express.Router();


router.get("/all", async (req, res) => {

    await studentController.getAllStudents(req, res);
    
});

router.get("/notassigned", async (req, res) => {

    await studentController.getAllStudentsNotAssigned(req, res);
    
});

router.put("/assign", async (req, res) => {
    
    await studentController.assignMentor(req, res);
        
});

router.put("/delete", async(req,res)=>{
    await studentController.removeMentor(req,res);
});

router.put('/update', async (req,res) => {
    await studentController.updateMarksOfStudent(req,res);
})

module.exports = router;