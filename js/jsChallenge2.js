document.querySelector('#sameAddress').addEventListener('click', function(){
    if(this.checked){
        document.querySelector('#home').innerHTML = document.querySelector('#bill').value
        document.querySelector('#home').readOnly = true
    }else{
        document.querySelector('#home').readOnly = false
        document.querySelector('#home').innerHTML = ''
    }
})