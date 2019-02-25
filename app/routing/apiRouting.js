const friendsData = require("../data/friends");

const scoreSurvey = (survey) => {
    let total = 0;
    for (let i = 0; i < survey.length; i++) {
        total += +survey[i];
    }
    
    return total;
}

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    })

    app.post("/api/friends", function (req, res) {
        let userScore = scoreSurvey(req.body.scores);
        let matchProfile = friendsData[0];
        let matchPoint = Math.abs( scoreSurvey(matchProfile.scores) - userScore );

        for (let i = 0; i < friendsData.length; i++) {
            let contenderScore = Math.abs( scoreSurvey(friendsData[i].scores) - userScore );
            if ( contenderScore < matchPoint ) {
                matchPoint = contenderScore;
                matchProfile = friendsData[i];
            }
        }

        friendsData.push(req.body);
        res.json(matchProfile);
    });

}