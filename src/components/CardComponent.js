
const CardComponent = ({name,age,onClickAction,style})=>{
    const style = {
      display: "flex",
      width: 400, 
      height: 50,
      paddingLeft: 20,
      
      paddingRight: 20,
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "gray"
    }
    // const onClickAction = ()=>{
    //     alert(`${name+" "+age}`);
    // }
    return <div onClick={ ()=>onClickAction({name,age}) } style={{
        ...style,
        fontWeight: name==="ma ma"? "bold":"normal",
        ...style
        }}>
      <div>{name}</div>
      <div style={age>25?{color: "red"}:{color: "blue"}}>{age}</div>
    </div>
  }

  export default CardComponent;