import React, { useRef, useState, useEffect } from "react";

import Button from "./Button";
import "./ImageUpload.css";

const ImageUpload = (props) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  //const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef();

  // sets image preview when a file is chosen or changed
  useEffect(() => {
    if (file) {
      const fileReader = new FileReader(); // FileReader is a browser api to convert files to readable urls.
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    }
  }, [file]);

  // will execute if a file is chosen, sets image file in formState after an image is chosen
  const pickedHandler = (event) => {
    const pickedFile = event.target.files && event.target.files[0];
    const fileIsValid = !!pickedFile; // check if pickedFile is truthy (i.e. a file was picked)
    setFile(pickedFile);
    props.onInput(props.id, pickedFile, fileIsValid); // updating form state image fields
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  return (
    <div className="form-control">
      <input
        id={props.id}
        ref={filePickerRef}
        style={{ display: "none" }} // hidden but functionality remains
        type="file"
        accept=".jpeg,.png,.jpeg"
        onChange={pickedHandler}
      />
      <div className={`image-upload ${props.center && "center"}`}>
        <div className="image-upload__preview">
          {previewUrl ? (
            <img src={previewUrl} alt="Preview" />
          ) : (
            <p>Please pick an image.</p>
          )}
        </div>
        <Button type="button" onClick={pickImageHandler}>
          PICK IMAGE
        </Button>
      </div>
      {!file && <p>{props.errorText}</p>}
    </div>
  );
};

export default ImageUpload;