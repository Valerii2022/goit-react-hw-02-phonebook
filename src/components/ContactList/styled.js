import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 25px;
`;

export const Name = styled.p`
  font-weight: 500;
  margin: 0;
`;

export const PhoneNumber = styled.span`
  font-size: 14px;
`;

export const DeleteBtn = styled.button`
  padding: 5px;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: red;
  color: #fff;
`;
