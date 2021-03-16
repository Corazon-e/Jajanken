function game () {
    // number of rounds
        let myWin = 1;
        let compWin = 1;
    // displaying computer choice

    function display (input) {
        const compScore = document.querySelector('.compScore');
        compScore.innerText = `Computer selected: ${input}`;
    }
    //Selecting scores and text for displaying on screen
    const textBox = document.querySelector('.textBox');
    const myScore = document.querySelector('.myScore');
    const cScore = document.querySelector('.cScore');
    
        
    // player and computer selection
         const buttons = document.querySelectorAll('button');   
         buttons.forEach(btn =>  {
             btn.addEventListener('click', () =>  {
                const userChoice = btn.textContent.toLowerCase();
                let computerChoice = ['rock', 'paper', 'scissors'];
                let generator = (Math.floor(Math.random() * 3));
                computerChoice = computerChoice[generator]; 
                display(computerChoice);  
                rounds(userChoice, computerChoice);
             });
         });
        
    //comparing matches
       function rounds (userChoice,computerChoice) {

       if (userChoice == computerChoice) {
            textBox.innerText = `It's a tie!`;
        } 
    
        if (userChoice == 'rock') {
            if (computerChoice == 'scissors') {
                textBox.innerText = `Rock beats scissors!`;
                myScore.innerText = `Your points: ${myWin++}`;
               
            } else if (computerChoice == 'paper') {
                textBox.innerText = `Rock looses to paper!`;
                cScore.innerText = `Computer points: ${compWin++}`;
                
            }
        }
        if (userChoice == 'paper') {
            if (computerChoice == 'rock') {
                textBox.innerText = `Paper beats rock!`;
                myScore.innerText = `Your points: ${myWin++}`;
               
            }else if (computerChoice == 'scissors') {
                textBox.innerText = `Paper looses to scissors!`;
                cScore.innerText = `Computer points: ${compWin++}`;
               
            }
        }
        if (userChoice == 'scissors') {
            if (computerChoice == 'paper') {
                textBox.innerText = `Scissors beats paper!`;
                myScore.innerText = `Your points: ${myWin++}`;
               
            }else if (computerChoice == 'rock') {
                textBox.innerText = `Scissors looses to rock!`;
                cScore.innerText = `Computer points: ${compWin++}`;
            }
        }
       
    
    }
    
}
game();