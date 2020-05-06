import { Router } from 'express'
import MovieController from './app/controllers/movieController'
const routes = Router()

routes.get('/', (req, res) => {
	return res.status(200).json({ server: true })
})

routes.post('/movie', MovieController.store)
routes.get('/movies', MovieController.index)
routes.post('/movies', MovieController.show)
routes.post('/updateMovie', MovieController.update)
routes.post('/deleteMovie', MovieController.delete)

export default routes
