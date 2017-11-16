import React from 'react';
import './accordion.css'

class AccordionItem extends React.Component {
    constructor() {
      super();
      this.state = {
        active: false
      };
      this.toggle = this.toggle.bind(this);
    }
    toggle() {
      this.setState({
        active: !this.state.active,
        className: "active"
      });
    }
    render() {
      const activeClass = this.state.active ? "active" : "inactive";
      const question = this.props.details;
      return (
              <div className={activeClass} onClick={this.toggle}>
                <span className="summary">{question.summary}</span>
                <span className="folding-pannel answer">{question.answer1}</span>
                <span className={question.answer2 ? "folding-pannel answer" : "hidden"}>
                  {question.answer2}
                </span>
              </div>
      );
    }
  }
  
  class Accordion extends React.Component {
    constructor() {
      super();
      this.state = {
        questions: sampleQuestions,
      };
      this.renderQuestion = this.renderQuestion.bind(this);
    }
    renderQuestion(key) {
      return <AccordionItem key={key} index={key} details={this.state.questions[key]} />
    }
    render() {
      return(
        <div>
          <div className="accordion-container">{Object.keys(this.state.questions).map(this.renderQuestion)} </div>
        </div>    
      )
    }
  }
  const sampleQuestions = {
    question1: {summary:'Wallets', answer1:'Ottawa baby!!', answer2:'Hi From sajith'},
    question2: {summary:'Belts', answer1:'Coming Soon'},
    question3: {summary:'Jackets', answer1:'Coming Soon'},
    question4: {summary:'About US', answer1:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    question5: {summary:'Contact US', answer1:'Skim milk, which is water that\'s lying about being milk'}
  };
  
  export default Accordion;