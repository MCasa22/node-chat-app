const expect = require('expect');

const {generateMessage} = require('./message.js');

describe('generateMessage', () => {

  it('should generate correct message object', () => {
    let from = 'andrew';
    let text = 'test text';
    let message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({
      from,
      text
    });
  });
});
