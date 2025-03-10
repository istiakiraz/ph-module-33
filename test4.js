// 33-5 Dynamically display loaded data on your website

const loadUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data => {
        showUser(data);
        // showUser1(data);
    })
}

const showUser = (users) =>{
    
    const userContainer = document.getElementById('users');

        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            const li = document.createElement('li');
        li.innerText = user.name
        userContainer.appendChild(li)
            
        }

}

// const showUser1 = (users1) =>{

//     const userContainer = document.getElementById('users');
//     for (const user of users1) {
//         const li = document.createElement('li');
//         li.innerText = user.name
//         userContainer.appendChild(li)
        
//     }
// }