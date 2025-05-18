const mongoose = require("mongoose");
const {
  Intro,
  About,
  Experience,
  Project,
  Course,
  Contact,
} = require("./models/portfolioModel"); // make sure path is correct
const sampleData = require("./sample"); // import the sample data
const User = require('./models/userModel')
// Replace with your own MongoDB URI
const MONGO_URI = "mongodb://localhost:27017/portfolio";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log("Connected to MongoDB");

  // Clear existing data (optional)
  await Intro.deleteMany({});
  await About.deleteMany({});
  await Experience.deleteMany({});
  await Project.deleteMany({});
  await Course.deleteMany({});
  await Contact.deleteMany({});
  


  // Insert sample data
  await Intro.create(sampleData.intros);
  await About.create(sampleData.abouts);
  await Experience.insertMany(sampleData.experiences);
  await Project.insertMany(sampleData.projects);
  await Course.insertMany(sampleData.courses);
  await Contact.create(sampleData.contacts);

  console.log("Sample data inserted successfully");
  process.exit();
})
.catch((err) => {
  console.error("MongoDB connection error:", err);
  process.exit(1);
});
