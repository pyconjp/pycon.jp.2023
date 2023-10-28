import {lives} from "@/data/lives";
import {useRouter} from "next/router";
import {useEffect} from "react";

const Live = () => {
  const router = useRouter();
  useEffect(() => {
    router.push(`/live/${lives[1].options[0].value}`).then();
  }, [router]);

  return (
    <>
    </>
  )
}

export default Live;