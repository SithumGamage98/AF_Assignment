const mongoose = require("mongoose");
const Package = require("./package.model");

test("add new incomplete(packagename) package to the database", async () => {
  const incompleteData = new Package({
    packagedestination: "Paris",
    distance: "10 km",
    accomodation: "Hotel",
    packageid: "12345",
    locationtype: "City",
    numofdays: "5",
    numofpassengers: "2",
    totalprice: "$1000",
    days: "Monday - Friday",
    details: "Lorem ipsum dolor sit amet",
    instructions: "Lorem ipsum dolor sit amet",
    photos: ["photo1.jpg", "photo2.jpg"],
    rating: 4.5,
  });

  try {
    await incompleteData.save();
  } catch (error) {
    expect(error.errors.packagename).toBeDefined();
  }
});
