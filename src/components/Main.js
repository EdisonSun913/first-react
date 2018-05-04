require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

let imageDatas = require('../data/imageDatas.json')
imageDatas = (function getJSON(arr) {
  for (let i = 0, j = arr.length; i < j; i++) {
    let singData = arr[i];
    singData.imageURL = require('../images/' + arr.fileName);
    arr[i] = singData
  }
  return arr
})(imageDatas)

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">

        </section>
        <nav className="controller-nav">

        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
