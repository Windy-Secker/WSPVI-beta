function loadmain(){
  document.getElementById("main").style.display="inline"
  document.getElementById("search").style.display="none"
  document.getElementById("about").style.display="none"
  document.getElementById("su").style.display="none"
  document.getElementById("ini").style.display="none"
}

function loadsearch(){
  document.getElementById("main").style.display="none"
  document.getElementById("search").style.display="block"
  document.getElementById("su").style.display="inline-block"
  document.getElementById("ini").style.display="none"
  document.getElementById("about").style.display="none"
}

function loadabout(){
  document.getElementById("main").style.display="none"
  document.getElementById("search").style.display="none"
  document.getElementById("su").style.display="none"
  document.getElementById("about").style.display="inline"
  document.getElementById("ini").style.display="none"
}

function loadini(){
  document.getElementById("main").style.display="none"
  document.getElementById("search").style.display="none"
  document.getElementById("su").style.display="none"
  document.getElementById("about").style.display="none"
  document.getElementById("ini").style.display="block"
}

function loadlearn(){
  document.getElementById("main").style.columnCount="1"
  document.getElementById("learn").style.display="inline"
  document.getElementById("tool").style.display="none"
  document.getElementById("fun").style.display="none"
  document.getElementById("naw").style.display="none"
}

function loadtool(){
  document.getElementById("main").style.columnCount="1"
  document.getElementById("learn").style.display="none"
  document.getElementById("tool").style.display="inline"
  document.getElementById("fun").style.display="none"
  document.getElementById("naw").style.display="none"
}

function loadfun(){
  document.getElementById("main").style.columnCount="1"
  document.getElementById("learn").style.display="none"
  document.getElementById("tool").style.display="none"
  document.getElementById("fun").style.display="inline"
  document.getElementById("naw").style.display="none"
}

function loadnaw(){
  document.getElementById("main").style.columnCount="1"
  document.getElementById("learn").style.display="none"
  document.getElementById("tool").style.display="none"
  document.getElementById("fun").style.display="none"
  document.getElementById("naw").style.display="inline"
}

function loadall(){
  document.getElementById("main").style.columnCount="4"
  document.getElementById("learn").style.display="inline"
  document.getElementById("tool").style.display="inline"
  document.getElementById("fun").style.display="inline"
  document.getElementById("naw").style.display="inline"
}
