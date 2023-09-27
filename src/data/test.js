// let t = 5
// setInterval(()=>{
//     t = 50
//     console.log("game")
// },t*500)

// for(let j = 0;j<2;j++){
//     let a = []
//     j == 0 ? a = ["Fs","fg","ye","hsd","Gsd"] : a = [234,63]
    
//     let i = 0
// const ins = setInterval(()=>{
//     console.log(a[i]+j)
//     i++
//     if(i==a.length){
//         clearInterval(ins)
//     }

// },1000)

// }

// a = [{x:"x",y:['fas','fas']},{x:"x",y:['fas','fas']},{x:"x",y:['fas','fas']}]

// a.forEach(element => {
//     a.indexOf(element)
//     console.log(element)
// });

// const points = [{id:40}, {id:100}, {id:1}, {id:5}, {id:25}, {id:10}];
// const g = points.sort(function(a, b){return b.id - a.id});
// console.log(g)
let con = false
function game(){
    const promise = new Promise((resolve,reject)=>{
    
           
        if(con){
            resolve("Work Done !!")
        }else{
            reject("Work Not Done :(")
            console.log("ula")
        }

       

 
    })

    return promise
}

async function z(){
    try{

       await game()
    }catch(err){
        console.log(err)
        
    }
}

z()



