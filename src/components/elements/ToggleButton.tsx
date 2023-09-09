import cc from "classcat";

type Props<T> = {
  buttons: { label: string, value: T }[],
  selected: T,
  onClick: (value: T) => void,
  variant: 'primary' | 'secondary',
};

const ACTIVE = {primary: 'bg-primary-600 text-alt-white', secondary: 'bg-secondary-600 text-alt-white'};
const INACTIVE = {primary: 'bg-primary-100 text-alt-black', secondary: 'bg-secondary-100 text-alt-black'};

const ToggleButton = <T, >({buttons, selected, onClick, variant}: Props<T>) => (
    <div className='flex lg:gap-6 gap-2 w-10/12 mx-auto text-2xl mb-4'>
      {
        buttons.map(
          ({label, value}, index) => (
            <button
              key={index}
              className={cc({
              'rounded-2xl flex-1 py-2 shadow': true,
              [ACTIVE[variant]]: selected === value,
              [INACTIVE[variant]]: selected !== value
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