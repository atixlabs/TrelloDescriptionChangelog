import React, {
  Component
} from 'react';
import {
  render
} from 'react-dom';

import Dock from 'react-dock';
import 'arrive';
import Root from '../../app/containers/Root';
import {
  getCardHistory
} from '../../app/actions/trelloActions';

const initialState = {};
const createStore = require('../../app/store/configureStore');
const store = createStore(initialState);

function getCardId(url) {
  return url.match(/^https:\/\/trello.com\/c\/(.+)\/.+$/)[1];
}

class InjectApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
    this.buttonOnClick = this.buttonOnClick.bind(this);
  }

  buttonOnClick() {
    const nextVisibleState = !this.state.isVisible;
    this.setState({
      isVisible: nextVisibleState
    });
    if (nextVisibleState) {
      const cardId = getCardId(window.location.href);
      store.dispatch(getCardHistory(cardId));
    }
  }

  render() {
    return (
      <div>
        <button id="show-history" onClick={this.buttonOnClick}>
        </button>
        <Dock
          position="right"
          defaultSize={0.4}
          isVisible={this.state.isVisible}
          onVisibleChange={this.buttonOnClick}
          dockStyle={{ background: '#EDEFF0' }}
        >
          <Root store={store} />
        </Dock>
      </div>
    );
  }
}

const extensionClass = 'trello-history';
const showHistoryButtonClass = 'show-trello-history';
const cardDetailClass = 'card-detail-data';

function tryLoadDetailButton() {
  const detailCards = document.getElementsByClassName(cardDetailClass);
  if (detailCards.length === 0) return;
  const wasntAddedBefore = document.getElementsByClassName(showHistoryButtonClass).length === 0;
  if (wasntAddedBefore) {
    const button = document.createElement('button');
    button.className = showHistoryButtonClass;
    button.type = 'button';
    button.innerHTML = 'Show History';
    button.onclick = () => {
      document.getElementById('show-history').click();
    };
    detailCards[0].appendChild(button);
  }
}

function tryLoadExtension() {
  const detailCards = document.getElementsByClassName(extensionClass);
  if (detailCards.length === 0) {
    const injectDOM = document.createElement('div');
    injectDOM.className = extensionClass;
    injectDOM.style.textAlign = 'center';
    document.body.appendChild(injectDOM);
    render(<InjectApp />, injectDOM);
  }
  tryLoadDetailButton();
}

window.addEventListener('load', () => {
  tryLoadExtension();
});

chrome.extension.onMessage.addListener((msg) => {
  if (msg.action === 'UrlChanged') {
    tryLoadDetailButton();
  }
});

document.arrive(`.${cardDetailClass}`, () => {
  tryLoadDetailButton();
});
