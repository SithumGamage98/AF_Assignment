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

export default function Footer() {
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
                  src="https://img.freepik.com/free-photo/beautiful-ramboda-waterfall-sri-lanka-island_167946-169.jpg?size=626&ext=jpg&uid=R78647178&ga=GA1.1.1696645279.1662610631&semt=sph"
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
                  src="https://img.freepik.com/free-photo/asian-woman-wearing-chinese-traditional-dress-ban-rak-thai-village-mae-hong-son-province-thailand_335224-1168.jpg?size=626&ext=jpg&uid=R78647178&ga=GA1.1.1696645279.1662610631&semt=ais"
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
                  src="https://img.freepik.com/free-photo/gazebo-surrounded-by-palm-trees-water-during-sunset_181624-57249.jpg?size=626&ext=jpg&uid=R78647178&ga=GA1.2.1696645279.1662610631&semt=ais"
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
                  src="https://img.freepik.com/free-photo/beautiful-sunset-fishing-village-betul-goa-india_181624-47529.jpg?size=626&ext=jpg&uid=R78647178&ga=GA1.2.1696645279.1662610631&semt=ais"
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
                  src="https://img.freepik.com/premium-photo/lion-rock-morning-sri-lanka_141808-1.jpg?size=626&ext=jpg&uid=R78647178&ga=GA1.1.1696645279.1662610631&semt=sph"
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
                  src="https://img.freepik.com/free-photo/indian-leopard-nature-habitat-leopard-resting-rock-wildlife-scene_475641-785.jpg?size=626&ext=jpg&uid=R78647178&ga=GA1.1.1696645279.1662610631&semt=sph"
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
