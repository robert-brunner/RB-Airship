window.addEventListener("resize", function() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var aspectRatio = windowWidth / windowHeight;
    
    if (aspectRatio < 1.1 || aspectRatio < 1.61) {
      // execute code if aspect ratio is less than 3:2 or greater than 16:9
      console.log("Aspect ratio is less than 3:2 or greater than 16:9");
      document.body.style.filter = "blur(5px)";
    } else {
      // execute code if aspect ratio is within limits
      console.log("Aspect ratio is within limits");
      document.body.style.filter = "none";
    }
  });

  let buttonState = 0;
  const skillsButton = document.querySelector("#Skills");
  const zepplinSkills = document.querySelector(".AirshipSkills")
  const reactoon = document.querySelector(".Reactoon");

  reactoon.style.animation = "moveReactoon 4s infinite"; // set animation
  
  skillsButton.addEventListener("click", () => {
    if (buttonState === 0) {
      // Change state to 1 and show the skills
      buttonState = 1;
      zepplinSkills.classList.add("show");
  
      // Set a timeout to toggle the state back to 0 after 2 seconds
      setTimeout(() => {
        buttonState = 0;
        zepplinSkills.classList.remove("show");
      }, 6000);
    } else {
      // Toggle state back to 0 and hide the skills
      buttonState = 0;
      zepplinSkills.classList.remove("show");
    }
  });
  
  
//something is amiss.... NVM.. for the moment..  The text box is only supposed to appear when the window is full screen. 
  // window.addEventListener('resize', function() {
  //   var text_box = document.querySelector('#text-box');
  //   if (window.innerWidth === screen.width && window.innerHeight === screen.height) {
  //     // Browser is in full screen mode
  //     // do nothing, since #text-box:hover is already set to display:block by default
  //     text_box.style.visibility = 'visible';
  //   } else {
  //     // Browser is not in full screen mode
  //     // set #text-box:hover to visibility:hidden
  //     text_box.style.visibility = 'hidden';
  //   }
  // });
  

  




























//-------------------------------------unused-------------------------------

// document.querySelector(".clouds").addEventListener("hover", ()=>{
//     document.querySelector(".backdrop").classList.toggle("change");
// })


// const cloud2 = document.querySelector('.cloud-2');

// setInterval(() => {
//   cloud2.style.transform = 'translateZ(500px)';
// }, 2);


// document.getElementById("setExtension").playbackRate = 0.75;

// window.addEventListener("resize", function() {
//     var windowWidth = window.innerWidth;
//     var windowHeight = window.innerHeight;
//     console.log("Window width: " + windowWidth + ", Window height: " + windowHeight);
//   });
  
  
//   window.addEventListener("resize", function() {
//     var windowWidth = window.innerWidth;
//     var windowHeight = window.innerHeight;
    
//     if (windowWidth < 1565 && windowHeight < 969) {
//       // execute code for window width less than 1565 and height less than 969
//       console.log("Window is less than 1565 x 969");
//     }
    
//     if (windowWidth < 780 && windowHeight < 484) {
//       // execute code for window width less than 780 and height less than 484
//       console.log("Window is less than 780 x 484");
//     }
    
//   });

// window.addEventListener("resize", function() {
//     var windowWidth = window.innerWidth;
//     var windowHeight = window.innerHeight;
  
//     if (windowWidth < 1565 && windowHeight < 969) {
//       // execute code for window width less than 1565 and height less than 969
//       console.log("Window is less than 1565 x 969");
//     } else if (windowWidth < 780 && windowHeight < 484) {
//       // execute code for window width less than 780 and height less than 484
//       console.log("Window is less than 780 x 484");
//     } else {
//       // execute code for window width and height larger than the limits
//       document.body.style.filter = "blur(5px)";
//       var message = document.createElement("div");
//       message.innerText = "Please resize the window to continue";
//       message.style.position = "absolute";
//       message.style.top = "50%";
//       message.style.left = "50%";
//       message.style.transform = "translate(-50%, -50%)";
//       message.style.background = "#fff";
//       message.style.padding = "20px";
//       message.style.border = "1px solid #000";
//       message.style.borderRadius = "5px";
//       message.style.zIndex = "999";
//       document.body.appendChild(message);
//     }
//   });

// window.addEventListener("resize", function() {
//     var windowWidth = window.innerWidth;
//     var windowHeight = window.innerHeight;
  
//     if (windowWidth < 1565 && windowHeight < 969) {
//       // execute code for window width less than 1565 and height less than 969
//       document.body.classList.add("blur");
//       console.log("Window is less than 1565 x 969");
//     }
  
//     if (windowWidth < 780 && windowHeight < 484) {
//       // execute code for window width less than 780 and height less than 484
//       document.body.classList.add("blur");
//       console.log("Window is less than 780 x 484");
//     }
    
//     if (windowWidth >= 1565 && windowHeight >= 969 && windowWidth >= 849 && windowHeight >= 529) {
//       // remove the blur class when the window size is back to normal
//       document.body.classList.remove("blur");
//     }
  
//   });
  
//   window.addEventListener("resize", function() {
//     var windowWidth = window.innerWidth;
//     var windowHeight = window.innerHeight;
//     var aspectRatio = windowWidth / windowHeight;
    
//     if (aspectRatio < 1.62) {
//       // execute code if aspect ratio is less than 1.62
//       console.log("Window aspect ratio is less than 1.62");
//     }
    
//     if (aspectRatio < 1.61) {
//       // execute code if aspect ratio is less than 1.61
//       console.log("Window aspect ratio is less than 1.61");
//     }
    
//   });

  

// // Select the aspect-ratio div
// const aspectRatioDiv = document.getElementById('aspect-ratio');

// // Calculate the aspect ratio
// const aspectRatio = (window.innerWidth / window.innerHeight).toFixed(2);

// // Update the contents of the aspect-ratio div
// aspectRatioDiv.innerHTML = `Aspect Ratio: ${aspectRatio}`;

// // Center the aspect-ratio div on the screen
// aspectRatioDiv.style.position = 'absolute';
// aspectRatioDiv.style.top = '50%';
// aspectRatioDiv.style.left = '50%';
// aspectRatioDiv.style.transform = 'translate(-50%, -50%)';
// aspectRatioDiv.style.zIndex = 9999;


  //I could also make the ropes stretch and the the video zoom in if the window gets too tall...
  


  

  
  
  