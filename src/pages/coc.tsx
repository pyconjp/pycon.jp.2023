import {useTranslation} from "react-i18next";
import PageTitle from "@/components/elements/PageTitle";

const Coc = () => {
  const {t} = useTranslation("PAGES")

  return (
    <div>
        <PageTitle title='Code of conduct' />
        <p>
        PyCon JP Code of Conduct （以下「行動規範」といいます。）は、一般社団法人PyCon JP Association（以下「PyCon JP」といいます。）が開催するイベント（以下「本イベント」といいます。）に対して参加される方全員に（以下「参加者」といいます。）と守っていただきたい内容を定めるものです。本イベントに参加していただく参加者の方には、本規約の全ての条項を確認のうえ、本行動規範に同意していただく必要があります。
        </p>
        <p>
        本イベントは、Pythonユーザが集まり、PythonやPythonを使ったソフトウェアについて情報交換、交流をするためのカンファレンスです。 PyCon JPの開催を通じて、Pythonの使い手が一堂に集まり、Pythonにまつわる様々な分野の知識や情報を交換し、新たな友達やコミュニティとのつながり、仕事やビジネスチャンスを増やせる場所とすることが目標です。
        </p>
    </div>
  )
}

export default Coc;