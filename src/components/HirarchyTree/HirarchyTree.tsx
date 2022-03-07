import React, {useEffect, useState} from 'react';
import './HirachyTree.css';
import {getUsers} from '../../services/Users.api';
import {RecursiveTree} from '../RecursiveTree/RecursiveTree';
import {Button, Typography} from '@mui/material';
import {makeTree} from '../../utils/utils';
import {User, UserTreeItem} from '../../utils/Users.model';

interface HirarchyTreeProps{
  userId: number;
  logoutClicked: () => void;
}

export function HirarchyTree({userId, logoutClicked}:HirarchyTreeProps){
  const [usersTree, setUsersTree] = useState<UserTreeItem[]>([]);
  const [loggedInUser, setLoggedInUser] = useState<User | undefined>();

  useEffect(()=>{
    fetchUsers();
  },[])

  async function fetchUsers(){
    const users:User[] = await getUsers();
    const usersTree:UserTreeItem[] = makeTree<UserTreeItem>('managerId',users);
    setLoggedInUser(users.find(user=>user.id === userId));
    setUsersTree(usersTree);
  }

  return (
    <div className="hirarchy-tree">
      <div className="hirarchy-tree-header">
        <Typography variant="h3">Hierarchy Tree</Typography>
        <div>
          <span>{`${loggedInUser?.firstName} ${loggedInUser?.lastName}`}</span>
          <Button className="hirarchy-tree-logout-button" variant="outlined" onClick={logoutClicked}>Logout</Button>
        </div>
      </div>
      <div className="hirarchy-tree-container">
        <RecursiveTree treeData={usersTree}/>
      </div>
    </div>
  );
}

