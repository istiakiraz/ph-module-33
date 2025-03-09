// 33-4 Load more data, more APIs, send data to function

const handleLoadData2 = () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data => {
        console.log(data)
        displayUser(data)

    })
   
}

const displayUser = (users) =>{
    console.log(users[2]);
}