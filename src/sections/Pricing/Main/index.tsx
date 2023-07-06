import React from "react";
import cn from "classnames";
import { Swiper as SwiperWrapp, SwiperSlide } from "swiper/react";
import Swiper from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import styles from "./Main.module.scss";

import { useAppContext } from "@/context/AppContext";
import { pricePackageArr } from "@/utils/pricePackage";

const Main = () => {
  const { setShowRequestDemo } = useAppContext();
  const [showFeeList, setShowFeeList] = React.useState<string[]>([]);
  const [swiper, setSwiper] = React.useState<Swiper | null>(null);
  const [activePackageSlide, setActivePackageSlide] = React.useState(0);

  const onSetShowFeeList = (id: string) => {
    if (showFeeList.includes(id)) {
      setShowFeeList(showFeeList.filter((i) => i !== id));
    } else {
      setShowFeeList([...showFeeList, id]);
    }
  };

  return (
    <section className={styles.Section}>
      <div className="container">
        <div className={styles.SectionWrapper}>
          <h1 className={styles.Title}>Pricing</h1>
          <h2 className={styles.Subtitle}>SaaS Packages</h2>
          <p className={styles.Label}>Monthly Fee per # of Leads/ Sign ups</p>

          <ul className={styles.Packages}>
            {pricePackageArr.map(
              (
                { id: packageId, packageTitle, packageDescr, priceMO, includes, feeList, features },
                index,
              ) => (
                <li key={packageId} className={styles.Package}>
                  <h3 className={styles.PackageTitle}>{packageTitle}</h3>
                  <p className={styles.PackageDescr}>{packageDescr}</p>
                  <div className={styles.PriceMO}>
                    {priceMO.curr && priceMO.curr}
                    <span>{priceMO.value}</span>
                    {priceMO.months && "/mo"}
                    {priceMO.descr && <p className={styles.PriceMODescr}>{priceMO.descr}</p>}
                  </div>

                  <button onClick={() => setShowRequestDemo(true)} className={styles.PackageBtn}>
                    Get Started
                  </button>

                  <ul className={styles.Including}>
                    {includes.map((include, index) => (
                      <li key={index} className={styles.IncludingItem}>
                        <div className={styles.IncludingTitle}>
                          {include.title}{" "}
                          {include.id === "Setup fee" && (
                            <span
                              tabIndex={0}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") onSetShowFeeList(packageId);
                              }}
                              onClick={() => onSetShowFeeList(packageId)}
                            >
                              {showFeeList.includes(packageId) ? "-" : "+"}
                            </span>
                          )}
                          {include.id === "Setup fee" && (
                            <ul
                              className={cn(styles.FeeList, {
                                [styles.FeeListActive]: showFeeList.includes(packageId),
                              })}
                            >
                              {feeList.map((fee, j) => (
                                <li
                                  key={j}
                                  className={cn(styles.FeeItem, {
                                    [styles.FeeItemActive]: showFeeList.includes(packageId),
                                  })}
                                >
                                  {fee}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                        <div className={styles.IncludingText}>
                          {include.text && include.text}{" "}
                          <span className={cn({ [styles.Currency]: include.curr })}>
                            {include.value}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div
                    className={cn(styles.Divider, {
                      [styles.DividerActive]: showFeeList.includes(packageId),
                    })}
                  ></div>

                  <ul className={styles.Features}>
                    {features.map((feature, index) => (
                      <li key={index} className={styles.Feature}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </li>
              ),
            )}
          </ul>

          <SwiperWrapp
            onSlideChange={(swiper) => {
              setActivePackageSlide(swiper.activeIndex);
            }}
            onSwiper={(swiper) => {
              setSwiper(swiper);
            }}
            wrapperClass={styles.PackagesWrapperMobile}
            centeredSlides={true}
            spaceBetween={30}
            className={cn(styles.PackagesContentMobile, "mySwiper")}
          >
            {pricePackageArr.map(
              ({
                id: packageId,
                packageTitle,
                packageDescr,
                priceMO,
                includes,
                feeList,
                features,
              }) => (
                <SwiperSlide key={packageId} className={styles.Package}>
                  <h3 className={styles.PackageTitle}>{packageTitle}</h3>
                  <p className={styles.PackageDescr}>{packageDescr}</p>
                  <div className={styles.PriceMO}>
                    {priceMO.curr && priceMO.curr}
                    <span>{priceMO.value}</span>
                    {priceMO.months && "/mo"}
                    {priceMO.descr && <p className={styles.PriceMODescr}>{priceMO.descr}</p>}
                  </div>

                  <button onClick={() => setShowRequestDemo(true)} className={styles.PackageBtn}>
                    Get Started
                  </button>

                  <ul className={styles.Including}>
                    {includes.map((include, index) => (
                      <li key={index} className={styles.IncludingItem}>
                        <div className={styles.IncludingTitle}>
                          {include.title}{" "}
                          {include.id === "Setup fee" && (
                            <span
                              tabIndex={0}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") onSetShowFeeList(packageId);
                              }}
                              onClick={() => onSetShowFeeList(packageId)}
                            >
                              {showFeeList.includes(packageId) ? "-" : "+"}
                            </span>
                          )}
                          {include.id === "Setup fee" && (
                            <ul
                              className={cn(styles.FeeList, {
                                [styles.FeeListActive]: showFeeList.includes(packageId),
                              })}
                            >
                              {feeList.map((fee, j) => (
                                <li
                                  key={j}
                                  className={cn(styles.FeeItem, {
                                    [styles.FeeItemActive]: showFeeList.includes(packageId),
                                  })}
                                >
                                  {fee}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                        <div className={styles.IncludingText}>
                          {include.text && include.text}{" "}
                          <span className={cn({ [styles.Currency]: include.curr })}>
                            {include.value}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div
                    className={cn(styles.Divider, {
                      [styles.DividerActive]: showFeeList.includes(packageId),
                    })}
                  ></div>

                  <ul className={styles.Features}>
                    {features.map((feature, index) => (
                      <li key={index} className={styles.Feature}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </SwiperSlide>
              ),
            )}
          </SwiperWrapp>

          <ul className={styles.PackagesPagination}>
            {pricePackageArr.map((_, index) => (
              <li
                key={index}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    swiper?.slideTo(index);
                  }
                }}
                onClick={() => swiper?.slideTo(index)}
                className={cn(styles.PackagesPaginationItem, {
                  [styles.PackagesPaginationItemActive]: activePackageSlide === index,
                })}
              ></li>
            ))}
          </ul>

          <p className={styles.NoteAfterPrice}>
            All packages include 10M impressions/ mo & 4M clicks/ mo. Above, $0.06 per additional
            1000 impressions & $0.5 per additional 1000 clicks.
          </p>

          <div className={styles.NoteAfterPrice}>
            *Setup fee may vary pending on system analysis, complexity & client&apos;s requirements
          </div>

          <p className={styles.NoteAfterPrice}>
            **The quoted Integration and Migration costs apply only if client data is ready for
            immediate use. Extra charges may apply for data processing, currency conversion, or
            consolidation from multiple sources.
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
