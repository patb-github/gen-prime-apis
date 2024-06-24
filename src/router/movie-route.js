import express from 'express';
import db from '../prisma-client.js'

const router = express.Router();

router.get('/', async (req, res, next) => {
    // find users in db
    const movies = await db.movie.findMany();
    return res.json(movies);
});

router.get("/:id", async (req, res, next) => {
    // Step 1: extract path parameters from request object
    const params = req.params;
    const movieId = params.id;

    // Step 2: find user in db
    const movie = await db.movie.findUnique({where : {id : +movieId}});
    
    // Step 3: check if movie is in db
    // if not found
    if (!movie) return res.status(404).json({message: 'movie not found'});
    // if found
    return res.json(movie);
})

router.post("/", async (req, res, next) => {
    
    const { title, description, image, releaseDate, genre, rating, duration } = req.body;

    // Step 1: validate
    if (!title || !description || !image || !releaseDate || !genre || !rating || !duration) {
        res.status(400).json({ message: 'All fields required' });
    }

    // Step 2: create new ser
    const newMovie = await db.user.create({
        data: {
            title: title,
            description: description,
            image: image,
            releaseDate: releaseDate,
            genre: genre,
            rating: rating,
            duration: duration
        }
    })
    res.status(201).json(newMovie);
});

export default router;