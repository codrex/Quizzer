import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { replace } from 'connected-react-router';
import { mapStyles, bounceTransition } from './pageAnimations';
import { fetchQuestions, fetchCategories, nextQuiz } from './actions';
import { ROUTES } from './constant';
import { getQuestion, getLoadingState, getCategories } from './selectors';
import Categories from './components/screens/Categories';
import Start from './components/screens/Start';
import Loading from './components/screens/Loading';
import Question from './components/screens/Question';
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

  renderRoute(route, Component, props = {}) {
    const { loading } = this.props;
    if (loading) {
      return <Loading />;
    }
    return <Route path={route} exact render={App.renderComponents(Component, props)} />;
  }

  render() {
    const { categories, actions, question } = this.props;
    console.log('question', question);
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
        {this.renderRoute(ROUTES.question, Question, {
          ...question,
          getNextQuestion: actions.nextQuiz,
          time: 30,
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
      },
      dispatch,
    ),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
