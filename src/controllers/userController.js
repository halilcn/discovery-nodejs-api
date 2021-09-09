import User from '../models/user'
import FamilyUser from '../models/familyUser'
import createError from 'http-errors'

/**
 * Get all users
 */
exports.index = async (req, res, next) => {
  try {
    //Todo:Dahil olduğu aileleride response etme? (İç içe relationships)
    const users = await User.find()
    res.json(users)
  } catch (err) {
    next(err)
  }
}

/**
 * Save user
 */
exports.store = async (req, res, next) => {
  try {
    await new User(req.body).save()
    res.sendStatus(201)
  } catch (err) {
    next(err)
  }
}

/**
 * Get user
 */
exports.show = async (req, res, next) => {
  try {
    //Todo:Dahil olduğu aileyi response etme? (İç içe relationships)
    const user = await User.findById(req.params.userId)
    if (!user) return next(new createError(204, 'User not found'))
    res.json(user)
  } catch (err) {
    next(err)
  }
}

/**
 * Update user
 */
exports.update = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.userId, req.body)
    if (!user) return next(new createError(404, 'User not found'))
    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
}

/**
 * Delete user
 */
exports.destroy = async (req, res, next) => {
  try {
    const { userId } = req.params
    await FamilyUser.remove({ user: userId })
    const user = await User.findByIdAndDelete(userId)
    if (!user) return next(new createError(404, 'User not found'))
    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
}
