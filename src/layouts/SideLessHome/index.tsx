// src/layouts/SideLessHome/index.tsx と言うファイルを作成する
// 以下は、index.tsxのコード

import { Outlet } from "react-router-dom";

export const SideLessHomeLayout = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
};
