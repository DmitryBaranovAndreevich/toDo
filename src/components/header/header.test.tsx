import renderer from 'react-test-renderer';
import Header from './index';

it('Header component is rendered without errors', () => {
  const header = renderer.create(<Header />).toJSON();
  expect(header).toMatchSnapshot();
});
