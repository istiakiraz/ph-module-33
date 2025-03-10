// 33-7 GET, POST, PATCH, DELETE, CRUD, GET Vs POST
// 33-8 Debug API, Network tab, Status code, headers, bad API

// no work those module - check moduale note 



// 33-9 async await

const handleUser = ()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=> res.json())
    .then(data=>{
        console.log(data)
    })
    .catch(error=> console.log("error this", error))
}

// async await

handleUser()

const handleUser2 =async()=>{
try{
    
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
    
        const data = await res.jon();
        console.log(data);
    
    
}

catch{
    console.log("hello");
}
}
handleUser2()