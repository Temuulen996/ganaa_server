const errorHandler = (err, req, res, next) => {
  console.log(err.stack.green);
  const error = { ...err };

  if (error.name === "CastError") {
    error.message = "Энэ ID буруу бүтэцтэй байна.";
    error.statusCode = 400;
  }
  if (error.code === 11000) {
    error.message = "талбарын утгыг давхардуулж өгч болохгүй";
    error.statusCode = 400;
  }
  res.status(error.statusCode || 500).json({
    success: false,
    error,
    code: error.statusCode,
  });
};
module.exports = errorHandler;
