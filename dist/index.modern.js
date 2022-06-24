import { gql } from '@apollo/client';
import React from 'react';

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var _templateObject;
var ADD_MESSAGE = gql(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  mutation AddMessage($message: String!, $name: String!) {\n    insert_messages(objects: { message: $message, name: $name }) {\n      returning {\n        id\n        message\n      }\n    }\n  }\n"])));

var _templateObject$1;
var GET_MESSAGES_SUBSCRIPTION = gql(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n  subscription MySubscription {\n    messages {\n      name\n      message\n      id\n      created_at\n    }\n  }\n"])));

var Input = function Input(_ref) {
  var setInput = _ref.setInput,
      input = _ref.input,
      loading = _ref.loading,
      handleSubmit = _ref.handleSubmit;

  var handleKeyPress = function handleKeyPress(e) {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative flex"
  }, /*#__PURE__*/React.createElement("input", {
    value: input,
    onKeyDown: handleKeyPress,
    onChange: function onChange(e) {
      return setInput(e.target.value);
    },
    type: "text",
    placeholder: "Tulis pesan disini",
    className: "w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute right-0 items-center inset-y-0"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleSubmit,
    type: "button",
    className: "inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
  }, loading ? /*#__PURE__*/React.createElement("span", {
    className: "font-bold"
  }, "Sending") : /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "font-bold"
  }, "Send"), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    className: "h-6 w-6 ml-2 transform rotate-90"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
  })))))));
};

var ListItem = function ListItem(_ref) {
  var user = _ref.user,
      data = _ref.data;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col" + (user === data.name && "items-end justify-end ")
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-4 py-2 rounded-lg bg-gray-30 max-w-fit my-2 " + (user === data.name ? ' bg-blue-600 text-white rounded-br-none' : 'text-gray-600 bg-gray-300 rounded-bl-none')
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs"
  }, data.name, " "), /*#__PURE__*/React.createElement("h3", {
    className: "text-md",
    style: {
      wordWrap: 'break-word'
    }
  }, data.message)));
};

export { ADD_MESSAGE, GET_MESSAGES_SUBSCRIPTION, Input as InputMessage, ListItem };
//# sourceMappingURL=index.modern.js.map
