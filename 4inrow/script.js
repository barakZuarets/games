var board = [
    ['black','black','black','black','black','black','black','black','black','black'],
    ['black','black','black','black','black','black','black','black','black','black'],
    ['black','black','black','black','black','black','black','black','black','black'],
    ['black','black','black','black','black','black','black','black','black','black'],
    ['black','black','black','black','black','black','black','black','black','black'],
    ['black','black','black','black','black','black','black','black','black','black'],
    ['black','black','black','black','black','black','black','black','black','black'],
    ['black','black','black','black','black','black','black','black','black','black']];
var color = 'red';
function on(num){
    document.getElementById(num).style.backgroundColor=color;
}
function off(num){
    document.getElementById(num).style.backgroundColor='black';
}
function push(num){
    
    let j=0;
    for (let i=0;i<8;i++)
    {
        if (board[i][num]== 'black')
        {
            j=i;
            break;
        }
    }
    board[j][num]=color;
    print();
    setTimeout(function() {
    check();
}, 2000);
    if (color=='red')
    {
        color='yellow';
    }
    else
    {
        color='red';
    }
}
function print()
{
    for(let i=0;i<8;i++)
    {
        for (let x=0;x<10;x++)
        {
        let j='t'+ i.toString()+x.toString();
        document.getElementById(j).style.backgroundColor=board[i][x];
    }
}

}

function checkLines()
{
    for (let i=0;i<8;i++)
    {
        x=9;
        while (x>2)
        {
            if (board[i][x]==board[i][x-1] && board[i][x]==board[i][x-2] && board[i][x]==board[i][x-3] && board[i][x]!='black')
            {
                alert('the winner is :' + board[i][x]);
                blackGame();
            }
            x--;
        }
    }
}

function checkcol()
{
    for (let i=0;i<10;i++)
    {
        x=7;
        while (x>2)
        {

            if (board[x][i]==board[x-1][i] && board[x][i]==board[x-2][i] && board[x][i]==board[x-3][i] && board[x][i]!='black')
            {
                alert('the winner is :' + board[x][i]);
                blackGame();
            }
            x--;
        }
    }
}

function checkright()
{
    for (let i=0;i<4;i++)
    {
        for (let j=0;j<7;j++)
        {
            if (board[i][j]==board[i+1][j+1] && board[i][j]==board[i+2][j+2] && board[i][j]==board[i+3][j+3] && board[i][j]!= 'black')
            {
                alert('the winner is :' + board[i][j]);
                blackGame();
            }
        }
    }

}
function checkleft()
{
    for (let i=7;i>2;i--)
    {
        for (let j=0;j<7;j++)
        {
            if (board[i][j]==board[i-1][j+1] && board[i][j]==board[i-2][j+2] && board[i][j]==board[i-3][j+3] && board[i][j]!= 'black')
            {
                alert('the winner is :' + board[i][j]);
                blackGame();
            }
        }
    }
}
function blackGame()
{
    for(let i=0;i<8;i++)
    {
        for(let j=0;j<10;j++)
        {
            board[i][j]='black';
        }
    }
    print();
}

function check()
{
    checkLines();
    checkcol();
    checkleft();
    checkright();
}