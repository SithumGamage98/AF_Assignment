import axios from "axios";
import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Footer from "../components/Footer.js";
import Rating from "../components/Rating";

import { Helmet } from "react-helmet-async";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, hotel: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function TourPacakgeScreen() {
  const params = useParams();
  const { id } = params;
  const [{ loading, error, pack }, dispatch] = useReducer(reducer, {
    pack: [],
    loading: true,
    error: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/api/hotels/id/${id}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, [id]);

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Row>
        <Col md={6}>
          <img className="img-large" src={pack.image} alt={pack.name}></img>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Helmet>
                <title>{pack.packageName}</title>
              </Helmet>
              <h1>{pack.packageName}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                rating={pack.rating}
                reviewCount={pack.reviewCount}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Tour Package price : </b>
              {hotel.chargesPerPack}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>our Package Type : </b>"{hotel.packageType}"
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Destination : </b>"{hotel.destination}"
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Distance From Colombo : </b>
              {pack.distanceFromColombo}
            </ListGroup.Item>
            <ListGroup.Item>
              <b> Accomodation : </b>
              {pack.accomodationPlace}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>No. Of Days : </b>
              {hotel.noOfDays}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Visitors Per Pack : </b>
              {hotel.visitorsPerPack}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Travel Activities : </b>
              {hotel.specialActivities}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Special Instructions : </b>
              {hotel.specialInstructions}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Package price:</Col>
                    <Col>{hotel.chargesPerPack}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {hotel.availablePackages > 0 ? (
                        <Badge bg="success">Available</Badge>
                      ) : (
                        <Badge bg="danger">Unavailable</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Button>Contact us for Inquiries</Button>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Button>Book the Tour Package</Button>
                  </Row>
                </ListGroup.Item>

                {hotel.availableRooms > 0 && (
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button variant="primary">Book Now</Button>
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}
export default HotelScreen;
