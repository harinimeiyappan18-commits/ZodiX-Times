// Get all posts from LocalStorage
function getPosts() {
  return JSON.parse(localStorage.getItem("posts")) || [];
}

// Save posts to LocalStorage
function savePosts(posts) {
  localStorage.setItem("posts", JSON.stringify(posts));
}
