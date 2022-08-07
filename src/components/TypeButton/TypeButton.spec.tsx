import { render } from '@testing-library/react';
import { TypeButton } from '.';
import { typesMock } from '../../tests/__mocks__';

describe('TypeButton Component', () => {
  it('should render correctly', () => {
    const { getByText } = render(<TypeButton types={typesMock} />);
    const TypeButtonComponent = getByText('Get a type');

    expect(TypeButtonComponent).toBeInTheDocument();
  });
});
