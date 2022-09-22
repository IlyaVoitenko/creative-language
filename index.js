    let box=document.getElementsByClassName('itemBlog');
    let btn=document.getElementById('buttonShow');

    for (let i=7;i<box.length;i++) {
        box[i].style.display = "none";
    }

    let countD =7;
    btn.addEventListener("click", function() {
        let box=document.getElementsByClassName('itemBlog');
        countD += 4;
        if (countD===box.length) {
            
        }
        if (countD <= box.length){
            for(let i=0;i<countD;i++){
                box[i].style.display = "block";
            }
        }else{
            btn.classList.add('hidden');
            return
        }
    })