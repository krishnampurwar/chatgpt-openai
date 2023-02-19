import "./textInput.css"

export default function TextInput(props) {
    function handleTextChange(event) {
      props.onTextChange(event.target.value);
    }
  
    function handleKeyDown(event) {
      if (event.key === 'Enter') {
        props.onSendClick();
      }
    }
  
    return (
      <div className="input">
       <div className="inputbox">
        <input
          className='border m-2 p-2'
          type="text"
          placeholder="Enter some value"
          value={props.text}
          onChange={handleTextChange}
          onKeyDown={handleKeyDown}
          disabled={props.disabled}
        />
        <button onClick={props.onSendClick} className='border p-2' disabled={props.disabled}>↲</button>
        </div> <h3>Frequently Commands</h3>
        <div id="commands">
          <button id="btn">Grammer 😐</button>
          <button id="btn">Summarize 📃</button>
          <button id="btn">Expand 📃</button>
          <button id="btn">Simplify 📃</button>
          <button id="btn">Explain ❔</button>
          <button id="btn">Translate 📃 </button>
          <button id="btn">Paraphrase 📃</button>
          <button id="btn">Improve 🪄</button>
        </div>
      </div>
    );
  }