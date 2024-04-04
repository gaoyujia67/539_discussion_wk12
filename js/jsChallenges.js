document.querySelector('#subscribe').addEventListener('click', function(){
    console.log("This works")

    if(this.checked){
        document.querySelector('#emailDiv').style.display='block'
    }else{
        document.querySelector('#emailDiv').style.display='none'
    }
});

document.addEventListener('click', function(){
    var currentTime = new Date()
    var dateString = currentTime.toDateString();
    var timeString = currentTime.toTimeString();
    alert(dateString + " " + timeString);
});