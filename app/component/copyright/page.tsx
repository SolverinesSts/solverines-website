import { Fragment } from "react";
import styles from "./copyright.module.css";
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import Image from "next/image";

export default function Copyrights(){
    return(
        <Fragment>
          <div className={styles.footrow}>
           <div >
            <div className={styles.aboutWidget}>
              <h1>Are you looking for a passionate and reliable IT solutions partner?</h1>
              <div className={styles.phone}>
                <div className={styles.ficon}> <CallOutlinedIcon sx={{color:"rgb(116,40,148) ",fontSize:"40px"}} /></div>
                <div className={styles.fphn}> +91 7550042242</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className={styles.fdivider}></div>
            </div>
          </div>
          <div className={styles.copyrightrow}>
            <div className="col-md-6">
              <p className={styles.copyText}>
                © Copyrights Solverines Technology Solutions Pvt. Ltd. 2024. All rights reserved.
              </p>
            </div>
              <div className={styles.copyMenu}>
                <ul>
                  <li><a href="javascript:void(0);">Home</a></li>
                  <li><a href="javascript:void(0);">Outsystems</a></li>
                  <li><a href="javascript:void(0);">Contact</a></li>
                  <li><a href="javascript:void(0);">About</a></li>
                </ul>
              </div>
          </div>
        </div>
        </Fragment>
    );
}