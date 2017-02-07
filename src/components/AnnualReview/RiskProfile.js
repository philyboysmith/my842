import React from 'react';
import Reactable from 'reactable';

function RiskProfile({ data }) {
  const Table = Reactable.Table;
  const Tr = Reactable.Tr;
  const Td = Reactable.Td;
  const Thead = Reactable.Thead;
  const Th = Reactable.Th;

  return (
    <div>
      <h1>Risk Profile</h1>
      {data &&
        data.map((contact, i) =>
          <div key={i}>
            <h3>{contact.contact_name}</h3>
            <table className="table">
              <tbody>
                {contact.questions.map((question, j) =>
                  <tr key={i}>
                    <td width="400">
                      {j + 1}. {question.body}
                    </td>
                    <td>
                      <ol>
                        {question.choices.map((choice, choiceI) =>
                          <li key={choiceI}>
                            <label htmlFor={choice}>
                              <input type="radio" name={`question[${i}]`} value={choiceI} /> {choiceI + 1}. {choice.body}
                            </label>
                          </li>,
                        )}
                      </ol>
                    </td>
                  </tr>,
                   )}
              </tbody>
            </table>
          </div>,
      )}
    </div>
  );
}

RiskProfile.propTypes = {
  data: React.PropTypes.object.isRequired,
};

export default RiskProfile;
