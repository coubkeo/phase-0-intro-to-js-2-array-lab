// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(){
    cats.push("Ralph")
    return cats
}
function destructivelyPrependCat(){
    cats.unshift("Bob")
    return cats
}
function destructivelyRemoveLastCat(){
    cats.pop()
    return cats
}
function destructivelyRemoveFirstCat(){
    cats.shift()
    return cats
}
function appendCat(){
    let cat = [...cats, "Broom"]
    return cat
}
function prependCat(){
    let catss = ["Arnold", ...cats]
    return catss
}
function removeLastCat(){
    let ccats= cats.slice(0,cats.length-1)
    return ccats
}
function removeFirstCat(){
  let ccats = cats.slice(1)
  return ccats
}