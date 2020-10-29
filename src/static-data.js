const shortid = require("shortid"); // shortid.generate() returns a unique "short" id
const txtgen = require("txtgen"); // txtgen.sentence() returns random "readable" sentences
const faker = require("faker"); // faker is used for generating random fake data.
// const _ = require("lodash"); // lodash is a utility lib for Javascript
// const store = require("./store").store; // app's redux store
const DateGenerator = require("random-date-generator");

// just an example of how the state object is structured
const state = {
  users: generateUsers(randomNumber(2, 15)),
  chats: [], // empty array. To be filled in just below shortly
  typing: "",
  currentChatId: null, // TODO: Use this property to keep track of what chat I am currently generating messages for. Instead of the functional programming approach used. See generateMessages function definition
  activeUser: {
    name: faker.name.findName(),
    email: faker.internet.email(),
    profilePic: faker.internet.avatar(),
    status: txtgen.sentence(),
    userId: shortid.generate(),
  },
};

// generate chats with the list of users
state.chats = generateChats(state.users);

// test to see everything is working
console.log(state);
console.log("members of first chat", state.chats[0].members);

/**
 * @returns {Object} - a new user object
 */
function generateUser() {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    profilePic: faker.internet.avatar(),
    status: txtgen.sentence(),
    userId: shortid.generate(),
  };
}
/**
 * @returns {Object} - a new message object
 */
function generateChat({ userId }) {
  const chat = {
    chatId: shortid.generate(),
    text: txtgen.sentence(),
    members: [userId, state.activeUser.userId],
    messages: null, // to be filled in in the line below
  };
  // the chat this reference is passed in to be used to access the members property when generating a message
  // the chat is passed into generateMessages because we need the chat members to assign sender to each message
  chat.messages = generateMessages(randomNumber(2, 15), chat);
  return chat;
}
/**
 *
 * @param {Number} numberOfUsers - the number of users to be generated
 * @param {Function} generateUser - function that generates a single user
 * @returns {Array} - an array of user objects with length n = numberOfUsers
 */
function generateUsers(numberOfUsers) {
  return Array.from({ length: numberOfUsers }, () => generateUser());
}

function generateChats(users) {
  // for each contact generate a chat with that contact
  return Array.from(users, generateChat);
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateMessages(numberOfMessages, chat) {
  const withChat = (ch) => () => generateMessage(ch); // a higher order function that keeps track of the chat whose messages are to be returned
  return Array.from({ length: numberOfMessages }, withChat(chat));
}

function generateMessage(chat) {
  const startDate = new Date(2020, 9, 1); // 1st October. The months are zero indexed
  const endDate = new Date();
  // console.log("value of this inside generateMessage map function", chat);
  return {
    messageId: shortid.generate(),
    sender: chat.members[randomNumber(0, 2)], // randomly choose the sender between the two chat members. The second item in my randomizing function is not inclusive. It uses Math.floor in the definition
    text: txtgen.sentence(),
    date: DateGenerator.getRandomDateInRange(startDate, endDate), // random date in range
  };
}

export function getUsers() {
  // utilize my demo state object written in the upper part of this file to keep track of users
  state.users = generateUsers(randomNumber(5, 40));
  return state.users;
}

export function getChats() {
  state.activeUser = generateUser();
  state.chats = generateChats(state.users);
  return state.chats;
}

export function getActiveUser() {
  return state.activeUser;
}
