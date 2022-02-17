import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  height: 100px;
  list-style: none;
  box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Condition = styled.span`
  margin: 0 20px;
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Image = styled.img`
  margin-right: 15px;
  border-radius: 5px;
`;

export const Name = styled.p`
  font-size: 28px;
  font-weight: 600;
`;