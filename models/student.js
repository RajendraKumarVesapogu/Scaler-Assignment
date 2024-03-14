const db = require("../config/dbConfig");
module.exports.student={

    
    getAllStudents: async function (){
        const result = await db.pool.query("SELECT * FROM student");
        return result[0];
    },
    getAllStudentsNotAssigned: async function(){
        const result = await db.pool.query("SELECT * FROM student WHERE assigned_mentor_id is null");
        return result[0];
    },
    assignMentor: async function(studentId,mentorId){
        
        const result = await db.pool.query("UPDATE student SET assigned_mentor_id = ? WHERE student_id = ? and assigned_mentor_id is null",[mentorId,studentId]);
        return result[0];
    },
    removeMentor: async function(studentId,mentorId){

        const result = await db.pool.query("UPDATE student SET assigned_mentor_id = NULL WHERE student_id = ? and assigned_mentor_id = ?",[studentId, mentorId]);
        return result;
    },
    updateMarks: async function({vivaMarks, reportSubmissionMarks, projectExplanationMarks, executionMarks, ideationMarks, studentId}){
        const result = await db.pool.query(`
            UPDATE Students
            SET 
                viva_marks = ?,
                report_submission_marks = ?,
                project_explanation_marks = ?,
                execution_marks = ?,
                ideation_marks = ?
            WHERE student_id = ?;
        `, [vivaMarks, reportSubmissionMarks, projectExplanationMarks, executionMarks, ideationMarks, studentId]);

        return result;
    }


}
module.exports = student;