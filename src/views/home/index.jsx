import React, { useState } from 'react';
import store from '../../redux';
import { Button } from 'antd';
function Home() {
  const addCount = { type:'ADD_COUNT', number: 10 }
  store.dispatch(addCount);
  const updateName = {type: 'UPDATE_NAME', name: 'linxi'}
  store.dispatch(updateName);

  // const [cout, setCount] = useState();
  // store.subscribe(()=>{
  //   const store_count = store.getState()
  //   setCount(store_count)
  // })

  console.log(store.getState(),'---------------------');

  return(
    <div>
      首页
    </div>
  )
}
export default Home;