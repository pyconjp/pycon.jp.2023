import {lives} from "@/data/lives";
import {useRouter} from "next/router";

const Live = async () => {
  const router = useRouter();
  await router.push(`/live/${lives[0].options[0].value}`);

  return (
    <>
    </>
  )
}

export default Live;