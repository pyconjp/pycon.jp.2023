import {fetchOrderPositions, getSprints} from "@/utils/pretix";
import {SprintTopic} from "@/types/sprint";
import {GetStaticProps} from "next";

type Props = {
  sprints: SprintTopic[],
}

const Sprint = ({sprints}: Props) => {
  return (
    <></>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const orderPositions = await fetchOrderPositions();
  const sprints = getSprints(orderPositions);
  console.log(sprints);

  return {
    props: {
      sprints
    }
  }
}

export default Sprint;