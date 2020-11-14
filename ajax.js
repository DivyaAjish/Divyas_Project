function product(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200)
        {
            var result = JSON.parse(this.responseText);
        // console.log(result);
        var html_cont="";
        var output=result.grocery;
         for(var i=0;i<output.length;i++)
         {
             var cont=output[i];

            console.log(cont);
        html_cont = html_cont+"<tr><td>"+cont.slno+"</td><td>"+cont.name+"</td><td>"+cont.Quantity+"</td><td>"+cont.unit+"</td><td>"+cont.Department+"</td><td>"+cont.notes+"</td></tr>"
           
        }
            
        }
        document.getElementById("display_area").innerHTML=html_cont;
               
    }
    xhttp.open("GET","grocery.json",true);
    xhttp.send();
}