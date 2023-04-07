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

async function GetLoggedInUserData(username: any){
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