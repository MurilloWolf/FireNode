import db from '../../db/firestore'

class MovieController {
	async store(req, res): Promise<Response> {
		try {
			const { title, synopsis, year, category } = req.body
			const movie = {
				title,
				synopsis,
				category,
				year,
			}

			const result = await db.collection('movies').add(movie)
			return res.status(201).json({ message: 'Filme cadastrado com sucesso!' })
		} catch (err) {
			return res.status(500).json({ error: err })
		}
	}

	async index(req, res): Promise<Response> {
		try {
			const result = await db.collection('movies').get()
			if (!result.empty) {
				let movies = result.docs.map((movie) => movie.data())
				const data = {
					movies,
				}
				return res.status(200).json(data)
			}

			return res.status(404).json({ message: 'Não foi encontrado nenhum filme' })
		} catch (err) {
			return res.status(500).json({ error: err })
		}
	}
	/* Considerando que não vão haver filmes com nomes iguais
			Title = Primary Key
	*/
	async update(req, res): Promise<Response> {
		try {
			const { oldTitle, title, synopsis, year, category } = req.body
			const movie = {
				title,
				synopsis,
				category,
				year,
			}
			const result = await db.collection('movies').where('title', '==', oldTitle).get()
			if (!result.empty) {
				const documentId = result.docs[0].id
				const updatedDoc = await db.collection('movies').doc(documentId).update(movie)

				return res.status(200).json(updatedDoc)
			}

			return res.status(404).json({ message: 'Não foi encontrado nenhum filme' })
		} catch (err) {
			return res.status(500).json({ error: err })
		}
	}

	async delete(req, res): Promise<Response> {
		try {
			const { title, year } = req.body

			const result = await db.collection('movies').where('title', '==', title).where('year', '==', year).get()
			if (!result.empty) {
				const documentId = result.docs[0].id
				const updatedDoc = await db.collection('movies').doc(documentId).delete()

				return res.status(200).json(updatedDoc)
			}

			return res.status(404).json({ message: 'Não foi encontrado nenhum filme' })
		} catch (err) {
			return res.status(500).json({ error: err })
		}
	}

	/**Filtragem de filmes por tags  */
	async show(req, res): Promise<Response> {
		try {
			const { category } = req.body

			const result = await db.collection('movies').where('category', 'array-contains-any', category).get()

			if (!result.empty) {
				let movies = result.docs.map((movie) => movie.data())
				const data = {
					movies,
				}
				return res.status(200).json(data)
			}

			return res.status(404).json({ message: 'Não foi encontrado nenhum filme' })
		} catch (err) {
			return res.status(500).json({ error: err })
		}
	}
}

export default new MovieController()
