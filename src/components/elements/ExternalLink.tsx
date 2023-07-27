type Props = {
  text: string,
  url: string,
}

const ExternalLink = ({text, url}: Props) => {
  return (
    <div className='flex justify-end'>
      <div>
        <a href={url} rel='noopener noreferrer' className='text-primary-500 border-b after:content-["→"]'
           target='_blank'>{text}</a>
      </div>
    </div>
  );
}

export default ExternalLink;