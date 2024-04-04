import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

export default function Ad300x250(props) {
  const router = useRouter()

  useEffect(() => {

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    catch (e) {

    }

  }, [router.query]);
  return (
    <div className="Ad300x250">
        <ins className="adsbygoogle responsive_desktop_square_300x250"
          style={{ display: "block" }}
          data-ad-client="ca-pub-4857144107996534"
          data-ad-slot={props?.dataAdSlot}
        >
        </ins>
    </div>
  )
}
