$(function () {
    console.log("JS Ready Check: Erfolgreich :)");

    $(".game-button").click(function (event) {
        event.preventDefault();

        // der 'var buttonNumber = $(this).val();' Wert kommt vom Index oneButton
        var buttonNumber = $(this).val();
        console.log("button" + buttonNumber + " was clicked");
        doButtonUpdate(buttonNumber);
    })

    function doButtonUpdate(buttonNumber) {
        $.ajax({
            dataType: "json",
            method: 'POST',
            url: '/button/ShowOneButton',
            data: {
                "buttonNumber": buttonNumber
            },
            success: function (data) {
                console.log(data);
            }
        })
    }
})