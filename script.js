// document.getElementById("some-id").style accesses the css rule of element

// document.getElementById("android").style.border = "2px solid black"
// document.getElementById("some-image").src = images/
// document.getElementById("some-a-tag).href

document.getElementById("android").addEventListener("click", changeandroid);

function changeandroid() {
  document.getElementById("logo").src = "images/android-logo.jpg";

  document.getElementById("link").innerHTML = "Android Home";

  document.getElementById("link").style.background = " #a4c93b";

  document.getElementById("link").href = "https://www.android.com/&#39";

  document.getElementById("html").style.background = "#a4c93b";

  document.getElementById("body").style.fontFamily = "'Roboto', sans-serif";

  document.getElementById("android").classList.add("redborder");

  document.getElementById("apple").classList.remove("redborder");
}

// apple
document.getElementById("apple").addEventListener("click", changeapple);

function changeapple() {
  document.getElementById("logo").src = "images/apple-logo.jpg";

  document.getElementById("link").innerHTML = "Apple Home";

  document.getElementById("link").style.background = " #b6bcca";

  document.getElementById("link").href = "https://www.apple.com/";

  document.getElementById("html").style.background = "#b6bcca";

  document.getElementById("body").style.fontFamily = "'Brygada 1918', serif";

  document.getElementById("apple").classList.add("redborder");

  document.getElementById("android").classList.remove("redborder");
}
