// update.js

document.addEventListener('DOMContentLoaded', function () {
  // Get the form element
  var addBlogForm = document.getElementById('add-blog-form');

  // Add submit event listener to the form
  addBlogForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form
    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;

    // Create a new blog post element
    var blogPost = document.createElement('div');
    blogPost.classList.add('col-md-12');
    blogPost.innerHTML = `
      <div class="blog-post">
        <img src="img/blog_post_4.png" alt="">
        <div class="text-content">
          <span><a href="#">Admin</a> / <a href="#">${getCurrentDate()}</a> / <a href="#">New</a></span>
          <h2>${title}</h2>
          <p>${content}</p>
          <div class="simple-btn">
            <a href="single-post.html">continue reading</a>
          </div>
        </div>
      </div>
    `;

    // Append the new blog post to the blog entries container
    var blogEntriesContainer = document.querySelector('.blog-entries .container .row');
    blogEntriesContainer.appendChild(blogPost);

    // Reset the form
    addBlogForm.reset();
  });
});

// Helper function to get the current date in the format: Month Day, Year
function getCurrentDate() {
  var currentDate = new Date();
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  return currentDate.toLocaleDateString(undefined, options);
}
