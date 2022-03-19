import './preview.scss';
import picture from '../../assets/images/unicorn.png';

type PreviewProps = {
  isFlipped: boolean;
  idx: number;
  reason: string;
};
const Preview = (props: PreviewProps) => {
  let today = new Date();
  let day = today.getDate();

  const { isFlipped, idx, reason } = props;
  console.log(isFlipped);
  return (
    <div className={'container'}>
      {isFlipped && day !== idx && true ? (
        <div>{reason}</div>
      ) : (
        <>
          <div className='idx'>{idx}</div>

          <img className='preview' src={picture} alt='preview img'></img>
        </>
      )}
    </div>
  );
};

export default Preview;
