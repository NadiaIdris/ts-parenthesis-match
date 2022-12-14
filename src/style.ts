import _ = require("lodash");
// Each style property is a string, but the value is a string, number, or object
const propertyNames: { [key: string]: string } = {
  color: "color",
  backgroundColor: "background-color",
  fontSize: "font-size",
  fontWeight: "font-weight",
  padding: "padding",
  margin: "margin",
  borderRadius: "border-radius",
};

/* 
Data structure: This is how we want styles Map to look like.
Map{
  backgroundColor: {
    name: "background-color",
    value: "red",
  }
  fontSize: {
    name: "font-size",
    value: "12px",
  }
}
*/

export interface StyleInterface {
  /** Adds a property name and value to the existing style instance. */
  addProperty: (key: string, value: string) => Style;
  addStyle: (style: Style) => Style;
  formattedString(): string;
}

type AllJSProperties =
  | "color"
  | "backgroundColor"
  | "fontSize"
  | "fontWeight"
  | "padding"
  | "margin"
  | "borderRadius ";
type AllCSSProperties =
  | "color"
  | "background-color"
  | "font-size"
  | "font-weight"
  | "padding"
  | "margin"
  | "border-radius";

interface StyleProperties {
  name: AllCSSProperties;
  value: string;
}

type StylesArray = [AllJSProperties, StyleProperties];

export default class Style implements StyleInterface {
  styles: Map<string, StyleProperties> = new Map();

  constructor(obj?: any) {
    if (!obj) return;
    // Take everything passed to the consructor and pass it to the styles Map.
    for (const [key, value] of Object.entries(obj)) {
      const name = propertyNames[key] as AllCSSProperties;
      this.styles.set(key, { name: name, value: value as string });
    }
  }

  addProperty = (key: string, value: string): Style => {
    this.styles.set(key, {
      name: propertyNames[key] as AllCSSProperties,
      value: value,
    });
    return this;
  };

  addStyle = (otherStyle: Style): Style => {
    // Make a deep copy of style.
    const selfStylesCopy = this.clone().styles;
    const otherStylesCopy = otherStyle.clone().styles;
    for (const [key, value] of otherStylesCopy) {
      selfStylesCopy.set(key, value);
    }
    const newStyle = new Style();
    newStyle.styles = selfStylesCopy;
    return newStyle;
  };

  clone = (): Style => {
    // Break binding to `this` (of this instance of Style).
    const temp: StylesArray[] = JSON.parse(JSON.stringify([...this.styles])); // Returns an array of arrays. [['padding', {name: 'padding', value: '10px'}}], [...], ...]
    console.log(temp);
    // Convert the array of arrays to an object which we can pass to the Style constructor => {backgroundColor: "red", fontSize: "12px"}
    const styleObj: Partial<Record<AllJSProperties, string>> = {};
    temp.forEach((style) => {
      const key = style[0];
      const value = style[1];
      styleObj[key] = value.value;
    });
    return new Style(styleObj);
  };

  formattedString = (): string => {
    // If the Map is empty, return an empty string.
    if (this.styles.size === 0) return "";

    let arrOfStr = [];
    for (const value of this.styles.values()) {
      arrOfStr.push(`  ${value.name}: ${value.value}`);
    }

    // Both returns generate the same string output. The second return is using string template literal.
    // return "{\n" + arrOfStr.join(";\n") + ";" + "\n}";
    return `{\n${arrOfStr.join(";\n")};\n}`;
  };
}

const style = new Style({ color: "red", backgroundColor: "blue" });
console.log(style.formattedString());
