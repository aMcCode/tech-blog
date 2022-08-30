async function newFormHandler(event) {
    event.preventDefault();
  
    const comment = document.getElementById('comment-content').value;
    console.log(comment);
    const post_id = sessionStorage.getItem("postId");
    sessionStorage.removeItem("postId");
    sessionStorage.clear();

    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({
        comment,
        post_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };
  
document.querySelector('#new-comment-form').addEventListener('submit', newFormHandler);

// SEE THIS LINK: https://code-boxx.com/pass-variables-between-pages-javascript/
//STILL NEED TO REMOVE SESSION STORAGE