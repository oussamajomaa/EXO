let sp=document.querySelectorAll('article span');
sp[0].style.color='red';
sp[0].style.fontWeight='bold';
sp[0].style.fontStyle='italic';

sp[1].style.opacity=.4;
sp[1].style.fontWeight='bold';
sp[1].style.fontStyle='italic';

let sp1=$('span');
$(sp1[2]).css({opacity:.4, fontWeight:'bold', fontStyle:'italic'});

$(sp1[3]).css({color:'red', fontWeight:'bold', fontStyle:'italic'});



