names=[];
function submit(){
    var name_1 = document.getElementById("sudent_1").value;
    var name_2 = document.getElementById("sudent_2").value;
    var name_3 = document.getElementById("sudent_3").value;
    var name_4 = document.getElementById("sudent_4").value;

    names.push(name_1);
    names.push(name_2);
    names.push(name_3);
    names.push(name_4);

    console.log(names);

    document.getElementById ("array").innerHTML=names;
    document.getElementById ("submit").style.display="none";
    document.getElementById ("sorts").style.display="inline-block";
}
function sort(){
    names.sort();
    console.log(names);
    document.getElementById ("array").innerHTML=names;
}