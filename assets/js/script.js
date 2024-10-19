$(document).ready(function() {
    $('.nav-link').on('click', function(e) {
        e.preventDefault(); // Prevent the default link behavior
        var page = $(this).data('page'); // Get the data-page attribute

        // Load the content into the main area
        $('#content').load(page + ' #content > *'); // Load content only from the #content section of the page
    });
});