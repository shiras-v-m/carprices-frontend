import { useRouter } from "next/router";
import React, { useEffect } from "react";
export default function Ad300x600(props) {
  const router = useRouter()

  useEffect(() => {

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    catch (e) {

    }

  }, [router.query]);

  return (
    <div className="Ad300x600">

        <ins className="adsbygoogle responsive_vertical_ad_desktop"
          style={{ display: "block" }}
          data-ad-client="ca-pub-4857144107996534"
          data-ad-slot={props?.dataAdSlot}
        >
        </ins>
    </div>
  )
}
