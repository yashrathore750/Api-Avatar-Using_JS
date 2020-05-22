console.log("We are inside API.js")


let button = document.addEventListener('click', function(e){
    let name = document.getElementById('name');
    name = name.value;
    console.log(name);
    let male = document.getElementById('male');
    let female = document.getElementById('female');
    $('.imgChange').attr('src',`https://joeschmoe.io/api/v1/:${name}`);

    if(male.checked){
        $('.imgChange').attr('src',`https://joeschmoe.io/api/v1/male/:${name}`);
    }
    if(female.checked){
        $('.imgChange').attr('src',`https://joeschmoe.io/api/v1/female/:${name}`);
    }

});