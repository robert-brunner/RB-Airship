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


  //Airship Animation
  let buttonState = 0;
  let timer = null; // new variable to keep track of timeout
  const skillsButton = document.querySelector("#Skills");
  const zepplinSkills = document.querySelector(".AirshipSkills")
  const reactoon = document.querySelector(".Reactoon");
  const jsoon = document.querySelector(".JSoon");
  const htmloon = document.querySelector(".HTMLoon");
  const cssoon = document.querySelector(".CSSoon");
  const cshrpoon = document.querySelector(".cSHRPoon");
  const sqloon = document.querySelector(".SQLoon");
  const aepoon = document.querySelector(".AEPoon");
  
  reactoon.style.animation = "moveReactoon 4s infinite"; // React Balloon
  jsoon.style.animation = "moveJSoon 4s infinite"; // JavaScript Balloon
  htmloon.style.animation = "moveHTMLoon 6s infinite"; // HTML Balloon
  cssoon.style.animation = "moveCSSoon 9s infinite"; // CSS Balloon... if only the others knew all the effort this poor little balloon is doing for them...
  cshrpoon.style.animation = "movecSHRPoon 25s infinite";
  sqloon.style.animation = "moveSQLoon 15s infinite";
  aepoon.style.animation = "moveAEPoon 5s infinite";
  
  skillsButton.addEventListener("click", () => {
    if (buttonState === 0) {
      // Change state to 1 and show the skills
      buttonState = 1;
      zepplinSkills.classList.add("show");
  
      // // Set a timeout to toggle the state back to 0 after 2 seconds
      // timer = setTimeout(() => {
      //   buttonState = 0;
      //   zepplinSkills.classList.remove("show");
      // }, 20000);
    } else {
      // Toggle state back to 0 and hide the skills
      buttonState = 0;
      zepplinSkills.classList.remove("show");
      clearTimeout(timer); // cancel the timeout
    }
  });

  // Get all the buttons
  var buttons = document.querySelectorAll('button');

  // Add click event listener to each button
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      // Check if the button has the class name "Tulip"
      if (button.classList.contains('frameClicker')) {
        // Play audio file
        var audio = document.querySelector('.Sounds audio');
        audio.play();
      }
    });
  });



//Sound control via Gramophone
var frameClickers = document.querySelectorAll('.frameClicker');
var gramOn = document.getElementById('gramOn');
var gramOff = document.getElementById('gramOff');
var ambientSound = document.getElementById('ambientSound');
ambientSound.volume = 0.1;
ambientSound.value = 0;
var isAmbientSoundEnabled = false; // new variable to keep track of AmbientSound state
var isState3Activated = false; // new variable to keep track of state 3 activation

function toggleAmbientSound() {
  if (!isState3Activated) {
    ambientSound.value = 3;
    ambientSound.play();
    isState3Activated = true;
  } else if (ambientSound.value === 4 && gramOff.style.display === 'none') {
    ambientSound.value = 3;
    ambientSound.pause();
  }
}
//GOING IN CIRCLES  UGH
function toggleGramophone() {
  if (!isState3Activated) {
    gramOn.style.display = 'none';
    gramOff.style.display = 'block';
    ambientSound.value = 3;
    ambientSound.pause();
    frameClickers.forEach(function(button) {
      button.removeEventListener('click', toggleAmbientSound);
    });
    isState3Activated = true;
  } else if (ambientSound.value === 3 && this === gramOn) {
    if (!isAmbientSoundEnabled) { // check if AmbientSound is enabled for the first time
      gramOn.style.display = 'block';
      gramOff.style.display = 'none';
      isAmbientSoundEnabled = true;
    } else {
      gramOn.style.display = 'block';
      gramOff.style.display = 'none';
      ambientSound.value = 4;
      frameClickers.forEach(function(button) {
        button.addEventListener('click', toggleAmbientSound);
      });
    }
  }
}

frameClickers.forEach(function(button) {
  button.addEventListener('click', toggleAmbientSound);
});

gramOn.addEventListener('click', toggleGramophone);
gramOff.addEventListener('click', toggleGramophone);

document.querySelectorAll('.backgroundNoiseToggle').forEach(function(backgroundNoiseToggle) {
  backgroundNoiseToggle.addEventListener('click', function() {
    // update gramophone image display
    var gramOn = document.getElementById('gramOn');
    var gramOff = document.getElementById('gramOff');
    if (gramOff.style.display === 'none') {
      gramOff.style.display = 'block';
      gramOn.style.display = 'none';
      ambientSound.pause();
    } else {
      gramOff.style.display = 'none';
      gramOn.style.display = 'block';
      ambientSound.volume = 0.1;
      ambientSound.play();
    }
  });
});









  //I AM GOING TO DO THIS.. IT WOULD BE AMAZING!!!!!   The balloons have at least one other set of animations to go thru. Right now they are just bobbing.  THere can also be a mode where they fly across the screen in a train fashion.. :D hahahahah or perhaps a bird or aliens chase them :D  ^(¤.¤)^Hoot! Hoot!^(¤.¤)^ ... I Need to touch grass at some point 




  function copyEmailAndOpen() {
    var email = document.querySelector('#Mail').getAttribute('data-email');
    var tempInput = document.createElement('input');
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert("Email copied to clipboard: " + email);
    window.open('mailto:' + email);
  }
  
  var lastPlayedTime = 0;
  
// Initialize an array to keep track of playing sounds
var playingSounds = [];

function playSound() {
  var currentTime = new Date().getTime();
  if (currentTime - lastPlayedTime > 1500) {
    var sound = new Audio('Assets/Sounds/Ting.ogg');
    sound.volume = 0.05;
    sound.play();
    playingSounds.push(sound); // Add the sound to the playing sounds array

    // Remove the sound from the playing sounds array when it finishes playing
    sound.addEventListener('ended', function() {
      playingSounds.splice(playingSounds.indexOf(sound), 1);
    });

    lastPlayedTime = currentTime; // Update last played time
  }
}


  var lastPlayedTime = 0;
  
  function valvePressure() {
    var currentTime = new Date().getTime();
    if (currentTime - lastPlayedTime > 2000) { // Check if 2 second have passed since last play
      var sound = new Audio('Assets/Sounds/ValvePressureRelease.ogg');
      sound.play();
      sound.volume = 0.5
      lastPlayedTime = currentTime; // Update last played time
    }
  }


//some assets take longer to load than others.
  window.addEventListener('load', function() {
    var loader = document.getElementById('loader');
    loader.style.display = 'none';
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
  


  

  
  
  