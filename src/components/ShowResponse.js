import "./responce.css";

export default function ShowResponse(props) {
    return (
        <>
      <div className="container">
        <div className="head">
        <h1 className="p-2 text-lg font-bold">
          Merlin Says:
        </h1>
        <div id="contents">
     <div id="sighn1">  <button id="sighn" >←</button>
        <button id="sighn">→</button>
        </div> 
        <button id="sighn" onClick={props.onSendClick}>↺</button>
        <button id="sighn" onClick={() => {navigator.clipboard.writeText(props.response)}}
>◱</button>

              </div>
        </div>
        <span id="borderspan"></span>
        <div className="responce">
        {props.isLoading ? (
          <p className='border m-2 p-4'>Waiting for OpenAI...</p>
        ) : (
          <p className='border m-2 p-4'>{props.response}</p>
        )}
        </div>
      
      </div>
     
      </>
    );
  }