
exports = async function(session_start, session_end, session_type) 
{
  const mongodb = context.services.get("mongodb-atlas")
  const sessions = mongodb.db("artheads_sessions").collection("sessions")
  var res = await sessions.insertOne({'session_start' : session_start, 'session_end' : session_end, 'session_type' : session_type})
  var ret = { 'session_id' : res.insertedId }
  return ret
};