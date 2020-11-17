// Code your solution here
function findMatching(drivers, string) {
    let result = drivers.filter(target => target.toLowerCase() == string.toLowerCase())
    return result
}

function fuzzyMatch(drivers, letters) {
  let match = drivers.filter(nome => nome.startsWith(letters))
  return match 
}

function matchName (drivers, name){
    let result = drivers.filter(target => target.name === name)
    return result
}