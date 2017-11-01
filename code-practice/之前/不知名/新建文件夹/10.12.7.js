var array=new Array(); 
var n_form = document.createElement('form');
for(var i=1;i<6;i++){
            var input=document.createElement("input");
            var w_label = document.createElement('label');
            var br =document.createElement('br');
            var txt = document.createTextNode('text'+(i+1));
            input.value='yo';
            input.name 

= 'radio'
            input.type = 'radio';
            w_label.appendChild(input);
            w_label.appendChild(txt);
            w_label.appendChild(br);
            
            n_form.appendChild(w_label);
}
document.body.appendChild(n_form);

