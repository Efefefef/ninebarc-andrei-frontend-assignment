import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { STEPS, RECOMMENDATIONS_MAPPING, FIRST_STEP, SECOND_STEP, THIRD_STEP } from './constants';

Object.entries(RECOMMENDATIONS_MAPPING).map(([answers, recommendation]) => (
  test(`Should click through ${answers} and recommend ${recommendation}`, async () => {
    const buttonIndexesToClick = answers.split('-').map(buttonIndex => buttonIndex - 1);
    render(<App />);
    await userEvent.type(screen.getByRole('textbox'), 'Test');
    userEvent.click(screen.getByRole('button'));
    await screen.findByText(STEPS[FIRST_STEP].question);
    userEvent.click(screen.getAllByRole('button')[buttonIndexesToClick[0]]);
    await screen.findByText(STEPS[SECOND_STEP].question);
    userEvent.click(screen.getAllByRole('button')[buttonIndexesToClick[1]]);
    await screen.findByText(STEPS[THIRD_STEP].question);
    userEvent.click(screen.getAllByRole('button')[buttonIndexesToClick[2]]);
    await screen.findByText(/We recommend you to get/);
    await screen.findByText(`${recommendation} ticket`);
  })
))

