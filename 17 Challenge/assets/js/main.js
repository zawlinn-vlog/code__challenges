"use strict";

// Fixed Flex Gap no Support Browser

function checkFlexGap() {
  // CREATE DIV ELEMENT
  var flex = document.createElement("div");

  // APPEND STYLE
  flex.style.display = "flex";
  flex.style.flexDirection = "Column";
  flex.style.rowGap = "1px";

  // APPEND TO DOCUMENT
  document.body.appendChild(flex);

  // CREATE TWO CHILD ELEMENT
  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  // CHECK GAP IS SUPPORT OR NOT
  var isSupported = flex.scrollHeight === 1;

  // REMOVE FLEX ELEMENT
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  // ADD CLASS TO DOCUMENT BODY
  if (!isSupported) document.body.classList.add("no--flex-gap");
}
checkFlexGap();
