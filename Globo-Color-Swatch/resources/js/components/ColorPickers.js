import React, { Component, useCallback, useState, useEffect, useRef } from 'react';
import { SketchPicker } from 'react-color';
import UseOutsideClick from "./UseOutsideClick";

export default function ColorPickers(props) {

  const [active, setActive] = useState(false);
  const [field, setField] = useState("");
  const [value, setValue] = useState("#000");
  const [position, setPosition] = useState({
    top: 0,
    left: 0
  });

  useEffect(
    () => {
      setActive(props.active);
        setField(props.field);
        setValue(props.value);
        setPosition({
          top: props.position.top,
          left: props.position.left,
        })
    },
    [props.value,props.active,props.position], // giá trị được subcrive
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
    props.closeColorPicker();
  });

  return (
    <div className="color_picker" style={{ display: active ? 'block' : 'none',top: (position.top + 35), left: position.left }} ref={ref}>
      <SketchPicker onChangeComplete={(color) =>handleChangeColor(color)} color={value} />
    </div>
  );
}
