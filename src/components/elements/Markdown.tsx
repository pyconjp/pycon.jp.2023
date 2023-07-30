import React, { useEffect, useState } from "react";
import {
  MDXRemote,
  MDXRemoteProps,
  MDXRemoteSerializeResult,
} from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

type Props = {
  content: string;
  components?: MDXRemoteProps["components"];
};

const Markdown = ({ content, components }: Props) => {
  const [source, setSource] = useState<MDXRemoteSerializeResult | null>(null);
  const mdComponent: MDXRemoteProps["components"] = {
    a: (props) => (
      <a
        {...props}
        className="flex items-center text-primary-500 font-bold border-b-[1px] w-fit h-[27px]"
      >
        {props.children}

        <ArrowRightIcon width={24} height={18} />
      </a>
    ),
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
        className="grid grid-cols-1 md:grid-cols-2 gap-4 self-stretch p-3 text-alt-black"
      >
        {props.children}
      </p>
    ),
    ul: (props) => (
      <ul {...props} className="flex flex-col align-start self-stretch px-8">
        {props.children}
      </ul>
    ),
    li: (props) => (
      <li {...props} className="list-disc text-tertiary-800">
        {props.children}
      </li>
    ),
    pre: (props) => (
      <pre
        {...props}
        className="flex align-start self-stretch p-4 whitespace-pre-wrap bg-secondary-800"
      >
        {props.children}
      </pre>
    ),
    code: (props) => (
      <code {...props} className="text-white">
        {props.children}
      </code>
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
