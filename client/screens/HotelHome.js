import React from 'react';
import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header.js';
import data from '../hoteldata.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hotel from '../components/Hotel.js';
import Footer from '../components/Footer.js';

import { Link } from 'react-router-dom';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, hotels: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function HotelHome() {
  const [{ loading, error, hotels }, dispatch] = useReducer(reducer, {
    hotels: [],
    loading: true,
    error: '',
  });
  //const [hotels, setHotels] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/hotels');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Header />
      <div className="products">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <Row>
            {hotels.map((hotel) => (
              <Col key={hotel.id} sm={6} md={4} lg={3} className="mb-3">
                <Hotel hotel={hotel}></Hotel>
              </Col>
            ))}
          </Row>
        )}
      </div>
      <Footer />
    </div>
  );
}
