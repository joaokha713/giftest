import homeSaga from 'modules/Home/redux/sagas';
import quizSaga from 'modules/Quiz/redux/sagas';
import resultSaga from 'modules/Result/redux/sagas';

export default function* root() {
  yield []
    .concat(homeSaga)
    .concat(quizSaga)
    .concat(resultSaga);
}
