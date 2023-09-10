

import React from 'react'
import { TABS } from '../redux/actions/type'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { toggleTabs } from '../redux/actions'

const Tabs = ({currentTab}) => {

    const dispatch = useDispatch()

  return (
    <>
      {
        TABS.map(tab=>{
            return <Button key={tab}
                onClick={()=>dispatch(toggleTabs(tab))}
                className={tab===currentTab?'selected':''}
            >
                {tab}
            </Button>
        })
      }
    </>
  )
}


const Button = styled.button`
    margin : 5px 10px;
    padding : 10px;
    text-align : center;
    font-size : 14px;
    color : #6c6777;
    background-color : #fff;
    border : none;
    cursor : pointer;
    width : 100px;
`

export default Tabs
