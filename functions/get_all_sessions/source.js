
exports = function() 
{
  const mongodb = context.services.get("mongodb-atlas");
  const sessions = mongodb.db("artheads_sessions").collection("sessions");
  var filter = {}
  return sessions.find(filter)
};