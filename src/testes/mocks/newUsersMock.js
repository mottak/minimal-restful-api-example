const validNewUser = {
  "displayName": "Zé",
  "email": "ze@gmail.com",
  "photoURL": "UrlImage",
  "password": "123456"
}

const validUser = {
  "_id": 1,
  "displayName": "Zé",
  "email": "ze@gmail.com",
  "photoURL": "UrlImage",
  "password": "123456"
}

const invalidNameNewUser = {
  "displayName": "",
  "email": "ze@gmail.com",
  "photoURL": "UrlImage",
  "password": "123456"
}

const invalidNoNameNewUser = {
  "email": "ze@gmail.com",
  "photoURL": "UrlImage",
  "password": "123456"
}

const invalidemailNewUser = {
  "displayName": "Zé",
  "email": "zegmail.com",
  "photoURL": "UrlImage",
  "password": "123456"
}

const invalidNoEmailNewUser = {
  "displayName": "Zé",
  "photoURL": "UrlImage",
  "password": "123456"
}

const invaliphotoURLNewUser = {
  "displayName": "Zé",
  "email": "ze@gmail.com",
  "photoURL": "",
  "password": "123456"
}

const invalidNoPhotURLNewUser = {
  "displayName": "Zé",
  "email": "ze@gmail.com",
  "password": "123456"
}

const invalidNumberPasswordNewUser = {
  "displayName": "Zé",
  "email": "ze@gmail.com",
  "photoURL": "UrlImage",
  "password": 123
}

const invalidLenghtPasswordNewUser = {
  "displayName": "Zé",
  "email": "ze@gmail.com",
  "photoURL": "UrlImage",
  "password": "123"
}

const invaliNoPasswordNewUser = {
  "displayName": "Zé",
  "email": "ze@gmail.com",
  "photoURL": "UrlImage",

}

module.exports = {
  validUser,
  validNewUser,
  invalidNameNewUser,
  invalidNoNameNewUser,
  invalidemailNewUser,
  invalidNoEmailNewUser,
  invaliphotoURLNewUser,
  invalidNoPhotURLNewUser,
  invalidNumberPasswordNewUser,
  invaliNoPasswordNewUser,
  invalidLenghtPasswordNewUser
}