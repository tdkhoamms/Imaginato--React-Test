
const sortScore = function () {
    return function (objectA, objectB) {
        const valueN = objectA.score;
        const valueM = objectB.score;
        if (valueN < valueM) return 1;
        else if (valueN > valueM) return -1;
        else return 0;
    };
};

const searchRank = (userID, arr) => {
    let result = null;
    arr.forEach((item, index) => {
        if (item.userID === userID) {
            result = index + 1;
        }
    });
    return result;
};

export const formatData = (arr) => {
    const newArr = [...arr].map((item) => {
        return {
            ...item,
            score: item.score += Math.floor(Math.random() * 5000)
        };
    });

    newArr.sort(sortScore());

    return arr.map((item) => {
        return {
            ...item,
            ranking: searchRank(item.userID, newArr)
        };
    });
};
