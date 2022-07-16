//You can add products here: name, productLink, imageLink in order
const product2dArray = [
    ["Sennheiser 508234 MOMENTUM Wireless", "https://amzn.to/3c4mnmJ","https://m.media-amazon.com/images/I/818VhMc24JL._AC_SL1500_.jpg"],
    ["Bose QuietComfort 45", "https://amzn.to/3Rmp4A9", "https://m.media-amazon.com/images/I/51clPHLzrVL._AC_SL1500_.jpg"],
    ["Apple AirPods Max", "https://amzn.to/3nQRNzp", "https://m.media-amazon.com/images/I/81jlf48YzAL._AC_SL1500_.jpg"],
    ["Sony WH-1000XM4", "https://amzn.to/3aB1PSe", "https://m.media-amazon.com/images/I/51KGMc7TPcL._AC_SL1100_.jpg"],
    ["Anker Soundcore Life Q35", "https://amzn.to/3ARPqUX", "https://m.media-amazon.com/images/I/61tZb1KHNYL._AC_SL1500_.jpg"],
    ["Audio-Technica ATH-M50xBT2", "https://amzn.to/3OaSxdx", "https://m.media-amazon.com/images/I/915fYrFhl9L._AC_SL1500_.jpg"],
    ["Philips Audio Fidelio X2HR", "https://amzn.to/3O5GgXS", "https://m.media-amazon.com/images/I/61n+xTSA8QL._AC_SL1000_.jpg"],
    ["SkullCandy HESH3 WIRELESS", "https://amzn.to/3PfrZJB", "https://m.media-amazon.com/images/I/71k+gzrzYIL._AC_SL1500_.jpg"],
    ["beyerdynamic DT 700 PRO X", "https://amzn.to/3cot4jO", "https://m.media-amazon.com/images/I/61nEHyIC3yL._AC_SL1500_.jpg"]
];
//make element from 2d array with given index
function buildProductEle(index){
    let productEle = document.createElement("div");
    productEle.setAttribute("product-index", index);
    let productA = document.createElement("a");
    let productImg = document.createElement("img");
    productA.setAttribute("href", product2dArray[productEle.getAttribute("product-index")][1]);
    productA.setAttribute("target", "_blank");
    productEle.classList.add( "product-data", "product","d-flex", "justify-content-center", "col-12", "col-lg-8");
    productImg.classList.add("mw-100", "mh-100", "rounded");
    productImg.setAttribute("src", product2dArray[productEle.getAttribute("product-index")][2]);
    productA.append(productImg);
    productEle.append(productA);
    return productEle;
}
//add all prod list to html
let listTarget = document.getElementById("list");
let prodDivList = [];
for(let i = 0; i < product2dArray.length; i++){
    prodDivList[i] = buildProductEle(i);
    let listEle = document.createElement("p");
    listEle.classList.add("item-text", "text-dark");
    listEle.innerHTML = product2dArray[i][0];
    //item-select: 1 is selected,0 is not
    if(i == 0) {
        listEle.setAttribute("item-select", 1);
        listEle.innerHTML = "✔️ " + listEle.innerHTML;
    }
    else listEle.setAttribute("item-select", 0);
    listTarget.append(listEle);
}

const target = document.getElementById("productList");

let sliderShow = document.createElement("div");
let main = document.createElement("div");
let extra = document.createElement("div");

sliderShow.classList.add("col-12", "d-flex", "flex-nowrap", "overflow-hiddens");
main.classList.add("main", "full-width");
extra.classList.add("extra", "full-width");

main.append(prodDivList[0]);

sliderShow.append(main);
sliderShow.append(extra);
target.append(sliderShow);

let controls = document.createElement("div");
controls.classList.add("offset-5", "mt-2", "col-10");

let leftBtn = document.createElement("button");
leftBtn.classList.add("btn", "btn-light");
leftBtn.innerHTML = "<";

let rightBtn = document.createElement("button");
rightBtn.classList.add("btn", "btn-light");
rightBtn.innerHTML = ">";

controls.append(leftBtn);
controls.append(rightBtn);
target.append(controls);

main.setAttribute("product-index", "0");
//checks which item is in list
let itemChecker = document.querySelectorAll(".item-text");

function slideJump(steps, animationType) {
    let index = parseInt(main.getAttribute("product-index"));
    let currentElement = prodDivList[index];

    index += steps;

    if(index < 0) index = prodDivList.length -1;
    else if(index >= prodDivList.length) index = 0;

    let nextElement = prodDivList[index];

    main.setAttribute("product-index", index.toString());

    animateMain(currentElement, nextElement, animationType);

}
function animateMain(currentElement, nextElement, animationType) {
    main.innerHTML = "";
    main.append(nextElement);
    
    extra.innerHTML = "";
    extra.append(currentElement);

    main.classList.add("expand-animation");
    extra.classList.add("deplete-animation");
    if (animationType === "right"){
        sliderShow.append(extra);
        sliderShow.append(main);
    } else if (animationType === "left") {
        sliderShow.append(main);
        sliderShow.append(extra);
    }    
    //removing previous selected attributes and code for updating selected list element with ✔️
    for(let i = 0; i < itemChecker.length; i++){
        if(itemChecker[i].getAttribute("item-select") == 1) {
            itemChecker[i].setAttribute("item-select", 0);
            itemChecker[i].innerHTML = itemChecker[i].innerHTML.substring(1);
        }
    }
    let curr = itemChecker[parseInt(nextElement.getAttribute("product-index"))];
    curr.setAttribute("item-select", 1);
    curr.innerHTML = "✔️ " + curr.innerHTML;
}

leftBtn.addEventListener("click", function(){
    slideJump(-1, "left");
});

rightBtn.addEventListener("click", function(){
    slideJump(+1, "right");
});
console.log(prodDivList);




//heeeeeey you made it this far! thanks for checking out my code, leave me some feedback on discord @salmonMunchies#7788
//here is some acii art for your eyes







/*
           #                                # 
            #                                # 
            ################################## 
            ################################## 
            ################################## 
            #                ###             # 
            #              #####             # 
                        ########             # 
                     ###########             # 
                  ###########  ##           ## 
            #  ############    ##           ## 
            ###########        ###         ###
            #########           ###       ####
            ######              #############
            ####                 ###########
            #                       ##### 
            # 
                   ###### 
                ############ 
              ################ 
             #####   ##   ##### 
            ###      ##       ##
            #        ##        # 
            #        ##        # 
            #        ##       ##
             #       ##     ####
             ##      ##########
               ##    ########
                     #### 
                   ###### 
                ############ 
              ################ 
             #####        ##### 
            ###               ##
            #                  # 
            #                  # 
            #                 ##
             #               ###
             ##             ###
               ##            
                               # 
                ################ 
             ################### 
            #################### 
            #### 
            ###
            ###
             ##
               #               # 
            #################### 
            #################### 
            #################### 
            # 
            #                  # 
            #################### 
            #################### 
            #################### 
            #             ###
                            ## 
                             ## 
                             ###
                         ####### 
                         ####### 
                         #######
                              
            #####        ###
            #####      #######
             ##      ########## 
            ###      ######   ##
            ##      #####      # 
            #       #####      # 
            #      #####      ## 
            ##     #####     ###
             ##   ######   ##### 
             ##########    ##### 
               ###### 
            #                  # 
            ####################      ### 
            ####################     ##### 
            ####################     #####
            # 
                   ###### 
                ############ 
              ################ 
             #####        ##### 
            ###               ##
            #                  # 
            #                  # 
            ##                ## 
             ##              ###
             #####        ##### 
               ###############
                 ########## 
                          
            #                  # 
            #################### 
            #################### 
            #################### 
            #               ##
                             ## 
                              ##
                              ## 
            #               #### 
            ####################
            ################### 
            ################
            # 

*/