exports.handler = function(context, event, callback) {
  let twiml = new Twilio.twiml.VoiceResponse();
  
  const gather = twiml.gather({
    numDigits: 1,
    timeout: 5,
    action: '/enqueue-call'
  });
  
  gather.say({
    language: 'es'
  }, 'Para Español oprime el uno.');
  
  gather.say({
    language: 'en'
  }, 'For English, please hold or press two.');
  
  callback(null, twiml);
};
