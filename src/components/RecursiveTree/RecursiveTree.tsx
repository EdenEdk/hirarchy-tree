import React, {Fragment} from 'react';
import {UserTreeItem} from '../../utils/Users.model';
import {TreeItem} from './TreeItem';

interface RecursiveTreeProps{
  treeData:UserTreeItem[];
}

export function RecursiveTree({ treeData }: RecursiveTreeProps) {

  function createTree (user: UserTreeItem) {
    return user.children && (
      <TreeItem key={user.id} user={user}>
        {user.children.map((user: UserTreeItem) => {
          return <Fragment key={user.id}>{createTree(user)}</Fragment>
        })}
      </TreeItem>
    )
  }

  return (
    <div>
      {treeData.map((user: UserTreeItem, i: any) => (
        <div key={i}>{createTree(user)}</div>
      ))}
    </div>
  )
}
