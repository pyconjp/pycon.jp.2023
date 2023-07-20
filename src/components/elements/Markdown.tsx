import React, {useEffect, useState} from "react";
import {MDXRemote, MDXRemoteProps, MDXRemoteSerializeResult} from "next-mdx-remote";
import {serialize} from "next-mdx-remote/serialize";

type Props = {
  content: string,
  components?: MDXRemoteProps['components']
}

const Markdown = ({content, components}: Props) => {
  const [source, setSource] = useState<MDXRemoteSerializeResult | null>(null);

  useEffect(
    () => {
      const load = async () => {
        setSource(await serialize(content, {
          mdxOptions: {
            development: process.env.NODE_ENV === 'development',
          }
        }));
      }
      load().then();
    },
    [content]
  );

  return <>
    {source && <MDXRemote {...source} components={components}/>}
  </>;
}

export default Markdown;