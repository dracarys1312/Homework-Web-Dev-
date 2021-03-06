var context;
var map;
var arrBrick = new Array();
var arrSteel = new Array();
var arrWater = new Array();
var arrTrees = new Array();
var socket;
var enemyTanks = new Array();

window.onload = function () {
    var canvas = document.createElement("canvas");
    context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    gameStart();
    setInterval(gameLoop, 17);
    map =  [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 4, 4, 4, 4, 0, 0, 2, 2, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 4, 4, 4, 4, 0, 0, 2, 2, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 4, 4, 4, 4, 1, 1, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 0, 0, 2, 2, 0, 0],
        [0, 0, 0, 0, 4, 4, 4, 4, 1, 1, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 0, 0, 2, 2, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 1, 1, 0, 0, 0, 0],
        [0, 0, 2, 2, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 2, 2, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [3, 3, 3, 0, 1, 1, 0, 0, 4, 4, 4, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        [3, 3, 3, 0, 1, 1, 0, 0, 4, 4, 4, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        [3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2],
        [3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2],
        [0, 0, 1, 1, 4, 4, 4, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 4, 4, 4, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [2, 2, 0, 0, 4, 4, 4, 0, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 0, 0, 1, 1, 0, 0],
        [2, 2, 0, 0, 4, 4, 4, 0, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 0, 0],
        [0, 0, 0, 0, 0, 0, 2, 2, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 4, 4, 4, 4, 0, 0],
        [0, 0, 0, 0, 0, 0, 2, 2, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 4, 4, 4, 4, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 2, 2, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 2, 2, 0, 0, 0, 0]
    ];
    for(var i = 0; i < 26; i++){
        for(var j = 0; j < 26; j++){
            if(map[i][j] == 1){
                var brick = new Brick(i,j);
                arrBrick.push(brick);
            }
            if(map[i][j] == 2){
                var steel = new Steel(i,j);
                arrSteel.push(steel);
            }
            if(map[i][j] == 3){
                var water = new Water(i,j);
                arrWater.push(water);
            }
            if(map[i][j] == 4){
                var trees = new Trees(i,j);
                arrTrees.push(trees);
            }
        }
    }
    initSocketClient();
};

function initSocketClient() {
    socket = io.connect();
    player = new Tank(100, 100,0);
    socket.emit('player_created',{x: player.x, y:player.y});
    socket.on('info_other_players',function (data) {
        player.id = data.id;
        console.log(player.id);
        for (var i = 0; i < data.tanks.length; i++){
            var newTank = new Tank(data.tanks[i].x,data.tanks[i].y, data.tanks[i].id);
            enemyTanks.push(newTank);
        }
    });
    socket.on('new_player_connected', function (data) {
        var newTank = new Tank(data.x,data.y, data.id);
        enemyTanks.push(newTank);
    });

    socket.on('enemy_update',function (data) {
        for(var i = 0; i< enemyTanks.length; i++ ){
            if(enemyTanks[i].id == data.id){
                enemyTanks[i].direction = data.direction;
                console.log(data.direction);
                enemyTanks[i].x = data.x;
                enemyTanks[i].y = data.y;
                break;
            }
        }
    });
}

var player;

var gameLoop = function () {
    gameUpdate();
    gameDrawer(context);
};

function gameStart() {

    //phan biet player va Tank nhe
    //Tank la ban thiet ke
    //con player moi la xe tang that su
    player = new Tank(100, 100);
}

function gameUpdate() {
    player.update();
    for(var i = 0; i < arrWater.length; i++){
        arrWater[i].update();
    }
    socket.emit('player_update',{x: player.x, y: player.y, id: player.id, direction: player.direction});
    for(var i=0; i< enemyTanks.length; i++){
        enemyTanks[i].update();
    }
}

function gameDrawer(context) {
    context.fillStyle = "black";
    context.fillRect(0, 0, window.innerWidth, window.innerHeight);
    player.draw(context);
    for(var i = 0; i < enemyTanks.length; i++){
        enemyTanks[i].draw(context);
    }
    for(var i = 0; i < arrBrick.length; i++){
        arrBrick[i].draw(context);
    }
    for(var i = 0; i < arrSteel.length; i++){
        arrSteel[i].draw(context);
    }
    for(var i = 0; i < arrWater.length; i++){
        arrWater[i].draw(context);
    }
    for(var i = 0; i < arrTrees.length; i++){
        arrTrees[i].draw(context);
    }
}

window.onkeydown = function (e) {
    switch (e.keyCode){
        case 65://a
            player.move(3);
            break;
        case 68://d
            player.move(4);
            break;
        case 83://s
            player.move(2);
            break;
        case 87://w
            player.move(1);
            break;
        case 32:
            player.shoot();
            break;
    }
};
window.onkeyup = function (e) {
    switch (e.keyCode){
        case 65://a
            if(player.speedX < 0){
                player.speedX = 0;
            }
            break;
        case 68://d
            if(player.speedX > 0){
                player.speedX = 0;
            }
            break;
        case 83://s
            if(player.speedY > 0){
                player.speedY = 0;
            }
            break;
        case 87://w
            if(player.speedY < 0){
                player.speedY = 0;
            }
            break;
    }
};