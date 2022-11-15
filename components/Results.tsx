import Thumbnail from './Thumbnail';
import FlipMove from 'react-flip-move';

const Results = ({ results }) => {
  // Put props inside an object & then destruct it in the component to avoid TS error.
  // Bad practice. Need to come up with better approach to avoid error.
  const containerProps = {
    className:
      'px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:flex flex-wrap justify-center',
  };

  return (
    <FlipMove {...containerProps}>
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
};

export default Results;
