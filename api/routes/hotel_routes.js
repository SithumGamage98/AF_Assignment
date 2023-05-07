import express from 'express';
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getOneHotel,
  getAllHotels,
} 
from '../controllers/hotel_controller.js';

const router = express.Router();

//CREATE
router.post('/', createHotel);

//UPDATE
router.put('/:id', updateHotel);

//DELETE
router.delete('/:id', deleteHotel);

//Get Specific hotel
router.get('/:id', getOneHotel);

//Get all hotels
router.get('/', getAllHotels);

export default router;
