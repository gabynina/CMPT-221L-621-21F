// work outside in: call body, then section, then class. 
document.getElementsByTagName('body')[0].getElementsByTagName('section')[0].getElementsByClassName('title')[0].innerHTML= 'Change';
document.getElementsByTagName('body')[0].getElementsByTagName('section')[0].getElementsByTagName('p')[0].innerHTML= 'Gabriella Nina';
document.getElementById('bossy').innerHTML='Please do the following';
document.getElementsByTagName('body')[0].getElementsByTagName('section')[0].getElementsByTagName('ul')[0].getElementsByTagName('li')[0].style.color="blue";
document.getElementsByTagName('body')[0].getElementsByTagName('section')[0].getElementsByTagName('ul')[0].getElementsByTagName('li')[1].style.backgroundColor='beige';
document.body.style.backgroundColor = "gray";
document.getElementsByTagName('body')[0].getElementsByTagName('section')[0].getElementsByTagName('ul')[0].getElementsByTagName('li')[3].style.textTransform = 'uppercase';
document.getElementsByTagName('body')[0].getElementsByTagName('section')[0].getElementsByTagName('ul')[0].getElementsByTagName('li')[4].setAttribute('class', 'title');


