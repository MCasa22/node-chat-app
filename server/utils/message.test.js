const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message.js');

describe('generateMessage', () => {

  it('should generate correct message object', () => {
    let from = 'Andrew';
    let text = 'test text';
    let message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({
      from,
      text
    });
  });
});

describe('generateLocationMessage', () => {

  it('should generate correct location object', () => {
    let latitude = '45.444604399999996';
    let longitude = '9.112926999999999';
    let from = 'Admin'

    let location = generateLocationMessage(from, latitude, longitude);

    expect(location.createdAt).toBeA('number');
    expect(location).toInclude({
      from,
      url: `https://google.com/maps?q=${latitude},${longitude}`
    });
  });
});
