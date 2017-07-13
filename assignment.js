exports.handler = function(context, event, callback) {
  console.log(event.ReservationSid);
  callback(null, {
    'instruction':'dequeue',
    'post_work_activity_sid':'** your activity SID **',
    'from':'** your call center Twilio phone number **'
  });
};
