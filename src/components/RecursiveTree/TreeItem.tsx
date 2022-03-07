import React, {PropsWithChildren} from 'react';
import './TreeItem.css';
import {UserTreeItem} from '../../utils/Users.model';
import {Avatar} from '@mui/material';

interface TreeItemProps{
  user:UserTreeItem;
}

export function TreeItem ({user,children}: PropsWithChildren<TreeItemProps>) {
  const userInitials = `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`

  return (
    <div>
      <div className="tree-item">
          <div className="tree-item-icon">
            <span>{user.children.length > 0 ?  '+' : '-'}</span>
            <Avatar src={user.photo} >{userInitials}</Avatar>
          </div>
        <div className="tree-item-label">
          {`${user.firstName} ${user.lastName} ${user.email}`}
        </div>
      </div>
      <div className="tree-item-children">{children}</div>
    </div>
  )
}
