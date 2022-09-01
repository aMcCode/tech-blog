async function updateComment(event) {
    event.preventDefault();
  
    const text_area = document.querySelector('.editable-comment');
    const text = document.querySelector('.editable-comment').value;
    const commentId = text_area.getAttribute('comment-id');
    const postId = text_area.getAttribute('post-id');

    console.log(text);
    console.log(commentId);
    console.log(postId);

    const response = await fetch(`/api/comments/${commentId}`, {
        method: 'PUT',
        
        body: JSON.stringify({
          text
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      if (response.ok) {
        document.location.replace('/post/'+postId);
      } else {
        alert(response.statusText);
      }
  

  
    // document.location.replace('/post/'+postId);
  };
  
document.querySelector('#update-comment-btn').addEventListener('submit', updateComment);

