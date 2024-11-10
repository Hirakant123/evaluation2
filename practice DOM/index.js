
 let container = document.getElementById("container");

 let url = `https://jsonplaceholder.typicode.com/posts`




 let getData = async(url )=>{
   
    let input = document.getElementById("input1");
    let btn = document.getElementById("search")

    btn.addEventListener("click", function(){
        let inputVal = input.value;
   console.log(inputVal)
    })
   
  let res = await fetch(url);
  console.log(res.headers.get("X-Total-count"), 10);
  
  let data = await res.json();
 console.log(data)
 displayData(data)

 }

 getData(url)


 function displayData(data){

   container.innerHTML = ""
    
    data.forEach((ele)=>{
       let card = document.createElement("div");

       

       let title = document.createElement("h2");
       title.textContent = ele.title;

       let discription = document.createElement("p");
       discription.textContent = ele.body;

       let userId = document.createElement("h1");
       userId.textContent = ele.userId;

       card.append(title, discription, userId);

       container.append(card)
    })
 }


 let select = document.getElementById("select")

 select.addEventListener("click", function(){
    filterData()
 })

 function filterData(){
      let filterVAl = select.value;
      console.log(filterVAl)
       displayData(`https://jsonplaceholder.typicode.com/users/${filterVAl}/posts`)
      
 }


 

 function pagination(totle, limit){
    
    let noOfBtn = Math.ceil(totle/limit)

    for(let i=1; i<=noOfBtn; i++){
        let Btn = document.createElement("button");
        Btn.textContent = i

    }
    
 }

 pagination(100, 10)

