/*var a = [10, 2, 3, [20, 3, 5[30, 3]]]


var i = 0;


for (i = 0; i < a.length; i++) {
    var b = a[i]
    if (i < 3)
        console.log(b);


} {
    for (var e = 0; e < a.length; e++) {

    }
}


var ls = ['1st', 11, 12, 13,
    ['2nd',
        ['3rd', 31, 32],
        21, 22,
        ['4rd', 41, 42]
    ],
    14
];
*/



var a=[10,2,3,[20,3,5,[30,3]]];
for (var i=0;i<a.length;i++){
    var item=a[i];
    if(i<3){
        console.log(item);
    }else{
        for(var k=0;k<item.length;k++){
           var items=item[k];
            if(k<3){
                console.log(items);
            }else{
                for(var s=0;s<items.length;s++){
                    var itemss=items[s];
                    console.log(itemss);
                }
            }
        }
    }
}