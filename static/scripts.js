// JavaScript for basic interactivity (e.g., like button)
document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-button');
    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('You liked this post!');
        });
    });
});
