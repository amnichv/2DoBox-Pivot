function IdeaObject










function prependIdeaBox( title, body ) {

$('#save-button').on('click', function() {
  $('.idea-box-container').prepend(
    `<article>
      <h2>${title}</h2>
      <button><img href="images/delete.svg" width="10"></button>
      <p>${body}</p>
      <section class="quality">
        <img href="images/upvote.svg" width="10">
        <img href="images/downvote.svg" width="10">
        <h3>quality: ${quality}</h3>
      </section>


    </article>
    `
  )
})
}
