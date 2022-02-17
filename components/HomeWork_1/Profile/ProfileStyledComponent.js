import styled from 'styled-components';

export const Container = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  color: #24292e;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  max-width: 250px;
  margin: 0 auto 20px;
  text-align: center;
`;

export const Description = styled.div`
  padding: 30px;
`;
export const Image = styled.img`
  margin: 0 auto;
  border-radius: 50%;
  height: auto;
  display: block;
  width: 56%;
  max-width: 100%;
`;

export const Name = styled.p`
  font-weight: 700;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  background-color: #eee;
  border-top: 1px solid grey;
`;

export const Item = styled.li`
  padding: 15px 0;
  flex-basis: auto;
  width: 33.333%;
  cursor: pointer;

  &:not(:last-child) {
    border-right: 1px solid;
  }
`;

export const ListLabel = styled.span`
  margin-bottom: 10px;
  text-align: center;
  display: block;
  font-size: 12px;
`;
export const ListQuantity = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 700;
`;