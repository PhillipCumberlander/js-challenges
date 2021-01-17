
///background challenge
let changeButton = document.getElementById("changeButton")
let body = document.querySelector("body")
let colors = ["red", "blue", "green", "pink","grey", "yellow"]

changeButton.addEventListener('click', function(){
    let colorIndex = parseInt(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorIndex]
})


///counter challenge
function counter(){

    let count = document.getElementById("count")
    let addButton = document.getElementById("addButton")
    let subButton = document.getElementById("subButton")
    let score = 0
    
    addButton.addEventListener('click', function(){
        score++
        count.innerHTML = score
    })
    
    subButton.addEventListener('click', function(){
        score--
        count.innerHTML = score
    })
}

counter()

//////creating a basketball game
function basketballGame(){

    ////variable for buttons and score
    let nextPoint = document.getElementById('nextPoint')
    let scoreOne = document.getElementById("scoreOne")
    let scoreTwo = document.getElementById("scoreTwo")


    ////teams in the playoffs
    let listOfTeams = {
        team1: "Atlanta Hawks",
        team2: "LA Lakers",
        team3: "LA Clippers",
        team4: "Miami Heat",
        team5: "Milwaukee Bucks",
        team6: "Utah Jazz",
        team7: "Brooklyn Nets",
        team8: "NY Knicks",

    }

    ////selecting a random matchup...did not work while inside basketball game function

    // let playoffs = document.getElementById("matchupbutton")
    // let teamOne = document.getElementById("teamOne")
    // let teamTwo = document.getElementById("teamTwo")

    // function matchupPicker(){
    //     let picker = (Math.random() * 40) + 1

    //     if (picker <= 10){
    //         teamOne.innerHTML = listOfTeams.team1
    //         teamTwo.innerHTML = listOfTeams.team8
    //     }
    //     else if (picker <=20){
    //         teamOne.innerHTML = listOfTeams.team2
    //         teamTwo.innerHTML = listOfTeams.team7
    //     }
    //     else if (picker <=30){
    //         teamOne.innerHTML = listOfTeams.team3
    //         teamTwo.innerHTML = listOfTeams.team6
    //     }
    //     else if (picker <=40){
    //         teamOne.innerHTML = listOfTeams.team4
    //         teamTwo.innerHTML = listOfTeams.team5
    //     }
    // }

    

    ////scoreboard for teams
    let teamOneScore = 0
    let teamTwoScore = 0

    ///determines which team scores
    function scoring(){

        let whoScores = Math.random() * 21
        
        if(whoScores <= 5){
            teamOneScore += 2
            scoreOne.innerHTML = teamOneScore
        }
        else if (whoScores <= 10){
            teamOneScore += 3
            scoreOne.innerHTML = teamOneScore

        }
        else if (whoScores <= 15) {
            teamTwoScore += 2
            scoreTwo.innerHTML = teamTwoScore

        }
        else if (whoScores <= 20){
            teamTwoScore += 3
            scoreTwo.innerHTML = teamTwoScore

        }
    }

    ////event listeners to manipulate dom
    // playoffs.addEventListener('click', matchupPicker)
    nextPoint.addEventListener('click', scoring)

}

///list of playoff teams

let listOfTeams = {
    team1: "Atlanta Hawks",
    team2: "LA Lakers",
    team3: "LA Clippers",
    team4: "Miami Heat",
    team5: "Milwaukee Bucks",
    team6: "Utah Jazz",
    team7: "Brooklyn Nets",
    team8: "NY Knicks",

}

///function to pick matchups...works outside of basketball game function but not inside

function matchupPicker(){
    let picker = (Math.random() * 40) + 1

    if (picker <= 10){
        teamOne.innerHTML = listOfTeams.team1
        teamTwo.innerHTML = listOfTeams.team8
    }
    else if (picker <=20){
        teamOne.innerHTML = listOfTeams.team2
        teamTwo.innerHTML = listOfTeams.team7
    }
    else if (picker <=30){
        teamOne.innerHTML = listOfTeams.team3
        teamTwo.innerHTML = listOfTeams.team6
    }
    else if (picker <=40){
        teamOne.innerHTML = listOfTeams.team4
        teamTwo.innerHTML = listOfTeams.team5
    }
}
basketballGame()