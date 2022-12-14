async function updateComment(event) {
    event.preventDefault();

    const text_area = document.querySelector('.editable-comment');
    const comment = document.querySelector('.editable-comment').value;
    const commentId = text_area.getAttribute('comment-id');
    const postId = text_area.getAttribute('post-id');

    // console.log(comment);
    // console.log(commentId);
    // console.log(postId);

    const response = await fetch(`/api/comments/${commentId}`, {
        method: 'PUT',
        body: JSON.stringify({
          comment: comment
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        //console.log("comment edited");
      } else {
        document.location.replace('/login');
      }

  };

document.querySelector('.comment-update-btn').addEventListener('click', updateComment);

