import { Text } from "@orderly.network/ui";
import Image from "next/image";
import React from "react";

const Loading: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }} className="oui-gap-2">
        {/* <img src="./loading-logo.png" style={{ width: '200px' }}/> */}
        {/* <Image src="/loading-logo.png" alt="loading" width={80} height={80} /> */}
        {/* <h1 className="oui-text-lg oui-font-bold oui-text-primary">Loading...</h1> */}
        {/* <Text size='xl' color='primary'>Loading...</Text> */}
        <div className="content oui-font-bold">
          <h2 className="">MAGIC FI</h2>
          <h2 className="">MAGIC FI</h2>
        </div>
    </div>
  );
};

export default Loading;