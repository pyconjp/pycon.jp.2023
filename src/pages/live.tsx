import {lives} from "@/data/lives";
import {useRouter} from "next/router";

const Live = () => {
  const router = useRouter();
  router.push(`/live/${lives[0].options[0].value}`).then();

  return (
    <>
    </>
  )
}

export default Live;