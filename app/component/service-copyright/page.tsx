import { Fragment } from "react";
import styles from "./copyrightservice.module.css"
export default function ServiceCopyrights(){
    return(
    <Fragment>
      <footer className={styles.footer}>
        <div className={`${styles.container} largeContainer`}>
          <div className="row"></div>
        </div>
      </footer>

      <section className={styles.copyright}>
        <div className={`${styles.container} largeContainer`}>
          <div className="row">
            <div className="col-md-6">
              <p>
                © Copyrights Solverines Technology Solutions Pvt. Ltd. 2024. All rights reserved.
              </p>
            </div>
            <div className="col-md-6">
              <div className={styles.copyMenu}>
                <ul>
                  <li><a>Home</a> </li>
                  <li><a>Outsystems</a></li>
                  <li><a>Contact</a> </li>
                  <li><a>About</a> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
        </Fragment>
    );
}