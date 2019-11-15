// Get the Modal
var modal = document.getElementById('id01');

// When user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        this.modal.style.display = 'none';
    }
}