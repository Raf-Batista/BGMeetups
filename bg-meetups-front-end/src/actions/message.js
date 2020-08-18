import * as types from "../constants/message";

export const sentMessageRequest = () => ({
  type: types.SENT_MESSAGE_REQUEST,
});

export const sentMessageSuccess = (sentMessage) => ({
  type: types.SENT_MESSAGE_SUCCESS,
  payload: sentMessage,
});

export const sentMessageFailure = (error) => ({
  type: types.SENT_MESSAGE_FAILURE,
  payload: error,
});

// export const receivedMessageRequest = () => ({
//   type: types.RECEIVED_MESSAGE_REQUEST,
// });

export const receivedMessageSuccess = (receivedMessage) => ({
  type: types.RECEIVED_MESSAGE_SUCCESS,
  payload: receivedMessage,
});

// export const receivedMessageFailure = (error) => ({
//   type: types.RECEIVED_MESSAGE_FAILURE,
//   payload: error,
// });
