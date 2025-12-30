const adminContainer = document.getElementById("admin-posts");

function loadAdminPosts() {
  const posts = getPosts();
  adminContainer.innerHTML = "";

  const pendingPosts = posts.filter(post => post.status === "pending");

  if (pendingPosts.length === 0) {
    adminContainer.innerHTML = "<p>No pending submissions 🌙</p>";
    return;
  }

  pendingPosts.forEach(post => {
    const div = document.createElement("div");
    div.className = "admin-card";

    div.innerHTML = `
      <h3>${post.title}</h3>
      <p><strong>Astrout:</strong> ${post.author}</p>
      <p><strong>Email:</strong> ${post.email}</p>
      <p>${post.content}</p>
