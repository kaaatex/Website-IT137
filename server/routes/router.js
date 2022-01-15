const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller'); 
const auth = require('../middleware/auth');
var Admindb = require('../model/adminModel');

  route.get('/profile', auth, function (req, res) {
    Admindb.findById(req.userId, { password: 0 }, function (err, user) {
      if (err) return res.status(500).send("There was a problem finding the user.");
      if (!user) return res.status(404).send("No user found.");
      
      // sending the user data
      res.render('admin_profile', { user });
     //res.status(200).send(user);
    
    });
  });

  route.get('/update-personal-infos',  auth, function (req, res) {
    Admindb.findById(req.userId, { password: 0 }, function (err, user) {
      if (err) return res.status(500).send("There was a problem finding the user.");
      if (!user) return res.status(404).send("No user found.");
      
      res.render('admin_profilePersonalInfoUpdate', { user });
     //res.status(200).send(user);
    
    });
  });


  // Routes

route.get('/',services.homeRoutes);

route.get('/admin-homepage',services.admin_homepage);

route.get('/register-account',services.register_account);

route.get('/user-page',services.admin_userpage);

route.get('/user-Records',services.admin_userRecords);

route.get('/user-update',services.admin_updateUser);

route.get('/user-update-license',services.admin_updateLicense);

route.get('/user-update-vehicle',services.admin_updateVehicle);

route.get('/add-user',services.admin_adduser); 

route.get('/update-personal-info',services.admin_updateProfilePersonalInfos);

route.get('/events',services.admin_events);

route.get('/event-add',services.admin_eventAdd);

route.get('/event-history',services.admin_eventHistory);

route.get('/update-event',services.admin_updateEvent);

route.get('/logout',services.admin_logout);



//API
route.post('/register', controller.signup);  
route.post('/login', controller.login); 
route.put('/personalInfo/:id', controller.updateProfilePersonalInfo);


route.post('/api/users', controller.createUser);  
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.updateUser);
 
 
route.post('/api/events', controller.createEvent);  
route.get('/api/events', controller.findEvent);
route.put('/api/events/:id', controller.updateEvent);
route.delete('/api/events/:id', controller.deleteEvent);

module.exports = route