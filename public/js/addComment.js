async function newFormHandler(event) {
  event.preventDefault();

    console.log('got event handler')

    const newCommentButton = document.querySelector('#add-new-comment-btn')
    const postId = newCommentButton.getAttribute('post-id');

    sessionStorage.setItem("postId", postId);

    document.location.replace('/new-comment');
  };

document.querySelector('#add-new-comment-btn').addEventListener('click', newFormHandler);
