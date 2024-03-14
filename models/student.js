class student{

    
    constructor(){}
    static async getAllStudents(){
        const db = require("../config/dbConfig");
        const result = await db.pool.query("SELECT * FROM student");
        return result[0];
    }
    static async getAllStudentsNotAssigned(){
        const db = require("../config/dbConfig");
        const result = await db.pool.query("SELECT * FROM student WHERE assigned_mentor_id is null");
        return result[0];
    }
    static async assignMentor(studentId,mentorId){
        const db = require("../config/dbConfig");
        const result = await db.pool.query("UPDATE student SET assigned_mentor_id = ? WHERE student_id = ? and assigned_mentor_id is null",[mentorId,studentId]);
        return result[0];
    }


}
module.exports = student;