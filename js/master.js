//local storage color
let color =document.querySelectorAll('.box-setting .colors li');
let localColor = localStorage.getItem('color');
if(localColor != null){
    console.log('item')
    document.documentElement.style.setProperty('--primary-color',localColor);
    color.forEach((elm)=>{
        elm.classList.remove('active');
        if(elm.dataset.color == localColor){
            elm.classList.add('active');
        }
    });
}



//toggle box setting
let box = document.querySelector('.box-setting ');
let icon = document.querySelector('.box-setting .icon');
icon.addEventListener('click',(e)=>{
    box.classList.toggle('open')
});


//change color

color.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        document.documentElement.style.setProperty('--primary-color',element.dataset.color);
        color.forEach((elm)=>{
                elm.classList.remove('active');
            });
        e.target.classList.add('active');
        localStorage.setItem('color',e.target.dataset.color);
    });
    
});

//select features 

let select = document.querySelectorAll('.features .select > div ');
select.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log('test');
        e.target.parentElement.querySelectorAll(".active").forEach((elm)=>{
            elm.classList.remove('active');
        });
        e.target.classList.add('active');
        let interfaceNumber = e.target.dataset.select;
        document.querySelectorAll('.features .content').forEach((interface)=>{
           
            interface.classList.remove('open');
        });
        document.querySelector(interfaceNumber).classList.add('open');
        
    });
});

//toggle questions 

let questions = document.querySelectorAll('.question');
questions.forEach((elemnt)=>{
    elemnt.onclick = function (e) {
        if(e.target.parentElement.hasAttribute('id','que')){
            e.target.parentElement.classList.toggle('active');
        }else{
            e.target.parentElement.parentElement.classList.toggle('active');
        }
        
    };
});


//toggle menu-small 

document.querySelector('.small-icon').addEventListener('click',(e)=>{
document.querySelector('.overlay').style.display = 'block';
});

document.querySelector('.close').addEventListener('click',(e)=>{
    document.querySelector('.overlay').style.display = 'none';
    });

document.querySelectorAll('.links-small li a').forEach((element)=>{
    element.addEventListener('click',(e)=>{
        document.querySelector('.overlay').style.display = 'none';
        });
});


