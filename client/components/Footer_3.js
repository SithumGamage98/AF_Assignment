import React from 'react';

import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBRipple,
} from 'mdb-react-ui-kit';

export default function Footer_3() {
  return (
    <MDBFooter
      className="text-center text-white"
      style={{ backgroundColor: '#caced1' }}
    >
      <MDBContainer className="p-4">
        <section className="">
          <MDBRow>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img
                  src="https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg?size=626&ext=jpg&uid=R78647178&ga=GA1.2.1696645279.1662610631&semt=sph"
                  className="w-100"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img
                  src="https://img.freepik.com/free-photo/swimming-pool_74190-2109.jpg?size=626&ext=jpg&uid=R78647178&ga=GA1.1.1696645279.1662610631&semt=sph"
                  className="w-100"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img
                  src="https://img.freepik.com/free-photo/banquet-table-with-snacks_144627-18361.jpg?size=626&ext=jpg&uid=R78647178&ga=GA1.2.1696645279.1662610631&semt=sph"
                  className="w-100"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img
                  src="https://img.freepik.com/free-photo/steel-faucet-bathtub-bathroom-interior-with-window_169016-26977.jpg?size=626&ext=jpg&uid=R78647178&ga=GA1.2.1696645279.1662610631&semt=sph"
                  className="w-100"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img
                  src="https://img.freepik.com/free-photo/leisure-beautiful-health-garden-landscape_1203-4856.jpg?size=626&ext=jpg&uid=R78647178&ga=GA1.1.1696645279.1662610631&semt=sph"
                  className="w-100"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img
                  src="https://img.freepik.com/free-photo/colonial-style-house-night-scene_1150-17925.jpg?size=626&ext=jpg&uid=R78647178&ga=GA1.2.1696645279.1662610631&semt=sph"
                  className="w-100"
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        ©2023 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          TravelLanka.com
        </a>
      </div>
    </MDBFooter>
  );
}
