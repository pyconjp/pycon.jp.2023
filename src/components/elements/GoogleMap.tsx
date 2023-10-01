type Props = {
    url: string;
    width: string;
    height: string;
}
const GMap = ({url, width, height}:Props) => {
    return (
      <iframe
      src={url}
      width={width}
      height={height}
      allowFullScreen={true}
      loading={"lazy"}
      ></iframe>
    );
}

export default GMap;