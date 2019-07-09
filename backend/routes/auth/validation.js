const jwt=require('jsonwebtoken');
auth=(req,res,next)=>{
  const token=req.header('x-auth-token');
  if(!token)
  {
      return res.status(401).json({
          message:'no token is provided'
      });
  }
  try 
  {
      const decoded=jwt.verify(token,"Jackward");
      req.email=decoded;
      next();
  }
  catch(err)
  {
      res.status(400).json({
          message:'Token is not valid'
      });
  }
}
module.exports=auth;