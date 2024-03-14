const student = require("../models/student");


    getAllStudents:async (req, res) => {
        try {
            const students = await student.getAllStudents();
            console.log(students)
            res.status(200).json(students);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

module.exports.getAllStudents= async (req, res) => {
    try {
        const students = await student.getAllStudents();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
},

module.exports.getAllStudentsNotAssigned =async (req, res) => {
    try {
        const students = await student.getAllStudentsNotAssigned();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
},

module.exports.assignMentor= async (req, res) =>  {
    try {
        const { studentId, mentorId } = req.body;
        console.log(studentId, mentorId);
        const result = await student.assignMentor(studentId, mentorId);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
},

module.exports.removeMentor= async(req,res) => {
    
    try {
    let {studentId,mentorId} = req.body;
    var data = await student.removeMentor({studentId,mentorId});
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
},

module.exports.updateMarks= async (req, res) => {
    try {
        let {vivaMarks, reportSubmissionMarks, projectExplanationMarks, executionMarks, ideationMarks, studentId} = req.body;
        let data = await student.updateMarksOfStudent({vivaMarks, reportSubmissionMarks, projectExplanationMarks, executionMarks, ideationMarks, studentId});
        res.status(200).json(data);
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
        
}
