document.addEventListener('DOMContentLoaded', () => {
  let displayOne = document.querySelector(
    ".display-content-one"
  );
  let displayTwo = document.querySelector(
    ".display-content-two"
  );
  let displayThree = document.querySelector(
    ".display-content-three"
  );
  let displayFour = document.querySelector(
    ".display-content-four"
  );
  let displays = [
    displayOne, 
    displayTwo, 
    displayThree,
    displayFour
  ];
  
  let buttonOne = document.querySelector(
    ".sidebar-section-one"
  );
  let buttonTwo = document.querySelector(
    ".sidebar-section-two"
  );
  let buttonThree = document.querySelector(
    ".sidebar-section-three"
  );
  let buttonFour = document.querySelector(
    ".sidebar-section-four"
  );

  const clearDisplays = () => {
    for (let i = 0; i < displays.length; i++) {
      displays[i].classList.remove("display-open");
    }
  };

  buttonOne.addEventListener('click', function () {
    clearDisplays();
    displayOne.classList.add("display-open");
    console.log('one');
  });
  buttonTwo.addEventListener('click', function () {
    clearDisplays();
    displayTwo.classList.add("display-open");
    console.log("two");
  });
  buttonThree.addEventListener('click', function () {
    clearDisplays();
    displayThree.classList.add("display-open");
    console.log("three");
  });
  buttonFour.addEventListener('click', function () {
    clearDisplays();
    displayFour.classList.add("display-open");
    console.log("four");
  });

});

