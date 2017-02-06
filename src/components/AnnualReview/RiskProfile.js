import React from 'react';
import Reactable from 'reactable';

function RiskProfile({ data }) {


  const Table = Reactable.Table,
            Tr = Reactable.Tr,
            Td = Reactable.Td,
            Thead = Reactable.Thead,
            Th = Reactable.Th;

  return (
    <div>
      <h1>Risk Profile</h1>
      {data &&
            data.map((contact,i) =>
            	<div key={i}>
            		<h3>{contact.contact_name}</h3>
            		<table className="table">
            			<tbody>
            			{
            				contact.questions.map((question,i) =>
            					<tr key={i}>
            						<td width="400">
            							{i+1}. {question.body}
            						</td>
            						<td>
            							<ol>
            							{
            								question.choices.map((choice,choice_i) =>
            								<li key={choice_i}><label><input type="radio" name={'question[' + i + ']'} value={choice_i}/> {choice_i+1}. {choice.body}</label></li>
            							)}
        								</ol>
            						</td>
            					</tr>
            			)}
						</tbody>
            		</table>
            	</div>

		      
      )}

    </div>
  );
}

export default RiskProfile;
