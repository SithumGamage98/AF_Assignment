import express from 'express';
import {
  UpdateUser,
  deleteUser,
  getUser,
  getUsers,
} from '../controllers/user_controller.js';
import { verifyToken, verifyUser, verifyAdmin } from '../utils/veryfyToken.js';

const router = express.Router();

/*
//Veryfi Token
router.get('/checkauthentication', verifyToken, (req, res, next) => {
  res.send('hello user, you are logged in');
});
//Verify user
router.get('/checkuser/:id', verifyUser, (req, res, next) => {
  res.send('hello user, you are logged in and you can delete your account');
});
//Verify admin
router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
  res.send('hello admin, you are logged in and you can delete all accounts');
}); */


//UPDATE
router.put('/:id', verifyUser, UpdateUser);

//DELETE
router.delete('/:id', verifyUser, deleteUser);

//Get Specific hotel
router.get('/:id', verifyUser, getUser);

//Get all hotels

router.get('/', verifyAdmin, getUsers);

export default router;
