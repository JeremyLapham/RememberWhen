let userData = {};

export async function createAccount(createdUser: any) {
    const res = await fetch('https://rememberwhenwebsite.azurewebsites.net/User/adduser',{
        method: "POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(createdUser)
    });
    if(!res.ok){
        const message = `An Error has Occured ${res.status}`;
        throw new Error(message);
    }
    let data = await res.json();
}

export async function login(loginUser: { Username: string; Password: string; }) {
    const res = await fetch('https://rememberwhenwebsite.azurewebsites.net/User/Login', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(loginUser)
    });

    if (!res.ok) {
        const message = `An Error has Occured ${res.status}`;
        throw new Error(message);
    }

    let data = await res.json();
    return data;
}

export async function GetLoggedInUserData(username: string){
    let res = await fetch(`https://jeremyblogapi.azurewebsites.net/User/userbyusername/${username}`);
    let data = await res.json();
    userData = data;
    console.log(userData);
}

export async function GetPublishedMemoryItem(){
    let res = await fetch('https://rememberwhenwebsite.azurewebsites.net/Memory/GetPublishedItems');
    let data = res.json();
    return data;
} 


export function checkToken() {
    let result = false;
    let lsData = localStorage.getItem('Token');
    if(lsData != null) {
        result = true;
    }
    return result;
}

export function loggedInData(){
    return userData;
}

export async function addBlogItem(blogItem: object){
    const res = await fetch('https://rememberwhenwebsite.azurewebsites.net/Memory/AddMemoryItem',{
        method: "POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(blogItem)
    });
    if(!res.ok){
        const message = `An Error has Occured ${res.status}`;
        throw new Error(message);
    }
    let data = await res.json();
    console.log(data);
    return data;
}

export async function getBlogItemsByUserId(userId: number){
    let res = await fetch(`https://rememberwhenwebsite.azurewebsites.net/Memory/GetItemsByUserId/${userId}`);
    let data = await res.json();
    return data;
}

export async function updateBlogItem(blogItem: object){
    const res = await fetch('https://rememberwhenwebsite.azurewebsites.net/Memory/UpdateMemoryItem',{
        method: "POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(blogItem)
    });
    if(!res.ok){
        const message = `An Error has Occured ${res.status}`;
        throw new Error(message);
    }
    let data = await res.json();
    console.log(data);
    return data;
}