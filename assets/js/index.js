$(document).ready(function(){
// Responsive menu
$("#toggle").on("click", function(){
  $("#menu").slideDown("slow", function(){
    $(this).css("display", "block");
    $("nav").css("display", "block");
    $("#close").css("display", "block");
  });
});

// close menu
$("#close, li").on("click", function(){
  $("#menu").slideUp("slow", function(){
    $(this).css("display", "none");
  });
  
  $("nav, #close").slideUp().css("display", "none");
});

// show card content on mouseover
$("#projects .card").on("mouseover", function(){
    $(this).css("padding", "0px");
    $(this).children(".card-content").css("display", "block");
});

// hide card content on mouseout
$("#projects .card").on("mouseout", function(){
    $(this).children(".card-content").css("display", "none");

});

// cards appear when scrolled to certain height
$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
    
  if(wScroll > $("#projects").offset().top - ($(window).height() / 1.3)){
    $("#projects .card").each(function(i){
     
      setTimeout(function(){
        $("#projects .card").eq(i).addClass("is-showing");
      }, (700 * (Math.exp(i * 0.14))) - 700);      
    });
  } 

});

// when clicked on the menu's item, scroll to the selected section
$('.scroll_to').click(function(e){
    var jump = $(this).attr('href');
    var new_position = $(jump).offset();
    $('html, body').stop().animate({ scrollTop: new_position.top }, 1500);
    e.preventDefault();
});

// clear message 
$("#btn-clear").on("click", function(){
  $("#message").val() = " ";
  $("#name").val() = "";
  $("#email").val() = "";
});
 
// ***************** MODAL *******************/
//Modal
var overlayer    = $("#modal-overlayer");
var modal      = $("#modal");

overlayer.hide();
modal.hide();

//open modal
$("#projects .card").on("click", function(e){
  e.stopPropagation(); //stopping propagation here
  overlayer.fadeIn();
  modal.fadeIn();
  fillModal(this.id);
});

//close modal
$("#close-modal").on("click", function(){
  overlayer.fadeOut("slow");
  modal.fadeOut("slow");
});

$(overlayer).on("click", function(e) {
  e.stopPropagation(); //stopping propagation here
  if (overlayer.is(":visible")) {
      overlayer.fadeOut("slow");
      modal.fadeOut("slow");
  }
});

var flatUI = "Flat UI Colors"
var urlFlat = "https://flatuicolors.com/"
var materialUI = "Material UI Colors"
var urlMaterial = "http://materialuicolors.co/?utm_source=launchers"
var link1 = flatUI.link(urlFlat)
var link2 = materialUI.link(urlMaterial)

//Modal content - projects
var modalText = {
    portfolio: {
    title: "Portfolio",
    subtitle: "HTML, CSS, JavaScript, jQuery, PHP",
    gitCode: "https://github.com/todorovicj86/my-portfolio",
    website: "https://jelena-todorovic-portfolio.herokuapp.com/",
    description: 
      "The project is a portfolio website. The purpose is to show what I already know, " +
      "but also to learn and try new skills, such as UI/UX design and backend technologies." +
      " I made a whole website from scratch. UX/UI design is simple and easy-to-use."+
      " The layout is responsive and works over different devices and screen sizes."+
      " I use HTML, CSS, JavaScript, and jQuery for the frontend and PHP for the backend." 
  },
  realestate: {
    title: "Concept of a Real Estate Website",
    subtitle: "HTML, CSS, JavaScript, jQuery",
    gitCode: "https://github.com/todorovicj86/RealEstateWebsite_concept",
    description:
      "The Concept of a Real Estate Website is a personal project. " +
      " The idea came up while I was searching for a new apartment, "+
      " I made this landing page from scratch, focusing mainly on frontend. " +
      " The grid system is created using floats and flexbox. " +
      " I use media query and JavaScript for the responsive design and responsive menu. "  +
      " The website includes Login and Sign In modal forms, created with CSS and JavaScript/jQuery. "+
      " The biggest challenge is to filter the properties, which I achieved via JavaScript/jQuery. "
    },
    fylo: {
        title: "Fylo",
        subtitle: "HTML, CSS, Sass, Bootstrap",
        gitCode: "https://github.com/todorovicj86/Fylo-Landing-Page",
        website: "https://fylo-cad5f.firebaseapp.com/",
        description: 
          "It is a static landing page, one of the frontend challenges from the Front-end Mentor website - https://www.frontendmentor.io. " +
          " I made this responsive landing page using Bootstrap, while the customized styling is done in Sass/CSS. " 
    },

  toDo: {
    title: "ToDo React App",
    subtitle: "React, CSS",
    gitCode: "https://github.com/todorovicj86/todo-react-app",
    website: "https://todo-app-by-me-react.herokuapp.com/",
    description: 
    " This is a user-friendly application that is used to create a simple to-do list. " +
    " It gives the user the possibility to add new tasks to their list, to cross-off or remove the completed tasks, " + 
    " and to edit the existing ones. The application is created using React."
  },
  todoApp: {
    title: "ToDo App",
    subtitle: "JavaScript, jQuery",
    gitCode: "https://github.com/todorovicj86/ToDoList",
    website: "https://todoapp-76b11.firebaseapp.com/",
    description: 
    "It is a simple ToDo Web Application." +
    " It enables the user to make their ToDo list. " +
    " It can add new items, remove completed ones, and sort data based on active and completed tasks. "+
    " It also adds the date when a task created and when completed. "+
    " For this project, I use JavaScript/jQuery."
  },
  colorPalette: {
    title: "Color Palettes App",
    subtitle: "React, JSS, Material UI",
    gitCode: "https://github.com/todorovicj86/react-colors-app",
    website: "https://react-colors-palette-app.herokuapp.com/",
    description: 
    `<p id="withLink">The project is a clone of websites like ${link1} and ${link2}. 
    By default, it gives nine color palettes. Each palette contains 20 colors with the color-name and color-code. A user can copy the color-code to a clipboard. 
    The color-code format (HEX, RGB or RGBA), as well as the color shade level, can change.  
    In addition to the offered palettes, a user can create a new color palette, with a maximum of 20 colors. 
    The user can manually choose each color of the palette and give it a name, or they can generate it randomly. 
    All the colors and color names need to be unique in the palette.  Additionally, the position of each color box can change by drag-and-drop.  
    Once the user creates the palette, it will save it on local storage under the unique name and a chosen emoji.
    The app is built with ReactJS.  For the React components, I use Material UI, whereas for the customized styling I use JSS. </p>`
  }

  
};


//function to fill in the modal window
function fillModal(id){
  $(".modal-title").text(modalText[id].title);
  $(".modal-description").html(modalText[id].description);
  $(".modal-subtitle").text(modalText[id].subtitle);
  $("#github_site").attr("href",modalText[id].gitCode);
  // $('#website').attr("href", modalText[id].website);
  if (modalText[id].website) {
    $('#website').css("display","block");
    $('#website').attr("href", modalText[id].website);
  } else {
    $('#website').css("display","none");
  }
  //add pictures to slides
  $.each($('#modal .slide'), function(index, value) {
    $(this).css({
      background: "url('images/slides/" + id + '-' + index + ".webp') center center/contain",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    });
  });
}


// $(document).ready(function(){
  //set the slide to first picture
  var slideIndex = 1;
  //show first picture
  showDivs(slideIndex);

  //click event to next button
  $("#next").click(function(){
      plusDivs(+1);
    });
  //click event to previous button
  $("#prev").click(function(){
     plusDivs(-1);
  });

//adds or subtracts number of slides
function plusDivs(n) {
  showDivs(slideIndex += n);
}

//showDivs function shows the div with index of slideIndex, and hides all the others
function showDivs(n) {
  var i;
  //select all the elements with class slide
  var x = $(".slide");
  //if slide index is higher than the number of slides
  if (n > x.length) {
    //set the slideIndex to 1 - first image
    slideIndex = 1;
  } 

  //if slideIndex is less than 1
  if (n < 1) {
    //set it to number of elements (number of divs with class slide)
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[slideIndex-1].style.display = "block"; 
  
}
});

   // Code for validating the form
  // Visit http://www.javascript-coder.com/html-form/javascript-form-validation.phtml
  // for details
  var frmvalidator  = new Validator("contactform");
  frmvalidator.addValidation("name","req","Please provide your name"); 
  frmvalidator.addValidation("email","req","Please provide your email"); 
  frmvalidator.addValidation("email","email","Please enter a valid email address"); 


  
 

