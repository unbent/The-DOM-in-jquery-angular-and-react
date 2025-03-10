$(document).ready(() => {
    $("#btnShowNames").click(() => {
        console.log("HIT")
        var names = "";

        $(".team-name").each(function() {
            console.log(this)
            names += $(this).text() + "\n";
        });

        $("#result").html(names);
    });
    
    $("#btnHideNames").click(() => {
        $("#result").html("");
    });

    $(".team-member").on("click", function(e) {
        $("#result").html(e.currentTarget.children[1].textContent);
    });
});