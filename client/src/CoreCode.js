import store from './state/engine'

const CoreCode = {
    serverIP : "127.0.0.1",
    io : null,
    mainNavigator : null,
    startup : () => {
        if (!store.getState().modals.isAdmin &&
        (store.getState().playerInfo.name == null ||
        store.getState().playerInfo.name.trim() === "" ||
        store.getState().playerInfo.name.length === 1)
        ) {
        return;
        }

        store.dispatch(showHideModal("namePrompt", false));
        CoreCode.io = io(`http://${CoreCode.serverIP}`);

        if (store.getState().modals.isAdmin) {
            CoreCode.io.on("connected", function() { console.log("ADMIN CONNECTED"); });
            CoreCode.io.on("adminMessage", CoreCode.adminMessage);
            store.dispatch(showHideModal("admin", true));
        } else {
            CoreCode.io.on("connected", CoreCode.connected);
            CoreCode.io.on("validatePlayer", CoreCode.validatePlayer);
            CoreCode.io.on("newGame", CoreCode.newGame);
            CoreCode.io.on("nextQuestion", CoreCode.nextQuestion);
            CoreCode.io.on("answerOutcome", CoreCode.answerOutcome);
            CoreCode.io.on("endGame", CoreCode.endGame);
        }
    },
    connected : function(inData) {
        CoreCode.io.emit("validatePlayer", {
            playerName : store.getState().playerInfo.name
        });
    },
    validatePlayer : function(inData) {
        store.dispatch(setPlayerID(inData.playerID));
        
        if (inData.inProgress) {
            inData.gameData.asked = inData.asked;
            store.dispatch(setGameData(inData.gameData));
            store.dispatch(updateLeadboard(inData.leaderboard));
            CoreCode.mainNavigator.navigate("GameLeaderboardScreen");
        }
    },
    newGame : function(inData) {
        store.dispatch(showHideModal("endGame", false));
        inData.gameData.asked = inData.asked;
        
        store.dispatch(setGameData(inData.gameData));
        store.dispatch(updateLeadboard(inData.leaderboard));
        CoreCode.mainNavigator.navigate("GameLeaderboardScreen");
    },
    nextQuestion : function(inData) {
        store.dispatch(answerButtonHighlight(-1));
        store.dispatch(setQuestion(inData.question));

        for (let i = 0; i < 6; i++) {
            store.dispatch(updateAnswerButtonLabel(i, inData.answers[i]));
        }
        
        store.dispatch(resetAllButtons());
        CoreCode.mainNavigator.navigate("GameQuestionScreen");
    },
    answerOutcome : function(inData) {
        let msg = "Sorry! That's not correct :(";
        let type = "danger";

        if (inData.correct) {
            msg = "Hooray! You got it right :)";
            type = "success";
        }

        inData.gameData.asked = inData.asked;
        store.dispatch(setGameData(inData.gameData));
        store.dispatch(updateLeadboard(inData.leaderboard));

        CoreCode.mainNavigator.navigate("GameLeaderboardScreen");
        Toast.show({ text: msg, buttonText : "Ok", type : type, duration : 3000
        });

        Vibration.vibrate(1000);
    },
    endGame : function(inData) {
        inData.gameData.asked = inData.asked;
        store.dispatch(setGameData(inData.gameData));
        store.dispatch(updateLeadboard(inData.leaderboard));
        CoreCode.mainNavigator.navigate("GameLeaderboardScreen");
        
        if (inData.leaderboard[0].playerID === store.getState().playerInfo.id) {
            store.dispatch(setEndGameMessage("Congratulations! You were the winner!"));
            store.dispatch(showHideModal("endGame", true));
        } else {
            let place = "";
            let index = inData.leaderboard.findIndex((inPlayer) =>
            inPlayer.playerID === CoreCode.playerID);

            index++;

            const j = index % 10;
            const k = index % 100;
            
            if (j === 1 && k !== 11) {
                place = `${index}st`;
            } else if (j === 2 && k !== 12) {
                place = `${index}nd`;
            } else if (j === 3 && k !== 13) {
                place = `${index}rd`;
            } else {
                place = `${index}th`;
            }
            store.dispatch(setEndGameMessage(
            `Sorry, you didn't win. You finished in ${place} place.`)
            );
            store.dispatch(showHideModal("endGame", true));
        }
    },
    adminMessage : function(inData) {
        store.dispatch(setCurrentStatus(inData.msg));
    }
}

export default CoreCode