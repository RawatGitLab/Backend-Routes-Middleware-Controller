const express = require('express');
const { getAllUserv1, getAllUserv2, getAllUserByGender, getUserByName } = require('../controller/userActivityController');
const { passwordAuthMiddleware } = require('../middleware/PasswordAuthMiddleware');
const router = express.Router()

router.get('/allUsers',passwordAuthMiddleware, getAllUserv1)

router.get('/allUsers',getAllUserv2)

router.get('/allUsersByGender', passwordAuthMiddleware, getAllUserByGender)

router.get('/getUSersByName/:name',getUserByName)

module.exports = router;