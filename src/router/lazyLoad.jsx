import React, {Suspense} from "react";
const lazyLoad = (Comp)=>{
  return (
    <Suspense >
      <Comp />
    </Suspense>
  )
}
export default lazyLoad;