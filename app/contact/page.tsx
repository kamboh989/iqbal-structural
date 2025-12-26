import React from 'react'
import  Contact  from "./contact";
import { contactSEO } from "./seo";

export const metadata = contactSEO

const page = () => {
  return (
    <div>
      <Contact/>
    </div>
  )
}

export default page
