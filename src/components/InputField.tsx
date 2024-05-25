import React,{useState} from "react";

function InputField(props:any) {
    const [inputText,setInputText] = useState('');
    const handleEnterPress = (e:any)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setInputText("")
        }
    }
  return (
    <div className="input-group mb-4">
        <input type="text" className="form-control" placeholder="Add New Todo Task" value={inputText}
               onChange={e=>{
                   setInputText(e.target.value)
               }}
               onKeyDown={handleEnterPress}/>
        <button className="input-group-text" onClick={()=>{
            props.addList(inputText)
            setInputText("")
        }}>Add</button>
    </div>
  );
}

export default InputField;
