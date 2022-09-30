import './default/swiper.css';
import './default/default.css';
import './ui_21.css';
import './App.css';
import React, { Fragment } from 'react';
import { Banner } from './Banner';
import {swiperEffect, scrollEffect, contentEffect, changeDescription} from './effect';

function GnbBtn ({index, label}) {
    return (
        <li className="scrollable" data-scroll={index}>{label}</li>
    );
}

const GnbArray = [
    {index : '1', label : '공모 분야'},
    {index : '2', label : '수상 특전'},
    {index : '3', label : '진행 절차'},
    {index : '4', label : 'QnA'}
];

function Gnb () {
    return(
        <section className="gnb">
            <div className="gnb_wrapper">
                    <img src="/img/logo.png" alt=""></img>
                <ul>
                    {GnbArray.map((element)=>(<GnbBtn index={element.index} label={element.label}/>))}
                </ul>
            </div>
        </section>
    );
};


class App extends React.Component {
  componentDidMount() {
    swiperEffect();
    scrollEffect();
    contentEffect();
    changeDescription();
  }

  render () {
    return (
      <Fragment>
          <div className="total_wrapper">
            <Gnb />
            <article className="default">
                <Banner />
                <section className="content content__a">
                    <div className="content_wrapper">
                        <div className="title noto_sans">모집기간</div>
                        <div className="desc">
                            <p>8월 30일(월) 부터 9월 22일(수) 23:00시까지</p>
                        </div>
                    </div>
                    <div className="content_wrapper">
                        <div className="title noto_sans">모집대상</div>
                        <div className="desc">
                            <p><span>-</span><span>4년제 대학 기준 2022년 2월 이전 졸업예정 또는 경력 2년 미만의 기 졸업자 (전공무관)</span></p>
                            <p><span>-</span><span>LG유플러스 '21년 하반기 UX신입사원 채용 전형 참석 가능자</span></p>
                            <p><span>-</span><span>2022년 1월 입사 가능자</span></p>
                        </div>
                    </div>
                    <div className="content_wrapper" id="scroll_1">
                        <div className="title noto_sans">공모분야</div>
                        <div className="desc">
                            <p><span>-</span><span>단체 참가는 불가하며, 개인만 참가 가능합니다.</span> </p>
                            <p><span>-</span><span>지원자 당 한 분야, 한 작품 지원만 가능합니다.</span></p>
                            <p><span>-</span><span>타 공모전 수상작은 출품 불가합니다.</span></p>
                            <p><span>-</span><span>본 공모전 참여 시 '21년 하반기 신입채용 타 공고에 중복지원이 불가합니다.</span></p>
                        </div>
                    </div>
                </section>
                <section className="content content__b">
                    <div className="case case__1 active" data-case="UX_RESEARCH">
                        {/* <img src="/img/btn-part-01@2x.png" alt=""> */}
                        <span className="btn_case noto_sans">UX리서치 및 전략</span>
                        <span className="hello noto_sans">Hello</span>
                    </div>
                    <div className="case case__2" data-case="UI_PLAN">
                        {/* <img src="/img/btn-part-01@2x.png" alt=""> */}
                        <span className="btn_case noto_sans">UI기획 및 설계</span>
                        <span className="hello noto_sans">Hello</span>
                    </div>
                    <div className="case case__3" data-case="GUI_DESIGN">
                        {/* <img src="/img/btn-part-01@2x.png" alt=""> */}
                        <span className="btn_case noto_sans">GUI 디자인</span>
                        <span className="hello noto_sans">Hello</span>
                    </div>
                    <div className="case case__4" data-case="UX_PROTOTYPE">
                        {/* <img src="/img/btn-part-01@2x.png" alt=""> */}
                        <span className="btn_case noto_sans">UX 프로토타이핑</span>
                        <span className="hello noto_sans">Hello</span>
                    </div>
                </section>
                <section className="content content__c">
                    <div className="module_line" id="content_subject">
                        <div className="subtitle">주제</div>
                        <div className="description">
                            {/* <p><span></span><span> 포스트 코로나 시대에서 새로운 고객가치를 전달할 수 있는 신규 서비스 및 UX 전략/기획 제안</span></p> */}
                        </div>
                    </div>
                    <div className="module_line" id="content_detailguide">
                        <div className="subtitle">상세가이드</div>
                        <div className="description">
                        {/* <p><span></span><span> 포스트 코로나 시대에서 새로운 고객가치를 전달할 수 있는 신규 서비스 및 UX 전략/기획 제안</span></p> */}
                        </div>
                    </div>
                    <div className="module_line" id="content_form">
                        <div className="subtitle">제출형식</div>
                        <div className="description">
                            {/* <p><span>① </span><span>PDF문서 (필수) </span><span>30MB 이내</span></p> */}
                        </div>
                    </div>
                    <div className="module_line" id="content_amount">
                        <div className="subtitle">제출분량</div>
                        <div className="description">
                            {/* <p><span>① </span><span>지원서 접수 (LG Careers 사이트 제출)</span></p>
                            <p><span>② </span><span>표지 포함 10장 이내 (UX공모전 이메일로 제출)</span></p> */}
                        </div>
                    </div>
                    <div className="module_line underline">
                        <div className="subtitle">작성가이드</div>
                        <div className="description">
                            <p>
                                <span>1. </span><span>출품 파일은 지원자가 자율적으로 구성하여 작성할 수 있음</span>
                            </p>
                            <p>
                                <span>2. </span><span>평가기준을 참고하여 화면 구성 및 설명을 기입</span>
                            </p>
                            <p>
                                <span>3. </span><span>원칙적으로 화면의 분량은 제한이 없으나 가급적 10페이지 이내로 작성할 것을 권장함</span>
                            </p>
                            <p>
                                <span>4. </span><span>지원서 접수는 LG Careers <a href="http://apply.lg.com" target="_blank"><span>http://apply.lg.com</span></a>를 통해 제출해주시고,
                                그 외 공모전 출품은 UX공모전 공용계정 이메일 <span className="email_address">uxawards@lguplus.co.kr</span>로
                                제출해주시기 바랍니다.</span>
                            </p>
                            <p>
                                <span>5. </span><span>작품 송부 시에는 파일명에 지원자 명과 지원날짜, 공모 분야를 모두 포함 바랍니다.
                                    ex) 210830_디자인_박00.pdf / 210830_디자인_박00_영상.mp4</span>
                            </p>
                        </div>
                    </div>
                    <div className="module_line type_b" id="content_standard">
                        <div className="subtitle">평가기준</div>
                        <div className="description">
                            {/* <div className="text_wrapper">
                                <p>
                                    <span>1. </span><span>주제 분석 능력 평가 (20%)</span>
                                </p>
                                <p className="sub_text">서비스에 대한 배경과 타겟 사용자에 대한 이해도가 높은가?</p>
                            </div>
                            <div className="text_wrapper">
                                <p>
                                    <span>2. </span><span>사용자 UX 전략/기획 도출 능력 평가 (50%)</span>
                                </p>
                                <p className="sub_text">UX전략/기획 도출과정이 논리적이며, 창의적인 접근으로 고객의 Needs를 해결해 줄 수 있는가?</p>
                            </div>
                            <div className="text_wrapper">
                                <p>
                                    <span>1. </span><span>최종 산출물의 완성도 평가 (30%)</span>
                                </p>
                                <p className="sub_text">분석 결과에 의거하여 완성도 높고 창의적으로 최종결과물을 완성도 높게 구현했는가?</p>
                            </div> */}
                        </div>
                    </div>
                </section>
                <section className="content content__c">
                    <div className="content_wrapper" id="scroll_2">
                        <div className="title noto_sans">수상특전</div>
                        <div className="desc">
                            <p><span>-</span><span>입상자에게는 '21년 하반기 UX 신입채용 서류 면제 혜택이 부여됩니다.</span></p>
                            <p><span>-</span><span>입상자 외에도 우수작의 경우 '21년 하반기 UX 신입채용 서류 전형 면제 혜택이 부여될 수 있습니다.</span></p>
                        </div>
                        <div className="detail_wrapper">
                            <div className="detail">
                                <div>
                                    <span className="noto_sans">Gold(4인)</span><span></span><span className="noto_sans">상금 100만원 및 상장</span>
                                </div>
                                <div>
                                    <span className="noto_sans">Silver(4인)</span><span></span><span className="noto_sans">상금 50만원 및 상장</span>
                                </div>
                                <div>
                                    <span className="noto_sans">Bronze(8인)</span><span></span><span className="noto_sans">상금 30만원 및 상장</span>
                                </div>
                            </div>
                            <img src="/img/img-congrats_2021_new.png" alt=""></img>
                        </div>
                    </div>
                </section>
                <section className="content content__d">
                    <div className="content_wrapper" id="scroll_3">
                        <div className="title noto_sans">진행절차</div>
                        <div className="desc">
                            <p>하기 일정은 상황에 따라 변경될 수 있으며, 각 전형 별 상세 일정은 합격자에게 개별 통보됩니다.</p>
                        </div>
                        <div className="process">
                            <div className="step">
                                <div className="date noto_sans"><span className="noto_sans">9월 28일</span></div>
                                <div className="text noto_sans">수상작발표</div>
                            </div>
                            <div className="step step_line"></div>
                            <div className="step">
                                <div className="date noto_sans"><span className="noto_sans">10월 5일</span></div>
                                <div className="text noto_sans">시상식 진행</div>
                            </div>
                            <div className="step step_line"></div>
                            <div className="step">
                                <div className="date noto_sans"><span className="noto_sans">10월 중</span></div>
                                <div className="text noto_sans">인적성검사 & AI영상 면접</div>
                            </div>
                            <div className="step step_line"></div>
                            <div className="step">
                                <div className="date noto_sans"><span className="noto_sans">10월 중</span></div>
                                <div className="text noto_sans">실무 면접</div>
                            </div>
                            <div className="step step_line"></div>
                            <div className="step no_shrink">
                                <div className="date noto_sans"><span className="noto_sans">10월 ~ 11월중</span></div>
                                <div className="text noto_sans">인턴십(4주)</div>
                            </div>
                            <div className="step step_line"></div>
                            <div className="step">
                                <div className="date noto_sans"><span className="noto_sans">11월 중</span></div>
                                <div className="text noto_sans">임원 면접</div>
                            </div>
                            <div className="step step_line"></div>
                            <div className="step">
                                <div className="date date_final noto_sans"><span className="noto_sans">22년 1/1</span></div>
                                <div className="text noto_sans">입사</div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="apply">
                    <a className="btn btn__apply no_underline" href="http://apply.lg.com/app/job/RetrieveJobNotices.rpi?sCompanyCode=LGT" target="_blank">
                        <span>지원하기</span>
                    </a>
                </section> */}
                <section className="content content__c content__c__a">
                    <div className="module_line">
                        <div className="subtitle">*UX 공모전 작품 제출 및 수상관련 안내사항</div>
                        <div className="description">
                            <p>
                                <span>1. </span><span>타 공모전 수상작 혹은 타인의 저작물 및 명의도용 확인의 경우 수상취소 혹은 수상내역 환수
                                    ※ 표절 작품은 수상에서 제외되며, 수상작으로 선정된 이후 표절사실이 밝혀질 경우 수상 취소 및 상금 및 상장 환수
                                </span>
                            </p>
                            <p>
                                <span>2. </span><span>저작권, 초상권 등과 관련한 응모한 작품의 모든 법적인 책임은 응모자에게 있음</span>
                            </p>
                            <p>
                                <span>3. </span><span>수상작품의 저작권은 수상자에게 있으나, 주최측은 수상 작품발표, 홍보, 캠페인 등의 목적으로 활용(필요시 재가공)할 수 있음</span>
                            </p>
                            <p>
                                <span>4. </span><span>상금에 대한 제세공과금은 수상자가 부담함</span>
                            </p>
                            <p>
                                <span>5. </span><span>작품 송부 시에는 파일명에 지원자 명과 지원날짜, 공모 분야를 모두 포함 바랍니다.</span>
                            </p>
                        </div>
                    </div>
                </section>
            </article>
            <article className="qna">
                <section className="content content__e" id="scroll_4">
                    <div className="content_wrapper">
                        <div className="title noto_sans">자주 묻는 질문</div>
                        <div className="desc">
                            <p className="not_flex">
                                작성 가이드 및 파일 접수와 관련한 질문을 아래에서
                                확인하시고 원하시는 답변을 찾을 수 없다면
                                <a target="_blank" href="http://apply.lg.com/app/faq/RetrieveFaq.rpi?requestMenuId=1069">LG Careers 사이트의 1:1 질문하기</a>
                                를 통해 질문해주시기 바랍니다.
                            </p>
                        </div>
                        <div className="wrapper_qna_case">
                            <div className="case_qna">
                                <p className="question"><span className="noto_sans">Q1.</span><span className="noto_sans">공모전 접수는 어디로 하면 되나요?</span></p>
                                <p className="answer">
                                    지원서 접수는 LG Careers 사이트를 통해 제출해 주시고 작품 제출 (PDF/동영상(선택))은
                                    UX공모전 공용계정 이메일 <span className="email_address">uxawards@lguplus.co.kr</span>로 접수해주시기 바랍니다. 
                                </p>
                            </div>
                            <div className="case_qna">
                                <p className="question"><span className="noto_sans">Q2.</span><span className="noto_sans">다른 이메일 계정으로 여러 공모분야에 중복 지원이 가능한가요?</span></p>
                                <p className="answer">
                                    중복지원은 불가하며 한 분야에 한 작품만 지원 가능합니다.
                                    동일인이 여러 이메일을 이용하여 지원하는 경우 불이익이 있을 수 있습니다. 
                                </p>
                            </div>
                            <div className="case_qna">
                                <p className="question"><span className="noto_sans">Q3.</span><span className="noto_sans">저는 석사인데, 지원 가능한가요?</span></p>
                                <p className="answer">
                                    석사 전공자도 지원 가능하나, 경력 2년 미만일 경우에만 지원 가능합니다.
                                </p>
                            </div>
                            <div className="case_qna">
                                <p className="question"><span className="noto_sans">Q4.</span><span className="noto_sans">과거에 불합격한 사람이 다시 지원해도 되나요?</span></p>
                                <p className="answer">
                                    과거 지원 이력에 따른 별도의 제한은 없어, 지원 가능합니다.
                                </p>
                            </div>
                            <div className="case_qna">
                                <p className="question"><span className="noto_sans">Q5.</span><span className="noto_sans">지원 시 성별 및 연령제한이 있나요?</span></p>
                                <p className="answer">
                                    LG유플러스는 지원시 성별 및 연령 제한을 두지 않고 있습니다.
                                </p>
                            </div>
                            <div className="case_qna">
                                <p className="question"><span className="noto_sans">Q6.</span><span className="noto_sans">작품제출을 이미 했는데 수정 가능한가요?</span></p>
                                <p className="answer">
                                    수정이 필요할 경우, 기간 내 추가적으로 작품을 메일로 송부 가능합니다.
                                    단, 수정 횟수는 1회로 제한하며,  2회 초과 지원 시 2회차 송부된 메일 기준으로 작품이 심사됩니다.
                                </p>
                            </div>
                            <div className="case_qna">
                                <p className="question"><span className="noto_sans">Q7.</span><span className="noto_sans">각 직무 별 어떤 업무를 하는 지 구체적으로 알고 싶어요.</span></p>
                                <p className="answer">
                                    LG Careers의 ’MEET LG' 페이지에는 LG의 주요 직무 소개, 조직 분위기, 선배 사원 이야기, 조직 문화 등과
                                    관련된 자료들이 모아져 있습니다. 'MEET LG'를 통해 내가 가고 싶은 회사를 미리 경험해보세요.
                                    홈 화면의 배너를 통해서 해당 페이지로 바로 이동이 가능합니다.
                                </p>
                            </div>
                            {/* <div className="case_qna">
                                <p className="question"><span>Q8.</span><span>기존 유플러스 서비스 중 하나를 골라 개편 및 개선 제안을 해도 되나요?</span></p>
                                <p className="answer">
                                    기존 유플러스 서비스(모바일tv, 프로야구, 아이들나라 등)를 개편 및 개선하는 것이 아닌, 새로운 서비스에 대한 솔루션을 제안하는 과제입니다.
                                    단, 수정 횟수는 1회로 제한하며,  2회 초과 지원 시 2회차 송부된 메일 기준으로 작품이 심사됩니다.
                                </p>
                            </div> */}
                            <div className="case_qna">
                                <p className="question"><span className="noto_sans">Q8.</span><span className="noto_sans">유플러스가 현재 진행하는 산업군을 고려하여 과제를 수행해야 하나요?</span></p>
                                <p className="answer">
                                    다양한 산업군을 고려하여 자유롭게 과제 진행해주시면 됩니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="banner banner_mobile">
                    <div className="mobile_message">
                        <span>공모전은 PC에서만 지원 가능합니다.</span>
                    </div>
                </section>
                <section className="apply">
                    <a className="btn btn__apply no_underline" href="http://apply.lg.com/app/job/RetrieveJobNotices.rpi?sCompanyCode=LGT" target="_blank">
                        <span className="noto_sans">지원하기</span>
                    </a>
                    <img src="/img/img_lgu_logo.png" alt="" className="logo"></img>
                </section>
            </article>
          </div>
      </Fragment>
    );
  }
}

export default App;