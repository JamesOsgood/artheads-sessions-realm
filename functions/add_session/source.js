
exports = function(session_start, session_end, session_type) 
{
  const mongodb = context.services.get("mongodb-atlas");
  const sessions = mongodb.db("artheads_sessions").collection("sessions");
  return sessions.insertOne({'session_start' : session_start, 'session_end' : session_end, 'session_type' : session_type})
};