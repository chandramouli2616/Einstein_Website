const articles = document.querySelectorAll('.papers-container .paper-box');
for (let i = 0; i<articles.length; i++){
    articles[i].addEventListener('mouseover',() =>{
        articles[i].style.backgroundColor="yellow";
        function changeGreen() {
            articles[i].style.backgroundColor="greenyellow"; 
         }
        setTimeout(changeGreen,2000); 
     }
);

}
