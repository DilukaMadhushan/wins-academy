const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();
const WebSocket = require('ws');
const server = require('http').createServer(app);

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB Connection success!");
});
connection.on('error', console.error.bind(console, 'connection error:'));

app.listen(PORT, () => {
    console.log('Server is up and running on port number: ', PORT)
})


//Postman check
//URL = http://localhost:8070/assessment/



const wss = new WebSocket.Server({ server:server });

wss.on('connection', function connection(ws) {
  console.log('A new client Connected!');
  ws.send('Welcome New Client!');

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);

    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
    
  });
});
server.listen(4000, () => console.log(`Lisening on port :4000`))

const AssessmentRouter = require("./routes/Assessment.js");
app.use("/Assessment", AssessmentRouter);

//URL = http://localhost:8070/quiz/
const QuizRouter = require("./routes/Quiz.js");
app.use("/quiz", QuizRouter);

//URL = http://localhost:8070/instructor/
const instructorRoutes = require('./routes/instructors');
app.use(instructorRoutes);

//URL = http://localhost:8070/lecturer/
const lecturerRoutes = require('./routes/lecturers');
app.use(lecturerRoutes);

//URL = http://localhost:8070/contactus/
const contactusRouter = require("./routes/contactuss.js");
app.use("/contactus", contactusRouter);

//URL = http://localhost:8070/notice/
const noticeRouter = require("./routes/notices.js");
app.use("/notice", noticeRouter);


//URL = http://localhost:8070/feedback/
const feedbackRouter = require("./routes/feedbacks.js");
app.use("/feedback", feedbackRouter);

const referenceRouter = require("./routes/Reference.js");
app.use(referenceRouter);

const studentROuter = require("./routes/students.js");
app.use( studentROuter);

