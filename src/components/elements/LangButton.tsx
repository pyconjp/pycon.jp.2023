import {useTranslation} from "react-i18next";
import {GlobeAltIcon} from "@heroicons/react/20/solid";

const LangButton = () => {
  const {i18n} = useTranslation();

  return (
    <div className="flex flex-row h-10 bg-alt-black text-alt-white items-center px-3 gap-3" suppressHydrationWarning>
      <GlobeAltIcon className='h-6 w-6'/>
      <div className='flex flex-row gap-1.5'>
        <div>
          {i18n.language.startsWith("en") ? (
            <button className="text-gray-500" disabled suppressHydrationWarning>EN</button>
          ) : (
            <button
              className="text-primary-200 underline"
              onClick={() => i18n.changeLanguage("en")}
              suppressHydrationWarning
            >
              EN
            </button>
          )}
        </div>
        <div>
          /
        </div>
        <div>
          {i18n.language.startsWith("ja") ? (
            <button className="text-gray-500" disabled suppressHydrationWarning>日本語</button>
          ) : (
            <button
              className="text-primary-200 underline"
              onClick={() => i18n.changeLanguage("ja")}
              suppressHydrationWarning
            >
              日本語
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default LangButton;