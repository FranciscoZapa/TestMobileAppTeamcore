import React from 'react';
import {useSelector} from 'react-redux';
import {NativeBaseProvider} from 'native-base';
import renderer from 'react-test-renderer';
import {theme} from '../../src/styles/Theme';
import {Answer} from '../../src/components/Answer';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('Answer', () => {
  it('should render the text of the answer', () => {
    (useSelector as jest.Mock).mockReturnValue({
      form: {
        answers: [{question_id: '1', answer_id: '1'}],
      },
      answers: [{question_id: '1', answer_id: '1'}],
    });
    const tree = renderer
      .create(
        <NativeBaseProvider theme={theme}>
          <Answer answer="Answer 1" answer_id="1" question_id="1" />
        </NativeBaseProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
