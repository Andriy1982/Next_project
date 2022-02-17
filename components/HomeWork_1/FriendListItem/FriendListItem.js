import React from 'react';
import {Item, Condition, Image, Name} from './FriendListItemStyledComponent'


const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Condition isOnline={isOnline}></Condition>
      <Image src={avatar} alt={name} width="80" />
      <Name>{name}</Name>
    </Item>
  );
};

export default FriendListItem;
