$(document).ready(function(){
    let SNo=1

    $("#buttonAdd").click(function(){
        console.log($("#input").val())
        let input=$("#input").val()
        $("input").val("")
        rows(input)
    }) 
    function rows(input1) {
        let newRow = "<tr>"
        newRow+=("<td>" + SNo++ + "</td>");
        newRow+=("<td>" + input1 + "</td>");
        newRow+=("<td>" + '<button click="edit()">Edit</button>' + "</td>");
        newRow+=("<td>" + '<button click="delete()">Delete</button>' + "</td>");
        $("#tbody").append(newRow);
    }
    function edit(){
        
    }
})
