import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { replace, push } from 'connected-react-router';
import { mapStyles, bounceTransition } from './pageAnimations';
import {
  fetchQuestions, fetchCategories, nextQuiz, resetQuiz, updateScore,
} from './actions';
import { ROUTES } from './constant';
import { getQuestion, getLoadingState, getCategories } from './selectors';
import Loading from './components/screens/Loading';
import {
  End, Start, Questions, Categories,
} from './routes';
import './App.scss';


class App extends PureComponent {
  static renderComponents(Component, props) {
    return () => <Component {...props} />;
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.fetchCategories();
  }

  selectCategory = () => {
    const { actions } = this.props;
    actions.replace(ROUTES.categories);
  };

  gotoHome = () => {
    const { actions } = this.props;
    actions.replace(ROUTES.start);
  };

  gotoQuestion = () => {
    const { actions } = this.props;
    actions.push(ROUTES.question);
  };

  gotoCategories = () => {
    const { actions } = this.props;
    actions.replace(ROUTES.categories);
  };

  renderRoute(route, Component, props = {}) {
    const { loading } = this.props;
    if (loading) {
      return <Loading />;
    }
    return <Route path={route} exact render={App.renderComponents(Component, props)} />;
  }

  render() {
    const {
      categories, actions, question, score,
    } = this.props;
    return (
      <AnimatedSwitch
        mapStyles={mapStyles}
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        className="App"
      >
        {this.renderRoute(ROUTES.categories, Categories, {
          categories,
          handleClick: actions.fetchQuestions,
        })}
        {this.renderRoute(ROUTES.start, Start, { selectCategory: this.selectCategory })}
        {this.renderRoute(ROUTES.question, Questions, {
          ...question,
          getNextQuestion: actions.nextQuiz,
          time: 30,
          gotoCategories: this.gotoCategories,
          gotoHome: this.gotoHome,
          resetQuiz: actions.resetQuiz,
          updateScore: actions.updateScore,
        })}
        {this.renderRoute(ROUTES.end, End, {
          gotoCategories: this.gotoCategories,
          gotoHome: this.gotoHome,
          resetQuiz: actions.resetQuiz,
          score,
        })}
      </AnimatedSwitch>
    );
  }
}

function mapStateToProps(state) {
  const { router } = state;
  return {
    categories: getCategories(state),
    question: getQuestion(state),
    loading: getLoadingState(state),
    score: state.score,
    router,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        fetchQuestions,
        fetchCategories,
        replace,
        nextQuiz,
        resetQuiz,
        updateScore,
        push,
      },
      dispatch,
    ),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
