import React, { useEffect, useState } from "react";
import {
  MDXRemote,
  MDXRemoteProps,
  MDXRemoteSerializeResult,
} from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

type Props = {
  content: string;
  components?: MDXRemoteProps["components"];
};

const Markdown = ({ content, components }: Props) => {
  const [source, setSource] = useState<MDXRemoteSerializeResult | null>(null);
  const mdComponent: MDXRemoteProps["components"] = {
    h3: (props) => (
      <h3
        {...props}
        className="flex items-center self-stretch text-2xl text-alt-black"
      >
        {props.children}
      </h3>
    ),
    h4: (props) => (
      <h4
        {...props}
        className="flex align-start self-stretch py-2 text-2xl text-alt-black"
      >
        {props.children}
      </h4>
    ),
    h5: (props) => (
      <h5
        {...props}
        className="flex align-start self-stretch py-2 text-xl text-alt-black"
      >
        {props.children}
      </h5>
    ),
    p: (props) => (
      <p
        {...props}
        className="flex align-start self-stretch p-3 text-alt-black"
      >
        {props.children}
      </p>
    ),
    ul: (props) => (
      <ul {...props} className="flex flex-col align-start self-stretch px-4">
        {props.children}
      </ul>
    ),
    li: (props) => (
      <li {...props} className="list-disc text-tertiary-800">
        {props.children}
      </li>
    ),
  };

  useEffect(() => {
    const load = async () => {
      setSource(
        await serialize(content, {
          mdxOptions: {
            development: process.env.NODE_ENV === "development",
          },
        }),
      );
    };
    load().then();
  }, [content]);

  return (
    <>
      {source && (
        <MDXRemote {...source} components={components || mdComponent} />
      )}
    </>
  );
};

export default Markdown;
