$(document).ready(function () {
    let obj={};
    getColor();
    $(document).on('click blur','.icon i',function () {
        $('.colors').toggle();
    })
    $(document).on('click','.colors .row div',function () {
        let currentColor=`${$(this).attr('class')}`;
       
        
        $("link[value$='color']").attr('href','css/'+`${$(this).attr('class')}`+'.css');
        setColor();
       
        function setColor() {
       
            let color = {
                Color:`${currentColor}`
            }
           
                
            if (obj[1] == undefined) {
                obj[1] = [];
            }
            obj[1].push(color);
         
            
            localStorage.setItem("color", JSON.stringify(obj));
        
        }
        
    })
    $(document).on('click','.navbar-toggler',function () {
        $('#navbarHeader').slideToggle();
    })
    
   
    function getColor(){
      
        let localColor = localStorage.getItem("color");


    let obj = JSON.parse(localColor);


    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const element = obj[key];

            element.forEach(e => {
                $("link[value$='color']").attr('href','css/'+`${e.Color}`+'.css');
             
                
            });
        }
    }
    }

})