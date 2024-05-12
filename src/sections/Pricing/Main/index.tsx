// @ts-nocheck
import React from "react";
import cn from "classnames";
import { Swiper as SwiperWrap, SwiperSlide } from "swiper/react";
import SwiperClass, { Pagination } from "swiper";
import { useTranslation } from "next-i18next";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./Main.module.scss";

import { useAppContext } from "@/context/AppContext";
import { PricePackageArr } from "@/utils/pricePackage";

const Main = () => {
  const { t, i18n } = useTranslation();
  const { setShowRequestDemo } = useAppContext();
  const [showFeeList, setShowFeeList] = React.useState<string[]>([]);
  const [swiper, setSwiper] = React.useState<SwiperClass | null>(null);
  const [activePackageSlide, setActivePackageSlide] = React.useState(0);
  const pricePackageArr = PricePackageArr();

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
          <h1 className={styles.Title}>{t("Pricing", { ns: "price" })}</h1>
          <h2 className={styles.Subtitle}>{t("SaaS Packages", { ns: "price" })}</h2>
          <p className={styles.Label}>
            {t("Monthly Fee per # of Leads/ Sign ups", { ns: "price" })}
          </p>

          <ul className={styles.Packages}>
            {pricePackageArr.map(
              (
                { id: packageId, packageTitle, packageDescr, priceMO, includes, feeList, features },
                index,
              ) => (
                <li key={packageId} className={styles.Package}>
                  <h3 className={styles.PackageTitle}>{packageTitle}</h3>
                  <p className={styles.PackageDescr}>{packageDescr}</p>
                  <div
                    className={`${styles.PriceMO} ${
                      index === pricePackageArr.length - 1 && i18n.language === "br" && styles.Pt
                    }`}
                  >
                    {priceMO.curr && priceMO.curr}
                    <span>{priceMO.value}</span>
                    {priceMO.months && "/mo"}
                    {priceMO.descr && <p className={styles.PriceMODescr}>{priceMO.descr}</p>}
                  </div>
                  <button
                    onClick={() => setShowRequestDemo(true)}
                    className={`${styles.PackageBtn} ${
                      index === pricePackageArr.length - 1 && i18n.language === "br" && styles.Pt
                    }`}
                  >
                    {t("Get Started", { ns: "buttons" })}
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

          <SwiperWrap
            onSlideChange={(swiper) => {
              setActivePackageSlide(swiper.activeIndex);
            }}
            onSwiper={(swiper) => {
              setSwiper(swiper);
            }}
            initialSlide={2}
            slidesPerView={1.2}
            centeredSlides={true}
            spaceBetween={15}
            breakpoints={{
              1200: {
                initialSlide: 0,
                centeredSlides: false,
                slidesPerView: 2.5,
                spaceBetween: 30,
              },

              992: {
                slidesPerView: 2.2,
                centeredSlides: false,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 1.8,
                centeredSlides: false,
                spaceBetween: 15,
              },
            }}
            className={cn(styles.Packages, styles.PackagesContentMobile, "mySwiper")}
          >
            {pricePackageArr.map(
              (
                { id: packageId, packageTitle, packageDescr, priceMO, includes, feeList, features },
                index,
              ) => (
                <SwiperSlide key={packageId} className={styles.Package}>
                  <h3 className={styles.PackageTitle}>{packageTitle}</h3>
                  <p className={styles.PackageDescr}>{packageDescr}</p>
                  <div
                    className={`${styles.PriceMO} ${
                      index === pricePackageArr.length - 1 && i18n.language === "br" && styles.Pt
                    }`}
                  >
                    {priceMO.curr && priceMO.curr}
                    <span>{priceMO.value}</span>
                    {priceMO.months && "/mo"}
                    {priceMO.descr && <p className={styles.PriceMODescr}>{priceMO.descr}</p>}
                  </div>

                  <button
                    onClick={() => setShowRequestDemo(true)}
                    className={`${styles.PackageBtn} ${
                      index === pricePackageArr.length - 1 && i18n.language === "br" && styles.Pt
                    }`}
                  >
                    {t("Get Started", { ns: "buttons" })}
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
          </SwiperWrap>

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

          <p className={styles.NoteAfterPrice}>{t("NoteAfterPrice1", { ns: "price" })}</p>

          <div className={styles.NoteAfterPrice}>{t("NoteAfterPrice2", { ns: "price" })}</div>

          <p className={styles.NoteAfterPrice}>{t("NoteAfterPrice3", { ns: "price" })}</p>

          <div className={styles.Table}>
            <div className={styles.TableContent}>
              <div className={styles.TableStatic}>
                <h2 className={styles.TableTitle}>{t("Features", { ns: "price" })}</h2>
                <ul className={styles.TableList}>
                  <li className={styles.TableItem}>{t("# of Reports", { ns: "price" })}</li>
                  <li className={styles.TableItem}>{t("Deals Module", { ns: "price" })}</li>
                  <li className={styles.TableItem}>
                    {t("Payment Management System", { ns: "price" })}
                  </li>
                  <li className={styles.TableItem}>{t("Compliance System", { ns: "price" })}</li>
                  <li className={styles.TableItem}>
                    {t("API connections to Affiliates/IBs", { ns: "price" })}
                  </li>
                  <li className={styles.TableItem}>
                    {t("Number of Brands/Products", { ns: "price" })}
                  </li>
                </ul>
              </div>

              <div className={styles.TableInner}>
                <div className={styles.TableCol}>
                  <h3 className={styles.FeatureTitle}>
                    <span>{t("Start Up", { ns: "price" })}</span> {t("Package", { ns: "price" })}
                  </h3>
                  <ul className={styles.TableList}>
                    <li className={styles.TableItem}>{t("Full Package", { ns: "price" })}</li>
                    <li className={styles.TableItem}>{t("Included", { ns: "price" })}</li>
                    <li className={styles.TableItem}>+ €700/mo</li>
                    <li className={styles.TableItem}>N/A</li>
                    <li className={styles.TableItem}>{t("Up to", { ns: "price" })} 3</li>
                    <li className={styles.TableItem}>1</li>
                  </ul>
                </div>

                <div className={styles.TableCol}>
                  <h3 className={styles.FeatureTitle}>
                    <span>{t("Standard", { ns: "price" })}</span> {t("Package", { ns: "price" })}
                  </h3>
                  <ul className={styles.TableList}>
                    <li className={styles.TableItem}>{t("Full Package", { ns: "price" })}</li>
                    <li className={styles.TableItem}>{t("Included", { ns: "price" })}</li>
                    <li className={styles.TableItem}>+ €250/mo</li>
                    <li className={styles.TableItem}>+ €250/mo</li>
                    <li className={styles.TableItem}>{t("Up to", { ns: "price" })} 50</li>
                    <li className={styles.TableItem}>1</li>
                  </ul>
                </div>

                <div className={styles.TableCol}>
                  <h3 className={styles.FeatureTitle}>
                    <span>{t("Premium", { ns: "price" })}</span> {t("Package", { ns: "price" })}
                  </h3>
                  <ul className={styles.TableList}>
                    <li className={styles.TableItem}>{t("Full Package", { ns: "price" })}</li>
                    <li className={styles.TableItem}>{t("Included", { ns: "price" })}</li>
                    <li className={styles.TableItem}>{t("Included", { ns: "price" })}</li>
                    <li className={styles.TableItem}>{t("Included", { ns: "price" })}</li>
                    <li className={styles.TableItem}>{t("Up to", { ns: "price" })} 500</li>
                    <li className={styles.TableItem}>1</li>
                  </ul>
                </div>

                <div className={styles.TableCol}>
                  <h3 className={styles.FeatureTitle}>
                    <span>{t("Enterprise", { ns: "price" })}</span> {t("Package", { ns: "price" })}
                  </h3>
                  <ul className={styles.TableList}>
                    <li className={styles.TableItem}>{t("Full Package", { ns: "price" })}</li>
                    <li className={styles.TableItem}>{t("Included", { ns: "price" })}</li>
                    <li className={styles.TableItem}>{t("Included", { ns: "price" })}</li>
                    <li className={styles.TableItem}>{t("Included", { ns: "price" })}</li>
                    <li className={styles.TableItem}>{t("Unlimited", { ns: "price" })}</li>
                    <li className={styles.TableItem}>{t("Unlimited", { ns: "price" })}</li>
                  </ul>
                </div>
              </div>

              <SwiperWrap
                modules={[Pagination]}
                initialSlide={2}
                pagination={{
                  type: "bullets",
                  clickable: true,
                  horizontalClass: styles.TablePag,
                  bulletClass: styles.TablePagItem,
                  bulletActiveClass: styles.TablePagItemActive,
                }}
                className={cn(styles.TableInner, styles.TableInnerMobile, "mySwiper")}
              >
                <SwiperSlide className={styles.TableCol}>
                  <h3 className={styles.FeatureTitle}>
                    {t("Start Up", { ns: "price" })}
                    <span>{t("Package", { ns: "price" })}</span>
                  </h3>
                  <ul className={styles.TableList}>
                    <li className={styles.TableItem}>{t("Full Package", { ns: "price" })}</li>
                    <li className={styles.TableItem}>{t("Included", { ns: "price" })}</li>
                    <li className={styles.TableItem}>+ €700/mo</li>
                    <li className={styles.TableItem}>N/A</li>
                    <li className={styles.TableItem}>{t("Up to", { ns: "price" })} 3</li>
                    <li className={styles.TableItem}>1</li>
                  </ul>
                </SwiperSlide>

                <SwiperSlide className={styles.TableCol}>
                  <h3 className={styles.FeatureTitle}>
                    {t("Standard", { ns: "price" })}
                    <span>{t("Package", { ns: "price" })}</span>
                  </h3>
                  <ul className={styles.TableList}>
                    <li className={styles.TableItem}>{t("Full Package", { ns: "price" })}</li>
                    <li className={styles.TableItem}>{t("Included", { ns: "price" })}</li>
                    <li className={styles.TableItem}>+ €250/mo</li>
                    <li className={styles.TableItem}>+ €250/mo</li>
                    <li className={styles.TableItem}>{t("Up to", { ns: "price" })} 50</li>
                    <li className={styles.TableItem}>1</li>
                  </ul>
                </SwiperSlide>

                <SwiperSlide className={styles.TableCol}>
                  <h3 className={styles.FeatureTitle}>
                    {t("Premium", { ns: "price" })}
                    <span>{t("Package", { ns: "price" })}</span>
                  </h3>
                  <ul className={styles.TableList}>
                    <li className={styles.TableItem}>{t("Full Package", { ns: "price" })}</li>
                    <li className={styles.TableItem}>{t("Included", { ns: "price" })}</li>
                    <li className={styles.TableItem}>{t("Included", { ns: "price" })}</li>
                    <li className={styles.TableItem}>{t("Included", { ns: "price" })}</li>
                    <li className={styles.TableItem}>{t("Up to", { ns: "price" })} 500</li>
                    <li className={styles.TableItem}>1</li>
                  </ul>
                </SwiperSlide>

                <SwiperSlide className={styles.TableCol}>
                  <h3 className={styles.FeatureTitle}>
                    {t("Enterprise", { ns: "price" })}
                    <span>{t("Package", { ns: "price" })}</span>
                  </h3>
                  <ul className={styles.TableList}>
                    <li className={styles.TableItem}>{t("Full Package", { ns: "price" })}</li>
                    <li className={styles.TableItem}>{t("Included", { ns: "price" })}</li>
                    <li className={styles.TableItem}>{t("Included", { ns: "price" })}</li>
                    <li className={styles.TableItem}>{t("Included", { ns: "price" })}</li>
                    <li className={styles.TableItem}>{t("Unlimited", { ns: "price" })}</li>
                    <li className={styles.TableItem}>{t("Unlimited", { ns: "price" })}</li>
                  </ul>
                </SwiperSlide>
              </SwiperWrap>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
