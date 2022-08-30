console.log("in comments.js")

function newFormHandler(event) {
    event.preventDefault();
  
    console.log('got event handler')

    const newCommentButton = document.querySelector('#add-new-comment-btn')
    const postId = newCommentButton.getAttribute('post-id');

    sessionStorage.setItem("postId", postId);
  
    document.location.replace('/new-comment');
  };
  
document.querySelector('#comment-form').addEventListener('submit', newFormHandler);
