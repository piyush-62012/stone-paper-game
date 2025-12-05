let btns=document.querySelectorAll(".btns button");
let reset=document.querySelector(".reset");
//points
let me=document.querySelector(".me");
let comp=document.querySelector(".computer");
let msg=document.querySelector(".result");
//on clicking values distribution
let m1="";
let m2="";

//value distribution
btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(m1==""){
            m1=btn.innerText;
        }
        else if(m1!="" && m2==""){
            m2=btn.innerText;
            check();
        }
        console.log("m1 value ",m1,"m2 value ",m2)
    })
})

//winner things
function check(){
if(m1!="" && m2!=""){
    if(m1==m2){
        msg.innerText="It's Draw";
        msg.style.backgroundColor="yellow";
    }
    else if(m1=="paper" &&  m2=="rock" ||
            m1=="rock"  &&  m2=="sisor" ||
            m1=="sisor" &&  m2=="paper"
    ){
        msg.innerText="Player 1 wins";
        msg.style.backgroundColor="blue";
        me.innerText++;
    }
    else{
        msg.innerText="Player 1 defeats";
        msg.style.backgroundColor="pink";
        comp.innerText++;
    }
    m1="";
    m2="";
}}

function resets(){
    m1="";
    m2="";
    msg.innerText="Game will Start";
    msg.style.backgroundColor="bisque";
    me.innerText=0;
    comp.innerText=0;
}
reset.addEventListener("click",()=>{
    resets();
})
