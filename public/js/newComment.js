function format_date(date) {
  let dt = new Date(date),
      mm = '' + (dt.getMonth() + 1),
      dd = '' + dt.getDate(),
      yyyy = dt.getFullYear();

  if (mm.length < 2) mm = '0' + mm;
  if (dd.length < 2) dd = '0' + dd;

  return [mm, dd, yyyy].join('/');
}

async function response() {

    const post_id = sessionStorage.getItem("postId");
    const resp = await fetch(`/api/posts/`+post_id);
    const data = await resp.json();
    const create_date = format_date(data.created_at);
    const txt =
    `<div class="card-header">
      <div class="post-title"><h2><a class="post-link" href="/post/${post_id}">${data.title}</a></h2></div>
      <div class="post-author">Posted by: ${data.user.username} on ${create_date}</div>
     </div>
    <div class="card-body">${data.content}</div>
    `
  const postDiv = document.getElementById('post-div');
  postDiv.innerHTML = txt;

  if(!resp.ok) console.log(error + ': Error retrieving post associated with new comment');
}

async function newFormHandler(event) {
    event.preventDefault();

    const comment = document.getElementById('comment-content').value;
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
      document.location.replace('/post/'+post_id);
    } else {
      alert(response.statusText);
    }
};

window.addEventListener('load', response());

document.querySelector('#new-comment-form').addEventListener('submit', newFormHandler);