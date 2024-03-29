const db = require("../config/dbConfig");

const selector = process.env.DB_TYPE == "postgres" ? "rows" : "0"
    
let student={

    
    getAllStudents: async function (){
        const result = await db.pool.query("SELECT * FROM student");

        console.log(selector)
        return result[selector];
    },
    getAllStudentsNotAssigned: async function(){
        const result = await db.pool.query("SELECT * FROM student WHERE assigned_mentor_id is null");
        return result[selector];
    },
    assignMentor: async function(studentId,mentorId){
        
        const result = await db.pool.query("UPDATE student SET assigned_mentor_id = ? WHERE student_id = ? and assigned_mentor_id is null",[mentorId,studentId]);
        return result[selector];
    },
    removeMentor: async function(studentId,mentorId){

        const result = await db.pool.query("UPDATE student SET assigned_mentor_id = NULL WHERE student_id = ? and assigned_mentor_id = ?",[studentId, mentorId]);
        return result;
    },
    updateMarks: async function({vivaMarks, executionMarks, ideationMarks,totalMarks, studentId}){
        const result = await db.pool.query(`
            UPDATE student
            SET 
                viva_marks = ?,
                execution_marks = ?,
                ideation_marks = ?,
                total_marks = ?
            WHERE student_id = ?;
        `, [vivaMarks, executionMarks, ideationMarks,totalMarks, studentId]);

        return result;
    },
    lockMarks: async function({studentId}){
        const result = await db.pool.query(`
            UPDATE student
            SET is_locked = true
            WHERE student_id = ?;
        `, [studentId]);

        return result;
    }


}
module.exports = student;