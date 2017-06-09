import * as React from 'react';

import Checkbox from './components/checkbox/Checkbox';
import ActionFavorite from './components/svg-icons/Favorite';
import ActionFavoriteBorder from './components/svg-icons/FavoriteBorder';
import ActionPair1Cross from './components/svg-icons/Pair1Cross';
import ActionPair1Tick from './components/svg-icons/Pair1Tick';

interface Props extends React.Props<App> {
}
const styles = {
  block: {
    maxWidth: 250,
    padding: 20
  },
  checkbox: {
    marginBottom: 16
  }
};

export default class App extends React.Component<Props, {}> {
  public render() {
    return (
      <div>
        <h1>React Component using Typescript</h1>
        <h2>Checkbox</h2>
        <div style={styles.block}>
          <Checkbox label="Simple" style={styles.checkbox}/>
          <Checkbox
            checkedIcon={< ActionFavorite />}
            uncheckedIcon={< ActionFavoriteBorder />}
            label="Favourite Icon"
            style={styles.checkbox}/>
          <Checkbox
            checkedIcon={< ActionPair1Cross />}
            uncheckedIcon={< ActionPair1Tick />}
            label="Custom Icon"
            style={styles.checkbox}/>
          <Checkbox label="Default Checked" style={styles.checkbox} defaultChecked={true}/>
        </div>
      </div>
    );
  }
}
