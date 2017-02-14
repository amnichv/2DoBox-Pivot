$('#save-button').on('click', function() {
  var $title = $('#title-input').val();
  var $body = $('#body-input').val();
  var $uniqId = Date.now()
  var $newIdea = new IdeaObject ($uniqId, $title, $body);
  prependIdeaBox($newIdea);
})

function IdeaObject (id, title, body){
  this.id = id;
  this.title = title;
  this.body = body;
  this.quality = 'swill';
}

function prependIdeaBox(ideaObj) {
  $('.idea-box-container').prepend(
    `<article id="${ideaObj.id}">
      <h2>${ideaObj.title}</h2>
      <button class="delete-button"></button>
      <p>${ideaObj.body}</p>
      <section class="quality">
        <img href="images/upvote.svg" width="10">
        <img href="images/downvote.svg" width="10">
        <h3>quality: ${ideaObj.quality}</h3>
      </section>
    </article>
    `
  )
}
