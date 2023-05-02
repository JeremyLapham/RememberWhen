let userData = {};

export async function createAccount(createdUser: { Id: number; Username: string; Password: string; }) {
    const res = await fetch('https://rememberwhenapi.azurewebsites.net/User/adduser', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(createdUser)
    });
    if (!res.ok) {
        const message = `An Error has Occured ${res.status}`;
        throw new Error(message);
    }
    let data = await res.json();
    console.log(data);
    return data;
}

export async function login(loginUser: { Username: string; Password: string; }) {
    const res = await fetch('https://rememberwhenapi.azurewebsites.net/User/Login', {
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
    console.log(data);
    return data;
}

export async function Folder(folder: any) {
    const res = await fetch('https://rememberwhenapi.azurewebsites.net/Folder/AddFolder', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(folder)
    });

    if (!res.ok) {
        const message = `An Error has Occured ${res.status}`;
        throw new Error(message);
    }

    let data = await res.json();
    console.log(data);
    return data;
}

export async function GetLoggedInUserData(username: string) {
    let res = await fetch(`https://rememberwhenapi.azurewebsites.net/User/userbyusername/${username}`);
    let data = await res.json();
    userData = data;
    return userData
}

// export async function GetPublishedMemoryItem() {
//     let res = await fetch('https://rememberwhenwebsite.azurewebsites.net/Memory/GetPublishedItems');
//     let data = res.json();
//     return data;
// }


export function checkToken() {
    let result = false;
    let lsData = localStorage.getItem('Token');
    if (lsData != null) {
        result = true;
    }
    return result;
}

export function loggedInData() {
    return userData;
}

export async function addMemoryItem(memoryItem: object) {
    const res = await fetch('https://rememberwhenapi.azurewebsites.net/Memory/AddMemoryItem', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(memoryItem)
    });
    if (!res.ok) {
        const message = `An Error has Occured ${res.status}`;
        throw new Error(message);
    }
    let data = await res.json();
    console.log(data);
    return data;
}

export async function getMemoryItemsByUserId(userid: number) {
    let res = await fetch(`https://rememberwhenapi.azurewebsites.net/Memory/GetItemsByUserId/${userid}`);
    let data = await res.json();
    return data;
}

export async function getFolderByUserId(userid: number) {
    let res = await fetch(`https://rememberwhenapi.azurewebsites.net/Folder/GetFoldersByUserId/${userid}`);
    let data = await res.json();
    return data;
}
export async function getMemoryByFolderId(folderId: number) {
    let res = await fetch(`https://rememberwhenapi.azurewebsites.net/Memory/GetItemsByFolderId/${folderId}`);
    let data = await res.json();
    return data;
}

export async function updateMemoryItem(memoryItem: object) {
    const res = await fetch('https://rememberwhenapi.azurewebsites.net/Memory/UpdateMemoryItem', {
        method: "PUT",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(memoryItem)
    });
    if (!res.ok) {
        const message = `An Error has Occured ${res.status}`;
        throw new Error(message);
    }
    let data = await res.json();
    console.log(data);
    return data;
}

export async function updateFolder(folder: object) {
    const res = await fetch('https://rememberwhenapi.azurewebsites.net/Folder/UpdateFolder', {
        method: "PUT",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(folder)
    });
    if (!res.ok) {
        const message = `An Error has Occured ${res.status}`;
        throw new Error(message);
    }
    let data = await res.json();
    console.log(data);
    return data;
}

export async function DeleteFolder(folder: object) {
    const res = await fetch('https://rememberwhenapi.azurewebsites.net/Folder/DeleteFolder', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(folder)
    });
    if (!res.ok) {
        const message = `An Error has Occured ${res.status}`;
        throw new Error(message);
    }
    let data = await res.json();
    console.log(data);
    return data;
}
export async function DeleteMemory(memory: object) {
    const res = await fetch('https://rememberwhenapi.azurewebsites.net/Memory/DeleteMemoryItem', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(memory)
    });
    if (!res.ok) {
        const message = `An Error has Occured ${res.status}`;
        throw new Error(message);
    }
    let data = await res.json();
    console.log(data);
    return data;
}