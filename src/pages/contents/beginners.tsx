import Markdown from "@/components/elements/Markdown";
import PageTitle from "@/components/elements/PageTitle";

const Beginners = () => {
  const content = `
# はじめに

Python初学者の方は、たくさんある書籍やWEBの情報で、まずどれから学んでいけばスムーズにPython学習が出来るかがわからないと思います。
ここでは、Pythonをより効率的に学習してほしく紹介しています。

## オススメPythonチュートリアル

### Python Boot Camp テキスト

https://pycamp.pycon.jp/textbook/

このチュートリアルは、初学者向けに作られたテキストで、Pythonのインストールから基礎的な使い方まで掲載され、とてもわかりやすくまとめられています。

Python Boot Campは、各地域に講師が赴き地域の運営スタッフが主体的にPythonを広める活動をしています。日本各地でのPythonを盛りあげ、各地のPythonistaとの連携強化、ゆくゆくは地域PyConの実施を目的とした活動です。

ぜひ、実際のCampにも参加してみて下さい。
    `;
  return (
    <>
      <PageTitle title="Contents for Beginners" />
      <div className="flex flex-col items-center self-stretch gap-8 px-4 py-5">
        <div className="flex flex-col items-center self-stretch gap-8 py-9 px-0">
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-4xl text-tertiary-900 italic tracking-[2.8px]">
              Contents Name
            </h1>
            <h2 className="text-xl text-primary-600 leading-5 tracking-[0.14px] bg-white ">
              コンテツ名
            </h2>
          </div>
          <div className="flex flex-col gap-4 p-5 items-center shadow-lg">
            <Markdown content={content} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Beginners;
