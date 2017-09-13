
/**
 * GET /challange/main
 * Active main challenge.
 */
exports.getMain = (req, res) => {
  res.render('activechallenge', {
    title: 'Active Challenge'
  });
};
