


async function createAccount(createdUser: any) {
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
    console.log(data);
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