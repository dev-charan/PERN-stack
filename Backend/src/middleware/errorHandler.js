export const errorHanling = (err, req, res, next)=>{
    console.log(err.stack)
    res.send(500).json({
        status:500,
        message:'something went wrong',
        error: err.message
    })
}