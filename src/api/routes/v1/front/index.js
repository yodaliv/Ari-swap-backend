const express = require('express')
const authRoutes = require('./auth.route')
const categoryRoutes = require('./category.route')
const nftsRoutes = require('./nfts.route')
const offerRoutes = require('./offer.route')
const bidRoutes = require('./bid.route')
const usersRoutes = require('./users.route')
const auctionsRoutes = require('./auctions.route')
const collectionRoutes = require('./collection.route')
const settingsRoutes = require('./settings.route')
const faqRoutes = require('./faq.route')
const contactRoutes = require('./contact.route')
const nftTokenRoutes=require('./nftTokens.route')
const fixedPriceTokens=require('./fixedPriceTokens.route')
const router = express.Router()
/**
 * GET v1/status
 */
router.use('/auth', authRoutes)
router.use('/category', categoryRoutes)
router.use('/nfts', nftsRoutes)
router.use('/offer', offerRoutes)
router.use('/bid', bidRoutes)
router.use('/users', usersRoutes)
router.use('/auctions', auctionsRoutes)
router.use('/collection', collectionRoutes)
router.use('/settings', settingsRoutes)
router.use('/faq', faqRoutes)
router.use('/contact', contactRoutes)
router.use('/nftTokens', nftTokenRoutes)
router.use('/nftFixedTokens', fixedPriceTokens)

module.exports = router