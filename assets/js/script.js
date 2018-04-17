// -------------------------------- LOGIN --------------------------------------------

function clicked() {
	var bruger = document.getElementById('brugernavn');
	var kode = document.getElementById('adgangskode');

	var eksbruger = "Johnykudo";
	var ekskode = "12345";

	if(bruger.value == eksbruger && kode.value == ekskode) {

		window.alert("Der er logget ind som " + bruger.value);
		window.location.replace("index.html");
	} else {
		window.alert("Forkert brugernavn eller adgangskode!");
	}
}


// -------------------------------- OPSLAG --------------------------------------------
function getLocal() {
  var notes = localStorage.getItem('noteList');

  if(notes != null) {
      return JSON.parse(notes);
  }
  else {
    return [];
  }
}

function setLocal(origNotes) {
  var newNotes = JSON.stringify(origNotes);
  localStorage.setItem('noteList', newNotes);
}

function submitNote(inputText, inputDate, inputImportant, inputIcon) {
  var origNotes = getLocal();
  var newNote = {
    text:       inputText,
    important:  inputImportant,
    icon:       inputIcon
  };
  origNotes.push(newNote);

  setLocal(origNotes);
}

function buildList() {
  var notes = getLocal();

  var ulElm = document.querySelector('#post-section');
  ulElm.innerHTML = '';

  for(var i = 0; i < notes.length; i++) {
    var liElm = document.createElement('li');
<<<<<<< HEAD
    var pElm = document.createElement('div');
=======
    var pElm = document.createElement('p');
    var editBtn = document.createElement('button');
    editBtn.innerHTML = 'Edit';

    editBtn.addEventListener('click', function() {

    });
>>>>>>> 7966b5868770b203d5d418d38f459e62266f1863


<<<<<<< HEAD

    pElm.innerHTML = '<div class="post-content">' + notes[i].text + '</div><div class="post-meta"><div class="post-info">0 Likes, 0 Kommentar</div><div class="post-buttons"><img src="img/opslag/thumbs-up.svg">Like</div><div class="post-buttons"><img src="img/opslag/message.svg">Kommentar</div><div class="post-buttons"><img src="img/opslag/forward.svg">Del</div></div>';
    pElm.classList.add('NewPost');
    pElm.setAttribute("data-index", i);

	var post = pElm;
=======
    pElm.innerHTML = notes[i].text;
    pElm.classList.add('pinkUnicorn');
    pElm.setAttribute('data-index', i);


    pElm.addEventListener('click', function(event) {
      var index = event.target.getAttribute('data-index')
      var notes = getLocal();
      console.log(notes[index]);
      // notes[index].text = "Changed";
      var inputTemp = document.querySelector('#noteText');
      inputTemp.value = notes[0];
      setLocal(notes);
      buildList();
    });

    liElm.appendChild(pElm);
    liElm.appendChild(editBtn);
>>>>>>> 7966b5868770b203d5d418d38f459e62266f1863

    pElm.addEventListener('click', function(event)
    {
        var index = event.target.getAttribute("data-index");
        var notes = getLocal();
        setLocal(notes);
        buildList();
    });

        liElm.appendChild(pElm);


        ulElm.appendChild(liElm);
      }
    }

window.onload = function() {
  buildList();
}

var submitBtn = document.querySelector('#addNote');

submitBtn.addEventListener('click', function() {
  var text = document.querySelector('#noteText');

  submitNote(text.value, 'empire');
  buildList();

  text.value = '';
})

// -------------------------------------------- FAQ --------------------------------------------

// Box 1
function myFunction() {
	var text1 ="KUBO’s physical coding language, TagTiles, is flexible enough to teach a number of different subjects — from music to math, and everything in between! New subject and activity packages — including the soon-to-be-released language and spelling package — are always being developed by our expert team of educational consultants.";
    document.getElementById("faq-post-text1").innerHTML = text1;

    var text2 = document.getElementById("faq-post-text1");
    if (text2.style.display === "none") {
        text2.style.display = "block";
    } else {
        text2.style.display = "none";
    }

}
