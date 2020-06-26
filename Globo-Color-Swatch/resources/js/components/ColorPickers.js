import React, { Component, useCallback, useState, useEffect,useRef } from 'react';
import { SketchPicker } from 'react-color';
import UseOutsideClick from "./UseOutsideClick";

export default function ColorPickers(props) {

    const [active, setActive] = useState(false);
    const [field, setField] = useState("");
    const [value, setValue] = useState("#000");

    useEffect(
        () => {
            setActive(props.active),
            setField(props.field)
        },
        [props.active,props.field], // giá trị được subcrive
    );

    const [color, setColor] = useState("#000");

    const handleChangeColor = useCallback((color) =>{
      props.changeColorPickerValue(field,color),
      setValue(color)
    });

    const useOutsideClick = (ref, callback) => {
        const handleClick = e => {
          if (ref.current && !ref.current.contains(e.target)) {
            callback();
          }
        };
      
        useEffect(() => {
          document.addEventListener("click", handleClick);
      
          return () => {
            document.removeEventListener("click", handleClick);
          };
        });
      };

    const ref = useRef();

    useOutsideClick(ref, () => {
        setActive(false);
        props.closeColorPicker();
    });

    return (
        <div className="color_picker" style={{ display: active ? 'block' : 'none' }} ref={ref}>
            <SketchPicker onChangeComplete={handleChangeColor} color={value} />
        </div>
    );
}
