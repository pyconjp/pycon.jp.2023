import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import i18next from "i18next";

export default function HeroSection() {
    const { t, i18n } = useTranslation("HERO");
    const [lang] = useState(i18n.language);

    useEffect(() => {
        i18n.changeLanguage(lang);
    }, [lang, i18n]);

    return (
        <section className="flex flex-col justify-stretch sm:mx-[60px] sm:my-[80px] mx-[16px] my-[20px]">
            <Image
                src={"/main_logo.png"}
                alt={""}
                width={1112}
                height={645}
                className="self-center object-contain"
            />

            <div className="flex flex-col items-center sm:px-[10%] my-[24px]">
                <div className='mx-auto'>
                    <div>
                        <div className="flex flex-row items-center mb-[16px]">
                            <img src="/location.png" alt="" className="object-contain mx-[16px]" />
                            <div className="flex sm:flex-row flex-col">
                                <h2 suppressHydrationWarning className="text-tertiary-900 font-bold text-2xl">{t("VENUE")}</h2>
                                <a
                                    href="https://www.toc.co.jp/saiji/ariake/access/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    suppressHydrationWarning
                                    className="hover:opacity-70 text-lg text-secondary-600 font-bold underline underline-offset-8"
                                >
                                    <div className="flex flex-row sm:mx-[16px]">
                                        <p suppressHydrationWarning>{t("VENUE_INFO")}</p>
                                        <Image
                                            src={"/linkout_b.svg"}
                                            alt={""}
                                            width={20}
                                            height={20}
                                            className="object-contain ml-[5px]"
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-row items-center mb-[24px]">
                            <img src="/calendar.png" alt="" className="mx-[16px]" />
                            <div className="">
                                <div className="flex sm:flex-row flex-col sm:items-center justify-between">
                                    <h5 className="text-tertiary-600 font-montserrat italic mr-[16px]">Tutorial:</h5>
                                    <p suppressHydrationWarning className="text-2xl text-left font-bold text-alt-black">{t("TUTORIAL_DATE")}</p>
                                </div>
                                <div className="flex sm:flex-row flex-col sm:items-center justify-between">
                                    <h5 className="text-tertiary-600 font-montserrat italic mr-[16px]">Conference:</h5>
                                    <p suppressHydrationWarning className="text-2xl font-bold text-alt-black">{t("CONFERENCE_DATE")}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-row items-center mb-[16px]">
                            <img src="/location.png" alt="" className="object-contain mx-[16px]" />
                            <div className="flex sm:flex-row flex-col">
                                <h2 suppressHydrationWarning className="text-tertiary-900 font-bold text-2xl">{t("VENUE_SPRINT")}</h2>
                                <a
                                    href="https://hennge.com/jp/about/map/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    suppressHydrationWarning
                                    className="hover:opacity-70 text-lg text-secondary-600 font-bold underline underline-offset-8"
                                >
                                    <div className="flex flex-row sm:mx-[16px]">
                                        <p suppressHydrationWarning>{t("VENUE_INFO")}</p>
                                        <Image
                                            src={"/linkout_b.svg"}
                                            alt={""}
                                            width={20}
                                            height={20}
                                            className="object-contain ml-[5px]"
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-row items-center mb-[24px]">
                            <img src="/calendar.png" alt="" className="mx-[16px]" />
                            <div className="">
                                <div className="flex sm:flex-row flex-col sm:items-center justify-between">
                                    <h5 className="text-tertiary-600 font-montserrat italic mr-[16px]">Sprint:</h5>
                                    <p suppressHydrationWarning className="text-2xl text-left font-bold text-alt-black">{t("SPRINT_DATE")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-8 bg-primary-50 w-10/12 p-6 rounded border-alt-black border-2'>
                    <div className='text-lg font-bold text-primary-600'>{t('APOLOGIZE.TITLE', { ns: 'ATTENTION' })}</div>
                    <div className='mt-2 whitespace-pre-line'>{t('APOLOGIZE.DESCRIPTION', { ns: 'ATTENTION' })}</div>
                </div>
            </div>
        </section>


    )
}
