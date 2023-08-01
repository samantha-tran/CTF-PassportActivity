// set comments all as not visible initially
$('#post-1-comments').hide();
$('#post-2-comments').hide();
$('#post-3-comments').hide();

function toggleComments(id) {
    if ($(`#${id}`).is(":visible")) {
        $(`#${id}`).hide();
    } else {
        $(`#${id}`).show();
    }
       
}

function validateFlag() {
    if ($("#flag-input").val() === "bob2000@gmail.com") {
        alert("Challenge complete")
    } else {
        alert("Invalid flag!")
    }
}
