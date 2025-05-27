exports.errorHandler = (err, req, res, next) => {
  console.error("Erreur capturée :", err.message);
  res.status(err.status || 500).json({
    error: {
      message: err.message || "Erreur interne du serveur",
      status: err.status || 500,
    },
  });
};
