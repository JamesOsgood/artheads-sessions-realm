
exports = function() 
{
  const mongodb = context.services.get("mongodb-atlas");
  const sessions = mongodb.db("artheads_sessions").collection("sessions");
  return sessions.deleteMany({});
};