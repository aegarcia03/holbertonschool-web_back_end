const express = require('express');
const router = express.Router();
 
// Import controllesr
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

//Link to AppController
router.get('/', AppController.getHomePage); 
//link to Students
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;
