async function newFormHandler(event) {
    event.preventDefault();
  
    const text_area = document.querySelector('.editable-comment');
    const commentId = text_area.getAttribute('comment-id');
    const postId = text_area.getAttribute('post-id');
    const comment = document.querySelector('.editable-comment').value;
  
    const response = await fetch(`/api/comments/${commentId}`, {
      method: 'DELETE',
      body: JSON.stringify({
        comment: comment
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/post/'+postId);
    } else {
      document.location.replace('/login');
    }
  };
  
document.querySelector('.comment-del-btn').addEventListener('click', newFormHandler);