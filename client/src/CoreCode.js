import store, {
    answerButtonHighlight, resetAllButtons, setCurrentStatus, setGameData,
    setEndGameMessage, setPlayerID, setQuestion, showHideModal,
    updateAnswerButtonLabel, updateLeadboard
  } from './state/engine'
import io from "socket.io-client";



const CoreCode = {
    serverIP : "localhost",
    io : null,
    navigate : null,
    startup : () => {
        if (!store.getState().modals.isAdmin &&
        (store.getState().playerInfo.name == null ||
        store.getState().playerInfo.name.trim() === "" ||
        store.getState().playerInfo.name.length === 1)
        ) {
        return;
        }

        store.dispatch(showHideModal("namePrompt", false));
        CoreCode.io = io(`http://${CoreCode.serverIP}:8000`);

        if (store.getState().modals.isAdmin) {
            CoreCode.io.on("connected", function() { 
                console.log("ADMIN CONNECTED"); 
                console.log(store.getState().modals.isAdmin)
                store.dispatch(showHideModal("admin", true));
                this.navigate("/players")
                console.log(store.getState())
            });
            CoreCode.io.on("adminMessage", CoreCode.adminMessage);            
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
        console.log("connected")
        CoreCode.io.emit("validatePlayer", {
            playerName : store.getState().playerInfo.name
        });
    },
    validatePlayer : function(inData) {
        console.log("validating player")
        store.dispatch(setPlayerID(inData.playerID));

        console.log(inData)
        console.log(store.getState())
        
        if (inData.inProgress) {
            inData.gameData.asked = inData.asked;
            store.dispatch(setGameData(inData.gameData));
            store.dispatch(updateLeadboard(inData.leaderboard));
            CoreCode.navigate("/rankings");            
        }
    },
    newGame : function(inData) {
        store.dispatch(showHideModal("endGame", false));
        inData.gameData.asked = inData.asked;
        
        store.dispatch(setGameData(inData.gameData));
        store.dispatch(updateLeadboard(inData.leaderboard));
        CoreCode.navigate("/rankings");
        // store.dispatch(showHideModal("gameLeaderboard", true));
    },
    nextQuestion : function(inData) {
        store.dispatch(answerButtonHighlight(-1));
        store.dispatch(setQuestion(inData.question));

        for (let i = 0; i < 6; i++) {
            store.dispatch(updateAnswerButtonLabel(i, inData.answers[i]));
        }
        
        store.dispatch(resetAllButtons());
        CoreCode.navigate("/question");
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

        CoreCode.navigate("/rankings");
        // Toast.show({ text: msg, buttonText : "Ok", type : type, duration : 3000});

        // Vibration.vibrate(1000);
    },
    endGame : function(inData) {
        inData.gameData.asked = inData.asked;
        store.dispatch(setGameData(inData.gameData));
        store.dispatch(updateLeadboard(inData.leaderboard));
        CoreCode.navigate("/rankings");
        
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