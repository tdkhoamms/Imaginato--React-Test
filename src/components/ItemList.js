import React from 'react';

import Score from './Score';
import {
    ListContainer,
    ItemRow,
    ItemRanking,
    ItemPicture,
    ItemName
} from './ItemCompontents';

const ItemList = ({data}) => (
    <ListContainer>
        {data.map((item, index) => (
            <ItemRow key={item.userID} ranking={item.ranking}>
                <ItemRanking ranking={item.ranking}>{item.ranking}</ItemRanking>
                <ItemPicture/>
                <ItemName>{item.displayName}</ItemName>
                <Score score={item.score}/>
            </ItemRow>
        ))}
    </ListContainer>
);

export default (ItemList);
