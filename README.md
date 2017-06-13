# React Checkbox using Typescript

This is a react based checkbox component developed using Typescript.  
Inspired from [Material-UI](https://github.com/callemall/material-ui).

## Snapshot
![Snapshot of Checkboxes](https://github.com/georgeneil/react-typescript-checkbox/blob/master/snapshot/snapshot.PNG)

## Features
  - [x] Pass the Label Value
  - [x] Pass Custom Style's
  - [x] Customize Icon's in the form of SVG's
  - [x] Pass Default Value
  - [ ] Ripple Animation Effects
  - [ ] Label position - Left/Right
  - [ ] Pass disabled mode Styles

```typescript
interface Props extends React.Props<Checkbox> {
    label : string;
    style: any;
    defaultChecked?: boolean;
    checkedIcon?: any;
    uncheckedIcon?: any;
};
```

## Usage

### Basic:

```jsx
const styles = {
  checkbox: {
    marginBottom: 16
  }
};
<Checkbox label="Simple" style={styles.checkbox}/>
```
The above example demonstrates the following:
- How to pass custom label
- How to pass custom style
- Shows the default checked, un-checked icons

### Further Customization

```jsx
const styles = {
  checkbox: {
    marginBottom: 16
  }
};
<Checkbox label="Custom icon" style={styles.checkbox} uncheckedIcon={} checkedIcon={} />
```

The above example demonstrates the following:
- How to pass custom label
- How to pass custom style
- How to pass custom icon's
- Can use any svg-image as icons for checked, un-checked icons

## To install dependencies
```
npm install
```
## To run in development mode
```
npm start
```
## To build the pages
```
npm run build
```
## Contributing
Contributions are always welcome. Just send a pull request. Feel free to contact me [GitHub](https://github.com/georgeneil).

## License

MIT License
