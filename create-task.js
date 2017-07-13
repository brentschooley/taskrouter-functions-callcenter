exports.handler = function(context, event, callback) {
  const client = context.getTwilioClient();
  
  client.taskrouter.v1
  .workspaces(context.WORKSPACE_SID)
  .tasks
  .create({
    workflowSid: context.WORKFLOW_SID,
    attributes: '{"selected_language":"es"}'
  }).then(task => {
    callback(null, `Created task with SID: ${task.sid}`);
  });
};
