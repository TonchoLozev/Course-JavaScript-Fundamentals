function whoWonTheElections(arr) {
    let systemsVotes = new Map();
    for (let line of arr) {

        let system = line.system;
        let candidate = line.candidate;
        let votes = line.votes;

        if (!systemsVotes.has(system)) {
            systemsVotes.set(system, new Map());
            systemsVotes.get(system).set(candidate, votes);
        } else {
            if (!systemsVotes.get(system).has(candidate)) {
                systemsVotes.get(system).set(candidate, votes);
            } else {
                systemsVotes.get(system).set(candidate, systemsVotes.get(system).get(candidate) + votes);
            }
        }
    }

    let winners = new Map();
    for (let [system, candidate] of systemsVotes) {
        let votesSum = 0;
        let winnerForSys = '';
        let winnersVotes = 0;
        for (let [candi, votes] of candidate) {
            if (votes > winnersVotes) {
                winnerForSys = candi;
                winnersVotes = votes;
            }
            votesSum += votes;
        }
        winners.set(system, new Map());
        winners.get(system).set(winnerForSys, votesSum);
    }

    let sorting =  Array.from(winners).sort((a, b)=> {
        "use strict";
        return Array.from(b[1])[0][1] - Array.from(a[1])[0][1];
    });
    let candidateAndHisSystems = new Map();
    let candidateAndHisVotes = new Map();
    let systemsAndTheirCandidates = new Map();
    let systemAndTheirVotes = new Map()

    let isOnlyOneCandidate = true;
    let candidat = Array.from(sorting[0][1])[0][0];
    let allTheVotes = 0;
    for(let [system, candidates] of sorting){
        for(let [candidate, votes] of candidates){

            if(!candidateAndHisSystems.has(candidate)) {

                candidateAndHisSystems.set(candidate, []);
                candidateAndHisSystems.get(candidate).push(system);
            }else{
                candidateAndHisSystems.get(candidate).push(system);
            }
            if(!candidateAndHisVotes.has(candidate))
            {
                candidateAndHisVotes.set(candidate, votes);
            }else{
                candidateAndHisVotes.set(candidate, candidateAndHisVotes.get(candidate)+votes);
            }
            if(!systemAndTheirVotes.has(system)){
                systemAndTheirVotes.set(system, votes);
            }else{
                systemAndTheirVotes.set(system, systemAndTheirVotes.get(system)+votes);
            }
            systemsAndTheirCandidates.set(system, candidate);
            allTheVotes+=votes;
            if(candidate !== candidat){
                isOnlyOneCandidate = false;
            }
        }
    }
    if(isOnlyOneCandidate === true){
        console.log(`${candidat} wins with ${allTheVotes} votes`);
        console.log(`${candidat} wins unopposed!`)
    }else{
        let numberOfVotesOfTheWinner = Array.from(candidateAndHisVotes)[0][1];
        if(numberOfVotesOfTheWinner > allTheVotes / 2){
            let winner = Array.from(candidateAndHisVotes)[0][0];
            let runner = Array.from(candidateAndHisVotes)[1][0];
            console.log(`${winner} wins with ${numberOfVotesOfTheWinner} votes`);
            console.log(`Runner up: ${runner}`);
            for(let [candidate, system] of candidateAndHisSystems){
                if(candidate === runner){
                    for (let i = 0; i < system.length; i++) {
                        let sys = system[i];
                        console.log(`${sys}: ${systemAndTheirVotes.get(sys)}`)
                    }
                    break;
                }
            }
        }else{
            let winner = Array.from(candidateAndHisVotes)[0][0];
            let runner = Array.from(candidateAndHisVotes)[1][0];
            let first = Math.floor((candidateAndHisVotes.get(winner)*100)/ allTheVotes);
            let second = Math.floor((candidateAndHisVotes.get(runner)*100)/ allTheVotes);
            console.log(`Runoff between ${winner} with ${first} and ${runner} with ${second}`)
        }
    }

}

whoWonTheElections([ { system: 'Tau',     candidate: 'Flying Shrimp', votes: 150 },
    { system: 'Tau',     candidate: 'Space Cow',     votes: 100 },
    { system: 'Theta',   candidate: 'Space Cow',     votes: 10 },
    { system: 'Sigma',   candidate: 'Space Cow',     votes: 200 },
    { system: 'Sigma',   candidate: 'Flying Shrimp', votes: 75 },
    { system: 'Omicron', candidate: 'Flying Shrimp', votes: 50 },
    { system: 'Omicron', candidate: 'Octocat',       votes: 75 } ]

);