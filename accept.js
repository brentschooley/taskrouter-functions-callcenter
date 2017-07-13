exports.handler = function(context, event, callback) {
  const client = context.getTwilioClient();
  
  client.taskrouter.v1
  .workspaces(context.WORKSPACE_SID)
  .tasks("** your task SID **")
  .reservations("** your reservation SID **")
  .update({
    reservationStatus: 'accepted'
  }).then((reservation) => {
    callback(null, `${reservation.workerName} has accepted the reservation.`);
  });
};
