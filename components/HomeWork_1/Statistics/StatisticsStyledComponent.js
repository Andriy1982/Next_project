import styled from 'styled-components';

export const Container = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  margin: 0 auto;
  padding: 50px;
  max-width: 300px;
  background-color: rgba(200, 200, 200, 0.5);
`;
export const Title = styled.h2`
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  font-size: 20px;
  padding: 20px 0;
  background-color: white;
`;
export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  width: 60px;
`;

export const Label = styled.span`
  /* margin: 0 auto; */
  text-align: center;
  display: block;
  padding: 5px 0;
  color: white;
`;