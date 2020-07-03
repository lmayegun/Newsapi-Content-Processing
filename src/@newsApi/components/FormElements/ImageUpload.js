import React, {useRef, useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';

const ImageUpload = props => {
  const {id} = props;

  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  const fileUpload = useRef();

  const onBtnClick = () => {
    fileUpload.current.click();
    console.log(fileUpload, "yuna");
  }

  useEffect(()=>{
    if(!file){
      return
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  },[file]);

  const pickedHandler = event => {
    console.log(event.target.files, "usher")
    let pickedFile;
    let fileIsValid = isValid;
    if(event.target.files || event.target.files.length === 1){
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    props.onInput(event);
    // props.onInput(props.id, pickedFile, fileIsValid);
  };

  return(
    <div className="form-control">
      <div className={`image-upload ${props.center && 'center'}`}>
        <div className={"image-upload__preview"}>
          {previewUrl && <img style={{width:200}} src={previewUrl} alt="Preview" />}
          {!previewUrl && <p> Please pick an image.</p>}
        </div>
      </div>
      <input
        ref={fileUpload}
        id={id}
        name={props.name}
        type="file"
        style={{display:'none'}}
        accept=".jpg ,.png,.jpeg"
        onChange={pickedHandler}
      />
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={'btn'}
        onClick={onBtnClick}>
         Upload
      </Button>
      {!isValid && <p>{props.errorText}</p>}
    </div>
  )
};

export default ImageUpload;
