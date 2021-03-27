import Router from 'next/router';

export const getGame = (game) => {
    console.log('game is '+game);
    switch(String(game).trim().toLowerCase()) {
        case "wow":
            return 1;
        case "lol":
            return 2;
        default:
            return 0;
    }
}

export const setLocalGame = (game) => {
    localStorage.setItem("game", game);
}

export const getLocalGame = () => {
    console.log('game')
    return localStorage.getItem("game");
}

export const goHome = () => {
    let game = getLocalGame();
    if (game)
        Router.push('/games?game='+game);
    else
        Router.push('/');
}

export const getHome = () => {
    let game = getLocalGame();
    if (game)
       return '/games?game='+game;
    else
        return '/';
}