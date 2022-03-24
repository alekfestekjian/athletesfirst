function fixedHeaderScroll(){


  let scrollpos = window.scrollY
  const header = document.getElementById("header-bar")
  const header_height = header.offsetHeight

  const add_class_on_scroll = () => header.classList.add("skin-inverted")
  const remove_class_on_scroll = () => header.classList.remove("skin-inverted")

  window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;

    if (scrollpos >= header_height) { 
      add_class_on_scroll() 
    } else { 
      remove_class_on_scroll() 
    }

    // console.log(scrollpos)
  })

}


function toggleNav(){
  var navigation = document.getElementById("header-navigation");

  if (window.getComputedStyle(navigation).display === "none") {
      navigation.style.display = "block";
      navigation.classList.add("show_mobile_nav");
  } else {
      navigation.style.display = "none";
      navigation.classList.remove("show_mobile_nav");      
  }
};


function toggleDiv(target, element){
  var targetContainer = document.getElementById(target);
  var targetTrigger = element;


  if (window.getComputedStyle(targetContainer).display === "none") {
      targetContainer.style.display = "block";
  } else {
      targetContainer.style.display = "none";
  }
};


function toggleDropdown(target, element) {
  var targetContainer = document.getElementById(target);
  var targetTrigger = element;
  
  if (window.getComputedStyle(targetContainer).display === "none") {
      targetContainer.style.display = "block";
      targetContainer.classList.add("dropdownActive");
  } else {
      targetContainer.style.display = "none";
      targetContainer.classList.remove("dropdownActive");
  }
}




function toggleFilters(filterColumn, cardColumn, cardList, element){
  var targetContainer = document.getElementById(filterColumn);
  var cardContainer = document.getElementById(cardColumn);
  var cardGrid = document.getElementById(cardList);
  var targetTrigger = element;

  var filterContainer = document.getElementById('card-filters-container');

  if (window.getComputedStyle(targetContainer).display === "none") {
      targetContainer.style.display = "initial";
      filterContainer.style.display = "block";

      // Adjsut the parent container to use full width
      cardContainer.classList.remove("col-12_xs-12_md-12_sm-12");
      cardContainer.classList.add("col-9_xs-12_md-9_sm-12");

      // Adjsut the card grid to show more cards per row
      cardGrid.classList.remove("grid-4_xs-2_md-2-equalHeight");
      cardGrid.classList.add("grid-3_xs-2_md-2-equalHeight");

  } else {
      targetContainer.style.display = "none";
      filterContainer.style.display = "block";

      // Adjsut the parent container to use split width
      cardContainer.classList.remove("col-9_xs-12_md-9_sm-12");
      cardContainer.classList.add("col-12_xs-12_md-12_sm-12");

      // Adjsut the card grid to show less cards per row
      cardGrid.classList.remove("grid-3_xs-2_md-2-equalHeight");
      cardGrid.classList.add("grid-4_xs-2_md-2-equalHeight");
  }
};

function togglenotification(){
  alert('notification pushed');
}



// Close the dropdown if the user clicks outside of it .
window.onclick = function(event) {
  if (event.target.matches('header a')) {

    document.getElementById('header-navigation').classList.remove("show_mobile_nav");
    document.getElementById('header-navigation').style.display = 'none';

    // Check to see if the click is happening in the member options dropdown
    if (!event.target.matches('.member-link *')) {
      var dropdowns = document.getElementsByClassName("dropdownActive");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display = "block") {
          openDropdown.classList.remove('dropdownActive');
          openDropdown.style.display = "none";
        }
      }
    }
  } 
  else 
  {
    // If the click happens outside of the header, check to see if the member options dropdown is visible, and if so, close it
    if (!event.target.matches('.member-link *')) {
      var dropdowns = document.getElementsByClassName("dropdownActive");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display = "block") {
          openDropdown.classList.remove('dropdownActive');
          openDropdown.style.display = "none";
        }
      }
    }
  }
}



function closeMessage(target) {
   var targetMsg = document.getElementById(target);
   targetMsg.style.display = "none";
}




// Check to see if it Supports Particles
  function pop (e) {
    let amount = 240;
    // e = document.getElementById(e);
    switch (e.target.dataset.type) {
      case 'pack':
        amount = 240;
        break;
    }
    // Quick check if user clicked the button using a keyboard
    if (e.clientX === 0 && e.clientY === 0) {
      const bbox = e.target.getBoundingClientRect();
      const x = bbox.left + bbox.width / 2;
      const y = bbox.top + bbox.height / 2;
      for (let i = 0; i < 240; i++) {
        // We call the function createParticle 120 times
        // We pass the coordinates of the button for x & y values
        createParticle(x, y, e.target.dataset.type);
      }
    } else {
      for (let i = 0; i < amount; i++) {
        // console.dir('q');
        createParticle(e.clientX, e.clientY + window.scrollY, e.target.dataset.type);
      }
    }
  }

  function createParticle (x, y, type) {
    const particle = document.createElement('particle');
    // document.body.appendChild(particle);
    document.getElementById('page-texture').appendChild(particle);
    let width = Math.floor(Math.random() * 30 + 8);
    let height = width;
    let destinationX = (Math.random() - 0.5) * 1000;
    let destinationY = (Math.random() - 0.5) * 1000;
    let rotation = Math.random() * 520;
    let delay = Math.random() * 500;
    
    switch (type) {

      case 'pack':
        particle.style.background = `rgba(255,255,255,0.8)`;
        particle.style.borderRadius = `50%`;
        width = height = Math.random() * 5 + 4;
        break;
      
    }
    
    particle.style.width = `${width}px`;
    particle.style.height = `${height}px`;
    
    setTimeout(function(){

      const animation = particle.animate([
        {
          transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
          opacity: 1
        },
        {
          transform: `translate(-50%, -50%) translate(${x + destinationX}px, ${y + destinationY}px) rotate(${rotation}deg)`,
          opacity: 0
        }
      ], {
        duration: Math.random() * 1000 + 500,
        easing: 'cubic-bezier(0, .9, .57, 1)',
        delay: delay
      });
      animation.onfinish = removeParticle;

    },2000); // Wait 2 seconds before exploding
  }

  function removeParticle (e) {
    e.srcElement.effect.target.remove();
  }

  if (document.body.animate) {
    document.querySelectorAll('.pack-link').forEach(button => button.addEventListener('click', pop));
  }






// Update the count down every 1 second
setInterval(function() {

  // For Each timer on the page do the following:
  var timerContainer = document.getElementsByClassName("card-listing-timer");

  for(var i = 0; i < timerContainer.length; i++){

    var itemTime = timerContainer[i].dataset.timestamp;
    itemTime = new Date(itemTime).getTime();

    var outputContainer = timerContainer[i].childNodes[0].getAttribute('id');

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = itemTime - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById(outputContainer).innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      document.getElementById(outputContainer).innerHTML = "Ended";
      document.getElementById(outputContainer).classList.add("ended");
      document.getElementById(outputContainer).classList.remove("ending-soon");
      document.getElementById(outputContainer).classList.remove("ending-critical");
    }

    if (days == 0) {
      if ((hours < 4) && (hours > 0)) {
        document.getElementById(outputContainer).classList.add("ending-soon");
      } else {
        if (hours == 0) {
          if (minutes < 30) {
            document.getElementById(outputContainer).classList.add("ending-critical");
            document.getElementById(outputContainer).classList.remove("ending-soon");
          } else {
            document.getElementById(outputContainer).classList.add("ending-soon");
          }
        }
      }
    }
  }

  // console.log(outputContainer);
}, 1000);

 