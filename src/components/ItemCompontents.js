import styled from 'styled-components';

export const ListContainer = styled.div`
  width: 90%;
  height: 500px;
  background-color: #f7f5f6;
  position: absolute;
  top:30px;
  left: 5%;
  border-radius: 10px;
`;

export const ItemRow = styled.div`
  width: 90%;
  height: 50px;
  left: 5%;
  position: absolute;
  top: ${(props) => 50 * (props.ranking - 1)}px;
  display: flex;
  align-items: center;
  transition: all 0.5s ease 0s;
  border-bottom: 1px solid #efeded;
`;

export const ItemRanking = styled.div`
  width: 22px;
  text-align: center;
  border-radius: 50%;
  height: 22px;
  line-height: 22px;
  margin-right: 8px;
  color: #fff;
  font-size: 14px;
  background-color: ${({ranking}) => ['#f54545', '#ff8547', '#ffac38'][ranking - 1] || '#8eb9f5'};
`;

export const ItemPicture = styled.div`
  background-color: #e5e5e5;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(255, 255, 255);
`;

export const ItemName = styled.div`
  color: #363336;
  margin-left: 8px;
`;

export const ItemScore = styled.div`
  flex-grow: 1;
  text-align: right;
  color: #e46a86;
`;
