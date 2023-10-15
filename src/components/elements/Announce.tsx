import AnnounceCard from "@/components/elements/AnnounceCard";
import {MegaphoneIcon} from "@heroicons/react/20/solid";

const Announce = () => {
  return <div className='w-full flex flex-col gap-4 my-6'>
    <AnnounceCard announce={{
      icon: <MegaphoneIcon className='h-6 w-6'/>,
      title_key: "NURSERY.TITLE",
      description_key: "NURSERY.DESCRIPTION",
      url: "https://drive.google.com/file/d/1EuyRHpGE1zOiePDf5yu0RrjwI-lF9N0w/view?usp=sharing",
    }}/>
    <AnnounceCard announce={{
      icon: <MegaphoneIcon className='h-6 w-6'/>,
      title_key: "ONE_DAY_STAFF.TITLE",
      description_key: "ONE_DAY_STAFF.DESCRIPTION",
      url: "https://pyconjp-staff.connpass.com/event/299292/",
    }}/>
  </div>;
}

export default Announce;