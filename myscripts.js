<?php
	if (isset($_POST['nav'])) {
		 header("Location: $_POST[nav]");
	}
?>

$(function() {

    $("#submit").hide();

    $("#page-changer select").change(function() {
        window.location = $("#page-changer select option:selected").val();
    })

});