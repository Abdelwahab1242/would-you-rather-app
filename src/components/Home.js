import React from "react";
import { Tab } from "semantic-ui-react";
import UserCard from "./UserCard";
import { connect } from "react-redux";
import QuestionResult from "./QuestionResult";
import QuestionItem from "./QuestionItem";

class Home extends React.Component {
  render() {
    const panes = [
      {
        menuItem: "Unanswered Questions",
        render: () => (
          <Tab.Pane>
            {this.props.unansweredQuestions
              .sort((one, two) => two.timestamp - one.timestamp)
              .map((q) => (
                <UserCard key={q.id} imgURL={q.imgURL} name={q.name}>
                  <QuestionItem
                    optionOne={q.optionOne}
                    optionTwo={q.optionTwo}
                    qid={q.id}
                  />
                </UserCard>
              ))}
          </Tab.Pane>
        ),
      },
      {
        menuItem: "Answered Questions",
        render: () => (
          <Tab.Pane>
            {this.props.answeredQuestions
              .sort((one, two) => two.timestamp - one.timestamp)
              .map((q) => (
                <UserCard key={q.id} imgURL={q.imgURL} name={q.name}>
                  <QuestionResult
                    optionOne={q.optionOne}
                    optionTwo={q.optionTwo}
                  />
                </UserCard>
              ))}
          </Tab.Pane>
        ),
      },
    ];
    return (
      <div>
        <div style={{ margin: "5rem" }}>
          <Tab panes={panes} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authUser, questions, users }) => {
  let answeredQuestionsIds = Object.keys(users[authUser].answers);
  let allQuestions = Object.entries(questions).map((q) => q[1]);

  let answeredQuestions = allQuestions
    .filter((question) => {
      return answeredQuestionsIds.includes(question.id);
    })
    .map((q) =>
      Object.defineProperty(q, "imgURL", {
        value: users[q.author].avatarURL,
        writable: false,
      })
    )
    .map((q) =>
      Object.defineProperty(q, "name", {
        value: users[q.author].name,
        writable: false,
      })
    );

  let unansweredQuestions = allQuestions
    .filter((question) => {
      return !answeredQuestionsIds.includes(question.id);
    })
    .map((q) =>
      Object.defineProperty(q, "imgURL", {
        value: users[q.author].avatarURL,
        writable: false,
      })
    )
    .map((q) =>
      Object.defineProperty(q, "name", {
        value: users[q.author].name,
        writable: false,
      })
    );

  return {
    answeredQuestions,
    unansweredQuestions,
  };
};

export default connect(mapStateToProps)(Home);
