/*
import { configureStore } from '@reduxjs/toolkit'

// Actions 
const ANSWER_BUTTON_HIGHLIGHT = "abh";
const RESET_ALL_BUTTONS = "rab";
const SET_CURRENT_STATUS = "scs";
const SET_END_GAME_MESSAGE = "segm";
const SET_GAME_DATA = "sgd";
const SET_IS_ADMIN = "sia";
const SET_PLAYER_ID = "spi";
const SET_PLAYER_NAME = "spn";
const SET_QUESTION = "scq";
const SHOW_HIDE_MODAL = "shm";
const UPDATE_ANSWER_BUTTON_LABEL = "uabl";
const UPDATE_LEADERBOARD = "ul";

// Action functions to trigger reducer
const showHideModal = (inModalName, inVisible) => {
    return { type : SHOW_HIDE_MODAL,
        payload : { modalName : inModalName, visible : inVisible }
    };
};

// Action dispatchers (to be used in component)
store.dispatch(showHideModal("loginModal", true))

// Initial State
let initialState = {
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
    namePromptVisible : false, endGameVisible : false, adminVisible : false,
    endGameMessage : null, isAdmin : false, currentStatus : ""
    },
    playerInfo : { id : null, name : null }
};

// Reducers
const modalsReducer = function (inState = initialState, inAction) {
    switch (inAction.type) {
        case SET_CURRENT_STATUS : {
            const modalsNode = { ...inState };
            modalsNode.currentStatus = inAction.payload.currentStatus;
            return { ... inState, ...modalsNode };
        }
        case SET_END_GAME_MESSAGE : {
            const modalsNode = { ...inState };
            modalsNode.endGameMessage = inAction.payload.message;
            return { ... inState, ...modalsNode };
        }
        case SET_IS_ADMIN : {
            const modalsNode = { ...inState };
            modalsNode.isAdmin = inAction.payload.isAdmin;
            return { ... inState, ...modalsNode };
        }
        case SHOW_HIDE_MODAL : {
            const modalsNode = { ...inState };
            modalsNode[`${inAction.payload.modalName}Visible`] =
            inAction.payload.visible;
            return { ... inState, ...modalsNode };
        }
        default : { return inState; }
    }
};

const gameDataReducer = function(inState = initialState, inAction) {
    switch (inAction.type) {
        case SET_GAME_DATA : {
            return { ...inState, ...inAction.payload.gameData };
        }
        default : { return inState; }
    }
};

const questionReducer = function(inState = initialState, inAction) {
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

const leaderboardReducer = function(inState = initialState, inAction) {
    switch (inAction.type) {
        case UPDATE_LEADERBOARD : {
            return { ...inState, ...inAction.payload.leaderboardData };
        }
        default : { return inState; }
    }
};

// Combining reducers
const store = configureStore({ 
    reducer:  {
        leaderboard : leaderboardReducer,
        question : questionReducer,
        modals : modalsReducer,
        playerInfo : playerInfoReducer,
        gameData : gameDataReducer
    }
})

// Export store
export default store;

*/