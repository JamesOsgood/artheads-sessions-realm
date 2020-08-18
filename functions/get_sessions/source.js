
exports = function(session_start, session_type, count) 
{
  const mongodb = context.services.get("mongodb-atlas");
  const sessions = mongodb.db("artheads_sessions").collection("sessions");
  var filter = {}
  filter['session_start'] = { '$gte' : session_start }
  filter['session_type'] = session_type
  return sessions.find(filter).limit(count)
};