
exports = function(session_date, session_type) 
{
  const mongodb = context.services.get("mongodb-atlas");
  const sessions = mongodb.db("artheads_sessions").collection("sessions");
  return sessions.insertOne({'session_date' : session_date, 'session_type' : session_type})
};