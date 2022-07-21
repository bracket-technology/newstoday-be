const jwt = require('jsonwebtoken');
const crypto = require("crypto-js")
const CryptoJS = require("crypto-js");
const Auth = require('../models/auth')
const { SendEmail } = require('../helpers/sendEmail');

randomString = (length) => {
  let result = ''
  const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}
module.exports = {
  register: async (req, res) => {
    try {
      let { email, password, phone, role, username, code } = req.body
      code = randomString(20)
      const userImage = 'https://divedigital.id/wp-content/uploads/2021/10/1-min.png'
      if (role) {
        return res.status(404).json({ success: false, message: "Can't input role" })
      }
      if (!email || !password || !phone) {
        return res.status(404).json({ success: false, message: "Fields must be filled" })
      }
      if (password.length < 8) {
        return res.status(404).json({ success: false, message: "Password must be more than 8 characters" })
      }
      const sendemail = await SendEmail(email, code)
      if (sendemail) {
        const result = await Auth.register(email, phone, password, code, userImage)
        return res.status(201).json({ success: true, message: 'Successfully Register, Check your email to verify your account!', data: result })
      }
      else {
        return res.status(500).json({ success: false, message: 'Error!, email not sent' })
      }

    } catch (error) {
      return res.status(500).json(error.message)
    }
  },
  verify: async (req, res) => {
    try {
      const { email, code } = req.query
      const checkEmail = await Auth.getUserByEmail(email)
      if (checkEmail.length == 0) {
        return res.status(404).json({ success: false, message: 'Email not found' })
      }
      // console.log(code)
      if (checkEmail[0].code != code) {
        return res.status(400).json({ success: false, message: 'Wrong activation url!' })
      }
      const result = await Auth.verify(email)
      return res.status(200).json({ data: result })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body
      if (!email || !password) {
        return res.status(404).json({ success: false, message: "Fields must be filled" })
      }
      const result = await Auth.login(email, password)
      if (result.length < 1) {
        return res.status(404).json({ success: false, message: 'Wrong Email / Password' })
      }
      // console.log(result)
      const hash = CryptoJS.AES.decrypt(result[0].password, process.env.SECRET_KEY_CRYPT).toString(CryptoJS.enc.Utf8)
      if (password !== hash) {
        return res.status(404).json({ success: false, message: 'Wrong Email / Password' })
      }
      const token = jwt.sign({ user_id: result[0].userId, role: result[0].role, email: result[0].email }, process.env.SECRET_KEY_JWT, {
        expiresIn: '1 day'
      })
      return res.status(200).json({
        success: true,
        message: 'Success login', data: {
          user_id: result[0].userId,
          token,
          photo: result[0].userImage,
          role: result[0].role,
          email: result[0].email
        }
      })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  },

}