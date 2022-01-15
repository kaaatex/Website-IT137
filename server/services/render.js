const axios = require('axios'); 

exports.homeRoutes = (req,res)=>{
  res.render('index');
}

exports.admin_homepage = (req,res)=>{
    res.render('admin_homepage');
}

exports.register_account  = (req,res)=>{
    res.render('signup');
}

exports.admin_logout  = (req,res)=>{
    res.clearCookie('x-access-token');
    delete req.session;
    res.redirect('/');
    console.log("Cookie cleared");
} 


exports.admin_updateProfilePersonalInfos = (req, res) => {
    axios.get('http://localhost:3000/personalInfo', { params : { id : req.query.id }})
        .then(function(admindata){
            res.render("admin_profilePersonalInfoUpdate", { user : admindata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}



// EVENT

exports.admin_events = (req,res)=>{
    axios.get('http://localhost:3000/api/events')
        .then(function(response){
            res.render('admin_events', { events : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.admin_eventAdd  = (req,res)=>{
    res.render('admin_eventAdd');
}

exports.admin_updateEvent =  (req, res) =>{
    axios.get('http://localhost:3000/api/events', { params : { id : req.query.id }})
        .then(function(eventdata){
            res.render("admin_eventUpdate", { events : eventdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.admin_eventHistory  = (req,res)=>{
    axios.get('http://localhost:3000/api/events')
        .then(function(response){
            res.render('admin_eventHistory', { events : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

// USERS

exports.admin_userpage = (req,res)=>{
    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            res.render('admin_userpage', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.admin_adduser = (req,res)=>{
    res.render('admin_adduser');
}

exports.admin_userRecords = (req,res)=>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("admin_userRecords", { users : userdata.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.admin_updateUser = (req, res) =>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("admin_userPersonalInfoUpdate", { users : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.admin_updateLicense = (req, res) =>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("admin_userLicenseUpdate", { users : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.admin_updateVehicle = (req, res) =>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("admin_userVehicleUpdate", { users : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}




exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

