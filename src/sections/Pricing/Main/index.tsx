import React from "react";

import styles from "./Main.module.scss";
import { useAppContext } from "@/context/AppContext";

const Main = () => {
  const { setShowRequestDemo } = useAppContext();
  return (
    <section className={styles.Section}>
      <div className="container">
        <div className={styles.SectionWrapper}>
          <h1 className={styles.Title}>Pricing</h1>
          <h2 className={styles.Subtitle}>SaaS Packages</h2>
          <p className={styles.Label}>Monthly Fee per # of Leads/ Sign ups</p>
          <p className={styles.Note}>
            *Setup fee may vary pending on system analysis, complexity & client&apos;s requirements
          </p>

          <ul className={styles.Packages}>
            <li className={styles.Package}>
              <h3 className={styles.PackageTitle}>Start Up</h3>
              <p className={styles.PackageDescr}>
                Suitable for small businesses with a limited budget.
              </p>
              <div className={styles.PriceWrap}>
                <span>Free</span>
              </div>
              <p className={styles.PackageDescr}>Postbacks Only</p>

              <button onClick={() => setShowRequestDemo(true)} className={styles.PackageBtn}>
                Get Started
              </button>

              <ul className={styles.Including}>
                <li className={styles.IncludingItem}>
                  <div className={styles.IncludingTitle}>
                    Integration to CRM
                    <span>(On Demand)</span>
                  </div>
                  <div className={styles.Checkmark}></div>
                </li>

                <li className={styles.IncludingItem}>
                  <div className={styles.IncludingTitle}>Trading & Website</div>
                  <div className={styles.Checkmark}></div>
                </li>

                <li className={styles.IncludingItem}>
                  <div className={styles.IncludingTitle}>Training</div>
                  <div className={styles.Checkmark}></div>
                </li>

                <li className={styles.IncludingItem}>
                  <div className={styles.IncludingTitle}>Migration</div>
                  <div className={styles.IncludingPrice}>1,000 - 5,000</div>
                </li>
              </ul>

              <div className={styles.Divider}></div>

              <div className={styles.PriceMO}>
                $<span>199</span>/mo
              </div>
              <p className={styles.PriceMODescr}>(Prepaid for 3 months)</p>

              <ul className={styles.Features}>
                <li className={styles.Feature}>
                  Up to <span>500</span> Leads per month
                </li>
                <li className={styles.Feature}>
                  Basic cloud storage and server hosting for 1 user
                </li>
                <li className={styles.Feature}>Limited customer support</li>
              </ul>
            </li>

            <li className={styles.Package}>
              <h3 className={styles.PackageTitle}>Standard</h3>
              <p className={styles.PackageDescr}>Suitable for medium-sized businesses.</p>
              <div className={styles.PriceWrap}>
                <p className={styles.PackagePrice}>$</p>
                <span>2,500</span>
              </div>
              <p className={styles.PackageDescr}>Setup fee</p>

              <button onClick={() => setShowRequestDemo(true)} className={styles.PackageBtn}>
                Get Started
              </button>

              <ul className={styles.Including}>
                <li className={styles.IncludingItem}>
                  <div className={styles.IncludingTitle}>
                    Integration to CRM
                    <span>(On Demand)</span>
                  </div>
                  <div className={styles.Checkmark}></div>
                </li>

                <li className={styles.IncludingItem}>
                  <div className={styles.IncludingTitle}>Trading & Website</div>
                  <div className={styles.Checkmark}></div>
                </li>

                <li className={styles.IncludingItem}>
                  <div className={styles.IncludingTitle}>Training</div>
                  <div className={styles.Checkmark}></div>
                </li>

                <li className={styles.IncludingItem}>
                  <div className={styles.IncludingTitle}>Migration</div>
                  <div className={styles.IncludingPrice}>1,000 - 5,000</div>
                </li>
              </ul>

              <div className={styles.Divider}></div>

              <div className={styles.PriceMO}>
                $<span>1,450</span>/mo
              </div>

              <ul className={styles.Features}>
                <li className={styles.Feature}>
                  Up to <span>2,500</span> Leads per month
                </li>
                <li className={styles.Feature}>
                  Increased storage and server hosting for up to 5 users
                </li>
                <li className={styles.Feature}>Priority customer support</li>
              </ul>
            </li>

            <li className={styles.Package}>
              <h3 className={styles.PackageTitle}>Premium</h3>
              <p className={styles.PackageDescr}>
                Suitable for larger businesses with more complex needs.
              </p>
              <div className={styles.PriceWrap}>
                <p className={styles.PackagePrice}>$</p>
                <span>4,000</span>
              </div>
              <p className={styles.PackageDescr}>Setup fee</p>

              <button onClick={() => setShowRequestDemo(true)} className={styles.PackageBtn}>
                Get Started
              </button>

              <ul className={styles.Including}>
                <li className={styles.IncludingItem}>
                  <div className={styles.IncludingTitle}>
                    Integration to CRM
                    <span>(On Demand)</span>
                  </div>
                  <div className={styles.Checkmark}></div>
                </li>

                <li className={styles.IncludingItem}>
                  <div className={styles.IncludingTitle}>Trading & Website</div>
                  <div className={styles.Checkmark}></div>
                </li>

                <li className={styles.IncludingItem}>
                  <div className={styles.IncludingTitle}>Training</div>
                  <div className={styles.Checkmark}></div>
                </li>

                <li className={styles.IncludingItem}>
                  <div className={styles.IncludingTitle}>Migration</div>
                  <div className={styles.IncludingPrice}>1,000 - 5,000</div>
                </li>
              </ul>

              <div className={styles.Divider}></div>

              <div className={styles.PriceMO}>
                $<span>2,950</span>/mo
              </div>

              <ul className={styles.Features}>
                <li className={styles.Feature}>
                  Up to <span>10,000</span> Leads per month
                </li>
                <li className={styles.Feature}>
                  Advanced cloud storage and server hosting for up to 10 users
                </li>
                <li className={styles.Feature}>Dedicated account manager during working hours</li>
              </ul>
            </li>

            <li className={styles.Package}>
              <h3 className={styles.PackageTitle}>Enterprise</h3>
              <p className={styles.PackageDescr}>
                Suitable for large businesses with extensive requirements.
              </p>

              <div className={styles.PriceWrap}>
                <span>Call Us</span>
              </div>
              <p className={styles.PackageDescr}>Setup fee</p>

              <button onClick={() => setShowRequestDemo(true)} className={styles.PackageBtn}>
                Get Started
              </button>

              <ul className={styles.Including}>
                <li className={styles.IncludingItem}>
                  <div className={styles.IncludingTitle}>
                    Integration to CRM
                    <span>(On Demand)</span>
                  </div>
                  <div className={styles.Checkmark}></div>
                </li>

                <li className={styles.IncludingItem}>
                  <div className={styles.IncludingTitle}>Trading & Website</div>
                  <div className={styles.Checkmark}></div>
                </li>

                <li className={styles.IncludingItem}>
                  <div className={styles.IncludingTitle}>Training</div>
                  <div className={styles.Checkmark}></div>
                </li>

                <li className={styles.IncludingItem}>
                  <div className={styles.IncludingTitle}>Migration</div>
                  <div className={styles.IncludingPrice}>Call Us</div>
                </li>
              </ul>

              <div className={styles.Divider}></div>

              <div className={styles.PriceMO}>
                <span>Call Us</span>
              </div>

              <ul className={styles.Features}>
                <li className={styles.Feature}>
                  <span>Unlimited</span> Leads per month
                </li>
                <li className={styles.Feature}>Customized cloud platform</li>
                <li className={styles.Feature}>Unlimited storage and server hosting</li>
                <li className={styles.Feature}>
                  Dedicated technical account manager and personalized service
                </li>
              </ul>
            </li>
          </ul>

          <p className={styles.NoteAfterPrice}>
            *All packages include <span>10M</span> impressions/ mo & <span>4M</span> clicks/ mo.
            Above, $0.06 per additional <span>1000 impressions</span> & $0.5 per additional 1000
            clicks.
          </p>

          <div className={styles.Table}>
            <div className={styles.TableStatic}>
              <h2 className={styles.TableTitle}>Features</h2>
              <ul className={styles.TableList}>
                <li className={styles.TableItem}># of Reports</li>
                <li className={styles.TableItem}>Deals Module</li>
                <li className={styles.TableItem}>Payment Management System</li>
                <li className={styles.TableItem}>Compliance System</li>
                <li className={styles.TableItem}>API connections to Affiliates/IBs</li>
                <li className={styles.TableItem}>Number of Brands/Products</li>
              </ul>
            </div>

            <div className={styles.TableContant}>
              <div className={styles.TableInner}>
                <div className={styles.TableCol}>
                  <h3 className={styles.FeatureTitle}>
                    <span>Start Up</span> Package
                  </h3>
                  <ul className={styles.TableList}>
                    <li className={styles.TableItem}>Full Package</li>
                    <li className={styles.TableItem}>Included</li>
                    <li className={styles.TableItem}>+ $700/mo</li>
                    <li className={styles.TableItem}>N/A</li>
                    <li className={styles.TableItem}>Up to 3</li>
                    <li className={styles.TableItem}>1</li>
                  </ul>
                </div>

                <div className={styles.TableCol}>
                  <h3 className={styles.FeatureTitle}>
                    <span>Standard</span> Package
                  </h3>
                  <ul className={styles.TableList}>
                    <li className={styles.TableItem}>Full Package</li>
                    <li className={styles.TableItem}>Included</li>
                    <li className={styles.TableItem}>+ $250/mo</li>
                    <li className={styles.TableItem}>+ $250/mo</li>
                    <li className={styles.TableItem}>Up to 50</li>
                    <li className={styles.TableItem}>1</li>
                  </ul>
                </div>

                <div className={styles.TableCol}>
                  <h3 className={styles.FeatureTitle}>
                    <span>Premium</span> Package
                  </h3>
                  <ul className={styles.TableList}>
                    <li className={styles.TableItem}>Full Package</li>
                    <li className={styles.TableItem}>Included</li>
                    <li className={styles.TableItem}>Included</li>
                    <li className={styles.TableItem}>Included</li>
                    <li className={styles.TableItem}>Up to 500</li>
                    <li className={styles.TableItem}>1</li>
                  </ul>
                </div>

                <div className={styles.TableCol}>
                  <h3 className={styles.FeatureTitle}>
                    <span>Enterprise</span> Package
                  </h3>
                  <ul className={styles.TableList}>
                    <li className={styles.TableItem}>Full Package</li>
                    <li className={styles.TableItem}>Included</li>
                    <li className={styles.TableItem}>Included</li>
                    <li className={styles.TableItem}>Included</li>
                    <li className={styles.TableItem}>Unlimited</li>
                    <li className={styles.TableItem}>Unlimited</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
