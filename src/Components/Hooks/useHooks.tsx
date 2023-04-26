import { useState } from "react";


export default function useInfo() {

    const [username, setUser] = useState('');
    const [memoryItems, setMemory] = useState<[]>([]);
    const [usersId, setUsersId] = useState(0);
    const [moreMemoryClicked, setMoreMemoryClicked] = useState(false);
    const [selectedMemory, setSelectedMemory] = useState({});
    const [folders, setFolders] = useState([]);
    const [folderId, setFolderId] = useState(0);
    const [folderName, setFolderName] = useState('');
    const [selectedFolder, setSelectedFolder] = useState([]);
    const [folderEdit, setFolderEdit] = useState('');

    const setMemoryItems = (moreMemory: any) => {
        setMemory(moreMemory);
    };

    return { username, setUser, memoryItems, setMemoryItems, usersId, setUsersId, moreMemoryClicked, setMoreMemoryClicked, selectedMemory, setSelectedMemory, folders, setFolders, folderId, setFolderId, folderName, setFolderName, selectedFolder, setSelectedFolder, folderEdit, setFolderEdit }

}