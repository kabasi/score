import player from '../views/player';


export default [{
    name: 'player',
    path: '/',
    component: player,
    meta: {
        requiresAuth: true,
    },
}, ];