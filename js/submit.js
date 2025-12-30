const form = document.getElementById("postForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const author = document.getElementById("author").value;
  const email = document.getElementById("email").value;
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  const imageFile = document.getElementById("image").files[0];

  const reader = new FileReader();

  reader.onload = function () {
    const posts = getPosts();

    const newPost = {
      id: Date.now(),
      author,
      email,
      title,
      content,
      image: reader.result,
      status: "pending",
      date: new Date().toLocaleDateString()
    };

    posts.push(newPost);
    savePosts(posts);

    message.innerText = "🌙 Submitted successfully! Awaiting admin approval.";
    form.reset();
  };

  reader.readAsDataURL(imageFile);
});
