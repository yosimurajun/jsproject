"use stric";

const Player = (sign) => {
    this.sign = sign;

    const getSign = () => {
        return sign;
    }

    return { getSign };
};

const gameBoard = (() => {
    const board = ["","","","","","","","",""];

    const setField = (index, sign) => {
        if(index > board.length) return ;
        board[index] = sign;
    };

    const getField = (index) => {
        if(index > board.length) return ;
        return board[index];
    };

    const reset = () => {
        for(let i = 0; i < board.length; i++) {
            board[i] = "";
        }
    }

    const getAllField = () => {
        console.log(board);
    }

    return { setField, getField, reset, getAllField };
})();

const displayController = (() => {
    const fieldElements = document.querySelectorAll('.field');
    const messageElement = document.querySelector('.message');
    const restartButton = document.querySelector(".restart-button");

    fieldElements.forEach((field) => {
        field.addEventListener('click', (e) => {
            console.log('field');
            if(gameController.getIsOver() || e.target.textContent !== "") return ;
            gameController.playRound(parseInt(e.target.dataset.index));
            updateGameBoard();
            gameBoard.getAllField();
        })
    });

    restartButton.addEventListener('click', (e) => {
        console.log('reset');
        gameBoard.reset();
        gameController.reset();
        updateGameBoard();
        setMessageElement('Player X\'s turn');
        
    })
    const updateGameBoard = () => {
        for(let i = 0 ; i < fieldElements.length; i++) {
            fieldElements[i].textContent = gameBoard.getField(i);
        }
    };

    const setResultMessage = (winner) => {
        if(winner === "Draw") {
            setMessageElement("It's a draw");
        } else {
            setMessageElement(`player ${winner} has won!`);
        }
    }

    const setMessageElement = (message) => {
        messageElement.textContent = message;
    }


    return { setResultMessage, setMessageElement}
})();

const gameController = (() => {
    const playerX = Player("X");
    const playerO = Player("O");
    let round = 1;
    let isOver = false;

    const playRound = (fieldIndex) => {
        gameBoard.setField(fieldIndex, getCurrentPlayerSign());
        

        if(checkWinner(fieldIndex)) {
            displayController.setResultMessage(getCurrentPlayerSign());
            isOver =  true;
            return ;
        }

        if(round === 9) {
            displayController.setResultMessage('Draw');
            isOver = true;
            return ;
        }

        round++;
        displayController.setMessageElement(`Player ${getCurrentPlayerSign()}'s turn `)
    };

    const getCurrentPlayerSign = () => {
        return round % 2 === 1? playerX.getSign() : playerO.getSign();
    }

    const checkWinner = ((findIndex) => {
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        console.log('check winner function');
        // let result = winConditions.filter((combination) => combination.includes(findIndex)).some((possibleCombination) => possibleCombination.every((index) => gameBoard.getField(index) === getCurrentPlayerSign())); 
        // console.log(result);
        return winConditions.filter((combination) => combination.includes(findIndex))
                            .some((possibleCombination) => possibleCombination.every((index) => gameBoard.getField(index) === getCurrentPlayerSign())); 


    })

    const getIsOver = () => {
        return isOver;
    }

    const reset = () => {
        round = 1;
        isOver = false;
    }

    return {playRound, getIsOver, reset}
})();