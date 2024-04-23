import React from 'react';
import Column from "./Column";
import styles from "./MainWrap.module.css";

import { Link } from 'react-router-dom';


const SamplePage = () => {



  return (
    <form className={styles.mainWrap}>
      <main className={styles.main}>
        <header className={styles.headerSection}>
          <div className={styles.container}>
            <div className={styles.pageHeader}>
              <div className={styles.content}>
                <div className={styles.textAndSupportingText}>
                  <h1
                    className={styles.inputDropdownBase}
                  >{`Welcome back, Olivia `}</h1>
                  <div className={styles.supportingText}>
                    Track, manage and forecast your projects
                  </div>
                </div>
                <div className={styles.actions}>
                  <button className={styles.button1}>
                    <button className={styles.buttonBase3}>
                      <img className={styles.plusIcon} alt="" src="/plus.svg" />
                      <div className={styles.text3}>Add Project</div>
                    </button>
                  </button>
                </div>
                <div className={styles.inputDropdownBase1}>
                  <div className={styles.inputWithLabel}>
                    <div className={styles.input}>
                      <div className={styles.content1}>
                        <img
                          className={styles.searchIcon}
                          alt=""
                          src="/search.svg" />
                        <div className={styles.tableRow}>Search</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className={styles.header}>
          
          <Link className={styles.tableRow1} to={"/sample-page/details"}>
            <div className={styles.details}>Clients</div>
          </Link>
          
          <Link className={styles.tableRow2} to={"/sample-page"}>
            <div className={styles.financials}>Financials</div>
          </Link>
          <div className={styles.tableRow3}>
            <div className={styles.deliverables}>Deliverables</div>
          </div>
          <div className={styles.tableRow4}>
            <div className={styles.supportingDocument}>Supporting Document</div>
          </div>
          <div className={styles.tableRow5}>
            <div className={styles.correspondence}>Correspondence</div>
          </div>
          <div className={styles.tableRow6}>
            <div className={styles.equipment}>Equipment</div>
          </div>
          <div className={styles.tableRow7}>
            <div className={styles.sample}>Sample</div>
          </div>
        </div>
        <section className={styles.content2}>
          <div className={styles.column}>
            <div className={styles.tableHeaderCell}>
              <div className={styles.tableHeader}>
                <div className={styles.tableRow8}>Date Created</div>
              </div>
            </div>
            <div className={styles.tableCell}>
              <div className={styles.tableRow9}>7 Mar24</div>
            </div>
            <div className={styles.tableCell1}>
              <div className={styles.personDataCell}>7 Mar24</div>
            </div>
            <div className={styles.tableCell2}>
              <div className={styles.personDataCell1}>7 Mar24</div>
            </div>
            <div className={styles.tableCell3}>
              <div className={styles.personDataCell2}>7 Mar24</div>
            </div>
            <div className={styles.tableCell4}>
              <div className={styles.personDataCell3}>7 Mar24</div>
            </div>
            <div className={styles.tableCell5}>
              <div className={styles.personDataCell4}>7 Mar24</div>
            </div>
            <div className={styles.tableCell6}>
              <div className={styles.personDataCell5}>7 Mar24</div>
            </div>
            <div className={styles.tableCell7}>
              <div className={styles.personDataCell6}>7 Mar24</div>
            </div>
            <div className={styles.tableCell8}>
              <div className={styles.personDataCell7}>7 Mar24</div>
            </div>
            <div className={styles.tableCell9}>
              <div className={styles.column1}>7 Mar24</div>
            </div>
          </div>
          <div className={styles.column2}>
            <div className={styles.tableHeaderCell1}>
              <div className={styles.tableHeader1}>
                <div className={styles.text4}>Record Name</div>
                <img
                  className={styles.arrowDownIcon}
                  alt=""
                  src="/arrowdown.svg" />
              </div>
            </div>
            <div className={styles.tableCell10}>
              <div className={styles.tableHeaderCell2}>Olivia Rhye</div>
            </div>
            <div className={styles.tableCell11}>
              <div className={styles.text5}>Olivia Rhye</div>
            </div>
            <div className={styles.tableCell12}>
              <div className={styles.text6}>Olivia Rhye</div>
            </div>
            <div className={styles.tableCell13}>
              <div className={styles.text7}>Olivia Rhye</div>
            </div>
            <div className={styles.tableCell14}>
              <div className={styles.text8}>Olivia Rhye</div>
            </div>
            <div className={styles.tableCell15}>
              <div className={styles.text9}>Olivia Rhye</div>
            </div>
            <div className={styles.tableCell16}>
              <div className={styles.text10}>Olivia Rhye</div>
            </div>
            <div className={styles.tableCell17}>
              <div className={styles.text11}>Olivia Rhye</div>
            </div>
            <div className={styles.tableCell18}>
              <div className={styles.text12}>Olivia Rhye</div>
            </div>
            <div className={styles.tableCell19}>
              <div className={styles.text13}>Olivia Rhye</div>
            </div>
          </div>
          <div className={styles.column3}>
            <div className={styles.tableHeaderCell3}>
              <div className={styles.tableHeader2}>
                <div className={styles.text14}>Record Type</div>
              </div>
            </div>
            <div className={styles.tableCell20}>
              <div className={styles.text15}>Lorem Ipsum</div>
            </div>
            <div className={styles.tableCell21}>
              <div className={styles.text16}>Lorem Ipsum</div>
            </div>
            <div className={styles.tableCell22}>
              <div className={styles.text17}>Lorem Ipsum</div>
            </div>
            <div className={styles.tableCell23}>
              <div className={styles.text18}>Lorem Ipsum</div>
            </div>
            <div className={styles.tableCell24}>
              <div className={styles.text19}>Lorem Ipsum</div>
            </div>
            <div className={styles.tableCell25}>
              <div className={styles.text20}>Lorem Ipsum</div>
            </div>
            <div className={styles.tableCell26}>
              <div className={styles.text21}>Lorem Ipsum</div>
            </div>
            <div className={styles.tableCell27}>
              <div className={styles.text22}>Lorem Ipsum</div>
            </div>
            <div className={styles.tableCell28}>
              <div className={styles.text23}>Lorem Ipsum</div>
            </div>
            <div className={styles.tableCell29}>
              <div className={styles.text24}>Lorem Ipsum</div>
            </div>
          </div>
          <div className={styles.column4}>
            <div className={styles.tableHeaderCell4}>
              <div className={styles.tableHeader3}>
                <div className={styles.text25}>Project Number</div>
              </div>
            </div>
            <div className={styles.tableCell30}>
              <div className={styles.oliviauntitleduicom}>
                olivia@untitledui.com
              </div>
            </div>
            <div className={styles.tableCell31}>
              <div className={styles.phoenixuntitleduicom}>
                phoenix@untitledui.com
              </div>
            </div>
            <div className={styles.tableCell32}>
              <div className={styles.lanauntitleduicom}>
                lana@untitledui.com
              </div>
            </div>
            <div className={styles.tableCell33}>
              <div className={styles.demiuntitleduicom}>
                demi@untitledui.com
              </div>
            </div>
            <div className={styles.tableCell34}>
              <div className={styles.candiceuntitleduicom}>
                candice@untitledui.com
              </div>
            </div>
            <div className={styles.tableCell35}>
              <div className={styles.nataliuntitleduicom}>
                natali@untitledui.com
              </div>
            </div>
            <div className={styles.tableCell36}>
              <div className={styles.drewuntitleduicom}>
                drew@untitledui.com
              </div>
            </div>
            <div className={styles.tableCell37}>
              <div className={styles.orlandountitleduicom}>
                orlando@untitledui.com
              </div>
            </div>
            <div className={styles.tableCell38}>
              <div className={styles.andiuntitleduicom}>
                andi@untitledui.com
              </div>
            </div>
            <div className={styles.tableCell39}>
              <div className={styles.kateuntitleduicom}>
                kate@untitledui.com
              </div>
            </div>
          </div>
          <div className={styles.column5}>
            <div className={styles.tableHeaderCell5}>
              <div className={styles.tableHeader4}>
                <div className={styles.text26}>Project Name</div>
              </div>
            </div>
            <div className={styles.tableCell40}>
              <div className={styles.badges}>
                <div className={styles.badge}>
                  <div className={styles.badgeBase}>
                    <div className={styles.text27}>De</div>
                  </div>
                </div>
                {/* <div className={styles.badge1}>
              <div className={styles.badgeBase1}>
                <div className={styles.text28}>Product</div>
              </div>
            </div>
            <div className={styles.badge2}>
              <div className={styles.badgeBase2}>
                <div className={styles.text29}>Marketing</div>
              </div>
            </div>
            <div className={styles.badge3}>
              <div className={styles.badgeBase3}>
                <div className={styles.text30}>Label</div>
              </div>
            </div>
            <div className={styles.badge4}>
              <div className={styles.badgeBase4}>
                <div className={styles.text31}>Label</div>
              </div>
            </div>
            <div className={styles.badge5}>
              <div className={styles.badgeBase5}>
                <div className={styles.text32}>+hjuhiukh</div>
              </div>
            </div> */}
              </div>
            </div>
            <div className={styles.tableCell41}>
              <div className={styles.badges1}>
                <div className={styles.badge6}>
                  <div className={styles.badgeBase6}>
                    <div className={styles.text33}>D</div>
                  </div>
                </div>
                {/* <div className={styles.badge7}>
              <div className={styles.badgeBase7}>
                <div className={styles.text34}>Product</div>
              </div>
            </div>
            <div className={styles.badge8}>
              <div className={styles.badgeBase8}>
                <div className={styles.text35}>Marketing</div>
              </div>
            </div>
            <div className={styles.badge9}>
              <div className={styles.badgeBase9}>
                <div className={styles.text36}>Label</div>
              </div>
            </div>
            <div className={styles.badge10}>
              <div className={styles.badgeBase10}>
                <div className={styles.text37}>Label</div>
              </div>
            </div>
            <div className={styles.badge11}>
              <div className={styles.badgeBase11}>
                <div className={styles.text38}>+4</div>
              </div>
            </div> */}
              </div>
            </div>
            <div className={styles.tableCell42}>
              <div className={styles.badges2}>
                <div className={styles.badge12}>
                  <div className={styles.badgeBase12}>
                    <div className={styles.text39}>Desihjbyujnjgn</div>
                  </div>
                </div>
                {/* <div className={styles.badge13}>
              <div className={styles.badgeBase13}>
                <div className={styles.text40}>Product</div>
              </div>
            </div>
            <div className={styles.badge14}>
              <div className={styles.badgeBase14}>
                <div className={styles.text41}>Marketing</div>
              </div>
            </div>
            <div className={styles.badge15}>
              <div className={styles.badgeBase15}>
                <div className={styles.text42}>Label</div>
              </div>
            </div>
            <div className={styles.badge16}>
              <div className={styles.badgeBase16}>
                <div className={styles.text43}>Label</div>
              </div>
            </div>
            <div className={styles.badge17}>
              <div className={styles.badgeBase17}>
                <div className={styles.text44}>+4</div>
              </div>
            </div> */}
              </div>
            </div>
            <div className={styles.tableCell43}>
              <div className={styles.badges3}>
                <div className={styles.badge18}>
                  <div className={styles.badgeBase18}>
                    <div className={styles.text45}>Dehgh</div>
                  </div>
                </div>
                {/* <div className={styles.badge19}>
              <div className={styles.badgeBase19}>
                <div className={styles.text46}>Product</div>
              </div>
            </div>
            <div className={styles.badge20}>
              <div className={styles.badgeBase20}>
                <div className={styles.text47}>Marketing</div>
              </div>
            </div>
            <div className={styles.badge21}>
              <div className={styles.badgeBase21}>
                <div className={styles.text48}>Label</div>
              </div>
            </div>
            <div className={styles.badge22}>
              <div className={styles.badgeBase22}>
                <div className={styles.text49}>Label</div>
              </div>
            </div>
            <div className={styles.badge23}>
              <div className={styles.badgeBase23}>
                <div className={styles.text50}>+4</div>
              </div>
            </div> */}
              </div>
            </div>
            <div className={styles.tableCell44}>
              <div className={styles.badges4}>
                <div className={styles.badge24}>
                  <div className={styles.badgeBase24}>
                    <div className={styles.text51}>87676</div>
                  </div>
                </div>
                {/* <div className={styles.badge25}>
              <div className={styles.badgeBase25}>
                <div className={styles.text52}>Product</div>
              </div>
            </div>
            <div className={styles.badge26}>
              <div className={styles.badgeBase26}>
                <div className={styles.text53}>Marketing</div>
              </div>
            </div>
            <div className={styles.badge27}>
              <div className={styles.badgeBase27}>
                <div className={styles.text54}>Label</div>
              </div>
            </div>
            <div className={styles.badge28}>
              <div className={styles.badgeBase28}>
                <div className={styles.text55}>Label</div>
              </div>
            </div>
            <div className={styles.badge29}>
              <div className={styles.badgeBase29}>
                <div className={styles.text56}>+4</div>
              </div>
            </div> */}
              </div>
            </div>
            <div className={styles.tableCell45}>
              <div className={styles.badges5}>
                <div className={styles.badge30}>
                  <div className={styles.badgeBase30}>
                    <div className={styles.text57}>Designkhiuhi</div>
                  </div>
                </div>
                {/* <div className={styles.badge31}>
              <div className={styles.badgeBase31}>
                <div className={styles.text58}>Product</div>
              </div>
            </div>
            <div className={styles.badge32}>
              <div className={styles.badgeBase32}>
                <div className={styles.text59}>Marketing</div>
              </div>
            </div>
            <div className={styles.badge33}>
              <div className={styles.badgeBase33}>
                <div className={styles.text60}>Label</div>
              </div>
            </div>
            <div className={styles.badge34}>
              <div className={styles.badgeBase34}>
                <div className={styles.text61}>Label</div>
              </div>
            </div>
            <div className={styles.badge35}>
              <div className={styles.badgeBase35}>
                <div className={styles.text62}>+4</div>
              </div>
</div> */}
              </div>
            </div>
            <div className={styles.tableCell46}>
              <div className={styles.badges6}>
                <div className={styles.badge36}>
                  <div className={styles.badgeBase36}>
                    <div className={styles.text63}>Desig</div>
                  </div>
                </div>
                {/* <div className={styles.badge37}>
              <div className={styles.badgeBase37}>
                <div className={styles.text64}>Product</div>
              </div>
            </div>
            <div className={styles.badge38}>
              <div className={styles.badgeBase38}>
                <div className={styles.text65}>Marketing</div>
              </div>
            </div>
            <div className={styles.badge39}>
              <div className={styles.badgeBase39}>
                <div className={styles.text66}>Label</div>
              </div>
            </div>
            <div className={styles.badge40}>
              <div className={styles.badgeBase40}>
                <div className={styles.text67}>Label</div>
              </div>
            </div>
            <div className={styles.badge41}>
              <div className={styles.badgeBase41}>
                <div className={styles.text68}>+4</div>
              </div>
            </div> */}
              </div>
            </div>
            <div className={styles.tableCell47}>
              <div className={styles.badges7}>
                <div className={styles.badge42}>
                  <div className={styles.badgeBase42}>
                    <div className={styles.text69}>Desi</div>
                  </div>
                </div>
                {/* <div className={styles.badge43}>
              <div className={styles.badgeBase43}>
                <div className={styles.text70}>Product</div>
              </div>
            </div>
            <div className={styles.badge44}>
              <div className={styles.badgeBase44}>
                <div className={styles.text71}>Marketing</div>
              </div>
            </div>
            <div className={styles.badge45}>
              <div className={styles.badgeBase45}>
                <div className={styles.text72}>Label</div>
              </div>
            </div>
            <div className={styles.badge46}>
              <div className={styles.badgeBase46}>
                <div className={styles.text73}>Label</div>
              </div>
            </div>
            <div className={styles.badge47}>
              <div className={styles.badgeBase47}>
                <div className={styles.text74}>+4</div>
              </div>
            </div> */}
              </div>
            </div>
            <div className={styles.tableCell48}>
              <div className={styles.badges8}>
                <div className={styles.badge48}>
                  <div className={styles.badgeBase48}>
                    <div className={styles.text75}>Design</div>
                  </div>
                </div>
                {/* <div className={styles.badge49}>
              <div className={styles.badgeBase49}>
                <div className={styles.text76}>Product</div>
              </div>
            </div>
            <div className={styles.badge50}>
              <div className={styles.badgeBase50}>
                <div className={styles.text77}>Marketing</div>
              </div>
            </div>
            <div className={styles.badge51}>
              <div className={styles.badgeBase51}>
                <div className={styles.text78}>Label</div>
              </div>
            </div>
            <div className={styles.badge52}>
              <div className={styles.badgeBase52}>
                <div className={styles.text79}>Label</div>
              </div>
            </div>
            <div className={styles.badge53}>
              <div className={styles.badgeBase53}>
                <div className={styles.text80}>+4</div>
              </div>
            </div> */}
              </div>
            </div>
            <div className={styles.tableCell49}>
              <div className={styles.badges9}>
                <div className={styles.badge54}>
                  <div className={styles.badgeBase54}>
                    <div className={styles.text81}>Design</div>
                  </div>
                </div>
                {/* <div className={styles.badge55}>
              <div className={styles.badgeBase55}>
                <div className={styles.text82}>Product</div>
              </div>
            </div>
            <div className={styles.badge56}>
              <div className={styles.badgeBase56}>
                <div className={styles.text83}>Marketing</div>
              </div>
            </div> */}
                {/* <div className={styles.badge57}>
              <div className={styles.badgeBase57}>
                <div className={styles.text84}>Label</div>
              </div>
            </div>
            <div className={styles.badge58}>
              <div className={styles.badgeBase58}>
                <div className={styles.text85}>Label</div>
              </div>
            </div>
            <div className={styles.badge59}>
              <div className={styles.badgeBase59}>
                <div className={styles.text86}>+4</div>
              </div>
            </div> */}
              </div>
            </div>
          </div>
          <Column text="Description" />
          <Column text="Responsibility" propWidth="129px" propMinWidth="81px" />
          <Column text="Work Order" propWidth="114px" propMinWidth="66px" />
          {/* <div className={styles.column6}>
            <div className={styles.tableHeaderCell6} />
            <div className={styles.tableCell50}>
              <div className={styles.button2}>
                <div className={styles.buttonBase4}>
                  <img className={styles.copyIcon} alt="" src="rocket.png" />
                </div>
              </div>
              <div className={styles.button3}>
                <div className={styles.buttonBase5}>
                  <img
                    className={styles.downloadCloudIcon}
                    alt=""
                    src="/downloadcloud.svg" />
                </div>
              </div>
              <div className={styles.button4}>
                <div className={styles.buttonBase6}>
                  <img className={styles.trash2Icon} alt="" src="/trash2.svg" />
                </div>
              </div>
              <div className={styles.button5}>
                <div className={styles.buttonBase7}>
                  <img className={styles.edit2Icon} alt="" src="/edit2.svg" />
                </div>
              </div>
            </div>
            <div className={styles.tableCell51}>
              <div className={styles.button6}>
                <div className={styles.buttonBase8}>
                  <img className={styles.copyIcon1} alt="" src="/copy.svg" />
                </div>
              </div>
              <div className={styles.button7}>
                <div className={styles.buttonBase9}>
                  <img
                    className={styles.downloadCloudIcon1}
                    alt=""
                    src="/downloadcloud.svg" />
                </div>
              </div>
              <div className={styles.button8}>
                <div className={styles.buttonBase10}>
                  <img
                    className={styles.trash2Icon1}
                    alt=""
                    src="/trash2.svg" />
                </div>
              </div>
              <div className={styles.button9}>
                <div className={styles.buttonBase11}>
                  <img className={styles.edit2Icon1} alt="" src="/edit2.svg" />
                </div>
              </div>
            </div>
            <div className={styles.tableCell52}>
              <div className={styles.button10}>
                <div className={styles.buttonBase12}>
                  <img className={styles.copyIcon2} alt="" src="/copy.svg" />
                </div>
              </div>
              <div className={styles.button11}>
                <div className={styles.buttonBase13}>
                  <img
                    className={styles.downloadCloudIcon2}
                    alt=""
                    src="/downloadcloud.svg" />
                </div>
              </div>
              <div className={styles.button12}>
                <div className={styles.buttonBase14}>
                  <img
                    className={styles.trash2Icon2}
                    alt=""
                    src="/trash2.svg" />
                </div>
              </div>
              <div className={styles.button13}>
                <div className={styles.buttonBase15}>
                  <img className={styles.edit2Icon2} alt="" src="/edit2.svg" />
                </div>
              </div>
            </div>
            <div className={styles.tableCell53}>
              <div className={styles.button14}>
                <div className={styles.buttonBase16}>
                  <img className={styles.copyIcon3} alt="" src="/copy.svg" />
                </div>
              </div>
              <div className={styles.button15}>
                <div className={styles.buttonBase17}>
                  <img
                    className={styles.downloadCloudIcon3}
                    alt=""
                    src="/downloadcloud.svg" />
                </div>
              </div>
              <div className={styles.button16}>
                <div className={styles.buttonBase18}>
                  <img
                    className={styles.trash2Icon3}
                    alt=""
                    src="/trash2.svg" />
                </div>
              </div>
              <div className={styles.button17}>
                <div className={styles.buttonBase19}>
                  <img className={styles.edit2Icon3} alt="" src="/edit2.svg" />
                </div>
              </div>
            </div>
            <div className={styles.tableCell54}>
              <div className={styles.button18}>
                <div className={styles.buttonBase20}>
                  <img className={styles.copyIcon4} alt="" src="/copy.svg" />
                </div>
              </div>
              <div className={styles.button19}>
                <div className={styles.buttonBase21}>
                  <img
                    className={styles.downloadCloudIcon4}
                    alt=""
                    src="/downloadcloud.svg" />
                </div>
              </div>
              <div className={styles.button20}>
                <div className={styles.buttonBase22}>
                  <img
                    className={styles.trash2Icon4}
                    alt=""
                    src="/trash2.svg" />
                </div>
              </div>
              <div className={styles.button21}>
                <div className={styles.buttonBase23}>
                  <img className={styles.edit2Icon4} alt="" src="/edit2.svg" />
                </div>
              </div>
            </div>
            <div className={styles.tableCell55}>
              <div className={styles.button22}>
                <div className={styles.buttonBase24}>
                  <img className={styles.copyIcon5} alt="" src="/copy.svg" />
                </div>
              </div>
              <div className={styles.button23}>
                <div className={styles.buttonBase25}>
                  <img
                    className={styles.downloadCloudIcon5}
                    alt=""
                    src="/downloadcloud.svg" />
                </div>
              </div>
              <div className={styles.button24}>
                <div className={styles.buttonBase26}>
                  <img
                    className={styles.trash2Icon5}
                    alt=""
                    src="/trash2.svg" />
                </div>
              </div>
              <div className={styles.button25}>
                <div className={styles.buttonBase27}>
                  <img className={styles.edit2Icon5} alt="" src="/edit2.svg" />
                </div>
              </div>
            </div>
            <div className={styles.tableCell56}>
              <div className={styles.button26}>
                <div className={styles.buttonBase28}>
                  <img className={styles.copyIcon6} alt="" src="/copy.svg" />
                </div>
              </div>
              <div className={styles.button27}>
                <div className={styles.buttonBase29}>
                  <img
                    className={styles.downloadCloudIcon6}
                    alt=""
                    src="/downloadcloud.svg" />
                </div>
              </div>
              <div className={styles.button28}>
                <div className={styles.buttonBase30}>
                  <img
                    className={styles.trash2Icon6}
                    alt=""
                    src="/trash2.svg" />
                </div>
              </div>
              <div className={styles.button29}>
                <div className={styles.buttonBase31}>
                  <img className={styles.edit2Icon6} alt="" src="/edit2.svg" />
                </div>
              </div>
            </div>
            <div className={styles.tableCell57}>
              <div className={styles.button30}>
                <div className={styles.buttonBase32}>
                  <img className={styles.copyIcon7} alt="" src="/copy.svg" />
                </div>
              </div>
              <div className={styles.button31}>
                <div className={styles.buttonBase33}>
                  <img
                    className={styles.downloadCloudIcon7}
                    alt=""
                    src="/downloadcloud.svg" />
                </div>
              </div>
              <div className={styles.button32}>
                <div className={styles.buttonBase34}>
                  <img
                    className={styles.trash2Icon7}
                    alt=""
                    src="/trash2.svg" />
                </div>
              </div>
              <div className={styles.button33}>
                <div className={styles.buttonBase35}>
                  <img className={styles.edit2Icon7} alt="" src="/edit2.svg" />
                </div>
              </div>
            </div>
            <div className={styles.tableCell58}>
              <div className={styles.button34}>
                <div className={styles.buttonBase36}>
                  <img className={styles.copyIcon8} alt="" src="/copy.svg" />
                </div>
              </div>
              <div className={styles.button35}>
                <div className={styles.buttonBase37}>
                  <img
                    className={styles.downloadCloudIcon8}
                    alt=""
                    src="/downloadcloud.svg" />
                </div>
              </div>
              <div className={styles.button36}>
                <div className={styles.buttonBase38}>
                  <img
                    className={styles.trash2Icon8}
                    alt=""
                    src="/trash2.svg" />
                </div>
              </div>
              <div className={styles.button37}>
                <div className={styles.buttonBase39}>
                  <img className={styles.edit2Icon8} alt="" src="/edit2.svg" />
                </div>
              </div>
            </div>
            <div className={styles.tableCell59}>
              <div className={styles.button38}>
                <div className={styles.buttonBase40}>
                  <img className={styles.copyIcon9} alt="" src="/copy.svg" />
                </div>
              </div>
              <div className={styles.button39}>
                <div className={styles.buttonBase41}>
                  <img
                    className={styles.downloadCloudIcon9}
                    alt=""
                    src="/downloadcloud.svg" />
                </div>
              </div>
              <div className={styles.button40}>
                <div className={styles.buttonBase42}>
                  <img
                    className={styles.trash2Icon9}
                    alt=""
                    src="/trash2.svg" />
                </div>
              </div>
              <div className={styles.button41}>
                <div className={styles.buttonBase43}>
                  <img className={styles.edit2Icon9} alt="" src="/edit2.svg" />
                </div>
              </div>
            </div>
          </div> */}
        </section>
        {/* <div className={styles.content3}>
              <div className={styles.column7}>
                <div className={styles.tableHeaderCell7}>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxBase} />
                  </div>
                  <div className={styles.tableHeader5}>
                    <div className={styles.text87}>Details</div>
                  </div>
                </div>
                <div className={styles.tableCell60}>
                  <div className={styles.checkbox1}>
                    <div className={styles.checkboxBase1} />
                  </div>
                  <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
                  <div className={styles.textAndSupportingText1}>
                    <div className={styles.text88}>Olivia Rhye</div>
                    <div className={styles.supportingText1}>@olivia</div>
                  </div>
                </div>
                <div className={styles.tableCell61}>
                  <div className={styles.checkbox2}>
                    <div className={styles.checkboxBase2} />
                  </div>
                  <img
                    className={styles.avatarIcon1}
                    alt=""
                    src="/avatar-1@2x.png"
                  />
                  <div className={styles.textAndSupportingText2}>
                    <div className={styles.text89}>Phoenix Baker</div>
                    <div className={styles.supportingText2}>@phoenix</div>
                  </div>
                </div>
                <div className={styles.tableCell62}>
                  <div className={styles.checkbox3}>
                    <div className={styles.checkboxBase3} />
                  </div>
                  <img
                    className={styles.avatarIcon2}
                    alt=""
                    src="/avatar-2@2x.png"
                  />
                  <div className={styles.textAndSupportingText3}>
                    <div className={styles.text90}>Lana Steiner</div>
                    <div className={styles.supportingText3}>@lana</div>
                  </div>
                </div>
                <div className={styles.tableCell63}>
                  <div className={styles.checkbox4}>
                    <div className={styles.checkboxBase4} />
                  </div>
                  <img
                    className={styles.avatarIcon3}
                    alt=""
                    src="/avatar-3@2x.png"
                  />
                  <div className={styles.textAndSupportingText4}>
                    <div className={styles.text91}>Demi Wilkinson</div>
                    <div className={styles.supportingText4}>@demi</div>
                  </div>
                </div>
                <div className={styles.tableCell64}>
                  <div className={styles.checkbox5}>
                    <div className={styles.checkboxBase5} />
                  </div>
                  <div className={styles.avatar}>
                    <div className={styles.text92}>CW</div>
                  </div>
                  <div className={styles.textAndSupportingText5}>
                    <div className={styles.text93}>Candice Wu</div>
                    <div className={styles.supportingText5}>@candice</div>
                  </div>
                </div>
                <div className={styles.tableCell65}>
                  <div className={styles.checkbox6}>
                    <div className={styles.checkboxBase6} />
                  </div>
                  <img
                    className={styles.avatarIcon4}
                    alt=""
                    src="/avatar-4@2x.png"
                  />
                  <div className={styles.textAndSupportingText6}>
                    <div className={styles.text94}>Natali Craig</div>
                    <div className={styles.supportingText6}>@natali</div>
                  </div>
                </div>
                <div className={styles.tableCell66}>
                  <div className={styles.checkbox7}>
                    <div className={styles.checkboxBase7} />
                  </div>
                  <img
                    className={styles.avatarIcon5}
                    alt=""
                    src="/avatar-5@2x.png"
                  />
                  <div className={styles.textAndSupportingText7}>
                    <div className={styles.text95}>Drew Cano</div>
                    <div className={styles.supportingText7}>@drew</div>
                  </div>
                </div>
                <div className={styles.tableCell67}>
                  <div className={styles.checkbox8}>
                    <div className={styles.checkboxBase8} />
                  </div>
                  <div className={styles.avatar1}>
                    <div className={styles.text96}>OD</div>
                  </div>
                  <div className={styles.textAndSupportingText8}>
                    <div className={styles.text97}>Orlando Diggs</div>
                    <div className={styles.supportingText8}>@orlando</div>
                  </div>
                </div>
                <div className={styles.tableCell68}>
                  <div className={styles.checkbox9}>
                    <div className={styles.checkboxBase9} />
                  </div>
                  <img
                    className={styles.avatarIcon6}
                    alt=""
                    src="/avatar-6@2x.png"
                  />
                  <div className={styles.textAndSupportingText9}>
                    <div className={styles.text98}>Andi Lane</div>
                    <div className={styles.supportingText9}>@andi</div>
                  </div>
                </div>
                <div className={styles.tableCell69}>
                  <div className={styles.checkbox10}>
                    <div className={styles.checkboxBase10} />
                  </div>
                  <img
                    className={styles.avatarIcon7}
                    alt=""
                    src="/avatar-7@2x.png"
                  />
                  <div className={styles.textAndSupportingText10}>
                    <div className={styles.text99}>Kate Morrison</div>
                    <div className={styles.supportingText10}>@kate</div>
                  </div>
                </div>
              </div>
              <div className={styles.column8}>
                <div className={styles.tableHeaderCell8}>
                  <div className={styles.tableHeader6}>
                    <div className={styles.text100}>Financials</div>
                    <img
                      className={styles.arrowDownIcon1}
                      alt=""
                      src="/arrowdown.svg"
                    />
                  </div>
                </div>
                <div className={styles.tableCell70}>
                  <div className={styles.badge60}>
                    <div className={styles.badgeBase60}>
                      <img className={styles.dotIcon} alt="" src="/-dot.svg" />
                      <div className={styles.text101}>Active</div>
                    </div>
                  </div>
                </div>
                <div className={styles.tableCell71}>
                  <div className={styles.badge61}>
                    <div className={styles.badgeBase61}>
                      <img className={styles.dotIcon1} alt="" src="/-dot.svg" />
                      <div className={styles.text102}>Active</div>
                    </div>
                  </div>
                </div>
                <div className={styles.tableCell72}>
                  <div className={styles.badge62}>
                    <div className={styles.badgeBase62}>
                      <img className={styles.dotIcon2} alt="" src="/-dot.svg" />
                      <div className={styles.text103}>Active</div>
                    </div>
                  </div>
                </div>
                <div className={styles.tableCell73}>
                  <div className={styles.badge63}>
                    <div className={styles.badgeBase63}>
                      <img className={styles.dotIcon3} alt="" src="/-dot.svg" />
                      <div className={styles.text104}>Active</div>
                    </div>
                  </div>
                </div>
                <div className={styles.tableCell74}>
                  <div className={styles.badge64}>
                    <div className={styles.badgeBase64}>
                      <img className={styles.dotIcon4} alt="" src="/-dot.svg" />
                      <div className={styles.text105}>Active</div>
                    </div>
                  </div>
                </div>
                <div className={styles.tableCell75}>
                  <div className={styles.badge65}>
                    <div className={styles.badgeBase65}>
                      <img className={styles.dotIcon5} alt="" src="/-dot.svg" />
                      <div className={styles.text106}>Active</div>
                    </div>
                  </div>
                </div>
                <div className={styles.tableCell76}>
                  <div className={styles.badge66}>
                    <div className={styles.badgeBase66}>
                      <img className={styles.dotIcon6} alt="" src="/-dot.svg" />
                      <div className={styles.text107}>Active</div>
                    </div>
                  </div>
                </div>
                <div className={styles.tableCell77}>
                  <div className={styles.badge67}>
                    <div className={styles.badgeBase67}>
                      <img className={styles.dotIcon7} alt="" src="/-dot.svg" />
                      <div className={styles.text108}>Active</div>
                    </div>
                  </div>
                </div>
                <div className={styles.tableCell78}>
                  <div className={styles.badge68}>
                    <div className={styles.badgeBase68}>
                      <img className={styles.dotIcon8} alt="" src="/-dot.svg" />
                      <div className={styles.text109}>Active</div>
                    </div>
                  </div>
                </div>
                <div className={styles.tableCell79}>
                  <div className={styles.badge69}>
                    <div className={styles.badgeBase69}>
                      <img className={styles.dotIcon9} alt="" src="/-dot.svg" />
                      <div className={styles.text110}>Active</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.column9}>
                <div className={styles.tableHeaderCell9}>
                  <div className={styles.tableHeader7}>
                    <div className={styles.text111}>Deliverables</div>
                  </div>
                </div>
                <div className={styles.tableCell80}>
                  <div className={styles.text112}>Lorem Ipsum</div>
                </div>
                <div className={styles.tableCell81}>
                  <div className={styles.text113}>Lorem Ipsum</div>
                </div>
                <div className={styles.tableCell82}>
                  <div className={styles.text114}>Lorem Ipsum</div>
                </div>
                <div className={styles.tableCell83}>
                  <div className={styles.text115}>Lorem Ipsum</div>
                </div>
                <div className={styles.tableCell84}>
                  <div className={styles.text116}>Lorem Ipsum</div>
                </div>
                <div className={styles.tableCell85}>
                  <div className={styles.text117}>Lorem Ipsum</div>
                </div>
                <div className={styles.tableCell86}>
                  <div className={styles.text118}>Lorem Ipsum</div>
                </div>
                <div className={styles.tableCell87}>
                  <div className={styles.text119}>Lorem Ipsum</div>
                </div>
                <div className={styles.tableCell88}>
                  <div className={styles.text120}>Lorem Ipsum</div>
                </div>
                <div className={styles.tableCell89}>
                  <div className={styles.text121}>Lorem Ipsum</div>
                </div>
              </div>
              <div className={styles.column10}>
                <div className={styles.tableHeaderCell10}>
                  <div className={styles.tableHeader8}>
                    <div className={styles.text122}>Supporting Documents</div>
                  </div>
                </div>
                <div className={styles.tableCell90}>
                  <div className={styles.oliviauntitleduicom1}>
                    olivia@untitledui.com
                  </div>
                </div>
                <div className={styles.tableCell91}>
                  <div className={styles.phoenixuntitleduicom1}>
                    phoenix@untitledui.com
                  </div>
                </div>
                <div className={styles.tableCell92}>
                  <div className={styles.lanauntitleduicom1}>
                    lana@untitledui.com
                  </div>
                </div>
                <div className={styles.tableCell93}>
                  <div className={styles.demiuntitleduicom1}>
                    demi@untitledui.com
                  </div>
                </div>
                <div className={styles.tableCell94}>
                  <div className={styles.candiceuntitleduicom1}>
                    candice@untitledui.com
                  </div>
                </div>
                <div className={styles.tableCell95}>
                  <div className={styles.nataliuntitleduicom1}>
                    natali@untitledui.com
                  </div>
                </div>
                <div className={styles.tableCell96}>
                  <div className={styles.drewuntitleduicom1}>
                    drew@untitledui.com
                  </div>
                </div>
                <div className={styles.tableCell97}>
                  <div className={styles.orlandountitleduicom1}>
                    orlando@untitledui.com
                  </div>
                </div>
                <div className={styles.tableCell98}>
                  <div className={styles.andiuntitleduicom1}>
                    andi@untitledui.com
                  </div>
                </div>
                <div className={styles.tableCell99}>
                  <div className={styles.kateuntitleduicom1}>
                    kate@untitledui.com
                  </div>
                </div>
              </div>
              <div className={styles.column11}>
                <div className={styles.tableHeaderCell11}>
                  <div className={styles.tableHeader9}>
                    <div className={styles.text123}>Correspondence</div>
                  </div>
                </div>
                <div className={styles.tableCell100}>
                  <div className={styles.badges10}>
                    <div className={styles.badge70}>
                      <div className={styles.badgeBase70}>
                        <div className={styles.text124}>Design</div>
                      </div>
                    </div>
                    <div className={styles.badge71}>
                      <div className={styles.badgeBase71}>
                        <div className={styles.text125}>Product</div>
                      </div>
                    </div>
                    <div className={styles.badge72}>
                      <div className={styles.badgeBase72}>
                        <div className={styles.text126}>Marketing</div>
                      </div>
                    </div>
                    <div className={styles.badge73}>
                      <div className={styles.badgeBase73}>
                        <div className={styles.text127}>Label</div>
                      </div>
                    </div>
                    <div className={styles.badge74}>
                      <div className={styles.badgeBase74}>
                        <div className={styles.text128}>Label</div>
                      </div>
                    </div>
                    <div className={styles.badge75}>
                      <div className={styles.badgeBase75}>
                        <div className={styles.text129}>+4</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.tableCell101}>
                  <div className={styles.badges11}>
                    <div className={styles.badge76}>
                      <div className={styles.badgeBase76}>
                        <div className={styles.text130}>Design</div>
                      </div>
                    </div>
                    <div className={styles.badge77}>
                      <div className={styles.badgeBase77}>
                        <div className={styles.text131}>Product</div>
                      </div>
                    </div>
                    <div className={styles.badge78}>
                      <div className={styles.badgeBase78}>
                        <div className={styles.text132}>Marketing</div>
                      </div>
                    </div>
                    <div className={styles.badge79}>
                      <div className={styles.badgeBase79}>
                        <div className={styles.text133}>Label</div>
                      </div>
                    </div>
                    <div className={styles.badge80}>
                      <div className={styles.badgeBase80}>
                        <div className={styles.text134}>Label</div>
                      </div>
                    </div>
                    <div className={styles.badge81}>
                      <div className={styles.badgeBase81}>
                        <div className={styles.text135}>+4</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.tableCell102}>
                  <div className={styles.badges12}>
                    <div className={styles.badge82}>
                      <div className={styles.badgeBase82}>
                        <div className={styles.text136}>Design</div>
                      </div>
                    </div>
                    <div className={styles.badge83}>
                      <div className={styles.badgeBase83}>
                        <div className={styles.text137}>Product</div>
                      </div>
                    </div>
                    <div className={styles.badge84}>
                      <div className={styles.badgeBase84}>
                        <div className={styles.text138}>Marketing</div>
                      </div>
                    </div>
                    <div className={styles.badge85}>
                      <div className={styles.badgeBase85}>
                        <div className={styles.text139}>Label</div>
                      </div>
                    </div>
                    <div className={styles.badge86}>
                      <div className={styles.badgeBase86}>
                        <div className={styles.text140}>Label</div>
                      </div>
                    </div>
                    <div className={styles.badge87}>
                      <div className={styles.badgeBase87}>
                        <div className={styles.text141}>+4</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.tableCell103}>
                  <div className={styles.badges13}>
                    <div className={styles.badge88}>
                      <div className={styles.badgeBase88}>
                        <div className={styles.text142}>Design</div>
                      </div>
                    </div>
                    <div className={styles.badge89}>
                      <div className={styles.badgeBase89}>
                        <div className={styles.text143}>Product</div>
                      </div>
                    </div>
                    <div className={styles.badge90}>
                      <div className={styles.badgeBase90}>
                        <div className={styles.text144}>Marketing</div>
                      </div>
                    </div>
                    <div className={styles.badge91}>
                      <div className={styles.badgeBase91}>
                        <div className={styles.text145}>Label</div>
                      </div>
                    </div>
                    <div className={styles.badge92}>
                      <div className={styles.badgeBase92}>
                        <div className={styles.text146}>Label</div>
                      </div>
                    </div>
                    <div className={styles.badge93}>
                      <div className={styles.badgeBase93}>
                        <div className={styles.text147}>+4</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.tableCell104}>
                  <div className={styles.badges14}>
                    <div className={styles.badge94}>
                      <div className={styles.badgeBase94}>
                        <div className={styles.text148}>Design</div>
                      </div>
                    </div>
                    <div className={styles.badge95}>
                      <div className={styles.badgeBase95}>
                        <div className={styles.text149}>Product</div>
                      </div>
                    </div>
                    <div className={styles.badge96}>
                      <div className={styles.badgeBase96}>
                        <div className={styles.text150}>Marketing</div>
                      </div>
                    </div>
                    <div className={styles.badge97}>
                      <div className={styles.badgeBase97}>
                        <div className={styles.text151}>Label</div>
                      </div>
                    </div>
                    <div className={styles.badge98}>
                      <div className={styles.badgeBase98}>
                        <div className={styles.text152}>Label</div>
                      </div>
                    </div>
                    <div className={styles.badge99}>
                      <div className={styles.badgeBase99}>
                        <div className={styles.text153}>+4</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.tableCell105}>
                  <div className={styles.badges15}>
                    <div className={styles.badge100}>
                      <div className={styles.badgeBase100}>
                        <div className={styles.text154}>Design</div>
                      </div>
                    </div>
                    <div className={styles.badge101}>
                      <div className={styles.badgeBase101}>
                        <div className={styles.text155}>Product</div>
                      </div>
                    </div>
                    <div className={styles.badge102}>
                      <div className={styles.badgeBase102}>
                        <div className={styles.text156}>Marketing</div>
                      </div>
                    </div>
                    <div className={styles.badge103}>
                      <div className={styles.badgeBase103}>
                        <div className={styles.text157}>Label</div>
                      </div>
                    </div>
                    <div className={styles.badge104}>
                      <div className={styles.badgeBase104}>
                        <div className={styles.text158}>Label</div>
                      </div>
                    </div>
                    <div className={styles.badge105}>
                      <div className={styles.badgeBase105}>
                        <div className={styles.text159}>+4</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.tableCell106}>
                  <div className={styles.badges16}>
                    <div className={styles.badge106}>
                      <div className={styles.badgeBase106}>
                        <div className={styles.text160}>Design</div>
                      </div>
                    </div>
                    <div className={styles.badge107}>
                      <div className={styles.badgeBase107}>
                        <div className={styles.text161}>Product</div>
                      </div>
                    </div>
                    <div className={styles.badge108}>
                      <div className={styles.badgeBase108}>
                        <div className={styles.text162}>Marketing</div>
                      </div>
                    </div>
                    <div className={styles.badge109}>
                      <div className={styles.badgeBase109}>
                        <div className={styles.text163}>Label</div>
                      </div>
                    </div>
                    <div className={styles.badge110}>
                      <div className={styles.badgeBase110}>
                        <div className={styles.text164}>Label</div>
                      </div>
                    </div>
                    <div className={styles.badge111}>
                      <div className={styles.badgeBase111}>
                        <div className={styles.text165}>+4</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.tableCell107}>
                  <div className={styles.badges17}>
                    <div className={styles.badge112}>
                      <div className={styles.badgeBase112}>
                        <div className={styles.text166}>Design</div>
                      </div>
                    </div>
                    <div className={styles.badge113}>
                      <div className={styles.badgeBase113}>
                        <div className={styles.text167}>Product</div>
                      </div>
                    </div>
                    <div className={styles.badge114}>
                      <div className={styles.badgeBase114}>
                        <div className={styles.text168}>Marketing</div>
                      </div>
                    </div>
                    <div className={styles.badge115}>
                      <div className={styles.badgeBase115}>
                        <div className={styles.text169}>Label</div>
                      </div>
                    </div>
                    <div className={styles.badge116}>
                      <div className={styles.badgeBase116}>
                        <div className={styles.text170}>Label</div>
                      </div>
                    </div>
                    <div className={styles.badge117}>
                      <div className={styles.badgeBase117}>
                        <div className={styles.text171}>+4</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.tableCell108}>
                  <div className={styles.badges18}>
                    <div className={styles.badge118}>
                      <div className={styles.badgeBase118}>
                        <div className={styles.text172}>Design</div>
                      </div>
                    </div>
                    <div className={styles.badge119}>
                      <div className={styles.badgeBase119}>
                        <div className={styles.text173}>Product</div>
                      </div>
                    </div>
                    <div className={styles.badge120}>
                      <div className={styles.badgeBase120}>
                        <div className={styles.text174}>Marketing</div>
                      </div>
                    </div>
                    <div className={styles.badge121}>
                      <div className={styles.badgeBase121}>
                        <div className={styles.text175}>Label</div>
                      </div>
                    </div>
                    <div className={styles.badge122}>
                      <div className={styles.badgeBase122}>
                        <div className={styles.text176}>Label</div>
                      </div>
                    </div>
                    <div className={styles.badge123}>
                      <div className={styles.badgeBase123}>
                        <div className={styles.text177}>+4</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.tableCell109}>
                  <div className={styles.badges19}>
                    <div className={styles.badge124}>
                      <div className={styles.badgeBase124}>
                        <div className={styles.text178}>Design</div>
                      </div>
                    </div>
                    <div className={styles.badge125}>
                      <div className={styles.badgeBase125}>
                        <div className={styles.text179}>Product</div>
                      </div>
                    </div>
                    <div className={styles.badge126}>
                      <div className={styles.badgeBase126}>
                        <div className={styles.text180}>Marketing</div>
                      </div>
                    </div>
                    <div className={styles.badge127}>
                      <div className={styles.badgeBase127}>
                        <div className={styles.text181}>Label</div>
                      </div>
                    </div>
                    <div className={styles.badge128}>
                      <div className={styles.badgeBase128}>
                        <div className={styles.text182}>Label</div>
                      </div>
                    </div>
                    <div className={styles.badge129}>
                      <div className={styles.badgeBase129}>
                        <div className={styles.text183}>+4</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.column12}>
                <div className={styles.tableHeaderCell12}>
                  <div className={styles.tableHeader10}>
                    <div className={styles.text184}>Equipment</div>
                  </div>
                </div>
                <div className={styles.tableCell110}>
                  <div className={styles.text185}>Text</div>
                </div>
                <div className={styles.tableCell111}>
                  <div className={styles.text186}>Text</div>
                </div>
                <div className={styles.tableCell112}>
                  <div className={styles.text187}>Text</div>
                </div>
                <div className={styles.tableCell113}>
                  <div className={styles.text188}>Text</div>
                </div>
                <div className={styles.tableCell114}>
                  <div className={styles.text189}>Text</div>
                </div>
                <div className={styles.tableCell115}>
                  <div className={styles.text190}>Text</div>
                </div>
                <div className={styles.tableCell116}>
                  <div className={styles.text191}>Text</div>
                </div>
                <div className={styles.tableCell117}>
                  <div className={styles.text192}>Text</div>
                </div>
                <div className={styles.tableCell118}>
                  <div className={styles.text193}>Text</div>
                </div>
                <div className={styles.tableCell119}>
                  <div className={styles.text194}>Text</div>
                </div>
              </div>
              <div className={styles.column13}>
                <div className={styles.tableHeaderCell13}>
                  <div className={styles.tableHeader11}>
                    <div className={styles.text195}>Sample</div>
                  </div>
                </div>
                <div className={styles.tableCell120}>
                  <div className={styles.text196}>Text</div>
                </div>
                <div className={styles.tableCell121}>
                  <div className={styles.text197}>Text</div>
                </div>
                <div className={styles.tableCell122}>
                  <div className={styles.text198}>Text</div>
                </div>
                <div className={styles.tableCell123}>
                  <div className={styles.text199}>Text</div>
                </div>
                <div className={styles.tableCell124}>
                  <div className={styles.text200}>Text</div>
                </div>
                <div className={styles.tableCell125}>
                  <div className={styles.text201}>Text</div>
                </div>
                <div className={styles.tableCell126}>
                  <div className={styles.text202}>Text</div>
                </div>
                <div className={styles.tableCell127}>
                  <div className={styles.text203}>Text</div>
                </div>
                <div className={styles.tableCell128}>
                  <div className={styles.text204}>Text</div>
                </div>
                <div className={styles.tableCell129}>
                  <div className={styles.text205}>Text</div>
                </div>
              </div>
              <div className={styles.column14}>
                <div className={styles.tableHeaderCell14}>
                  <div className={styles.tableHeader12}>
                    <div className={styles.text206}>Column</div>
                  </div>
                </div>
                <div className={styles.tableCell130}>
                  <div className={styles.text207}>Text</div>
                </div>
                <div className={styles.tableCell131}>
                  <div className={styles.text208}>Text</div>
                </div>
                <div className={styles.tableCell132}>
                  <div className={styles.text209}>Text</div>
                </div>
                <div className={styles.tableCell133}>
                  <div className={styles.text210}>Text</div>
                </div>
                <div className={styles.tableCell134}>
                  <div className={styles.text211}>Text</div>
                </div>
                <div className={styles.tableCell135}>
                  <div className={styles.text212}>Text</div>
                </div>
                <div className={styles.tableCell136}>
                  <div className={styles.text213}>Text</div>
                </div>
                <div className={styles.tableCell137}>
                  <div className={styles.text214}>Text</div>
                </div>
                <div className={styles.tableCell138}>
                  <div className={styles.text215}>Text</div>
                </div>
                <div className={styles.tableCell139}>
                  <div className={styles.text216}>Text</div>
                </div>
              </div>
              <div className={styles.column15}>
                <div className={styles.tableHeaderCell15} />
                <div className={styles.tableCell140}>
                  <div className={styles.button42}>
                    <div className={styles.buttonBase44}>
                      <img className={styles.copyIcon10} alt="" src="/copy.svg" />
                    </div>
                  </div>
                  <div className={styles.button43}>
                    <div className={styles.buttonBase45}>
                      <img
                        className={styles.downloadCloudIcon10}
                        alt=""
                        src="/downloadcloud.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.button44}>
                    <div className={styles.buttonBase46}>
                      <img
                        className={styles.trash2Icon10}
                        alt=""
                        src="/trash2.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.button45}>
                    <div className={styles.buttonBase47}>
                      <img className={styles.edit2Icon10} alt="" src="/edit2.svg" />
                    </div>
                  </div>
                </div>
                <div className={styles.tableCell141}>
                  <div className={styles.button46}>
                    <div className={styles.buttonBase48}>
                      <img className={styles.copyIcon11} alt="" src="/copy.svg" />
                    </div>
                  </div>
                  <div className={styles.button47}>
                    <div className={styles.buttonBase49}>
                      <img
                        className={styles.downloadCloudIcon11}
                        alt=""
                        src="/downloadcloud.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.button48}>
                    <div className={styles.buttonBase50}>
                      <img
                        className={styles.trash2Icon11}
                        alt=""
                        src="/trash2.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.button49}>
                    <div className={styles.buttonBase51}>
                      <img className={styles.edit2Icon11} alt="" src="/edit2.svg" />
                    </div>
                  </div>
                </div>
                <div className={styles.tableCell142}>
                  <div className={styles.button50}>
                    <div className={styles.buttonBase52}>
                      <img className={styles.copyIcon12} alt="" src="/copy.svg" />
                    </div>
                  </div>
                  <div className={styles.button51}>
                    <div className={styles.buttonBase53}>
                      <img
                        className={styles.downloadCloudIcon12}
                        alt=""
                        src="/downloadcloud.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.button52}>
                    <div className={styles.buttonBase54}>
                      <img
                        className={styles.trash2Icon12}
                        alt=""
                        src="/trash2.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.button53}>
                    <div className={styles.buttonBase55}>
                      <img className={styles.edit2Icon12} alt="" src="/edit2.svg" />
                    </div>
                  </div>
                </div>
                <div className={styles.tableCell143}>
                  <div className={styles.button54}>
                    <div className={styles.buttonBase56}>
                      <img className={styles.copyIcon13} alt="" src="/copy.svg" />
                    </div>
                  </div>
                  <div className={styles.button55}>
                    <div className={styles.buttonBase57}>
                      <img
                        className={styles.downloadCloudIcon13}
                        alt=""
                        src="/downloadcloud.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.button56}>
                    <div className={styles.buttonBase58}>
                      <img
                        className={styles.trash2Icon13}
                        alt=""
                        src="/trash2.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.button57}>
                    <div className={styles.buttonBase59}>
                      <img className={styles.edit2Icon13} alt="" src="/edit2.svg" />
                    </div>
                  </div>
                </div>
                <div className={styles.tableCell144}>
                  <div className={styles.button58}>
                    <div className={styles.buttonBase60}>
                      <img className={styles.copyIcon14} alt="" src="/copy.svg" />
                    </div>
                  </div>
                  <div className={styles.button59}>
                    <div className={styles.buttonBase61}>
                      <img
                        className={styles.downloadCloudIcon14}
                        alt=""
                        src="/downloadcloud.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.button60}>
                    <div className={styles.buttonBase62}>
                      <img
                        className={styles.trash2Icon14}
                        alt=""
                        src="/trash2.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.button61}>
                    <div className={styles.buttonBase63}>
                      <img className={styles.edit2Icon14} alt="" src="/edit2.svg" />
                    </div>
                  </div>
                </div>
                <div className={styles.tableCell145}>
                  <div className={styles.button62}>
                    <div className={styles.buttonBase64}>
                      <img className={styles.copyIcon15} alt="" src="/copy.svg" />
                    </div>
                  </div>
                  <div className={styles.button63}>
                    <div className={styles.buttonBase65}>
                      <img
                        className={styles.downloadCloudIcon15}
                        alt=""
                        src="/downloadcloud.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.button64}>
                    <div className={styles.buttonBase66}>
                      <img
                        className={styles.trash2Icon15}
                        alt=""
                        src="/trash2.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.button65}>
                    <div className={styles.buttonBase67}>
                      <img className={styles.edit2Icon15} alt="" src="/edit2.svg" />
                    </div>
                  </div>
                </div>
                <div className={styles.tableCell146}>
                  <div className={styles.button66}>
                    <div className={styles.buttonBase68}>
                      <img className={styles.copyIcon16} alt="" src="/copy.svg" />
                    </div>
                  </div>
                  <div className={styles.button67}>
                    <div className={styles.buttonBase69}>
                      <img
                        className={styles.downloadCloudIcon16}
                        alt=""
                        src="/downloadcloud.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.button68}>
                    <div className={styles.buttonBase70}>
                      <img
                        className={styles.trash2Icon16}
                        alt=""
                        src="/trash2.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.button69}>
                    <div className={styles.buttonBase71}>
                      <img className={styles.edit2Icon16} alt="" src="/edit2.svg" />
                    </div>
                  </div>
                </div>
                <div className={styles.tableCell147}>
                  <div className={styles.button70}>
                    <div className={styles.buttonBase72}>
                      <img className={styles.copyIcon17} alt="" src="/copy.svg" />
                    </div>
                  </div>
                  <div className={styles.button71}>
                    <div className={styles.buttonBase73}>
                      <img
                        className={styles.downloadCloudIcon17}
                        alt=""
                        src="/downloadcloud.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.button72}>
                    <div className={styles.buttonBase74}>
                      <img
                        className={styles.trash2Icon17}
                        alt=""
                        src="/trash2.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.button73}>
                    <div className={styles.buttonBase75}>
                      <img className={styles.edit2Icon17} alt="" src="/edit2.svg" />
                    </div>
                  </div>
                </div>
                <div className={styles.tableCell148}>
                  <div className={styles.button74}>
                    <div className={styles.buttonBase76}>
                      <img className={styles.copyIcon18} alt="" src="/copy.svg" />
                    </div>
                  </div>
                  <div className={styles.button75}>
                    <div className={styles.buttonBase77}>
                      <img
                        className={styles.downloadCloudIcon18}
                        alt=""
                        src="/downloadcloud.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.button76}>
                    <div className={styles.buttonBase78}>
                      <img
                        className={styles.trash2Icon18}
                        alt=""
                        src="/trash2.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.button77}>
                    <div className={styles.buttonBase79}>
                      <img className={styles.edit2Icon18} alt="" src="/edit2.svg" />
                    </div>
                  </div>
                </div>
                <div className={styles.tableCell149}>
                  <div className={styles.button78}>
                    <div className={styles.buttonBase80}>
                      <img className={styles.copyIcon19} alt="" src="/copy.svg" />
                    </div>
                  </div>
                  <div className={styles.button79}>
                    <div className={styles.buttonBase81}>
                      <img
                        className={styles.downloadCloudIcon19}
                        alt=""
                        src="/downloadcloud.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.button80}>
                    <div className={styles.buttonBase82}>
                      <img
                        className={styles.trash2Icon19}
                        alt=""
                        src="/trash2.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.button81}>
                    <div className={styles.buttonBase83}>
                      <img className={styles.edit2Icon19} alt="" src="/edit2.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
      </main>
      <footer className={styles.pagination}>
        <div className={styles.actions1}>
          <button className={styles.button82}>
            <div className={styles.buttonBase84}>
              <div className={styles.text217}>Previous</div>
            </div>
          </button>
          <button className={styles.button83}>
            <div className={styles.buttonBase85}>
              <div className={styles.text218}>Next</div>
            </div>
          </button>
        </div>
        <div className={styles.details1}>Page 1 of 10</div>
      </footer>
    </form>
  );
};


export default SamplePage;