exports.handler = function(context, event, callback) {
  let twiml = new Twilio.twiml.VoiceResponse();
  
  const digit = event.Digits;
  
  let language = 'en';
  if(digit == '1') {
    language = 'es'
  }
  
  twiml.enqueue({
    workflowSid: context.WORKFLOW_SID
  }).task({}, `{"selected_language":"${language}"}`);
  
  callback(null, twiml);
};
