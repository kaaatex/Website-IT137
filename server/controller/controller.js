var Userdb = require('../model/model');
var Eventdb = require('../model/eventModel');
var Admindb = require('../model/adminModel');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// REGISTER 
exports.signup = async (req, res) => {
    try {
        const { username } = req.body;
        // check if user already exist
        // Validate if user exist in our database
        const oldUser = await Admindb.findOne({ username });

        if (oldUser) {
            res.write('<script>window.alert("User Already Exist. Please Login");window.location="/register-account";</script>');
            return res.end();
        }

        const user = new Admindb({
            firstname: req.body.firstname,
            middlename: req.body.middlename,
            surname: req.body.surname,
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password),
            address: req.body.address,
            userID: req.body.userID,
            contactNo: req.body.contactNo,

        });

        user.save((err, user) => {
            if (err) {
                res.status(500)
                    .send({
                        message: err
                    });
                return;
            } else {
                //res.status(201).json(user);
                res.status(201).render("index");
            }
        });
    } catch (err) {
        console.log(err);
    }
};

// LOGIN
exports.login = async (req, res) => {
    Admindb.findOne({
        username: req.body.username
    })
        .exec((err, user) => {
            if (err) {
                res.status(500)
                    .send({
                        message: err
                    });
                return;
            }
            if (!user) {
                res.write('<script>window.alert("User Not found.");window.location="/";</script>');
                return res.end();
            }

            //comparing passwords
            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );
            // checking if password was valid and send response accordingly
            if (!passwordIsValid) {
                res.write('<script>window.alert("Invalid password");window.location="/";</script>');
                return res.end();

            }
            //signing token with user id
            var token = jwt.sign({
                id: user.id
            }, process.env.TOKEN_KEY, {
                expiresIn: "24h",
            });

            
            res.cookie('x-access-token', token)
            res.status(201).render("admin_homepage");
        });

};

// CREATE
exports.createEvent = (req, res) => {
    // validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be emtpy!" });
        return;
    }

    // new event
    const event = new Eventdb({
        eventTitle: req.body.eventTitle,
        eventStartMonth: req.body.eventStartMonth,
        eventStartDate: req.body.eventStartDate,
        eventStartYear: req.body.eventStartYear,
        eventEndMonth: req.body.eventEndMonth,
        eventEndDate: req.body.eventEndDate,
        eventEndYear: req.body.eventEndYear,
        eventStartHour: req.body.eventStartHour,
        eventStartMinute: req.body.eventStartMinute,
        eventStartAM_PM: req.body.eventStartAM_PM,
        eventEndHour: req.body.eventEndHour,
        eventEndMinute: req.body.eventEndMinute,
        eventEndAM_PM: req.body.eventEndAM_PM

    })

    // save user in the database
    event
        .save(event)
        .then(data => {
            // res.send(data)
            res.redirect('/events');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating a create operation"
            });
        });

}

exports.createUser = (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be emtpy!" });
        return;
    }

    // new user
    const user = new Userdb({
        firstname: req.body.firstname,
        middlename: req.body.middlename,
        surname: req.body.surname,
        address: req.body.address,
        userID: req.body.userID,
        contactNo: req.body.contactNo,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        category: req.body.category,

        driversLicenseNo: req.body.driversLicenseNo,
        licenseExpiryMonth: req.body.licenseExpiryMonth,
        licenseExpiryDate: req.body.licenseExpiryDate,
        licenseExpiryYear: req.body.licenseExpiryYear,
        licenseType: req.body.licenseType,
        licenseDocu: req.body.licenseDocu,

        plateNo: req.body.plateNo,
        vehicleRegistrationNo: req.body.vehicleRegistrationNo,
        vehicleExpiryMonth: req.body.vehicleExpiryMonth,
        vehicleExpiryDate: req.body.vehicleExpiryDate,
        vehicleExpiryYear: req.body.vehicleExpiryYear,
        vehicleRegistrationDocu: req.body.vehicleRegistrationDocu,
        vehicleModel: req.body.vehicleModel,
        vehicleType: req.body.vehicleType,
        vehicleColor: req.body.vehicleColor,
        RFID: req.body.RFID

    })

    // save user in the database
    user
        .save(user)
        .then(data => {
            //res.send(data)
            res.redirect('/add-user');

        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating a create operation"
            });
        });

}

// RETRIEVE
exports.find = (req, res) => {

    if (req.query.id) {
        const id = req.query.id;

        Userdb.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "Not found user with id " + id })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Erro retrieving user with id " + id })
            })

    } else {
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
            })
    }

}

exports.findEvent = (req, res) => {

    if (req.query.id) {
        const id = req.query.id;

        Eventdb.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "Not found user with id " + id })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Erro retrieving user with id " + id })
            })

    } else {
        Eventdb.find()
            .then(event => {
                res.send(event)
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
            })
    }
}

// UPDATE

exports.updateProfilePersonalInfo = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Data to update can not be empty" })
    }

    const id = req.params.id;
    Admindb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Update user with. Maybe user not found!` })
            } else {
                //res.status(201).render("admin_profile");
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error Update user information" })
        })
}

exports.updateEvent = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Data to update can not be empty" })
    }

    const id = req.params.id;
    Eventdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Update user with ${id}. Maybe user not found!` })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error Update user information" })
        })
}

exports.updateUser = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Data to update can not be empty" })
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Update user with ${id}. Maybe user not found!` })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error Update user information" })
        })
}



// DELETE
exports.deleteEvent = (req, res) => {
    const id = req.params.id;

    Eventdb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` })
            } else {
                res.send({
                    message: "User was deleted successfully!"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}