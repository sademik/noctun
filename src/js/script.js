var data = [
    {
      AboutDevTypeText: "search -g --query "
    }
  ];

  var allElements = document.getElementsByClassName("typing");
  for (var j = 0; j < allElements.length; j++) {
    var currentElementId = allElements[j].id;
    var currentElementIdContent = data[0][currentElementId];
    var element = document.getElementById(currentElementId);
    var devTypeText = currentElementIdContent;

    // type code
    var i = 0, isTag, text;
    (function type() {
      text = devTypeText.slice(0, ++i);
      if (text === devTypeText) return;
      element.innerHTML = text + `<span class='blinker'>&#32;</span>`;
      var char = text.slice(-1);
      if (char === "<") isTag = true;
      if (char === ">") isTag = false;
      if (isTag) return type();
      setTimeout(type, 60);
    })();
  }

function updateClock() {
  var now = new Date();
  hours = now.getHours();
    minutes = now.getMinutes();
    seconds = now.getSeconds();
  if (minutes < 10) {
    time = hours + ":" + "0" + minutes + ":" + seconds;
  } else {
    time = hours + ":" + minutes + ":" + seconds;
  }
  if (hours < 10) {
    time = "0" + time;
  }
  document.getElementById("time").innerHTML = time;
  setTimeout(updateClock, 1000);
}

function updateDate() {
  const d = new Date();
  document.getElementById("date").innerHTML = d.toDateString();
}

function getLanguage() {
  var lang = navigator.language;

  document.getElementById("lang").innerHTML = lang;
}

updateClock();
updateDate();
getLanguage();
