import React, { useState, useEffect } from "react";

export const Profile = ({ data }) => {
  return <div>{data.map(x => x.title)}</div>;
};
