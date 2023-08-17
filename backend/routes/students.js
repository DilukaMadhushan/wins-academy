const express = require('express');
const Students = require('../models/Students');
const nodemailer = require("nodemailer");
const router = express.Router();

//save
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "naveen1234avishka@gmail.com",
        pass: "vzjwvepdrfcajxoo"
    }
});
const sendpassword = (code, email) => {
    const mailOptions = {
        from: "naveen1234avishka@gmail.com",
        to: email,
        subject: "Wins Academy - registration",
        html: '<h2>your confirmation code is:</h2> <h2 style="color:red;">' + code + "</h2>"
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
}
router.get('/students/send-email', (req, res) => {
    sendpassword()
});
router.post('/students/save', (req, res) => {
    let r = (Math.random() + 1).toString(36).substring(7);

    console.log(req.body, req.body.email)
    let newLecturer = new Students({ ...req.body, password: r });
    sendpassword(r, req.body.email )
    newLecturer.save((err) => {
        console.log(err)
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: "Students saved successfully"
        });
    });

});

//get

router.get('/students', (req, res) => {
    Students.find().exec((err, students) => {
        if (err) {
            return res.status(410).json({
                error: err
            });
        }
        return res.status(200).json({
            success: true,
            existingStudents: students
        });
    });
});


//get specific 

router.get("/students/:id", (req, res) => {
    let lecturerId = req.params.id;
    Students.findById(lecturerId, (err, students) => {
        if (err) {
            return res.status(400).json({ success: false, err });
        }
        return res.status(200).json({
            success: true,
            students
        });
    });
});

router.post("/students-login", (req, res) => {
    //return res.send(req.query)
    Students.find({ email: req.query.email, password: req.query.password }, function (err, students) {
        if (err) {
            return res.status(400).json({ success: false, err });
        }
        return res.status(200).json({
            success: true,
            students
        });
    });
});

//update

router.put('/students/update/:id', (req, res) => {
    Students.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        (err, instructor) => {
            if (err) {
                return res.status(400).json({ error: err });
            }

            return res.status(200).json({
                success: "Updated Succesfully"
            });
        }
    );
});

//delete

router.delete('/student/delete/:id', (req, res) => {
    Students.findByIdAndRemove(req.params.id).exec((err, deleteStudent) => {

        if (err) return res.status(400).json({
            message: "Delete unsuccesful", err
        });

        return res.json({
            message: "Delete Succesful", deleteStudent
        });
    });
});


module.exports = router;