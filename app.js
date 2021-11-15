const navslide= () =>{
    const burger=document.querySelector('.burger');
    const nav= document.querySelector('.apartados');
    const navlinks = document.querySelectorAll('.apartados li');

    burger.addEventListener('click',()=>{//Añadimos el evento para el click en el burger
            //Toggle nav
        nav.classList.toggle('apartados-act');
            //Links animados
        navlinks.forEach((link, Index)=>{
            if(link.style.animation){
                link.style.animation = '';
                
            }else{
                link.style.animation = `apartadosfade 0.5s ease forwards ${Index / 7 + 0.5}s`;
            }

        })
                    //Burger animation
        burger.classList.toggle('toggle');
    });


}

navslide();