import React,{memo} from 'react'

 function InnerComponent(props) {
    console.log("innerdata ->",props.data);
  return (
    <div>Data coming from outer component {props.data}</div>
  )
}
export default memo(InnerComponent)
