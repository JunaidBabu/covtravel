
import {
    useParams,
  } from 'react-router-dom';
  
export default function ResultPage() {

    let { sd } = useParams();

    // do sanity check before proceeding
  
    return (
      <div>
        <h3>Info loading... {sd}</h3>
      </div>
    );
  }