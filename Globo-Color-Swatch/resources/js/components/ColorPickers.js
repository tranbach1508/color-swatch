import React, { Component, useCallback, useState, useEffect, useRef } from 'react';
import { SketchPicker } from 'react-color';
import UseOutsideClick from "./UseOutsideClick";

export default function ColorPickers(props) {

  const [active, setActive] = useState(false);
  const [field, setField] = useState("");
  const [value, setValue] = useState("#000");

  useEffect(
    () => {
      setActive(props.active);
        setField(props.field);
        setValue(props.value)
    },
    [props.value,props.active], // giá trị được subcrive
  );

  const handleChangeColor = (color) => {
    setValue(color);
    props.changeColorPickerValue(field, color)
  }

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
    setField("");
  });

  return (
    <div className="color_picker" style={{ display: active ? 'block' : 'none' }} ref={ref}>
      <SketchPicker onChangeComplete={(color) =>handleChangeColor(color)} color={value} />
    </div>
  );
}
