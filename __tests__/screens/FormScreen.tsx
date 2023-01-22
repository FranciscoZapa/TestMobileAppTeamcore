import React from 'react';
import {useSelector} from 'react-redux';
import {NativeBaseProvider} from 'native-base';
import renderer from 'react-test-renderer';
import {theme} from '../../src/styles/Theme';
import {FormScreen} from '../../src/screens/FormScreen';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('Answer', () => {
  it('should render the text of the answer', () => {
    (useSelector as jest.Mock).mockReturnValue({
      form: {
        questions: [
          {question_id: '1', question: 'Question 1'},
          {question_id: '2', question: 'Question 2'},
        ],
        answers: [],
        formIsFull: false,
      },
    });
    const tree = renderer
      .create(
        <NativeBaseProvider theme={theme}>
          <FormScreen navigation={{}} />
        </NativeBaseProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
