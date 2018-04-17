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
    var pElm = document.createElement('div');



    pElm.innerHTML = '<div class="post-content">' + notes[i].text + '</div><div class="post-meta"><div class="post-info">0 Likes, 0 Kommentar</div><div class="post-buttons"><img src="img/opslag/thumbs-up.svg">Like</div><div class="post-buttons"><img src="img/opslag/message.svg">Kommentar</div><div class="post-buttons"><img src="img/opslag/forward.svg">Del</div></div>';
    pElm.classList.add('NewPost');
    pElm.setAttribute("data-index", i);

	var post = pElm;

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
