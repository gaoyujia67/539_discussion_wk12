document.querySelector("input[type='submit']").addEventListener('click', function(e){
    var standingRadios_selected = document.querySelectorAll(
        "input[name='standing']:checked");
    var gradDateRadios_selected = document.querySelectorAll(
        "input[name='gradDate']:checked");

        console.log(gradDateRadios_selected.length)
        console.log(standingRadios_selected.length)

    if (standingRadios_selected.length == 0 || gradDateRadios_selected.length == 0){
        alert("Please select an option in both fieldsets.");
        e.preventDefault();
        console.log("hi")
    }
})
