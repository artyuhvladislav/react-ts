import React from "react"
import ContentLoader from "react-content-loader"

const Loader = () => (
  <ContentLoader 
    speed={2}
    width={850}
    height={85}
    viewBox="0 0 850 85"
    backgroundColor="#ffffff"
    foregroundColor="#c5c4c4"
  >
    <rect x="0" y="88" rx="3" ry="3" width="178" height="6" /> 
    <rect x="-34" y="99" rx="0" ry="0" width="576" height="154" /> 
    <rect x="-1" y="8" rx="0" ry="0" width="609" height="201" /> 
    <circle cx="81" cy="89" r="61" /> 
    <circle cx="100" cy="94" r="39" />
  </ContentLoader>
)

export default Loader