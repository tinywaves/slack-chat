function showPic(pictureNode) {
  if (!document.getElementById("placeholder")) {
    return false;
  }
  var source = pictureNode.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src", source);

  if (document.getElementById("description")) {
    var title = pictureNode.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = title;
  }
  return true;
}

function countBodyChildren() {
  var bodyNode = document.getElementsByTagName("body")[0];
  alert(bodyNode.childNodes.length);
}
// window.onload = countBodyChildren();

function prepareGallery() {
  var flag = document.getElementsByTagName && document.getElementById;
  if (!flag) {
    return false;
  }
  var gallery = document.getElementById("imagegallery");
  if (!gallery) {
    return false;
  }
  var links = gallery.getElementsByTagName("a");
  for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      showPic(this);
      return false;
    }
  }
}
window.onload = prepareGallery();

function addLoadEvent(func) {
  var oldOnload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function () {
      oldOnload();
      func();
    }
  }
}