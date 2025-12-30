const postsContainer = document.getElementById("posts-container");

function loadApprovedPosts() {
  const posts = getPosts();
  postsContainer.innerHTML = "";

  const approvedPosts = posts.filter(post => post.status === "approved");

  if (approvedPosts.length === 0) {
    postsContainer.innerHTML = "<p style='text-align:center'>No published astro posts yet 🌌</p>";
    return;
  }

  approvedPosts.reverse().forEach(post => {
    const card = document.createElement("div");
    card.className = "post-card";

    card.innerHTML = `
      <img src="${post.image}" />
      <h3>${post.title}</h3>
      <p>${post.content.substring(0, 120)}...</p>
      <span>✍️ ${post.author} | 📅 ${post.date}</span>
    `;

    postsContainer.appendChild(card);
  });
}

loadApprovedPosts();
