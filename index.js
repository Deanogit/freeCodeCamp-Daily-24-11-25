// Message Validator
// Given a message string and a validation string, determine if the message is valid.

// A message is valid if each word in the message starts with the corresponding letter in the validation string, in order.
// Letters are case-insensitive.
// Words in the message are separated by single spaces.

// split message into array
// look through array
// push word[0] into new array
// loop through and compare
//

function isValidMessage(message, validator) {
  console.log(message, validator);
  // returns "hello world hw"
  const messageArray = message.split(' ');
  console.log(messageArray);
  // get first letters
  const first = messageArray.map((x) => x[0].toLowerCase());
  const match = first.join('');
  console.log(match);
  return match === validator.toLowerCase();

  //return message;
}
