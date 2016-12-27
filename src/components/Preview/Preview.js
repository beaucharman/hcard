import React, { PropTypes } from 'react'
import styles from './Preview.styl'
import classnames from 'classnames'
import avatarDefault from './images/avatar-default.png'

const Preview = ({ avatarPreviewSrc, details }) => {
  return (
    <div className={styles.base}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>hCard Preview</h2>
        <div className={styles.card}>
          <header className={styles.header}>
            <h3 className={styles.detailName}>
              <span>{details.GIVEN_NAME}</span> <span>{details.SURNAME}</span>
            </h3>
            <figure className={styles.avatarFigure}>
              <img className={styles.avatarImage} src={avatarPreviewSrc || `./${avatarDefault}`} />
            </figure>
          </header>
          <ul className={styles.list}>
            <li className={styles.item}>
              <div className={styles.label}>Email</div>
              <div className={styles.detail}>{details.EMAIL}</div>
            </li>
            <li className={styles.item}>
              <div className={styles.label}>Phone</div>
              <div className={styles.detail}>{details.PHONE}</div>
            </li>
            <li className={styles.item}>
              <div className={styles.label}>Address</div>
              <div className={styles.detail}><span>{details.HOUSE_NUMBER}</span> <span>{details.STREET}</span></div>
              <div className={styles.detail}>
                <span>{details.SUBURB}</span>
                {details.SUBURB && details.STATE && <span>, </span>}
                <span>{details.STATE}</span></div>
            </li>
            <li className={classnames(styles.item, styles.itemPair)}>
              <div className={styles.label}>Postcode</div>
              <div className={styles.detail}>{details.POSTCODE}</div>
            </li>
            <li className={classnames(styles.item, styles.itemPair)}>
              <div className={styles.label}>Country</div>
              <div className={styles.detail}>{details.COUNTRY}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

Preview.propTypes = {
  avatarPreviewSrc: PropTypes.string,
  details: PropTypes.object,
}

export default Preview
