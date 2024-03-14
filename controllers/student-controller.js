const {getAllStudents, getAllStudentsNotAssigned, assignMentor} = require("../models/student");

module.exports = {
    async getAllStudents(req, res) {
        try {
            const students = await getAllStudents();
            res.status(200).json(students);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async getAllStudentsNotAssigned(req, res) {
        try {
            const students = await getAllStudentsNotAssigned();
            res.status(200).json(students);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    async assignMentor(req, res) {
        try {
            const { studentId, mentorId } = req.body;
            console.log(studentId, mentorId);
            const result = await assignMentor(studentId, mentorId);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};