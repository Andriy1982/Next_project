import React from 'react';
import PropTypes, { string, number } from 'prop-types';
import {Container, Description, Image, Name, List, Item, ListLabel, ListQuantity} from './ProfileStyledComponent'
// import styled from 'styled-components';

// const Container = styled.div`
//   font-family: Helvetica, Arial, sans-serif;
//   color: #24292e;
//   background-color: #fff;
//   border-radius: 6px;
//   box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
//   max-width: 250px;
//   margin: 0 auto 20px;
//   text-align: center;
// `;

// const Description = styled.div`
//   padding: 30px;
// `;
// const Image = styled.img`
//   margin: 0 auto;
//   border-radius: 50%;
//   height: auto;
//   display: block;
//   width: 56%;
//   max-width: 100%;
// `;

// const Name = styled.p`
//   font-weight: 700;
// `;

// const List = styled.ul`
//   margin: 0;
//   padding: 0;
//   list-style: none;
//   display: flex;
//   justify-content: space-between;
//   background-color: #eee;
//   border-top: 1px solid grey;
// `;

// const Item = styled.li`
//   padding: 15px 0;
//   flex-basis: auto;
//   width: 33.333%;
//   cursor: pointer;

//   &:not(:last-child) {
//     border-right: 1px solid;
//   }
// `;

// const ListLabel = styled.span`
//   margin-bottom: 10px;
//   text-align: center;
//   display: block;
//   font-size: 12px;
// `;
// const ListQuantity = styled.span`
//   display: block;
//   font-size: 16px;
//   font-weight: 700;
// `;

const Profile = user => {
  const { name, avatar, tag, location } = user;
  const { followers, likes, views } = user.stats;
  return (
    <Container>
      <Description>
        <Image src={avatar} alt={name} />
        <Name>{name}</Name>
        <p>@{tag}</p>
        <p>{location}</p>
      </Description>

      <List>
        <Item>
          <ListLabel>Followers</ListLabel>
          <ListQuantity>{followers}</ListQuantity>
        </Item>
        <Item>
          <ListLabel>Views</ListLabel>
          <ListQuantity>{views}</ListQuantity>
        </Item>
        <Item>
          <ListLabel>Likes</ListLabel>
          <ListQuantity>{likes}</ListQuantity>
        </Item>
      </List>
    </Container>
  );
};

Profile.propTypes = {
  user: PropTypes.exact({
    name: string.isRequired,
    tag: string.isRequired,
    location: string,
    avatar: string,
    stats: PropTypes.exact({
      followers: number.isRequired,
      views: number.isRequired,
      likes: number.isRequired,
    }).isRequired,
  }),
};

export default Profile;
