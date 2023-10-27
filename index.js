function showmyart() {
    // Apply the fade-in animation to the container
    $("#myart_container")
      .css("display", "inherit")
      .hide() // Hide initially to prepare for fade-in
      .addClass("animated slideInLeft")
      .fadeIn(800, function() {
        // Animation complete callback
        // Redirect to myart.html after animation
        window.location.href = "myart.html";
      });
  }
  function closemyart() {
    // Apply the fade-out animation to the container
    $("#myart_container").fadeOut(800, function() {
      // Animation complete callback
      // Hide the container using .hide()
      $(this).hide();
      
      // After the fade-out animation is complete
      // Redirect to myart.html
      window.location.href = "index.html";
    });
    showIndexContainer() 
  }
  
  function showIndexContainer() {
    $("#index_container")
      .css("display", "inherit")
      .fadeIn(800, function() {
        // Animation complete callback
        // Redirect to index.html after animation
        window.location.href = "index.html";
      });
  }

  function showprojects() {
    // Apply the fade-in animation to the container
    $("#projects_container")
      .css("display", "inherit")
      .hide() // Hide initially to prepare for fade-in
      .addClass("animated slideInRight")
      .fadeIn(800, function() {
        // Animation complete callback
        // Redirect to myart.html after animation
        window.location.href = "myprojects.html";
      });
  }
  function closeprojects() {
    // Apply the fade-out animation to the container
    $("#projects_container").fadeOut(800, function() {
      // Animation complete callback
      // Hide the container using .hide()
      $(this).hide();
      
      // After the fade-out animation is complete
      // Redirect to myart.html
      window.location.href = "index.html";
    });
    showIndexContainer() 
  }

  /* 
function showprojects(){
    $("#projects_container").css("display","inherit");
    $("#projects_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#projects_container").removeClass("animated slideInRight");
    },800);
}
function closeprojects(){
    $("#projects_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#projects_container").removeClass("animated slideOutRight");
        $("#projects_container").css("display","none");
    },800);
}
*/

function showaboutme(){
    $("#aboutme_container").css("display","inherit");
    $("#aboutme_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#aboutme_container").removeClass("animated slideInUp");
    },800);
}
function closeaboutme(){
    $("#aboutme_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#aboutme_container").removeClass("animated slideOutDown");
        $("#aboutme_container").css("display","none");
    },800);
}
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#about").removeClass("animated fadeIn");
      $("#contact").removeClass("animated fadeIn");
      $("#work").removeClass("animated fadeIn");
    },1000);
},1500);

function showmusic(){
    $("#music_container").css("display","inherit");
    $("#music_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#music_container").removeClass("animated slideInLeft");
    },800);
}
function closemusic(){
    $("#music_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#music_container").removeClass("animated slideOutLeft");
        $("#music_container").css("display","none");
    },800);
}

function showcompsci(){
    $("#compsci_container").css("display","inherit");
    $("#compsci_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#compsci_container").removeClass("animated slideInLeft");
    },800);
}
function closecompsci(){
    $("#music_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#compsci_container").removeClass("animated slideOutLeft");
        $("#compsci_container").css("display","none");
    },800);
}

function showfilm(){
    $("#film_container").css("display","inherit");
    $("#film_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#film_container").removeClass("animated slideInRight");
    },800);
}
function closefilm(){
    $("#film_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#film_container").removeClass("animated slideOutRight");
        $("#film_container").css("display","none");
    },800);
}

function showschool(){
    $("#school_container").css("display","inherit");
    $("#school_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#school_container").removeClass("animated slideInRight");
    },800);
}
function closeschool(){
    $("#school_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#school_container").removeClass("animated slideOutRight");
        $("#school_container").css("display","none");
    },800);
}

function showliterature(){
    $("#literature_container").css("display","inherit");
    $("#literature_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#literature_container").removeClass("animated slideInUp");
    },800);
}
function closeliterature(){
    $("#literature_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#literature_container").removeClass("animated slideOutDown");
        $("#literature_container").css("display","none");
    },800);
}

function loadNotebook(){
    fetch('https://taylorsbeesknees.com/comments.txt')
    .then(response => response.text()
    .then((data) => {
    alert(data) 
}))
}

/*
function closemyart() {
    console.log("closemyart function called"); // Add this line
    // Rest of your code...
}
*/
