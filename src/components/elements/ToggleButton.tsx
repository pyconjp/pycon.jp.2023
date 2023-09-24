import cc from "classcat";
import {Day} from "@/types/timetable";

type Props = {
  selected: Day,
  onClick: (value: Day) => void,
};

const ACTIVE = 'bg-secondary-600 text-alt-white';
const INACTIVE = 'bg-secondary-200 text-alt-white';
const BUTTONS: { label: string, value: Day }[] = [{label: 'Day1', value: 'day1'}, {label: 'Day2', value: 'day2'}];

const ToggleButton = ({selected, onClick}: Props) => (
    <div className='flex lg:gap-6 gap-2 w-10/12 mx-auto text-2xl mb-4'>
      {
        BUTTONS.map(
          ({label, value}, index) => (
            <button
              key={index}
              className={cc({
                'rounded-2xl flex-1 py-2 shadow': true,
                [ACTIVE]: selected === value,
                [INACTIVE]: selected !== value
              })}
              onClick={() => onClick(value)}>
              {label}
            </button>
          )
        )
      }
    </div>
  )
;

export default ToggleButton;