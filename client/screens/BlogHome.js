import axios from "axios";
import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Footer from "../components/Footer.js";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
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

function HotelScreen() {
  const params = useParams();
  const { id } = params;
  const [{ loading, error, hotel }, dispatch] = useReducer(reducer, {
    hotel: [],
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
      <Row>
        <Col md={6}>
          <img className="img-large" src={hotel.image} alt={hotel.name}></img>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Helmet>
                <title>{hotel.blogtitle}</title>
              </Helmet>
              <h1>{hotel.blogtitle}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                rating={hotel.rating}
                reviewCount={hotel.reviewCount}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item>Blogger Name : {hotel.bloggername}</ListGroup.Item>
            <ListGroup.Item>Blog Date : {hotel.bdate}</ListGroup.Item>
            <ListGroup.Item>
              Description:
               <p>{hotel.bdescription}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    {/* <Col>Price:</Col>
                    <Col>${hotel.price}</Col> */}
                    
                    {/* share Button */}

                    <Button variant="primary">Share instantly</Button>
                  </Row>
                  <br></br>
                  <Row>
                    <Button variant="primary">Add a comment</Button>
                  </Row>
                </ListGroup.Item>
                {/* <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {hotel.availableRooms > 0 ? (
                        <Badge bg="success">Available</Badge>
                      ) : (
                        <Badge bg="danger">Unavailable</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item> */}

                {/* {hotel.availableRooms > 0 && (
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button variant="primary">Book Now</Button>
                    </div>
                  </ListGroup.Item>
                )} */}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}
export default HotelScreen;
