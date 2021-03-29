import React from "react";
import { Helmet } from "react-helmet";

export default function Meta() {
  return (
    <Helmet>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="../images/favicon-32x32.png"
      />
      <title>Job Listings | Frontend Mentor</title>
    </Helmet>
  );
}
