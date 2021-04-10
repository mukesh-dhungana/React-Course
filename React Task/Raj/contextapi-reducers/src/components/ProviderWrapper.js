import React from "react";
import { DetailProvider } from "../components/studentDetails/StudentDetails";
import { ResultProvider } from "../components/studentResult/StudentResultConfig";

import { NewStudent } from "../components/new/NewStudent";

export const ProviderWrapper = () => {
  return (
    <div>
      <ResultProvider>
        <DetailProvider>
          <NewStudent />
        </DetailProvider>
      </ResultProvider>
    </div>
  );
};
