function sortByBame (users) {
    return users.sort ((userOne, userB) => {
        if (userOne.name < userB.name) return 
        -1
        if (userOne.name > userB.name) return 
        1
        return 0
    })
}    

// const users = [
//   { name: "Kyle", age: 26 },
//    { name: "Sally", age: 26 },
//    { name: "John", age: 26 },
//    { name: "Bob", age: 26 },
// ]    

const sortedUsers = sortByName (users)