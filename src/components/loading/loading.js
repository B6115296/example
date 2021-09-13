import React, { useEffect } from 'react';
import settingsState from '../../recoil/atoms/settings';
import { useRecoilValue } from 'recoil';
import { navigate } from "@reach/router"


const Loading = () => {
  const setings = useRecoilValue( settingsState )

  useEffect(() => {
    if( setings.currRoute === 0){
      navigate('\\todos');
    }
  }, [setings.currRoute])

  return (
    <div style={{margin:'10vh auto'}}>Loading...</div>
  )
}


export default Loading;