const express = require('express');
const router = express.Router();
 
// Import controllesr
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

//Link to AppController
router.get('/', (req, res) => {
    // Calls de appController method and passing the (req, res) objects as arguments
    AppController.getHomePage(req, res); 
});
//link to Students
router.get('/students', (req, res) => {
    StudentsController.getAllStudents(req, res);
});
router.get('/students/:major', (req, res) => {
    StudentsController.getAllStudentsByMajor(req, res);
});

module.exports = router;
