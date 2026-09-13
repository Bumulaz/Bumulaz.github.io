var spinner = document.querySelector("#spinner");
document.querySelector("button").onclick = function() {
  spinner.style.animationName = "example";
  setTimeout(function() {
    spinner.style.animationName = "";
  }, 4000);
};