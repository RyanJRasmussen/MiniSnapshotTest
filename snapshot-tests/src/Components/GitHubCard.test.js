import GitHubCard from "./GitHubCard"
import renderer from 'react-test-renderer'


test('renders github information card', () => {
    const tree = renderer.create(<GitHubCard/>).toJSON()
    expect(tree).toMatchSnapshot()
})
