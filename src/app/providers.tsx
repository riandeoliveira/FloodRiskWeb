"use client";

import { LoadingArea } from "@/components/common/loading-area";
import type { ReactElement } from "react";
import { ToastContainer } from "react-toastify";
import VLibras from "react-vlibras";

export const Providers = (): ReactElement => {
  return (
    <>
      <ToastContainer />
      <VLibras safeInit />
      <LoadingArea />
    </>
  );
};
