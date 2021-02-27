import { render, screen } from '@testing-library/react';

import InputField from './InputField';

describe('InputField', () => {
  it('should render with default value', async () => {
    render(
      <InputField
        id="email"
        name="email"
        label="Your email"
        placeholder="Enter email here"
        defaultValue="example@mail.com"
        error={false}
      />
    );

    const input = (await screen.findByLabelText(
      'Your email'
    )) as HTMLInputElement;
    expect(input.value).toBe('example@mail.com');
  });
});
