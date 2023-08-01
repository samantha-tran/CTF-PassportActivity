function verifyBoardingDetails() {
    let ref = $("#input-ref").val()
    let lname = $("#input-lname").val()

    if (ref.toUpperCase() == "SH10453" && lname.toLowerCase() == "doe") {
        alert(
            `
            name: Bob Doe
            email: bob2000@gmail.com
            address: 123 Fake St, QLD
            passport number: 3425252RTERTRE
            `)
    }
}
