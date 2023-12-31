// express / routers
const express = require('express');
const cors = require('cors');
const router = express.Router();

// controladores
const { addUser, login, dellUser ,editUser,getUser,recoveryToken,changeForgotPassword} = require('../../Controllers/UserController');
const { getTasks, addTask, deleteTask, editTask } = require('../../Controllers/TaskController');
const { addQuest, softdellQuest,editQuest,defautQuest } = require('../../Controllers/QuestController');

//middlewares
const { ProtectRoute } = require('../../Middlewares/jwt');



/* Rotas De User */
router.post('/user', addUser);
router.post('/login', login);
router.post('/recovery',recoveryToken);
router.post('/changepassword',changeForgotPassword);

/* Rotas de User Protegidas*/
router.delete('/user',ProtectRoute,dellUser);
router.put('/user',ProtectRoute,editUser);
router.get('/user',ProtectRoute,getUser);

/* Rotas de Quest */
router.delete('/quest/:id',ProtectRoute,softdellQuest);
router.post('/quest',ProtectRoute,addQuest);
router.put('/quest/:id',ProtectRoute,editQuest);
router.post('/initquest',defautQuest);













/* Rotas de Task */
router.get('/task', ProtectRoute, getTasks);
router.post('/task', ProtectRoute, addTask);
router.delete('/task/:id', ProtectRoute, deleteTask);
router.put('/task/:id', ProtectRoute, editTask);

module.exports = router;