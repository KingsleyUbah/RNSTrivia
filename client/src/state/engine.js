import { configureStore } from '@reduxjs/toolkit'

// Actions 
const ANSWER_BUTTON_HIGHLIGHT = "ANSWER_BUTTON_HIGHLIGHT";
const RESET_ALL_BUTTONS = "RESET_ALL_BUTTONS";
const SET_CURRENT_STATUS = "SET_CURRENT_STATUS";
const SET_END_GAME_MESSAGE = "SET_END_GAME_MESSAGE";
const SET_GAME_DATA = "SET_GAME_DATA";
const SET_IS_ADMIN = "SET_IS_ADMIN";
const SET_PLAYER_ID = "SET_PLAYER_ID";
const SET_PLAYER_NAME = "SET_PLAYER_NAME";
const SET_QUESTION = "SET_QUESTION";
const SHOW_HIDE_MODAL = "SHOW_HIDE_MODAL";
const UPDATE_ANSWER_BUTTON_LABEL = "UPDATE_ANSWER_BUTTON_LABEL";
const UPDATE_LEADERBOARD = "UPDATE_LEADERBOARD";

// Action for modals
export function showHideModal(inModalName, inVisible){
    return { type : SHOW_HIDE_MODAL,
        payload : { modalName : inModalName, visible : inVisible }
    };
};

// Actions for player info
export function setPlayerID(inID){
    return { type : SET_PLAYER_ID,
        payload : { id : inID }
    };
};

export function setPlayerName(inName){
    return { type : SET_PLAYER_NAME,
        payload : { name : inName }
    };
};

export function setGameData(inGameData){  
    return {
      type : SET_GAME_DATA,
      payload : { gameData : inGameData }
    };  
  };

  export function answerButtonHighlight(inButtonNumber){
    return {
      type : ANSWER_BUTTON_HIGHLIGHT,
      payload : { buttonNumber : inButtonNumber }
    };
  
  }; 
  
  export function updateAnswerButtonLabel (inButtonNumber, inLabel){
    return {
      type : UPDATE_ANSWER_BUTTON_LABEL,
      payload : { buttonNumber : inButtonNumber, label : inLabel }
    };
  
  }; 
  
  export function resetAllButtons(){
    return {
      type : RESET_ALL_BUTTONS,
      payload : { }
    };
  
  }; 
  
  export function setQuestion(inQuestion){
    return {
      type : SET_QUESTION,
      payload : { question : inQuestion}
    };
  }; 
  
  export function setEndGameMessage(inMessage){
    return {
      type : SET_END_GAME_MESSAGE,
      payload : { message : inMessage}
    };
  
  };
  
  export function updateLeadboard(inListData){  
    return {
      type : UPDATE_LEADERBOARD,
      payload : { listData : inListData }
    };
  
  }; 
  
  export function setIsAdmin(inIsAdmin){
    return {
      type : SET_IS_ADMIN,
      payload : { isAdmin : inIsAdmin }
    };
  
  }; 
  
  export function setCurrentStatus(inCurrentStatus){  
    return {
      type : SET_CURRENT_STATUS,
      payload : { currentStatus : inCurrentStatus }
    };
  
  };


// Initial State
let preloadedState = {
    leaderboard : { listData : [ ] },
    gameData : {
        asked : "?????", answered : "?????", points : "?????", right : "?????",
        wrong : "?????",
        totalTime : "?????", fastest : "?????", slowest : "?????", average : "?????"
    },
    question : {
        answerButtonPrimary : [ true, true, true, true, true ],
        answerButtonDanger : [ false, false, false, false, false ],
        answerButtonLabels : [ null, null, null, null, null, null ],
        currentQuestion : null, selectedAnswer : -1
    },
    modals : {
        namePromptVisible : true, endGameVisible : false, adminVisible : false,
        endGameMessage : null, isAdmin : null, currentStatus : ""
    },
    playerInfo : { id : null, name : null }
};

// Reducers
const modalsReducer = function (inState = preloadedState, inAction) {
    switch (inAction.type) {
        case SET_CURRENT_STATUS : {
            const modalsNode = { ...inState };
            modalsNode.currentStatus = inAction.payload.currentStatus;
            return { ...inState, ...modalsNode };
        }
        case SET_END_GAME_MESSAGE : {
            const modalsNode = { ...inState };
            modalsNode.endGameMessage = inAction.payload.message;
            return { ...inState, ...modalsNode };
        }
        case SET_IS_ADMIN : {
            const modalsNode = { ...inState };
            modalsNode.isAdmin = inAction.payload.isAdmin;
            return { ...inState, ...modalsNode };
        }
        case SHOW_HIDE_MODAL : {
            const modalsNode = { ...inState };
            modalsNode[`${inAction.payload.modalName}Visible`] =
            inAction.payload.visible;
            return { ...inState, ...modalsNode };
        }
        default : { return inState; }
    }
};

const playerInfoReducer = function (inState = preloadedState, inAction) {
    switch (inAction.type) {
        case SET_PLAYER_ID : {
            const modalsNode = { ...inState };
            modalsNode.id = inAction.payload.id;
            return { ...inState, ...modalsNode };
        }
        case SET_PLAYER_NAME : {
            const modalsNode = { ...inState };
            modalsNode.name = inAction.payload.name;
            return { ...inState, ...modalsNode };
        }        
        default : { return inState; }
    }
};

const gameDataReducer = function(inState = preloadedState, inAction) {
    switch (inAction.type) {
        case SET_GAME_DATA : {
            return { ...inState, ...inAction.payload.gameData };
        }
        default : { return inState; }
    }
};

const questionReducer = function(inState = preloadedState, inAction) {
    switch (inAction.type) {
        case ANSWER_BUTTON_HIGHLIGHT : {
            const questionNode = { ...inState };

            questionNode.answerButtonPrimary = [ true, true, true, true, true ];
            questionNode.answerButtonDanger = [ false, false, false, false, false
            ];
            questionNode.selectedAnswer = inAction.payload.buttonNumber;
            
            if (inAction.payload.buttonNumber !== -1) {
                questionNode.answerButtonDanger[inAction.payload.buttonNumber] = true;
            }

            return { ...inState, ...questionNode };
        }
        case UPDATE_ANSWER_BUTTON_LABEL : {
            const questionNode = { ...inState };
            questionNode.answerButtonLabels[inAction.payload.buttonNumber] =
            inAction.payload.label;
            return { ...inState, ...questionNode };
        }
        case RESET_ALL_BUTTONS : {
            const questionNode = { ...inState };
            questionNode.answerButtonPrimary = [ true, true, true, true, true ];
            questionNode.answerButtonDanger = [ false, false, false, false, false];
            return { ...inState, ...questionNode };
        }
        case SET_QUESTION : {
            const questionNode = { ...inState };
            questionNode.currentQuestion = inAction.payload.question;
            return { ...inState, ...questionNode };
        }
        default : { return inState; }
    }
};

const leaderboardReducer = function(inState = preloadedState, inAction) {
    switch (inAction.type) {
        case UPDATE_LEADERBOARD : {
            return { ...inState, ...inAction.payload.leaderboardData };
        }
        default : { return inState; }
    }
};

// Combining reducers
const store = configureStore({ 
    reducer: {
        leaderboard : leaderboardReducer,
        question : questionReducer,
        modals : modalsReducer,
        playerInfo : playerInfoReducer,
        gameData : gameDataReducer
    },
    preloadedState
})

// Export store
export default store;

