$(function () {
    console.log("JS Ready Check: Erfolgreich :)");

    // hier wird verhindert, dass beim ersetzen eines teil-objects den original click listener
    // document = ganze page, .game-button = wird zum listener
    $(document).on("click",".game-button", function (event) {
        event.preventDefault();

        // der 'var buttonNumber = $(this).val();' Wert kommt vom Index oneButton
        var buttonNumber = $(this).val();
        console.log("button" + buttonNumber + " was clicked");
        doButtonUpdate(buttonNumber);
    })

    function doButtonUpdate(buttonNumber) {
        $.ajax({
            datatype: "json",
            method: 'POST',
            url: '/button/ShowOneButton',
            data: {
                "buttonNumber" : buttonNumber
            },
            success: function (data) {
                console.log(data);
                $('#' + buttonNumber).html(data);
            }
        })
    }
})