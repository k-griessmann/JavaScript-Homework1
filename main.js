let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    for(let i = 0; i < dog_names.length; i++){
        if(dog_string.toLowerCase().includes(dog_names[i].toLowerCase())){
            console.log('Matched ' + dog_names[i])
        }
        else{
            console.log('No matches')
        }
    }}

findWords()

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(){
    for (let i = 0; i < arr.length; i++){
        if(i % 2 === 0){
            arr[i] = "even index"
        }
    }
    return arr
}


console.log(replaceEvens())