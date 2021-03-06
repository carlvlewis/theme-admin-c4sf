/**
 *  Exports
 */

module.exports = {
  method: 'get',
  endpoint: '/users',
  middleware: [],
  controller: getUsers
}

/**
 *  Controller
 */

function getUsers (req, res) {
  var Users = req.models.Users
  Users.find({}, function (err, foundUsers) {
    if (err) console.error(err)
    res.render(res.theme.admin + '/views/users/index', {
      view: 'user-list',
      title: 'Users',
      brigade: res.locals.brigade,
      users: foundUsers
    })
  })
}
