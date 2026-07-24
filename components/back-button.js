async function loadBackButton(){

    const container=document.getElementById("backButton");

    if(!container){

        console.error("Back button container not found.");

        return;

    }

    try{

        const response=await fetch("https://buildfeatures.github.io/features/components/back-button.html");

        if(!response.ok){

            throw new Error("Unable to load back-button.html");

        }

        container.innerHTML=await response.text();

        initializeBackButton();

    }

    catch(error){

        console.error(error);

    }

}

function initializeBackButton(){

    const wrapper=document.querySelector(".bf-back-button");

    const button=document.getElementById("bfBackButton");

    if(!wrapper || !button) return;

    function toggle(){

        if(window.scrollY>120){

            wrapper.classList.add("show");

        }else{

            wrapper.classList.remove("show");

        }

    }

    toggle();

    window.addEventListener("scroll",toggle);

    button.addEventListener("click",()=>{

        if(document.referrer && history.length>1){

            history.back();

        }else{

            window.location.href="https://buildfeatures.github.io/features/";

        }

    });

}

document.addEventListener("DOMContentLoaded",loadBackButton);
