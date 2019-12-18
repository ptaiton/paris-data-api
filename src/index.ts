import * as express from 'express'
import * as cors from 'cors'
import * as busboy from 'connect-busboy'
import routes from './routes'

const app = express()

app.use(busboy())
app.use(cors())

routes(app)

app.listen(5000, () => {
  console.log('Example app listening on port 5000!')
})
