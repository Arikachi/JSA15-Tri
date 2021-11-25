function homefunction() {
  window.scrollTo(0,0)
}

function aboutfunction() {
  window.scrollTo(0,819)
}

function latestfunction() {
  window.scrollTo(0,2457)
}

function teamfunction() {
  window.scrollTo(0,4045)
}

function blogfunction() {
  window.scrollTo(0,4694)
}

function mailfunction() {
  window.scrollTo(0,5162)
}


const Div = document.getElementById('myid')
const gray = document.getElementById('gray')

function showDiv() {
    Div.style.display = "block";
    gray.style.display = "block";
 }

gray.addEventListener("click", function() {
    Div.style.display = "none";
    gray.style.display = "none";
})

const btnAll = document.querySelector("#all");
const btnCat1 = document.querySelector("#cat-1");
const btnCat2 = document.querySelector("#cat-2");
const btnCat3 = document.querySelector("#cat-3");
const btnCat4 = document.querySelector("#cat-4");
const btnCat5 = document.querySelector("#cat-5");

const f1 = document.getElementById("flex1");
const f2 = document.getElementById("flex2");
const f3 = document.getElementById("flex3");
const f4 = document.getElementById("flex4");
const f5 = document.getElementById("flex5");
const f6 = document.getElementById("flex6");
const f7 = document.getElementById("flex7");
const f8 = document.getElementById("flex8");
const f9 = document.getElementById("flex9");

btnAll.addEventListener('click', function() {
  f1.classList.remove("none");
  f2.classList.remove("none");
  f3.classList.remove("none");
  f4.classList.remove("none");
  f5.classList.remove("none");
  f6.classList.remove("none");
  f7.classList.remove("none");
  f8.classList.remove("none");
  f9.classList.remove("none");
}
)

btnCat1.addEventListener('click', function() {
  f1.classList.remove("none");
  f2.classList.remove("none");
  f3.classList.remove("none");
  f4.classList.add("none");
  f5.classList.add("none");
  f6.classList.add("none");
  f7.classList.add("none");
  f8.classList.add("none");
  f9.classList.add("none");
}
)

btnCat2.addEventListener('click', function() {
  f1.classList.add("none");
  f2.classList.remove("none");
  f3.classList.remove("none");
  f4.classList.add("none");
  f5.classList.add("none");
  f6.classList.add("none");
  f7.classList.add("none");
  f8.classList.add("none");
  f9.classList.add("none");
}
)

btnCat3.addEventListener('click', function() {
  f1.classList.add("none");
  f2.classList.add("none");
  f3.classList.add("none");
  f4.classList.add("none");
  f5.classList.remove("none");
  f6.classList.remove("none");
  f7.classList.remove("none");
  f8.classList.add("none");
  f9.classList.add("none");
}
)

btnCat4.addEventListener('click', function() {
  f1.classList.add("none");
  f2.classList.remove("none");
  f3.classList.add("none");
  f4.classList.remove("none");
  f5.classList.add("none");
  f6.classList.add("none");
  f7.classList.add("none");
  f8.classList.remove("none");
  f9.classList.add("none");
}
)

btnCat5.addEventListener('click', function() {
  f1.classList.add("none");
  f2.classList.add("none");
  f3.classList.add("none");
  f4.classList.remove("none");
  f5.classList.remove("none");
  f6.classList.add("none");
  f7.classList.remove("none");
  f8.classList.add("none");
  f9.classList.remove("none");
}
)


function sofunction() {
  alert("Amaterasu")
  homefunction()
}

const In1 = document.getElementById('in1');
const La1 = document.getElementById('la1');
const In2 = document.getElementById('in2');
const La2 = document.getElementById('la2');
const In3 = document.getElementById('in3');
const La3 = document.getElementById('la3');
const FO0 = document.getElementById('fo0')

In1.addEventListener('click', function() {
  La1.classList.add("labelsee")
}
)

In1.addEventListener('blur', function() {
  La1.classList.remove("labelsee")
})

In2.addEventListener('click', function() {
  La2.classList.add("labelsee")
}
)

In2.addEventListener('blur', function() {
  La2.classList.remove("labelsee")
})

In3.addEventListener('click', function() {
  La3.classList.add("labelsee")
}
)

In3.addEventListener('blur', function() {
  La3.classList.remove("labelsee")
})


function Subfunction() {
  alert("Your submission has been sent")
}
