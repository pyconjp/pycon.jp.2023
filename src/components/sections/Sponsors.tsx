import SectionTitle from "../elements/SectionTitle";
import {Sponsor} from "@/types/sponsor";
import SponsorList from "@/components/organisms/SponsorList";

export default function SponsorsSection({rows = []}: {
  rows: Sponsor[]
}) {
  return (
    <div className='lg:py-[60px] py-20'>
      <SectionTitle title='Sponsor' subTitle='スポンサー'/>
      <SponsorList rows={rows}/>
    </div>
  )
}