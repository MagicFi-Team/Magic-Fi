"use client";
import React, { ReactNode } from "react";
import { Scaffold } from "@orderly.network/ui-scaffold";
import { useNav } from "@/hooks/useNav";
import config from "@/config";
import type { Meta, StoryObj  } from '@storybook/react';

// const Scaffold_: Meta<typeof Scaffold> = {
//   component: Scaffold,
//   args: {
//     showTips: false
//   }
// }

// type Story = StoryObj<typeof Scaffold>;

// const Scaffold_: Story = {
//   render: (args: any) => {
//     return <Scaffold {...args}></Scaffold>;
//   },
//   args: {
//     tipsContent: "Orderly will be temporarily unavailable for a scheduled upgrade from 11:30 PM (UTC) on June 28 to 12:30 AM (UTC) on June 29.",
//     closeTips: () => {},
//     showTips: true,
//     showDialog: false,
//     dialogContent: "test"
//   },
// };

export default function MarketsLayout(props: { children: ReactNode }) {
  const { onRouteChange } = useNav();

  return (
    <Scaffold
      mainNavProps={config.scaffold.mainNavProps}
      footerProps={config.scaffold.footerProps}
      routerAdapter={{
        onRouteChange,
        currentPath: "/",
      }}
    >
      {props.children}
    </Scaffold>
  );
}
