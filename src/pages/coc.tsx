import Image from "next/image";
import {useTranslation} from "react-i18next";
import { useState, useEffect } from "react";
import PageTitle from "@/components/elements/PageTitle";

const Coc = () => {
  const { t } = useTranslation("COC");
  const tag_p = "m-[6px] p-[12px]";
  const tag_h4 = "m-[6px] py-[12px] font-bold";
  const tag_ul = "my-[6px] mx-[48px] text-tertiary-800 list-disc marker:text-primary-500";
  const tag_li = "my-[4px]";
  let addClass: string[] = ["", "", "", ""];
  const [c, setContents] = useState({
    p1:"",
    p2:"",
    h1:"",
    p3:"",
    ul1li1:"",
    ul1li2:"",
    ul1li3:"",
    ul1li4:"",
    ul1li5:"",
    ul1li6:"",
    ul1li7:"",
    ul1li8:"",
    ul1li9:"",
    ul1li10:"",
    ul1li11:"",
    ul1li12:"",
    ul1li13:"",
    ul1li14:"",
    ul1li15:"",
    ul1li16:"",
    p4:"",
    p5:"",
    p6:"",
    p7:"",
    p8:"",
    h2:"",
    ul2li1:"",
    ul2li2:"",
    h3:"",
    p9:"",
    ul3li1:"",
    ul3li2:"",
    ul3li3:"",
    ul3li4:"",
    ul3li5:"",
    ul3li6:"",
    p10:"",
    p11:"",
    p12:"",
    p13:"",
    cl_p1:tag_p,
    cl_p2:tag_p,
    cl_h1:tag_h4,
    cl_p3:tag_p,
    cl_ul1li1:tag_li,
    cl_ul1li2:tag_li,
    cl_ul1li3:tag_li,
    cl_ul1li4:tag_li,
    cl_ul1li5:tag_li,
    cl_ul1li6:tag_li,
    cl_ul1li7:tag_li,
    cl_ul1li8:tag_li,
    cl_ul1li9:tag_li,
    cl_ul1li10:tag_li,
    cl_ul1li11:tag_li,
    cl_ul1li12:tag_li,
    cl_ul1li13:tag_li,
    cl_ul1li14:tag_li,
    cl_ul1li15:tag_li,
    cl_ul1li16:tag_li,
    cl_p4:tag_p,
    cl_p5:tag_p,
    cl_p6:tag_p,
    cl_p7:tag_p,
    cl_p8:tag_p,
    cl_h2:tag_h4,
    cl_ul2li1:tag_li,
    cl_ul2li2:tag_li,
    cl_h3:tag_h4,
    cl_p9:tag_p,
    cl_ul3li1:tag_li,
    cl_ul3li2:tag_li,
    cl_ul3li3:tag_li,
    cl_ul3li4:tag_li,
    cl_ul3li5:tag_li,
    cl_ul3li6:tag_li,
    cl_p10:tag_p,
    cl_p11:tag_p,
    cl_p12:tag_p,
    cl_p13:tag_p,
  });

  useEffect(() => {
    addClass[0] = (t("UL1LI14")==="") ? " hidden" : "";
    addClass[1] = (t("UL1LI15")==="") ? " hidden" : "";
    addClass[2] = (t("UL1LI16")==="") ? " hidden" : "";
    addClass[3] = (t("P8")==="") ? " hidden" : "";
    setContents({...c, 
        p1:t("P1"),
        p2:t("P2"),
        h1:t("H1"),
        p3:t("P3"),
        ul1li1:t("UL1LI1"),
        ul1li2:t("UL1LI2"),
        ul1li3:t("UL1LI3"),
        ul1li4:t("UL1LI4"),
        ul1li5:t("UL1LI5"),
        ul1li6:t("UL1LI6"),
        ul1li7:t("UL1LI7"),
        ul1li8:t("UL1LI8"),
        ul1li9:t("UL1LI9"),
        ul1li10:t("UL1LI10"),
        ul1li11:t("UL1LI11"),
        ul1li12:t("UL1LI12"),
        ul1li13:t("UL1LI13"),
        ul1li14:t("UL1LI14"),
        ul1li15:t("UL1LI15"),
        ul1li16:t("UL1LI16"),
        p4:t("P4"),
        p5:t("P5"),
        p6:t("P6"),
        p7:t("P7"),
        p8:t("P8"),
        h2:t("H2"),
        ul2li1:t("UL2LI1"),
        ul2li2:t("UL2LI2"),
        h3:t("H3"),
        p9:t("P9"),
        ul3li1:t("UL3LI1"),
        ul3li2:t("UL3LI2"),
        ul3li3:t("UL3LI3"),
        ul3li4:t("UL3LI4"),
        ul3li5:t("UL3LI5"),
        ul3li6:t("UL3LI6"),
        p10:t("P10"),
        p11:t("P11"),
        p12:t("P12"),
        p13:t("P13"),
        cl_p1:tag_p,
        cl_p2:tag_p,
        cl_h1:tag_h4,
        cl_p3:tag_p,
        cl_ul1li1:tag_li,
        cl_ul1li2:tag_li,
        cl_ul1li3:tag_li,
        cl_ul1li4:tag_li,
        cl_ul1li5:tag_li,
        cl_ul1li6:tag_li,
        cl_ul1li7:tag_li,
        cl_ul1li8:tag_li,
        cl_ul1li9:tag_li,
        cl_ul1li10:tag_li,
        cl_ul1li11:tag_li,
        cl_ul1li12:tag_li,
        cl_ul1li13:tag_li,
        cl_ul1li14:tag_li+addClass[0],
        cl_ul1li15:tag_li+addClass[1],
        cl_ul1li16:tag_li+addClass[2],
        cl_p4:tag_p,
        cl_p5:tag_p,
        cl_p6:tag_p,
        cl_p7:tag_p,
        cl_p8:tag_p+addClass[3],
        cl_h2:tag_h4,
        cl_ul2li1:tag_li,
        cl_ul2li2:tag_li,
        cl_h3:tag_h4,
        cl_p9:tag_p,
        cl_ul3li1:tag_li,
        cl_ul3li2:tag_li,
        cl_ul3li3:tag_li,
        cl_ul3li4:tag_li,
        cl_ul3li5:tag_li,
        cl_ul3li6:tag_li,
        cl_p10:tag_p,
        cl_p11:tag_p,
        cl_p12:tag_p,
        cl_p13:tag_p,
    })
  },[t])

  return (
    <div className="relative">
        <PageTitle title='Code of conduct' />
        <div className="lg:mx-[216px] mx-[16px] lg:my-[60px] my-[20px] lg:px-[72px] px-[16px] lg:py-[60px] py-[40px] z-20 bg-[#ffffff] shadow-lg rounded-lg relative">
            <p className={c.cl_p1}>{c.p1}</p>
            <p className={c.cl_p2}>{c.p2}</p>
            <h4 className={c.cl_h1}>{c.h1}</h4>
            <p className={c.cl_p3}>{c.p3}</p>
            <ul className={tag_ul}>
                <li className={c.cl_ul1li1}>{c.ul1li1}</li>
                <li className={c.cl_ul1li2}>{c.ul1li2}</li>
                <li className={c.cl_ul1li3}>{c.ul1li3}</li>
                <li className={c.cl_ul1li4}>{c.ul1li4}</li>
                <li className={c.cl_ul1li5}>{c.ul1li5}</li>
                <li className={c.cl_ul1li6}>{c.ul1li6}</li>
                <li className={c.cl_ul1li7}>{c.ul1li7}</li>
                <li className={c.cl_ul1li8}>{c.ul1li8}</li>
                <li className={c.cl_ul1li9}>{c.ul1li9}</li>
                <li className={c.cl_ul1li10}>{c.ul1li10}</li>
                <li className={c.cl_ul1li11}>{c.ul1li11}</li>
                <li className={c.cl_ul1li12}>{c.ul1li12}</li>
                <li className={c.cl_ul1li13}>{c.ul1li13}</li>
                <li className={c.cl_ul1li14}>{c.ul1li14}</li>
                <li className={c.cl_ul1li15}>{c.ul1li15}</li>
                <li className={c.cl_ul1li16}>{c.ul1li16}</li>
            </ul>
            <p className={c.cl_p4}>{c.p4}</p>
            <p className={c.cl_p5}>{c.p5}</p>
            <p className={c.cl_p6}>{c.p6}</p>
            <p className={c.cl_p7}>{c.p7}</p>
            <p className={c.cl_p8}>{c.p8}</p>
            <h4 className={c.cl_h2}>{c.h2}</h4>
            <ul className={tag_ul}>
                <li className={c.cl_ul2li1}>{c.ul2li1}</li>
                <li className={c.cl_ul2li2}>{c.ul2li2}</li>
            </ul>
            <h4 className={c.cl_h3}>{c.h3}</h4>
            <p className={c.cl_p9}>{c.p9}</p>
            <ul suppressHydrationWarning className={tag_ul}>
                <li className={c.cl_ul3li1}>{c.ul3li1}</li>
                <li className={c.cl_ul3li2}>{c.ul3li2}</li>
                <li className={c.cl_ul3li3}>{c.ul3li3}</li>
                <li className={c.cl_ul3li4}>{c.ul3li4}</li>
                <li className={c.cl_ul3li5}>{c.ul3li5}</li>
                <li className={c.cl_ul3li6}>{c.ul3li6}</li>
            </ul>
            <p className={c.cl_p10}>{c.p10}</p>
            <p className={c.cl_p11}>{c.p11}</p>
            <p className={c.cl_p12}>{c.p12}</p>
            <p className={c.cl_p13}>{c.p13}</p>
        </div>
        <Image
            src={"/Page_bg.svg"}
            alt={""}
            width={1426}
            height={468}
            className="lg:block hidden z-0 absolute bottom-[-60px] left-1/2 -translate-x-1/2"
        />
    </div>
  )
}

export default Coc;