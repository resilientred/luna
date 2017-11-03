import React from 'react';
import {remote, ipcRenderer} from 'electron';
import styles from './Packages.css';

class PackagesListHeader extends React.Component {
  constructor(props) {
    super(props);
    this._fetch = this._fetch.bind(this);
    this._setGlobalMode = this._setGlobalMode.bind(this);
  }
  _fetch(e) {
    e.preventDefault();
    this.props.toggleLoader(true);
    this.props.loadData();
  }
  _setGlobalMode(e) {
    e.preventDefault();
    this.props.toggleLoader(true);
    this.props.setMode('GLOBAL', null);
    this.props.loadData();
  }
  render() {
    let props = this.props;
    return (
      <div style={{marginBottom:'15px'}}>
        <div className={styles.packages__head}>
          <div className={styles.packages__title}>
            <span>Packages&nbsp;</span>
            <span className="label" style={{
              display: 'inline-block',
              minWidth: '45px',
              color: '#fff'
            }}>{props.total}</span>
          </div>
          <div className={styles.packages__actions}>
            <div className={styles.packages__action}>
              <i className="fa fa-fw fa-refresh" onClick={this._fetch} title="Reload"></i>
            </div>
            <div className={`${styles.packages__action} dropdown`}>
              <i className="fa fa-fw fa-cog dropdown-toggle" data-toggle="dropdown"></i>
              <ul className="dropdown-menu dropdown-menu-right">
                <li className="dropdown-header">Actions</li>
                <li>
                  <a href="#" onClick={this._setGlobalMode}>
                    <i className="fa fa-fw fa-reply"></i>
                    <span>Switch to global mode</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.packages__mode}>
          <span className="label label-info mode">{props.mode}</span>
        </div>
      </div>
    )
  }
}

export default PackagesListHeader;
