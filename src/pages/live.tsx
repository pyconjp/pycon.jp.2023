import {lives} from "@/data/lives";

const Live = () => {
  return (
    <>
    </>
  )
}

export const getServerSideProps = async () => {
  return {
    redirect: {
      permanent: true,
      destination: `/live/${lives[0].options[0].value}`,
    },
  }
}

export default Live;