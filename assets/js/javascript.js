window.onload = setInterval(clock, 1000);

//$("#signup").submit(function (event) {
// alert("Thanks for signing up!");
//})
$('#showPass').on('click', function(){
  var passInput=$("#passwordInput");
  if(passInput.attr('type')==='password')
    {
      passInput.attr('type','text');
  }else{
     passInput.attr('type','password');
  }
})

$("#admin_adduser").submit(function (event) {
  alert("Data Inserted Successfully!");
})

// UPDATE PROFILE
$("#updatePersonalInfo").submit(function (event) {
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  var data = {}

  $.map(unindexed_array, function (n, i) {
    data[n['name']] = n['value']
  })

  console.log(data);

  var request = {
    "url": `http://localhost:3000/personalInfo/${data.id}`,
    "method": "PUT",
    "data": data
  }

  $.ajax(request).done(function (response) {
    alert("Data Updated Successfully!");
  })
})


// EVENT UPDATE
$("#updateEvent").submit(function (event) {
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  var data = {}

  $.map(unindexed_array, function (n, i) {
    data[n['name']] = n['value']
  })

  console.log(data);

  var request = {
    "url": `http://localhost:3000/api/events/${data.id}`,
    "method": "PUT",
    "data": data
  }

  $.ajax(request).done(function (response) {
    alert("Data Updated Successfully!");
  })
})

//ADD PARKING SPACE 

$("#addParkingSpace").submit(function (event) {
  alert("Data Inserted Successfully!");
})

// UPDATE PARKING
$("#updateParkingSpace").submit(function (event) {
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  var data = {}

  $.map(unindexed_array, function (n, i) {
    data[n['name']] = n['value']
  })

  console.log(data);

  var request = {
    "url": `http://localhost:3000/api/parking-space/${data.id}`,
    "method": "PUT",
    "data": data
  }

  $.ajax(request).done(function (response) {
    alert("Data Updated Successfully!");
  })

})

$("#userRecords").submit(function (event) {
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  var data = {}

  $.map(unindexed_array, function (n, i) {
    data[n['name']] = n['value']
  })

  console.log(data);

  var request = {
    "url": `http://localhost:3000/api/users/${data.id}`,
    "method": "PUT",
    "data": data
  }

  $.ajax(request).done(function (response) {
    alert("Data Updated Successfully!");
  })
})


$("#updateUserPersonalInfo").submit(function (event) {
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  var data = {}

  $.map(unindexed_array, function (n, i) {
    data[n['name']] = n['value']
  })

  console.log(data);

  var request = {
    "url": `http://localhost:3000/api/users/${data.id}`,
    "method": "PUT",
    "data": data
  }

  $.ajax(request).done(function (response) {
    alert("Data Updated Successfully!");
  })
})

$("#updateUserLicense").submit(function (event) {
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  var data = {}

  $.map(unindexed_array, function (n, i) {
    data[n['name']] = n['value']
  })

  console.log(data);

  var request = {
    "url": `http://localhost:3000/api/users/${data.id}`,
    "method": "PUT",
    "data": data
  }

  $.ajax(request).done(function (response) {
    alert("Data Updated Successfully!");
  })
})

$("#updateUserVehicle").submit(function (event) {
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  var data = {}

  $.map(unindexed_array, function (n, i) {
    data[n['name']] = n['value']
  })

  console.log(data);

  var request = {
    "url": `http://localhost:3000/api/users/${data.id}`,
    "method": "PUT",
    "data": data
  }

  $.ajax(request).done(function (response) {
    alert("Data Updated Successfully!");
    res.render("admin_userRecords");

  })
})

// SEARCH




// DELETE JS
if (window.location.pathname == "/events") {
  $ondelete = $(".card a.removeEvents");
  $ondelete.click(function () {
    var id = $(this).attr("data-id")

    var request = {
      "url": `http://localhost:3000/api/events/${id}`,
      "method": "DELETE"
    }

    if (confirm("Do you really want to delete this record?")) {
      $.ajax(request).done(function (response) {
        alert("Data Deleted Successfully!");
        location.reload();
      })
    }
  })
}

if (window.location.pathname == "/parking-space") {
  $ondelete = $(".card a.removeParkingSpace");
  $ondelete.click(function () {
    var id = $(this).attr("data-id")

    var request = {
      "url": `http://localhost:3000/api/parking-space/${id}`,
      "method": "DELETE"
    }

    if (confirm("Do you really want to delete this record?")) {
      $.ajax(request).done(function (response) {
        alert("Data Deleted Successfully!");
        location.reload();
      })
    }
  })
}



// LOGIN
$("#editUserRecords").click(function(event){
  event.preventDefault();
  $('.inputDisabled').removeAttr("disabled")
});



function clock() {
  var d = new Date();
  var hour = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();

  document.getElementById("time").innerHTML = hour + ":" + min;
}

//----------UserInfo Modal ---------
function popUserInfo() {
  document.getElementById("userInfoContainer").style.display = "block";
}

function closeButton() {
  document.getElementById("userInfoContainer").style.display = "none"; 
}
//-----------------EVENT--------------------


function updateEvent() {
  document.getElementById("updateEventModal").style.display = "block";
}

function addEventSubmit() {
  document.getElementById("confirmPasswordEvent").style.display = "block";
}

function addEventCancel() {
  document.getElementById("addEventModal").style.display = "none";
}

function addEventConfirm() {
  var defaultPassword = "riza";
  var password = document.getElementById("confirmPassword").value;

  if (password == defaultPassword) {
    document.getElementById("addEventModal").style.display = "none";
    document.getElementById("confirmPasswordEvent").style.display = "none";

  } else {
    alert("char!!!");
  }
}

function addEventConfirmCancel() {
  document.getElementById("confirmPasswordEvent").style.display = "none";
}

//---------------PARKING----
function addParkingSlots() {
  document.getElementById("addParkingSlotsModal").style.display = "block";
}

function addParkingSlotSubmit() {
  document.getElementById("confirmPasswordAddParkingSlotModal").style.display = "block";
}

function addParkingSlotCancel() {
  document.getElementById("addParkingSlotsModal").style.display = "none";
}

function addParkingSlotsConfirmPass() {
  var defaultPassword = "riza";
  var password = document.getElementById("confirmPassword").value;

  if (password == defaultPassword) {
    document.getElementById("addParkingSlotsModal").style.display = "none";
    document.getElementById("confirmPasswordAddParkingSlotModal").style.display = "none";

  } else {
    alert("You've Enter a Wrong Password!");
  }
}

function addParkingslotCancelPass() {
  document.getElementById("confirmPasswordAddParkingSlotModal").style.display = "none";
}

function removeParkingSlot() {
  document.getElementById("removeParkingSlotModal").style.display = "block";
}

function removeParkingSlotConfirm() {
  //document.getElementById("confirmPasswordRemoveParkingSlotModal").style.display = "block";
}

function removeParkingSlotCancel() {
  document.getElementById("removeParkingSlotModal").style.display = "none";
}

function removeParkingSlotConfirmPass() {
  var defaultPassword = "riza";
  var password = document.getElementById("removeconfirmPassword").value;

  if (password == defaultPassword) {
    document.getElementById("removeParkingSlotModal").style.display = "none";
    document.getElementById("confirmPasswordRemoveParkingSlotModal").style.display = "none";
  } else {
    alert("You've Enter a Wrong Password!");
  }
}

function removeParkingSlotCancelPass() {
  document.getElementById("confirmPasswordRemoveParkingSlotModal").style.display = "none";
}

function updateParkingSlots() {
  document.getElementById("updateParkingSlotsModal").style.display = "block";
}

// Receipt

function receiptModal() {
  document.getElementById("vehicleRenewalReceipt").style.display = "block";
}

function receiptSubmitModal() {
  document.getElementById("vehicleRenewalReceipt").style.display = "none";
}

function receiptCancelModal() {
  document.getElementById("vehicleRenewalReceipt").style.display = "none";
}


// PROFILE
function enterProfile() {
  document.getElementById("profile").style.display = "block";
  document.getElementById("activeVehicle").style.display = "none";
  document.getElementById("inactiveVehicle").style.display = "none";
}

function enterEditProfile() {
  document.getElementById("editProfile").style.display = "block";
}
function cancelButton() {
  document.getElementById("editProfile").style.display = "none";
  document.getElementById("renewLicenseDetails").style.display = "none";

}
function submitButton() {
  document.getElementById("enterPasswordConfirm").style.display = "block";

}


function enterLicenseDetails() {
  document.getElementById("renewLicenseDetails").style.display = "block";
}

function enterActiveVehicle() {

  document.getElementById("activeVehicle").style.display = "block";
  document.getElementById("profile").style.display = "none";
  document.getElementById("inactiveVehicle").style.display = "none";

}

function enterInactiveVehicle() {
  document.getElementById("inactiveVehicle").style.display = "block";
  document.getElementById("profile").style.display = "none";
  document.getElementById("activeVehicle").style.display = "none";

}


// GUARD DASHBOARD
function searchGuard() {
  document.getElementById("").style.display = "block";
}

function reportViolation() {
  document.getElementById("reportViolationModal").style.display = "block";
}

function reportViolationSubmit() {
  document.getElementById("reportViolationModal").style.display = "none";
}

function reportViolationCancel() {
  document.getElementById("reportViolationModal").style.display = "none";
}

function licenseHistoryModal() {
  document.getElementById("licenseHistoryModal").style.display = "block";
}

function licenseHistoryModalOk() {
  document.getElementById("licenseHistoryModal").style.display = "none";
}

function deactivateModal() {
  document.getElementById("deactivateModal").style.display = "block";
}

function deactivateModalCancel() {
  document.getElementById("deactivateModal").style.display = "none";
}