//Preloader

let preloader = document.getElementById('preloader');
window.addEventListener("load",function(){
    preloader.style.display = "none";
});

// Instagram Status 

    //responsive stories div
    let stories = document.createElement("div");
    stories.className = 'stories';
    let main = document.querySelector(".main");
    let nav = document.querySelector(".nav");
    let container = document.querySelector(".container");
    window.addEventListener("load",function(){
        if(window.innerWidth < 700){
            container.insertBefore(stories,nav.nextSibling);
        }
        else{
            main.prepend(stories);
        }
    });

let arr = [
    {dp:"google_logo_2015_810-1900x700_c.webp",
    story:"download.jpeg",
    username:"google"},
    {dp:"iron-man-helmet-1080P-wallpaper.jpg",
    story:"ironman.jpeg",
    username:"IamIronMan"}
    
];

let clutter = "";
arr.forEach(function(ele,idx){
    clutter += `<div class="story">
    <img src="${ele.dp}" id ="${idx}" alt="">
    <p>${ele.username}</p>
</div>
    `

});
let full =document.querySelector("#full-screen");
// let st = document.querySelector(".stories");
stories.innerHTML = clutter;
stories.addEventListener("click",function(val){
    arr.forEach(function(ele){
        if((ele.story.includes(".mp4")) == true){
            full.innerHTML = `<video src="${arr[val.target.id].story}" autoplay></video>`;
        }
        else{
            full.style.backgroundImage = `url(${arr[val.target.id].story})`;
            full.style.display = "block";
            // document.querySelector('.footer').style.display = 'none';
        }
    });
    main.style.visibility = "hidden";
    document.querySelector(".suggetion").style.visibility = "hidden";
    document.querySelector(".nav-options").style.visibility = "hidden";
    document.querySelector(".nav-footer").style.visibility = "hidden";
    container.style.backgroundColor = '#1A1A1A';
    setTimeout(function(){
        full.style.display = "none";
        main.style.visibility = "visible";
        document.querySelector(".suggetion").style.visibility = "visible";
        document.querySelector(".nav-options").style.visibility = "visible";
        document.querySelector(".nav-footer").style.visibility = "visible";
        if(window.innerWidth > 700){
            container.style.backgroundColor = 'black';
        }else{
            container.style.backgroundColor = '#fff ';
        }
    },4000);
    
});


// Post displaying

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


// localStorage.setItem('arr2', JSON.stringify(arr2));

let arr2 = JSON.parse(localStorage.getItem('arr2')) || [];

arr2 = [
    {dp:"shinchan.webp",
     username:"shinchan_nohara",
     post:"Shinchan-4k-Full-Screen-Whatsapp-Status-Video-1.mp4",
     description:"I am 5yrs old child 😜"},
    {dp:"google_logo_2015_810-1900x700_c.webp",
     username:"google.com",
     post:"pexels-cottonbro-7350953.mp4",
     description:"Enhancing users experience😊"},
    {dp:"spiderman-4k-newartwork-ko-3840x2160.jpg",
     username:"peter_parker",
     post:"spiderman.jpg",
     description:"Remember, with great power comes great responsibility. 🕷️🕸️"},
    {dp:"iron-man-helmet-1080P-wallpaper.jpg",
     username:"IamIronMan",
     post:"tony-stark-iron-man-4k-7q-1125x2436.jpg",
     description:"The Truth is, I Am Iron Man 😎"}
];
//Create Post Div

let create = document.querySelector(".create");
let alert2 = document.createElement("div");
function cret(){
    create.style.display = "block";
    container.style.opacity = 0.3;
}


function next(){
    if(create.children[1].children[0].children[5].value == ""){
        alert("Enter image or video link");
    }
    else if(create.children[1].children[0].children[5].value.includes("https://")){
        let postbtn = document.createElement("p");
        postbtn.innerHTML = "Post";
        create.style.animation = "wid ease 1s";
        create.style.animationFillMode = 'forwards';
        create.children[0].children[1].style.display = "none";
        postbtn.className = "posbtn";
        create.children[0].append(postbtn);
        postbtn.style.animation = "next ease 1s";
        postbtn.style.animationFillMode = 'forwards';
        create.children[1].children[0].style.animation = "wid2 ease 1s";
        create.children[1].children[0].style.animationFillMode = 'forwards';
        create.children[0].children[1].innerText = "Post";
        create.children[1].children[1].style.zIndex = 3;

        create.children[1].children[0].children[0].style.display = "none";
        create.children[1].children[0].children[1].style.display = "none";
        create.children[1].children[0].children[2].style.display = "none";
        create.children[1].children[0].children[4].style.display = "none";
        create.children[1].children[0].children[5].style.display = "none";

        
        create.children[1].children[0].style.backgroundImage = `url(${create.children[1].children[0].children[5].value})`;
        create.children[1].children[0].style.backgroundSize = "cover";
        create.children[1].children[0].style.backgroundPosition = "center center";

        
        // Create a post
        
        postbtn.addEventListener("click",function(){
            let result = arr2.find(ele => ele.username === create.children[1].children[1].children[0].value);
            let obj = {};
            obj.dp = result.dp;
            obj.username = result.username;
            obj.post = create.children[1].children[0].children[5].value;
            obj.description =  create.children[1].children[1].children[1].value;
            let myArray = JSON.parse(localStorage.getItem('arr2'))
            myArray.push(obj);

            localStorage.setItem('arr2', JSON.stringify(myArray));

            // Update the arr2 variable with the modified data from localStorage
            arr2 = JSON.parse(localStorage.getItem('arr2')) || [];

            create.style.display = "none";
            container.style.opacity = 1;
            refresh();
        });
    }
    else
    {
        alert("Enter correct image or video link !!");
    }
}

arr2 = shuffleArray(arr2);

// arr2.pop();
// localStorage.setItem('arr2', JSON.stringify(arr2));

let clutter2 = "";
arr2.forEach(function(ele,idx){
    clutter2+=`<div class="card">
    <div class="c-header">
        <div class="h-left">
                <div class="image story">
                    <img src="${ele.dp}" id = "${idx}" alt="">
                </div>
                <span>${ele.username}</span>
        </div>
        <div class="h-right">
            <button>Follow</button>
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
    </div>
    <div class="c-post" id ="${idx}">
        
        
    </div>
    <div class="c-footer">
        <div class="f-left">
            <i class="fa-regular fa-heart"></i>
            <i class="fa-regular fa-comment"></i>
            <i class="fa-regular fa-paper-plane"></i>
            <i class="fa-solid fa-heart"></i> <!--popup Like-->
        </div>
        <div class="f-right">
            <i class="fa-regular fa-bookmark"></i>
        </div>
    </div>
    <div class="c-description">
        <p>${ele.description}</p>
    </div>
</div>`
});



main.innerHTML = clutter2;

for (let i = 0; i < main.children.length; i++) {
    const currentCard = main.children[i];
    const currentData = arr2[i];

    let postContent = '';

    if (currentData.post.includes(".mp4")) {
        postContent = `<video src="${currentData.post}" class = "vdo" controls loop ></video>`;
    } else {
        postContent = `<img src="${currentData.post}" alt="">`;
    }

    currentCard.querySelector('.c-post').innerHTML = postContent + '\n<i class="fa-solid fa-heart"></i>';
}



// let vdo = document.querySelectorAll('.vdo');
// for(let i=0;i<vdo.length;i++)
// {
//     vdo[i].addEventListener("touchmove",function(){
//         vdo[i].autoplay = true;
//     });
// }



// Like a Post


let pst = document.querySelectorAll('.c-post');
let like = document.querySelectorAll('.f-left i');
for(let i=0;i<arr2.length;i++)
{
    const j = 3 + (i * 4); // Calculate the value of j based on i
    const k = i * 4;
// For post like popup

        let lastTapTime = 0;
        const delay = 300; // Adjust this value to set the maximum delay between taps

        pst[i].childNodes[0].addEventListener('click', function(event) {
            const currentTime = new Date().getTime();
            const tapTimeDiff = currentTime - lastTapTime;

            if (tapTimeDiff < delay) {
                // This is considered a double tap
                // Perform actions for double-tap here
                pst[i].childNodes[2].style.opacity = 1;
                pst[i].childNodes[2].style.animation = 'like2 ease 1000ms';
                setTimeout(function(){
                    pst[i].childNodes[2].style.opacity = 0;
                    pst[i].childNodes[2].style.animation = 'none';
                },1000);
    
                    if (j >= 3 && j < like.length) {
                        like[j].style.animation = 'like ease 500ms';
                        like[k].style.visibility = 'hidden';
                        setTimeout(function () {
                            like[j].style.animation = 'none';
                        }, 500);
                        like[j].style.transform = 'scale(1)';
                    }
            }

            lastTapTime = currentTime;
        });

//For Like button

        if (j >= 3 && j < like.length) {
            like[j].addEventListener("click",()=>{
                like[j].style.transform = 'scale(0)';
                like[j].style.animation = 'none';
                like[k].style.visibility = 'visible';
            });
            like[k].addEventListener("click",()=>{
                like[j].style.animation = 'like ease 500ms';
                like[j].style.transform = 'scale(1)';
                like[k].style.visibility = 'hidden';
            });
        }

}

//Home button

function refresh(){

    window.location.reload();
}

//suggestion

let arr3 = [
    {dp:"google_logo_2015_810-1900x700_c.webp",
     username:"google.com"},
    {dp:"spiderman-4k-newartwork-ko-3840x2160.jpg",
     username:"peter_parker"},
    {dp:"iron-man-helmet-1080P-wallpaper.jpg",
     username:"IamIronMan"}
];
let clutter3 = "";
arr3.forEach(function(ele){
    clutter3 += `<div class="c-header">
    <div class="h-left">
            <div class="image story">
                <img src="${ele.dp}" alt="">
            </div>
            <span>${ele.username}</span>
    </div>
    <div class="h-right">
        <p>Follow</p>
    </div>
</div>`
});

document.querySelector(".suggest").innerHTML = clutter3;

function al(){
    alert(document.getElementById("file").value);
}