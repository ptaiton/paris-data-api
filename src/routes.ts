import { Application } from 'express'
import { handleFileUpload } from './controllers/uploadController'

export default (app: Application) => {
  app.route('/upload').post(handleFileUpload)
}