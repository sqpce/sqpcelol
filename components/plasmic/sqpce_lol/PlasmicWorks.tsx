// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: r7bQFXtqbEtVEZD5aJhcPv
// Component: PT8OECpkuIj2

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_sqpce_lol.module.css"; // plasmic-import: r7bQFXtqbEtVEZD5aJhcPv/projectcss
import sty from "./PlasmicWorks.module.css"; // plasmic-import: PT8OECpkuIj2/css

createPlasmicElementProxy;

export type PlasmicWorks__VariantMembers = {};
export type PlasmicWorks__VariantsArgs = {};
type VariantPropType = keyof PlasmicWorks__VariantsArgs;
export const PlasmicWorks__VariantProps = new Array<VariantPropType>();

export type PlasmicWorks__ArgsType = {};
type ArgPropType = keyof PlasmicWorks__ArgsType;
export const PlasmicWorks__ArgProps = new Array<ArgPropType>();

export type PlasmicWorks__OverridesType = {
  root?: p.Flex<"div">;
  works?: p.Flex<"div">;
  background?: p.Flex<"div">;
  nothingtoShow?: p.Flex<"div">;
  comingSoon?: p.Flex<"div">;
  goBack?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultWorksProps {}

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicWorks__RenderFunc(props: {
  variants: PlasmicWorks__VariantsArgs;
  args: PlasmicWorks__ArgsType;
  overrides: PlasmicWorks__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"works"}
            data-plasmic-override={overrides.works}
            className={classNames(projectcss.all, sty.works)}
          >
            <div
              data-plasmic-name={"background"}
              data-plasmic-override={overrides.background}
              className={classNames(projectcss.all, sty.background)}
            />

            <div
              data-plasmic-name={"nothingtoShow"}
              data-plasmic-override={overrides.nothingtoShow}
              className={classNames(projectcss.all, sty.nothingtoShow)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__vl3Lg
                )}
              >
                {"nothingto show"}
              </div>
            </div>
            <div
              data-plasmic-name={"comingSoon"}
              data-plasmic-override={overrides.comingSoon}
              className={classNames(projectcss.all, sty.comingSoon)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xdUyc
                )}
              >
                {"coming soon\u2122\ufe0f"}
              </div>
            </div>
            <div
              data-plasmic-name={"goBack"}
              data-plasmic-override={overrides.goBack}
              className={classNames(projectcss.all, sty.goBack)}
            >
              <p.PlasmicLink
                data-plasmic-name={"link"}
                data-plasmic-override={overrides.link}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link
                )}
                component={Link}
                onClick={async event => {
                  const $steps = {};
                  $steps["goToHomepage"] = true
                    ? (() => {
                        const actionArgs = { destination: `/` };
                        return (({ destination }) => {
                          __nextRouter?.push(destination);
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    typeof $steps["goToHomepage"] === "object" &&
                    typeof $steps["goToHomepage"].then === "function"
                  ) {
                    $steps["goToHomepage"] = await $steps["goToHomepage"];
                  }
                }}
                platform={"nextjs"}
              >
                {"go back"}
              </p.PlasmicLink>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "works",
    "background",
    "nothingtoShow",
    "comingSoon",
    "goBack",
    "link"
  ],
  works: [
    "works",
    "background",
    "nothingtoShow",
    "comingSoon",
    "goBack",
    "link"
  ],
  background: ["background"],
  nothingtoShow: ["nothingtoShow"],
  comingSoon: ["comingSoon"],
  goBack: ["goBack", "link"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  works: "div";
  background: "div";
  nothingtoShow: "div";
  comingSoon: "div";
  goBack: "div";
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicWorks__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicWorks__VariantsArgs;
    args?: PlasmicWorks__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicWorks__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicWorks__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicWorks__ArgProps,
          internalVariantPropNames: PlasmicWorks__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicWorks__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicWorks";
  } else {
    func.displayName = `PlasmicWorks.${nodeName}`;
  }
  return func;
}

export const PlasmicWorks = Object.assign(
  // Top-level PlasmicWorks renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    works: makeNodeComponent("works"),
    background: makeNodeComponent("background"),
    nothingtoShow: makeNodeComponent("nothingtoShow"),
    comingSoon: makeNodeComponent("comingSoon"),
    goBack: makeNodeComponent("goBack"),
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicWorks
    internalVariantProps: PlasmicWorks__VariantProps,
    internalArgProps: PlasmicWorks__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicWorks;
/* prettier-ignore-end */
