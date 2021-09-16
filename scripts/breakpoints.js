console.log("BREAKPOINT SCRIPT ACTIVE");

let htmlElement = document.querySelector("html");

let breakpoints = [ // array of media queries
      window.matchMedia('(max-width: 480px)'),
      window.matchMedia('(min-width: 481px) and (max-width: 768px)'),
      window.matchMedia('(min-width: 769px) and (max-width: 1180px)'),
      window.matchMedia('(min-width: 1181px) and (max-width: 1440px)'),
      window.matchMedia('(min-width: 1441px)')
    ];

for (let i = 0; i < breakpoints.length; i++) {
  breakpoints[i].addListener(WidthChange);
  WidthChange(breakpoints[i]);
}

function WidthChange(e) {
    if (breakpoints[0].matches) {
      checkClass("xsmall");

    } else if (breakpoints[1].matches) {
      checkClass("small");

    } else if (breakpoints[2].matches) {
      checkClass("medium");

    } else if (breakpoints[3].matches) {
      checkClass("large");

    } else if (breakpoints[4].matches) {
      checkClass("xlarge");
    }
}

// Give HTML class according to breakpoint
function checkClass(size) {
  if (htmlElement.className == '') {

    if (size == "xsmall") {
      htmlElement.classList.add(size);
      htmlElement.classList.add("small");
    } else if (size == "small") {
      htmlElement.classList.add(size);
    } else if (size == "medium") {
      htmlElement.classList.add(size);
    } else if (size == "large") {
      htmlElement.classList.add(size);
    } else if (size == "xlarge") {
      htmlElement.classList.add(size);
    }

  } else if (htmlElement.className != '') {

    if (size == "xsmall" && htmlElement.classList.contains("small")) {
      htmlElement.classList.add(size);
    } else {
      htmlElement.className = "";
      htmlElement.classList.add(size);
    }
  }
}
