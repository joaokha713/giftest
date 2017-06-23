import _ from 'lodash';
import Quiz from '../models/quiz';
import errorResponse from '../utils/errorResponse';

// GET list
export function getQuizList(req, res) {
  const skip = (req.query && req.query.skip) || 0;
  const limit = (req.query && req.query.limit) || 10;

  Quiz.find()
    .sort('-created')
    .skip(skip)
    .limit(limit)
    .then((result) => {
      res.json({ result });
    })
    .catch((err) => {
      errorResponse(res, err);
    });
}

// GET one
export function getQuiz(req, res) {
  const { quiz } = req;
  res.json({ quiz });
}

// POST create
export function addQuiz(req, res) {
  const newQuiz = new Quiz(req.body);

  newQuiz.save()
  .then((quiz) => {
    res.json({ quiz });
  })
  .catch((err) => {
    errorResponse(res, err);
  });
}

// PUT update
export function updateQuiz(req, res) {
  const mergingValues = _.pick(req.body, 'question', 'titleImage', 'resultImage', 'localeData');
  Object.assign(req.quiz, mergingValues);
  req.quiz.save()
  .then((quiz) => {
    res.json({ quiz });
  })
  .catch((err) => {
    errorResponse(res, err);
  });
}

// DELETE delete
export function deleteQuiz(req, res) {
  req.quiz.remove()
  .then(() => {
    res.json({ success: true });
  })
  .catch((err) => {
    errorResponse(res, err);
  });
}

/**
 * Middleware to get quiz by id or slug
 */
export function getQuizMiddleware(req, res, next, _id) {
  return Quiz.findOne({
    $or: {
      _id,
      slug: _id,
    },
  })
  .then((quiz) => {
    req.quiz = quiz;
    return next;
  })
  .catch((err) => {
    errorResponse(res, err);
  });
}
