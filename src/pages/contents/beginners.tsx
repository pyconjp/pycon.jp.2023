import Markdown from "@/components/elements/Markdown";
import PageTitle from "@/components/elements/PageTitle";

const Beginners = () => {
  const content = `
### 見出し

コンテンツの内容が入ります。見出しスタイルはh3から始めます。

文書構造は、コンテンツタイトル(h3)>見出し(h4)>本文 を推奨します。
非推奨ですが、コンテンツタイトル(h3)>見出し(h4)>子見出し(h5) > 本文までは入ります。本カードの中が３階層以上 になった場合の表示は想定していないので、表示崩れが起こる可能性があります。


##### 小見出し

小見出しを使用した場合このようになります。可読性の高い横幅を確保するため、見出しと小見出しでインデントを設けていません。そのためカード内の見出しはh4までを推奨としています。

- リストを使用することができます。
- 子リストは想定していません。
- リストだよ！
- リストだよ！
- リストだよ！
- リストだよ！
- リストだよ！
- リストだよ！

#### 画像を載せる場合

![画像](https://images.unsplash.com/photo-1689852484069-3e0fe82cc7c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80)

pとpの間の上下マージンは24pxです。基本は、複数のpが入る場合もfloatする想定です（tailwindでいうと、.float-right, .float-left を使用する）。コンテンツの必要に応じて、2段落め以降が回り込まないclassを使用してください（flexなど）

${'```python \nmatch PyConJP(2022): \n case [“ONLINE”]: Zoom \n case [“ONSITE"]: TOC Ariake Convention Hall'}


    `;
  return (
    <>
      <PageTitle title="Contents for Beginners" />
      <div className="flex flex-col items-center self-stretch gap-8 px-4 py-5">
        <div className="flex flex-col items-center self-stretch gap-8 py-9 px-0">
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-4xl text-tertiary-900 ita lic tracking-[2.8px]">
              Contents Name
            </h1>
            <h2 className="text-xl text-primary-600 leading-5 tracking-[0.14px] bg-white ">
              コンテツ名
            </h2>
          </div>
          <div className="flex flex-col gap-4 p-5 items-center shadow-lg rounded-lg">
            <Markdown content={content} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Beginners;
