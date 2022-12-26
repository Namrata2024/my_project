import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Link } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { usemain_containerCb, usemain_divCb, usewrapper_navCb, usenavCb, useFlex3Cb, usehome_hero_sectionCb, usecontentCb, usebutton_wrapperCb, usedwld_csvCb, useDiv2Cb, usetrusted_byCb, useTrusted_by_headingCb, useFlex_trustCb, useFlex14Cb, useservice_wrapperCb, useservice_text2Cb, useDiv3Cb, useFlex18Cb, useFlex19Cb, useFlex20Cb, useDiv4Cb, useFlex21Cb, useFlex22Cb, useFlex23Cb, useDiv5Cb, useFlex24Cb, useFlex25Cb, useFlex27Cb, useservice_text1Cb, useproject_wrapperCb, useproject_textCb, useimage_projectsCb, useDiv8Cb, useDiv10Cb, useDiv13Cb, usetitle_projectsCb, useFlex37Cb, useDiv9Cb, useFlex36Cb, useDiv15Cb, useFlex38Cb, useDiv16Cb, useFlex39Cb, useblogs_sectionCb, useblog_boxCb, useDiv18Cb, useview_all_boxCb, useright_boxCb, userightbox_1Cb, useread_boxCb, useFlex56Cb, useFlex55Cb, useFlex60Cb, useFlex59Cb, useFlex64Cb, useFlex63Cb, useFlex69Cb, useFlex68Cb, usearrow_boxCb, useFlex44Cb, useright_arrow_boxCb, useleft_arrow_boxCb, useabout_section_1Cb, useabot_divCb, useabout_textCb, useleft_aboutCb, useabout_1_rightCb, useFlex67Cb, useDiv27Cb, useDiv28Cb, useFlex71Cb, useDiv33Cb, useDiv34Cb, useexperience_sectionCb, useFlex75Cb, useedu_boCb, useDiv54Cb, useFlex85Cb, useDiv53Cb, useFlex84Cb, useDiv80Cb, useFlex116Cb, useFlex115Cb, useDiv79Cb, useDiv82Cb, useFlex118Cb, useDiv81Cb, useFlex117Cb, useDiv61Cb, useDiv58Cb, useFlex89Cb, useFlex86Cb, useDiv55Cb, useDiv67Cb, useFlex97Cb, useDiv66Cb, useFlex102Cb, useDiv69Cb, useFlex99Cb, useDiv68Cb, useFlex98Cb, usetestimonial_sectionCb, useFlex104Cb, useFlex105Cb, useFlex107Cb, useFlex106Cb, useDiv75Cb, useFlex111Cb, useFlex109Cb, useFlex110Cb, useFaq_section&footerCb, useDiv76Cb, useFlex119Cb, useFlex120Cb, useDiv89Cb, useDiv88Cb, useFlex126Cb, useFlex123Cb, useDiv85Cb, useDiv105Cb, useFlex140Cb, useDiv104Cb, useFlex139Cb, useDiv109Cb, useFlex144Cb, useFlex143Cb, useDiv108Cb, useDiv111Cb, useFlex146Cb, useDiv110Cb, useFlex145Cb, useDiv96Cb, useDiv113Cb, useFlex148Cb, useDiv112Cb, useFlex147Cb, useDiv115Cb, useFlex150Cb, useDiv114Cb, useFlex149Cb, useDiv117Cb, useFlex152Cb, useDiv116Cb, useFlex151Cb, useDiv119Cb, useFlex154Cb, useDiv118Cb, useFlex153Cb, usefooterCb, useFlex164Cb, useFlex156Cb, useDiv124Cb, useFlex159Cb, useFlex158Cb, useFlex160Cb, useFlex161Cb, useFlex162Cb, useDiv122Cb, useFlex163Cb, useImage1Cb, useabout_headingCb, useservicesCb, useprojectCb, useblogsCb, usebookCb, usearrowCb, useTextBox1Cb, usesmall_contentCb, usedesign_lineCb, usebook_btnCb, useTextBox3Cb, useImage4Cb, useImage5Cb, usetrusted_by_textCb, useImageCb, useImage7Cb, useImage3Cb, useImage9Cb, uses1Cb, useTextBox6Cb, useTextBox9Cb, useTextBox16Cb, useTextBox17Cb, useTextBox18Cb, uses2Cb, useTextBox12Cb, useTextBox14Cb, useTextBox19Cb, useTextBox20Cb, useTextBox21Cb, useImage13Cb, useTextBox13Cb, useTextBox15Cb, useTextBox22Cb, useTextBox23Cb, useTextBox25Cb, useservice_textCb, uses_text1Cb, useview_btnCb, useproject_headingCb, useTextBox26Cb, useTextBox27Cb, useImage16Cb, useImage19Cb, useImage22Cb, useTextBox29Cb, usegr_txt1Cb, useTextBox30Cb, usearrow_1Cb, useImage24Cb, useTextBox32Cb, useImage23Cb, useTextBox31Cb, useImage26Cb, useTextBox34Cb, useImage25Cb, useTextBox33Cb, useblogs_headingCb, useTextBox36Cb, usewhite_arrrowCb, useTextBox38Cb, usedate_timeCb, useread_articleCb, usewhie_arrowCb, useTextBox55Cb, useTextBox56Cb, useImage36Cb, useTextBox54Cb, useTextBox61Cb, useTextBox62Cb, useTextBox60Cb, useImage38Cb, useTextBox67Cb, useTextBox68Cb, useImage40Cb, useTextBox66Cb, useTextBox73Cb, useTextBox74Cb, useTextBox72Cb, useImage42Cb, useright_arrowCb, useleft_arrowCb, useproduct_headingCb, useTextBox70Cb, useTextBox71Cb, useImage43Cb, useImage44Cb, useImage49Cb, useImage50Cb, useeducation_headingCb, useTextBox91Cb, useTextBox92Cb, useTextBox93Cb, useImage61Cb, useImage84Cb, useTextBox129Cb, useTextBox130Cb, useTextBox131Cb, useTextBox132Cb, useTextBox133Cb, useTextBox134Cb, useImage85Cb, useTextBox104Cb, useImage67Cb, useImage62Cb, useTextBox95Cb, useTextBox96Cb, useTextBox97Cb, useImage69Cb, useTextBox111Cb, useTextBox112Cb, useTextBox120Cb, useImage74Cb, useImage71Cb, useTextBox114Cb, useTextBox115Cb, useImage70Cb, useTextBox121Cb, useImage75Cb, useTextBox122Cb, useImage76Cb, useImage77Cb, useTextBox123Cb, useTextBox124Cb, useTextBox125Cb, useImage80Cb, useImage82Cb, useImage86Cb, useTextBox135Cb, useImage89Cb, useTextBox144Cb, useTextBox166Cb, useImage96Cb, useImage98Cb, useTextBox168Cb, useTextBox169Cb, useImage99Cb, useTextBox170Cb, useImage100Cb, useTextBox171Cb, useImage101Cb, useTextBox172Cb, useImage102Cb, useTextBox173Cb, useImage103Cb, useImage106Cb, useTextBox175Cb, useImage107Cb, useTextBox176Cb, usefooter_linkCb, useTextBox183Cb, useTextBox184Cb, useTextBox185Cb, useTextBox186Cb, useTextBox188Cb, useTextBox189Cb, useTextBox190Cb, useTextBox192Cb, useTextBox174Cb, useImage104Cb, useLink9Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const main_containerProps = useStore((state)=>state["Home"]["main_container"]);
const main_containerIoProps = useIoStore((state)=>state["Home"]["main_container"]);
const main_containerCb = usemain_containerCb()
const main_divProps = useStore((state)=>state["Home"]["main_div"]);
const main_divIoProps = useIoStore((state)=>state["Home"]["main_div"]);
const main_divCb = usemain_divCb()
const wrapper_navProps = useStore((state)=>state["Home"]["wrapper_nav"]);
const wrapper_navIoProps = useIoStore((state)=>state["Home"]["wrapper_nav"]);
const wrapper_navCb = usewrapper_navCb()
const navProps = useStore((state)=>state["Home"]["nav"]);
const navIoProps = useIoStore((state)=>state["Home"]["nav"]);
const navCb = usenavCb()
const Flex3Props = useStore((state)=>state["Home"]["Flex3"]);
const Flex3IoProps = useIoStore((state)=>state["Home"]["Flex3"]);
const Flex3Cb = useFlex3Cb()
const home_hero_sectionProps = useStore((state)=>state["Home"]["home_hero_section"]);
const home_hero_sectionIoProps = useIoStore((state)=>state["Home"]["home_hero_section"]);
const home_hero_sectionCb = usehome_hero_sectionCb()
const contentProps = useStore((state)=>state["Home"]["content"]);
const contentIoProps = useIoStore((state)=>state["Home"]["content"]);
const contentCb = usecontentCb()
const button_wrapperProps = useStore((state)=>state["Home"]["button_wrapper"]);
const button_wrapperIoProps = useIoStore((state)=>state["Home"]["button_wrapper"]);
const button_wrapperCb = usebutton_wrapperCb()
const dwld_csvProps = useStore((state)=>state["Home"]["dwld_csv"]);
const dwld_csvIoProps = useIoStore((state)=>state["Home"]["dwld_csv"]);
const dwld_csvCb = usedwld_csvCb()
const Div2Props = useStore((state)=>state["Home"]["Div2"]);
const Div2IoProps = useIoStore((state)=>state["Home"]["Div2"]);
const Div2Cb = useDiv2Cb()
const trusted_byProps = useStore((state)=>state["Home"]["trusted_by"]);
const trusted_byIoProps = useIoStore((state)=>state["Home"]["trusted_by"]);
const trusted_byCb = usetrusted_byCb()
const Trusted_by_headingProps = useStore((state)=>state["Home"]["Trusted_by_heading"]);
const Trusted_by_headingIoProps = useIoStore((state)=>state["Home"]["Trusted_by_heading"]);
const Trusted_by_headingCb = useTrusted_by_headingCb()
const Flex_trustProps = useStore((state)=>state["Home"]["Flex_trust"]);
const Flex_trustIoProps = useIoStore((state)=>state["Home"]["Flex_trust"]);
const Flex_trustCb = useFlex_trustCb()
const Flex14Props = useStore((state)=>state["Home"]["Flex14"]);
const Flex14IoProps = useIoStore((state)=>state["Home"]["Flex14"]);
const Flex14Cb = useFlex14Cb()
const service_wrapperProps = useStore((state)=>state["Home"]["service_wrapper"]);
const service_wrapperIoProps = useIoStore((state)=>state["Home"]["service_wrapper"]);
const service_wrapperCb = useservice_wrapperCb()
const service_text2Props = useStore((state)=>state["Home"]["service_text2"]);
const service_text2IoProps = useIoStore((state)=>state["Home"]["service_text2"]);
const service_text2Cb = useservice_text2Cb()
const Div3Props = useStore((state)=>state["Home"]["Div3"]);
const Div3IoProps = useIoStore((state)=>state["Home"]["Div3"]);
const Div3Cb = useDiv3Cb()
const Flex18Props = useStore((state)=>state["Home"]["Flex18"]);
const Flex18IoProps = useIoStore((state)=>state["Home"]["Flex18"]);
const Flex18Cb = useFlex18Cb()
const Flex19Props = useStore((state)=>state["Home"]["Flex19"]);
const Flex19IoProps = useIoStore((state)=>state["Home"]["Flex19"]);
const Flex19Cb = useFlex19Cb()
const Flex20Props = useStore((state)=>state["Home"]["Flex20"]);
const Flex20IoProps = useIoStore((state)=>state["Home"]["Flex20"]);
const Flex20Cb = useFlex20Cb()
const Div4Props = useStore((state)=>state["Home"]["Div4"]);
const Div4IoProps = useIoStore((state)=>state["Home"]["Div4"]);
const Div4Cb = useDiv4Cb()
const Flex21Props = useStore((state)=>state["Home"]["Flex21"]);
const Flex21IoProps = useIoStore((state)=>state["Home"]["Flex21"]);
const Flex21Cb = useFlex21Cb()
const Flex22Props = useStore((state)=>state["Home"]["Flex22"]);
const Flex22IoProps = useIoStore((state)=>state["Home"]["Flex22"]);
const Flex22Cb = useFlex22Cb()
const Flex23Props = useStore((state)=>state["Home"]["Flex23"]);
const Flex23IoProps = useIoStore((state)=>state["Home"]["Flex23"]);
const Flex23Cb = useFlex23Cb()
const Div5Props = useStore((state)=>state["Home"]["Div5"]);
const Div5IoProps = useIoStore((state)=>state["Home"]["Div5"]);
const Div5Cb = useDiv5Cb()
const Flex24Props = useStore((state)=>state["Home"]["Flex24"]);
const Flex24IoProps = useIoStore((state)=>state["Home"]["Flex24"]);
const Flex24Cb = useFlex24Cb()
const Flex25Props = useStore((state)=>state["Home"]["Flex25"]);
const Flex25IoProps = useIoStore((state)=>state["Home"]["Flex25"]);
const Flex25Cb = useFlex25Cb()
const Flex27Props = useStore((state)=>state["Home"]["Flex27"]);
const Flex27IoProps = useIoStore((state)=>state["Home"]["Flex27"]);
const Flex27Cb = useFlex27Cb()
const service_text1Props = useStore((state)=>state["Home"]["service_text1"]);
const service_text1IoProps = useIoStore((state)=>state["Home"]["service_text1"]);
const service_text1Cb = useservice_text1Cb()
const project_wrapperProps = useStore((state)=>state["Home"]["project_wrapper"]);
const project_wrapperIoProps = useIoStore((state)=>state["Home"]["project_wrapper"]);
const project_wrapperCb = useproject_wrapperCb()
const project_textProps = useStore((state)=>state["Home"]["project_text"]);
const project_textIoProps = useIoStore((state)=>state["Home"]["project_text"]);
const project_textCb = useproject_textCb()
const image_projectsProps = useStore((state)=>state["Home"]["image_projects"]);
const image_projectsIoProps = useIoStore((state)=>state["Home"]["image_projects"]);
const image_projectsCb = useimage_projectsCb()
const Div8Props = useStore((state)=>state["Home"]["Div8"]);
const Div8IoProps = useIoStore((state)=>state["Home"]["Div8"]);
const Div8Cb = useDiv8Cb()
const Div10Props = useStore((state)=>state["Home"]["Div10"]);
const Div10IoProps = useIoStore((state)=>state["Home"]["Div10"]);
const Div10Cb = useDiv10Cb()
const Div13Props = useStore((state)=>state["Home"]["Div13"]);
const Div13IoProps = useIoStore((state)=>state["Home"]["Div13"]);
const Div13Cb = useDiv13Cb()
const title_projectsProps = useStore((state)=>state["Home"]["title_projects"]);
const title_projectsIoProps = useIoStore((state)=>state["Home"]["title_projects"]);
const title_projectsCb = usetitle_projectsCb()
const Flex37Props = useStore((state)=>state["Home"]["Flex37"]);
const Flex37IoProps = useIoStore((state)=>state["Home"]["Flex37"]);
const Flex37Cb = useFlex37Cb()
const Div9Props = useStore((state)=>state["Home"]["Div9"]);
const Div9IoProps = useIoStore((state)=>state["Home"]["Div9"]);
const Div9Cb = useDiv9Cb()
const Flex36Props = useStore((state)=>state["Home"]["Flex36"]);
const Flex36IoProps = useIoStore((state)=>state["Home"]["Flex36"]);
const Flex36Cb = useFlex36Cb()
const Div15Props = useStore((state)=>state["Home"]["Div15"]);
const Div15IoProps = useIoStore((state)=>state["Home"]["Div15"]);
const Div15Cb = useDiv15Cb()
const Flex38Props = useStore((state)=>state["Home"]["Flex38"]);
const Flex38IoProps = useIoStore((state)=>state["Home"]["Flex38"]);
const Flex38Cb = useFlex38Cb()
const Div16Props = useStore((state)=>state["Home"]["Div16"]);
const Div16IoProps = useIoStore((state)=>state["Home"]["Div16"]);
const Div16Cb = useDiv16Cb()
const Flex39Props = useStore((state)=>state["Home"]["Flex39"]);
const Flex39IoProps = useIoStore((state)=>state["Home"]["Flex39"]);
const Flex39Cb = useFlex39Cb()
const blogs_sectionProps = useStore((state)=>state["Home"]["blogs_section"]);
const blogs_sectionIoProps = useIoStore((state)=>state["Home"]["blogs_section"]);
const blogs_sectionCb = useblogs_sectionCb()
const blog_boxProps = useStore((state)=>state["Home"]["blog_box"]);
const blog_boxIoProps = useIoStore((state)=>state["Home"]["blog_box"]);
const blog_boxCb = useblog_boxCb()
const Div18Props = useStore((state)=>state["Home"]["Div18"]);
const Div18IoProps = useIoStore((state)=>state["Home"]["Div18"]);
const Div18Cb = useDiv18Cb()
const view_all_boxProps = useStore((state)=>state["Home"]["view_all_box"]);
const view_all_boxIoProps = useIoStore((state)=>state["Home"]["view_all_box"]);
const view_all_boxCb = useview_all_boxCb()
const right_boxProps = useStore((state)=>state["Home"]["right_box"]);
const right_boxIoProps = useIoStore((state)=>state["Home"]["right_box"]);
const right_boxCb = useright_boxCb()
const rightbox_1Props = useStore((state)=>state["Home"]["rightbox_1"]);
const rightbox_1IoProps = useIoStore((state)=>state["Home"]["rightbox_1"]);
const rightbox_1Cb = userightbox_1Cb()
const read_boxProps = useStore((state)=>state["Home"]["read_box"]);
const read_boxIoProps = useIoStore((state)=>state["Home"]["read_box"]);
const read_boxCb = useread_boxCb()
const Flex56Props = useStore((state)=>state["Home"]["Flex56"]);
const Flex56IoProps = useIoStore((state)=>state["Home"]["Flex56"]);
const Flex56Cb = useFlex56Cb()
const Flex55Props = useStore((state)=>state["Home"]["Flex55"]);
const Flex55IoProps = useIoStore((state)=>state["Home"]["Flex55"]);
const Flex55Cb = useFlex55Cb()
const Flex60Props = useStore((state)=>state["Home"]["Flex60"]);
const Flex60IoProps = useIoStore((state)=>state["Home"]["Flex60"]);
const Flex60Cb = useFlex60Cb()
const Flex59Props = useStore((state)=>state["Home"]["Flex59"]);
const Flex59IoProps = useIoStore((state)=>state["Home"]["Flex59"]);
const Flex59Cb = useFlex59Cb()
const Flex64Props = useStore((state)=>state["Home"]["Flex64"]);
const Flex64IoProps = useIoStore((state)=>state["Home"]["Flex64"]);
const Flex64Cb = useFlex64Cb()
const Flex63Props = useStore((state)=>state["Home"]["Flex63"]);
const Flex63IoProps = useIoStore((state)=>state["Home"]["Flex63"]);
const Flex63Cb = useFlex63Cb()
const Flex69Props = useStore((state)=>state["Home"]["Flex69"]);
const Flex69IoProps = useIoStore((state)=>state["Home"]["Flex69"]);
const Flex69Cb = useFlex69Cb()
const Flex68Props = useStore((state)=>state["Home"]["Flex68"]);
const Flex68IoProps = useIoStore((state)=>state["Home"]["Flex68"]);
const Flex68Cb = useFlex68Cb()
const arrow_boxProps = useStore((state)=>state["Home"]["arrow_box"]);
const arrow_boxIoProps = useIoStore((state)=>state["Home"]["arrow_box"]);
const arrow_boxCb = usearrow_boxCb()
const Flex44Props = useStore((state)=>state["Home"]["Flex44"]);
const Flex44IoProps = useIoStore((state)=>state["Home"]["Flex44"]);
const Flex44Cb = useFlex44Cb()
const right_arrow_boxProps = useStore((state)=>state["Home"]["right_arrow_box"]);
const right_arrow_boxIoProps = useIoStore((state)=>state["Home"]["right_arrow_box"]);
const right_arrow_boxCb = useright_arrow_boxCb()
const left_arrow_boxProps = useStore((state)=>state["Home"]["left_arrow_box"]);
const left_arrow_boxIoProps = useIoStore((state)=>state["Home"]["left_arrow_box"]);
const left_arrow_boxCb = useleft_arrow_boxCb()
const about_section_1Props = useStore((state)=>state["Home"]["about_section_1"]);
const about_section_1IoProps = useIoStore((state)=>state["Home"]["about_section_1"]);
const about_section_1Cb = useabout_section_1Cb()
const abot_divProps = useStore((state)=>state["Home"]["abot_div"]);
const abot_divIoProps = useIoStore((state)=>state["Home"]["abot_div"]);
const abot_divCb = useabot_divCb()
const about_textProps = useStore((state)=>state["Home"]["about_text"]);
const about_textIoProps = useIoStore((state)=>state["Home"]["about_text"]);
const about_textCb = useabout_textCb()
const left_aboutProps = useStore((state)=>state["Home"]["left_about"]);
const left_aboutIoProps = useIoStore((state)=>state["Home"]["left_about"]);
const left_aboutCb = useleft_aboutCb()
const about_1_rightProps = useStore((state)=>state["Home"]["about_1_right"]);
const about_1_rightIoProps = useIoStore((state)=>state["Home"]["about_1_right"]);
const about_1_rightCb = useabout_1_rightCb()
const Flex67Props = useStore((state)=>state["Home"]["Flex67"]);
const Flex67IoProps = useIoStore((state)=>state["Home"]["Flex67"]);
const Flex67Cb = useFlex67Cb()
const Div27Props = useStore((state)=>state["Home"]["Div27"]);
const Div27IoProps = useIoStore((state)=>state["Home"]["Div27"]);
const Div27Cb = useDiv27Cb()
const Div28Props = useStore((state)=>state["Home"]["Div28"]);
const Div28IoProps = useIoStore((state)=>state["Home"]["Div28"]);
const Div28Cb = useDiv28Cb()
const Flex71Props = useStore((state)=>state["Home"]["Flex71"]);
const Flex71IoProps = useIoStore((state)=>state["Home"]["Flex71"]);
const Flex71Cb = useFlex71Cb()
const Div33Props = useStore((state)=>state["Home"]["Div33"]);
const Div33IoProps = useIoStore((state)=>state["Home"]["Div33"]);
const Div33Cb = useDiv33Cb()
const Div34Props = useStore((state)=>state["Home"]["Div34"]);
const Div34IoProps = useIoStore((state)=>state["Home"]["Div34"]);
const Div34Cb = useDiv34Cb()
const experience_sectionProps = useStore((state)=>state["Home"]["experience_section"]);
const experience_sectionIoProps = useIoStore((state)=>state["Home"]["experience_section"]);
const experience_sectionCb = useexperience_sectionCb()
const Flex75Props = useStore((state)=>state["Home"]["Flex75"]);
const Flex75IoProps = useIoStore((state)=>state["Home"]["Flex75"]);
const Flex75Cb = useFlex75Cb()
const edu_boProps = useStore((state)=>state["Home"]["edu_bo"]);
const edu_boIoProps = useIoStore((state)=>state["Home"]["edu_bo"]);
const edu_boCb = useedu_boCb()
const Div54Props = useStore((state)=>state["Home"]["Div54"]);
const Div54IoProps = useIoStore((state)=>state["Home"]["Div54"]);
const Div54Cb = useDiv54Cb()
const Flex85Props = useStore((state)=>state["Home"]["Flex85"]);
const Flex85IoProps = useIoStore((state)=>state["Home"]["Flex85"]);
const Flex85Cb = useFlex85Cb()
const Div53Props = useStore((state)=>state["Home"]["Div53"]);
const Div53IoProps = useIoStore((state)=>state["Home"]["Div53"]);
const Div53Cb = useDiv53Cb()
const Flex84Props = useStore((state)=>state["Home"]["Flex84"]);
const Flex84IoProps = useIoStore((state)=>state["Home"]["Flex84"]);
const Flex84Cb = useFlex84Cb()
const Div80Props = useStore((state)=>state["Home"]["Div80"]);
const Div80IoProps = useIoStore((state)=>state["Home"]["Div80"]);
const Div80Cb = useDiv80Cb()
const Flex116Props = useStore((state)=>state["Home"]["Flex116"]);
const Flex116IoProps = useIoStore((state)=>state["Home"]["Flex116"]);
const Flex116Cb = useFlex116Cb()
const Flex115Props = useStore((state)=>state["Home"]["Flex115"]);
const Flex115IoProps = useIoStore((state)=>state["Home"]["Flex115"]);
const Flex115Cb = useFlex115Cb()
const Div79Props = useStore((state)=>state["Home"]["Div79"]);
const Div79IoProps = useIoStore((state)=>state["Home"]["Div79"]);
const Div79Cb = useDiv79Cb()
const Div82Props = useStore((state)=>state["Home"]["Div82"]);
const Div82IoProps = useIoStore((state)=>state["Home"]["Div82"]);
const Div82Cb = useDiv82Cb()
const Flex118Props = useStore((state)=>state["Home"]["Flex118"]);
const Flex118IoProps = useIoStore((state)=>state["Home"]["Flex118"]);
const Flex118Cb = useFlex118Cb()
const Div81Props = useStore((state)=>state["Home"]["Div81"]);
const Div81IoProps = useIoStore((state)=>state["Home"]["Div81"]);
const Div81Cb = useDiv81Cb()
const Flex117Props = useStore((state)=>state["Home"]["Flex117"]);
const Flex117IoProps = useIoStore((state)=>state["Home"]["Flex117"]);
const Flex117Cb = useFlex117Cb()
const Div61Props = useStore((state)=>state["Home"]["Div61"]);
const Div61IoProps = useIoStore((state)=>state["Home"]["Div61"]);
const Div61Cb = useDiv61Cb()
const Div58Props = useStore((state)=>state["Home"]["Div58"]);
const Div58IoProps = useIoStore((state)=>state["Home"]["Div58"]);
const Div58Cb = useDiv58Cb()
const Flex89Props = useStore((state)=>state["Home"]["Flex89"]);
const Flex89IoProps = useIoStore((state)=>state["Home"]["Flex89"]);
const Flex89Cb = useFlex89Cb()
const Flex86Props = useStore((state)=>state["Home"]["Flex86"]);
const Flex86IoProps = useIoStore((state)=>state["Home"]["Flex86"]);
const Flex86Cb = useFlex86Cb()
const Div55Props = useStore((state)=>state["Home"]["Div55"]);
const Div55IoProps = useIoStore((state)=>state["Home"]["Div55"]);
const Div55Cb = useDiv55Cb()
const Div67Props = useStore((state)=>state["Home"]["Div67"]);
const Div67IoProps = useIoStore((state)=>state["Home"]["Div67"]);
const Div67Cb = useDiv67Cb()
const Flex97Props = useStore((state)=>state["Home"]["Flex97"]);
const Flex97IoProps = useIoStore((state)=>state["Home"]["Flex97"]);
const Flex97Cb = useFlex97Cb()
const Div66Props = useStore((state)=>state["Home"]["Div66"]);
const Div66IoProps = useIoStore((state)=>state["Home"]["Div66"]);
const Div66Cb = useDiv66Cb()
const Flex102Props = useStore((state)=>state["Home"]["Flex102"]);
const Flex102IoProps = useIoStore((state)=>state["Home"]["Flex102"]);
const Flex102Cb = useFlex102Cb()
const Div69Props = useStore((state)=>state["Home"]["Div69"]);
const Div69IoProps = useIoStore((state)=>state["Home"]["Div69"]);
const Div69Cb = useDiv69Cb()
const Flex99Props = useStore((state)=>state["Home"]["Flex99"]);
const Flex99IoProps = useIoStore((state)=>state["Home"]["Flex99"]);
const Flex99Cb = useFlex99Cb()
const Div68Props = useStore((state)=>state["Home"]["Div68"]);
const Div68IoProps = useIoStore((state)=>state["Home"]["Div68"]);
const Div68Cb = useDiv68Cb()
const Flex98Props = useStore((state)=>state["Home"]["Flex98"]);
const Flex98IoProps = useIoStore((state)=>state["Home"]["Flex98"]);
const Flex98Cb = useFlex98Cb()
const testimonial_sectionProps = useStore((state)=>state["Home"]["testimonial_section"]);
const testimonial_sectionIoProps = useIoStore((state)=>state["Home"]["testimonial_section"]);
const testimonial_sectionCb = usetestimonial_sectionCb()
const Flex104Props = useStore((state)=>state["Home"]["Flex104"]);
const Flex104IoProps = useIoStore((state)=>state["Home"]["Flex104"]);
const Flex104Cb = useFlex104Cb()
const Flex105Props = useStore((state)=>state["Home"]["Flex105"]);
const Flex105IoProps = useIoStore((state)=>state["Home"]["Flex105"]);
const Flex105Cb = useFlex105Cb()
const Flex107Props = useStore((state)=>state["Home"]["Flex107"]);
const Flex107IoProps = useIoStore((state)=>state["Home"]["Flex107"]);
const Flex107Cb = useFlex107Cb()
const Flex106Props = useStore((state)=>state["Home"]["Flex106"]);
const Flex106IoProps = useIoStore((state)=>state["Home"]["Flex106"]);
const Flex106Cb = useFlex106Cb()
const Div75Props = useStore((state)=>state["Home"]["Div75"]);
const Div75IoProps = useIoStore((state)=>state["Home"]["Div75"]);
const Div75Cb = useDiv75Cb()
const Flex111Props = useStore((state)=>state["Home"]["Flex111"]);
const Flex111IoProps = useIoStore((state)=>state["Home"]["Flex111"]);
const Flex111Cb = useFlex111Cb()
const Flex109Props = useStore((state)=>state["Home"]["Flex109"]);
const Flex109IoProps = useIoStore((state)=>state["Home"]["Flex109"]);
const Flex109Cb = useFlex109Cb()
const Flex110Props = useStore((state)=>state["Home"]["Flex110"]);
const Flex110IoProps = useIoStore((state)=>state["Home"]["Flex110"]);
const Flex110Cb = useFlex110Cb()
const Faq_section&footerProps = useStore((state)=>state["Home"]["Faq_section&footer"]);
const Faq_section&footerIoProps = useIoStore((state)=>state["Home"]["Faq_section&footer"]);
const Faq_section&footerCb = useFaq_section&footerCb()
const Div76Props = useStore((state)=>state["Home"]["Div76"]);
const Div76IoProps = useIoStore((state)=>state["Home"]["Div76"]);
const Div76Cb = useDiv76Cb()
const Flex119Props = useStore((state)=>state["Home"]["Flex119"]);
const Flex119IoProps = useIoStore((state)=>state["Home"]["Flex119"]);
const Flex119Cb = useFlex119Cb()
const Flex120Props = useStore((state)=>state["Home"]["Flex120"]);
const Flex120IoProps = useIoStore((state)=>state["Home"]["Flex120"]);
const Flex120Cb = useFlex120Cb()
const Div89Props = useStore((state)=>state["Home"]["Div89"]);
const Div89IoProps = useIoStore((state)=>state["Home"]["Div89"]);
const Div89Cb = useDiv89Cb()
const Div88Props = useStore((state)=>state["Home"]["Div88"]);
const Div88IoProps = useIoStore((state)=>state["Home"]["Div88"]);
const Div88Cb = useDiv88Cb()
const Flex126Props = useStore((state)=>state["Home"]["Flex126"]);
const Flex126IoProps = useIoStore((state)=>state["Home"]["Flex126"]);
const Flex126Cb = useFlex126Cb()
const Flex123Props = useStore((state)=>state["Home"]["Flex123"]);
const Flex123IoProps = useIoStore((state)=>state["Home"]["Flex123"]);
const Flex123Cb = useFlex123Cb()
const Div85Props = useStore((state)=>state["Home"]["Div85"]);
const Div85IoProps = useIoStore((state)=>state["Home"]["Div85"]);
const Div85Cb = useDiv85Cb()
const Div105Props = useStore((state)=>state["Home"]["Div105"]);
const Div105IoProps = useIoStore((state)=>state["Home"]["Div105"]);
const Div105Cb = useDiv105Cb()
const Flex140Props = useStore((state)=>state["Home"]["Flex140"]);
const Flex140IoProps = useIoStore((state)=>state["Home"]["Flex140"]);
const Flex140Cb = useFlex140Cb()
const Div104Props = useStore((state)=>state["Home"]["Div104"]);
const Div104IoProps = useIoStore((state)=>state["Home"]["Div104"]);
const Div104Cb = useDiv104Cb()
const Flex139Props = useStore((state)=>state["Home"]["Flex139"]);
const Flex139IoProps = useIoStore((state)=>state["Home"]["Flex139"]);
const Flex139Cb = useFlex139Cb()
const Div109Props = useStore((state)=>state["Home"]["Div109"]);
const Div109IoProps = useIoStore((state)=>state["Home"]["Div109"]);
const Div109Cb = useDiv109Cb()
const Flex144Props = useStore((state)=>state["Home"]["Flex144"]);
const Flex144IoProps = useIoStore((state)=>state["Home"]["Flex144"]);
const Flex144Cb = useFlex144Cb()
const Flex143Props = useStore((state)=>state["Home"]["Flex143"]);
const Flex143IoProps = useIoStore((state)=>state["Home"]["Flex143"]);
const Flex143Cb = useFlex143Cb()
const Div108Props = useStore((state)=>state["Home"]["Div108"]);
const Div108IoProps = useIoStore((state)=>state["Home"]["Div108"]);
const Div108Cb = useDiv108Cb()
const Div111Props = useStore((state)=>state["Home"]["Div111"]);
const Div111IoProps = useIoStore((state)=>state["Home"]["Div111"]);
const Div111Cb = useDiv111Cb()
const Flex146Props = useStore((state)=>state["Home"]["Flex146"]);
const Flex146IoProps = useIoStore((state)=>state["Home"]["Flex146"]);
const Flex146Cb = useFlex146Cb()
const Div110Props = useStore((state)=>state["Home"]["Div110"]);
const Div110IoProps = useIoStore((state)=>state["Home"]["Div110"]);
const Div110Cb = useDiv110Cb()
const Flex145Props = useStore((state)=>state["Home"]["Flex145"]);
const Flex145IoProps = useIoStore((state)=>state["Home"]["Flex145"]);
const Flex145Cb = useFlex145Cb()
const Div96Props = useStore((state)=>state["Home"]["Div96"]);
const Div96IoProps = useIoStore((state)=>state["Home"]["Div96"]);
const Div96Cb = useDiv96Cb()
const Div113Props = useStore((state)=>state["Home"]["Div113"]);
const Div113IoProps = useIoStore((state)=>state["Home"]["Div113"]);
const Div113Cb = useDiv113Cb()
const Flex148Props = useStore((state)=>state["Home"]["Flex148"]);
const Flex148IoProps = useIoStore((state)=>state["Home"]["Flex148"]);
const Flex148Cb = useFlex148Cb()
const Div112Props = useStore((state)=>state["Home"]["Div112"]);
const Div112IoProps = useIoStore((state)=>state["Home"]["Div112"]);
const Div112Cb = useDiv112Cb()
const Flex147Props = useStore((state)=>state["Home"]["Flex147"]);
const Flex147IoProps = useIoStore((state)=>state["Home"]["Flex147"]);
const Flex147Cb = useFlex147Cb()
const Div115Props = useStore((state)=>state["Home"]["Div115"]);
const Div115IoProps = useIoStore((state)=>state["Home"]["Div115"]);
const Div115Cb = useDiv115Cb()
const Flex150Props = useStore((state)=>state["Home"]["Flex150"]);
const Flex150IoProps = useIoStore((state)=>state["Home"]["Flex150"]);
const Flex150Cb = useFlex150Cb()
const Div114Props = useStore((state)=>state["Home"]["Div114"]);
const Div114IoProps = useIoStore((state)=>state["Home"]["Div114"]);
const Div114Cb = useDiv114Cb()
const Flex149Props = useStore((state)=>state["Home"]["Flex149"]);
const Flex149IoProps = useIoStore((state)=>state["Home"]["Flex149"]);
const Flex149Cb = useFlex149Cb()
const Div117Props = useStore((state)=>state["Home"]["Div117"]);
const Div117IoProps = useIoStore((state)=>state["Home"]["Div117"]);
const Div117Cb = useDiv117Cb()
const Flex152Props = useStore((state)=>state["Home"]["Flex152"]);
const Flex152IoProps = useIoStore((state)=>state["Home"]["Flex152"]);
const Flex152Cb = useFlex152Cb()
const Div116Props = useStore((state)=>state["Home"]["Div116"]);
const Div116IoProps = useIoStore((state)=>state["Home"]["Div116"]);
const Div116Cb = useDiv116Cb()
const Flex151Props = useStore((state)=>state["Home"]["Flex151"]);
const Flex151IoProps = useIoStore((state)=>state["Home"]["Flex151"]);
const Flex151Cb = useFlex151Cb()
const Div119Props = useStore((state)=>state["Home"]["Div119"]);
const Div119IoProps = useIoStore((state)=>state["Home"]["Div119"]);
const Div119Cb = useDiv119Cb()
const Flex154Props = useStore((state)=>state["Home"]["Flex154"]);
const Flex154IoProps = useIoStore((state)=>state["Home"]["Flex154"]);
const Flex154Cb = useFlex154Cb()
const Div118Props = useStore((state)=>state["Home"]["Div118"]);
const Div118IoProps = useIoStore((state)=>state["Home"]["Div118"]);
const Div118Cb = useDiv118Cb()
const Flex153Props = useStore((state)=>state["Home"]["Flex153"]);
const Flex153IoProps = useIoStore((state)=>state["Home"]["Flex153"]);
const Flex153Cb = useFlex153Cb()
const footerProps = useStore((state)=>state["Home"]["footer"]);
const footerIoProps = useIoStore((state)=>state["Home"]["footer"]);
const footerCb = usefooterCb()
const Flex164Props = useStore((state)=>state["Home"]["Flex164"]);
const Flex164IoProps = useIoStore((state)=>state["Home"]["Flex164"]);
const Flex164Cb = useFlex164Cb()
const Flex156Props = useStore((state)=>state["Home"]["Flex156"]);
const Flex156IoProps = useIoStore((state)=>state["Home"]["Flex156"]);
const Flex156Cb = useFlex156Cb()
const Div124Props = useStore((state)=>state["Home"]["Div124"]);
const Div124IoProps = useIoStore((state)=>state["Home"]["Div124"]);
const Div124Cb = useDiv124Cb()
const Flex159Props = useStore((state)=>state["Home"]["Flex159"]);
const Flex159IoProps = useIoStore((state)=>state["Home"]["Flex159"]);
const Flex159Cb = useFlex159Cb()
const Flex158Props = useStore((state)=>state["Home"]["Flex158"]);
const Flex158IoProps = useIoStore((state)=>state["Home"]["Flex158"]);
const Flex158Cb = useFlex158Cb()
const Flex160Props = useStore((state)=>state["Home"]["Flex160"]);
const Flex160IoProps = useIoStore((state)=>state["Home"]["Flex160"]);
const Flex160Cb = useFlex160Cb()
const Flex161Props = useStore((state)=>state["Home"]["Flex161"]);
const Flex161IoProps = useIoStore((state)=>state["Home"]["Flex161"]);
const Flex161Cb = useFlex161Cb()
const Flex162Props = useStore((state)=>state["Home"]["Flex162"]);
const Flex162IoProps = useIoStore((state)=>state["Home"]["Flex162"]);
const Flex162Cb = useFlex162Cb()
const Div122Props = useStore((state)=>state["Home"]["Div122"]);
const Div122IoProps = useIoStore((state)=>state["Home"]["Div122"]);
const Div122Cb = useDiv122Cb()
const Flex163Props = useStore((state)=>state["Home"]["Flex163"]);
const Flex163IoProps = useIoStore((state)=>state["Home"]["Flex163"]);
const Flex163Cb = useFlex163Cb()
const Image1Props = useStore((state)=>state["Home"]["Image1"]);
const Image1IoProps = useIoStore((state)=>state["Home"]["Image1"]);
const Image1Cb = useImage1Cb()
const about_headingProps = useStore((state)=>state["Home"]["about_heading"]);
const about_headingIoProps = useIoStore((state)=>state["Home"]["about_heading"]);
const about_headingCb = useabout_headingCb()
const servicesProps = useStore((state)=>state["Home"]["services"]);
const servicesIoProps = useIoStore((state)=>state["Home"]["services"]);
const servicesCb = useservicesCb()
const projectProps = useStore((state)=>state["Home"]["project"]);
const projectIoProps = useIoStore((state)=>state["Home"]["project"]);
const projectCb = useprojectCb()
const blogsProps = useStore((state)=>state["Home"]["blogs"]);
const blogsIoProps = useIoStore((state)=>state["Home"]["blogs"]);
const blogsCb = useblogsCb()
const bookProps = useStore((state)=>state["Home"]["book"]);
const bookIoProps = useIoStore((state)=>state["Home"]["book"]);
const bookCb = usebookCb()
const arrowProps = useStore((state)=>state["Home"]["arrow"]);
const arrowIoProps = useIoStore((state)=>state["Home"]["arrow"]);
const arrowCb = usearrowCb()
const TextBox1Props = useStore((state)=>state["Home"]["TextBox1"]);
const TextBox1IoProps = useIoStore((state)=>state["Home"]["TextBox1"]);
const TextBox1Cb = useTextBox1Cb()
const small_contentProps = useStore((state)=>state["Home"]["small_content"]);
const small_contentIoProps = useIoStore((state)=>state["Home"]["small_content"]);
const small_contentCb = usesmall_contentCb()
const design_lineProps = useStore((state)=>state["Home"]["design_line"]);
const design_lineIoProps = useIoStore((state)=>state["Home"]["design_line"]);
const design_lineCb = usedesign_lineCb()
const book_btnProps = useStore((state)=>state["Home"]["book_btn"]);
const book_btnIoProps = useIoStore((state)=>state["Home"]["book_btn"]);
const book_btnCb = usebook_btnCb()
const TextBox3Props = useStore((state)=>state["Home"]["TextBox3"]);
const TextBox3IoProps = useIoStore((state)=>state["Home"]["TextBox3"]);
const TextBox3Cb = useTextBox3Cb()
const Image4Props = useStore((state)=>state["Home"]["Image4"]);
const Image4IoProps = useIoStore((state)=>state["Home"]["Image4"]);
const Image4Cb = useImage4Cb()
const Image5Props = useStore((state)=>state["Home"]["Image5"]);
const Image5IoProps = useIoStore((state)=>state["Home"]["Image5"]);
const Image5Cb = useImage5Cb()
const trusted_by_textProps = useStore((state)=>state["Home"]["trusted_by_text"]);
const trusted_by_textIoProps = useIoStore((state)=>state["Home"]["trusted_by_text"]);
const trusted_by_textCb = usetrusted_by_textCb()
const ImageProps = useStore((state)=>state["Home"]["Image"]);
const ImageIoProps = useIoStore((state)=>state["Home"]["Image"]);
const ImageCb = useImageCb()
const Image7Props = useStore((state)=>state["Home"]["Image7"]);
const Image7IoProps = useIoStore((state)=>state["Home"]["Image7"]);
const Image7Cb = useImage7Cb()
const Image3Props = useStore((state)=>state["Home"]["Image3"]);
const Image3IoProps = useIoStore((state)=>state["Home"]["Image3"]);
const Image3Cb = useImage3Cb()
const Image9Props = useStore((state)=>state["Home"]["Image9"]);
const Image9IoProps = useIoStore((state)=>state["Home"]["Image9"]);
const Image9Cb = useImage9Cb()
const s1Props = useStore((state)=>state["Home"]["s1"]);
const s1IoProps = useIoStore((state)=>state["Home"]["s1"]);
const s1Cb = uses1Cb()
const TextBox6Props = useStore((state)=>state["Home"]["TextBox6"]);
const TextBox6IoProps = useIoStore((state)=>state["Home"]["TextBox6"]);
const TextBox6Cb = useTextBox6Cb()
const TextBox9Props = useStore((state)=>state["Home"]["TextBox9"]);
const TextBox9IoProps = useIoStore((state)=>state["Home"]["TextBox9"]);
const TextBox9Cb = useTextBox9Cb()
const TextBox16Props = useStore((state)=>state["Home"]["TextBox16"]);
const TextBox16IoProps = useIoStore((state)=>state["Home"]["TextBox16"]);
const TextBox16Cb = useTextBox16Cb()
const TextBox17Props = useStore((state)=>state["Home"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["Home"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const TextBox18Props = useStore((state)=>state["Home"]["TextBox18"]);
const TextBox18IoProps = useIoStore((state)=>state["Home"]["TextBox18"]);
const TextBox18Cb = useTextBox18Cb()
const s2Props = useStore((state)=>state["Home"]["s2"]);
const s2IoProps = useIoStore((state)=>state["Home"]["s2"]);
const s2Cb = uses2Cb()
const TextBox12Props = useStore((state)=>state["Home"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["Home"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const TextBox14Props = useStore((state)=>state["Home"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["Home"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const TextBox19Props = useStore((state)=>state["Home"]["TextBox19"]);
const TextBox19IoProps = useIoStore((state)=>state["Home"]["TextBox19"]);
const TextBox19Cb = useTextBox19Cb()
const TextBox20Props = useStore((state)=>state["Home"]["TextBox20"]);
const TextBox20IoProps = useIoStore((state)=>state["Home"]["TextBox20"]);
const TextBox20Cb = useTextBox20Cb()
const TextBox21Props = useStore((state)=>state["Home"]["TextBox21"]);
const TextBox21IoProps = useIoStore((state)=>state["Home"]["TextBox21"]);
const TextBox21Cb = useTextBox21Cb()
const Image13Props = useStore((state)=>state["Home"]["Image13"]);
const Image13IoProps = useIoStore((state)=>state["Home"]["Image13"]);
const Image13Cb = useImage13Cb()
const TextBox13Props = useStore((state)=>state["Home"]["TextBox13"]);
const TextBox13IoProps = useIoStore((state)=>state["Home"]["TextBox13"]);
const TextBox13Cb = useTextBox13Cb()
const TextBox15Props = useStore((state)=>state["Home"]["TextBox15"]);
const TextBox15IoProps = useIoStore((state)=>state["Home"]["TextBox15"]);
const TextBox15Cb = useTextBox15Cb()
const TextBox22Props = useStore((state)=>state["Home"]["TextBox22"]);
const TextBox22IoProps = useIoStore((state)=>state["Home"]["TextBox22"]);
const TextBox22Cb = useTextBox22Cb()
const TextBox23Props = useStore((state)=>state["Home"]["TextBox23"]);
const TextBox23IoProps = useIoStore((state)=>state["Home"]["TextBox23"]);
const TextBox23Cb = useTextBox23Cb()
const TextBox25Props = useStore((state)=>state["Home"]["TextBox25"]);
const TextBox25IoProps = useIoStore((state)=>state["Home"]["TextBox25"]);
const TextBox25Cb = useTextBox25Cb()
const service_textProps = useStore((state)=>state["Home"]["service_text"]);
const service_textIoProps = useIoStore((state)=>state["Home"]["service_text"]);
const service_textCb = useservice_textCb()
const s_text1Props = useStore((state)=>state["Home"]["s_text1"]);
const s_text1IoProps = useIoStore((state)=>state["Home"]["s_text1"]);
const s_text1Cb = uses_text1Cb()
const view_btnProps = useStore((state)=>state["Home"]["view_btn"]);
const view_btnIoProps = useIoStore((state)=>state["Home"]["view_btn"]);
const view_btnCb = useview_btnCb()
const project_headingProps = useStore((state)=>state["Home"]["project_heading"]);
const project_headingIoProps = useIoStore((state)=>state["Home"]["project_heading"]);
const project_headingCb = useproject_headingCb()
const TextBox26Props = useStore((state)=>state["Home"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["Home"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const TextBox27Props = useStore((state)=>state["Home"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["Home"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const Image16Props = useStore((state)=>state["Home"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["Home"]["Image16"]);
const Image16Cb = useImage16Cb()
const Image19Props = useStore((state)=>state["Home"]["Image19"]);
const Image19IoProps = useIoStore((state)=>state["Home"]["Image19"]);
const Image19Cb = useImage19Cb()
const Image22Props = useStore((state)=>state["Home"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["Home"]["Image22"]);
const Image22Cb = useImage22Cb()
const TextBox29Props = useStore((state)=>state["Home"]["TextBox29"]);
const TextBox29IoProps = useIoStore((state)=>state["Home"]["TextBox29"]);
const TextBox29Cb = useTextBox29Cb()
const gr_txt1Props = useStore((state)=>state["Home"]["gr_txt1"]);
const gr_txt1IoProps = useIoStore((state)=>state["Home"]["gr_txt1"]);
const gr_txt1Cb = usegr_txt1Cb()
const TextBox30Props = useStore((state)=>state["Home"]["TextBox30"]);
const TextBox30IoProps = useIoStore((state)=>state["Home"]["TextBox30"]);
const TextBox30Cb = useTextBox30Cb()
const arrow_1Props = useStore((state)=>state["Home"]["arrow_1"]);
const arrow_1IoProps = useIoStore((state)=>state["Home"]["arrow_1"]);
const arrow_1Cb = usearrow_1Cb()
const Image24Props = useStore((state)=>state["Home"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["Home"]["Image24"]);
const Image24Cb = useImage24Cb()
const TextBox32Props = useStore((state)=>state["Home"]["TextBox32"]);
const TextBox32IoProps = useIoStore((state)=>state["Home"]["TextBox32"]);
const TextBox32Cb = useTextBox32Cb()
const Image23Props = useStore((state)=>state["Home"]["Image23"]);
const Image23IoProps = useIoStore((state)=>state["Home"]["Image23"]);
const Image23Cb = useImage23Cb()
const TextBox31Props = useStore((state)=>state["Home"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["Home"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const Image26Props = useStore((state)=>state["Home"]["Image26"]);
const Image26IoProps = useIoStore((state)=>state["Home"]["Image26"]);
const Image26Cb = useImage26Cb()
const TextBox34Props = useStore((state)=>state["Home"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["Home"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const Image25Props = useStore((state)=>state["Home"]["Image25"]);
const Image25IoProps = useIoStore((state)=>state["Home"]["Image25"]);
const Image25Cb = useImage25Cb()
const TextBox33Props = useStore((state)=>state["Home"]["TextBox33"]);
const TextBox33IoProps = useIoStore((state)=>state["Home"]["TextBox33"]);
const TextBox33Cb = useTextBox33Cb()
const blogs_headingProps = useStore((state)=>state["Home"]["blogs_heading"]);
const blogs_headingIoProps = useIoStore((state)=>state["Home"]["blogs_heading"]);
const blogs_headingCb = useblogs_headingCb()
const TextBox36Props = useStore((state)=>state["Home"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["Home"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const white_arrrowProps = useStore((state)=>state["Home"]["white_arrrow"]);
const white_arrrowIoProps = useIoStore((state)=>state["Home"]["white_arrrow"]);
const white_arrrowCb = usewhite_arrrowCb()
const TextBox38Props = useStore((state)=>state["Home"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["Home"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const date_timeProps = useStore((state)=>state["Home"]["date_time"]);
const date_timeIoProps = useIoStore((state)=>state["Home"]["date_time"]);
const date_timeCb = usedate_timeCb()
const read_articleProps = useStore((state)=>state["Home"]["read_article"]);
const read_articleIoProps = useIoStore((state)=>state["Home"]["read_article"]);
const read_articleCb = useread_articleCb()
const whie_arrowProps = useStore((state)=>state["Home"]["whie_arrow"]);
const whie_arrowIoProps = useIoStore((state)=>state["Home"]["whie_arrow"]);
const whie_arrowCb = usewhie_arrowCb()
const TextBox55Props = useStore((state)=>state["Home"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["Home"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const TextBox56Props = useStore((state)=>state["Home"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["Home"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const Image36Props = useStore((state)=>state["Home"]["Image36"]);
const Image36IoProps = useIoStore((state)=>state["Home"]["Image36"]);
const Image36Cb = useImage36Cb()
const TextBox54Props = useStore((state)=>state["Home"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["Home"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const TextBox61Props = useStore((state)=>state["Home"]["TextBox61"]);
const TextBox61IoProps = useIoStore((state)=>state["Home"]["TextBox61"]);
const TextBox61Cb = useTextBox61Cb()
const TextBox62Props = useStore((state)=>state["Home"]["TextBox62"]);
const TextBox62IoProps = useIoStore((state)=>state["Home"]["TextBox62"]);
const TextBox62Cb = useTextBox62Cb()
const TextBox60Props = useStore((state)=>state["Home"]["TextBox60"]);
const TextBox60IoProps = useIoStore((state)=>state["Home"]["TextBox60"]);
const TextBox60Cb = useTextBox60Cb()
const Image38Props = useStore((state)=>state["Home"]["Image38"]);
const Image38IoProps = useIoStore((state)=>state["Home"]["Image38"]);
const Image38Cb = useImage38Cb()
const TextBox67Props = useStore((state)=>state["Home"]["TextBox67"]);
const TextBox67IoProps = useIoStore((state)=>state["Home"]["TextBox67"]);
const TextBox67Cb = useTextBox67Cb()
const TextBox68Props = useStore((state)=>state["Home"]["TextBox68"]);
const TextBox68IoProps = useIoStore((state)=>state["Home"]["TextBox68"]);
const TextBox68Cb = useTextBox68Cb()
const Image40Props = useStore((state)=>state["Home"]["Image40"]);
const Image40IoProps = useIoStore((state)=>state["Home"]["Image40"]);
const Image40Cb = useImage40Cb()
const TextBox66Props = useStore((state)=>state["Home"]["TextBox66"]);
const TextBox66IoProps = useIoStore((state)=>state["Home"]["TextBox66"]);
const TextBox66Cb = useTextBox66Cb()
const TextBox73Props = useStore((state)=>state["Home"]["TextBox73"]);
const TextBox73IoProps = useIoStore((state)=>state["Home"]["TextBox73"]);
const TextBox73Cb = useTextBox73Cb()
const TextBox74Props = useStore((state)=>state["Home"]["TextBox74"]);
const TextBox74IoProps = useIoStore((state)=>state["Home"]["TextBox74"]);
const TextBox74Cb = useTextBox74Cb()
const TextBox72Props = useStore((state)=>state["Home"]["TextBox72"]);
const TextBox72IoProps = useIoStore((state)=>state["Home"]["TextBox72"]);
const TextBox72Cb = useTextBox72Cb()
const Image42Props = useStore((state)=>state["Home"]["Image42"]);
const Image42IoProps = useIoStore((state)=>state["Home"]["Image42"]);
const Image42Cb = useImage42Cb()
const right_arrowProps = useStore((state)=>state["Home"]["right_arrow"]);
const right_arrowIoProps = useIoStore((state)=>state["Home"]["right_arrow"]);
const right_arrowCb = useright_arrowCb()
const left_arrowProps = useStore((state)=>state["Home"]["left_arrow"]);
const left_arrowIoProps = useIoStore((state)=>state["Home"]["left_arrow"]);
const left_arrowCb = useleft_arrowCb()
const product_headingProps = useStore((state)=>state["Home"]["product_heading"]);
const product_headingIoProps = useIoStore((state)=>state["Home"]["product_heading"]);
const product_headingCb = useproduct_headingCb()
const TextBox70Props = useStore((state)=>state["Home"]["TextBox70"]);
const TextBox70IoProps = useIoStore((state)=>state["Home"]["TextBox70"]);
const TextBox70Cb = useTextBox70Cb()
const TextBox71Props = useStore((state)=>state["Home"]["TextBox71"]);
const TextBox71IoProps = useIoStore((state)=>state["Home"]["TextBox71"]);
const TextBox71Cb = useTextBox71Cb()
const Image43Props = useStore((state)=>state["Home"]["Image43"]);
const Image43IoProps = useIoStore((state)=>state["Home"]["Image43"]);
const Image43Cb = useImage43Cb()
const Image44Props = useStore((state)=>state["Home"]["Image44"]);
const Image44IoProps = useIoStore((state)=>state["Home"]["Image44"]);
const Image44Cb = useImage44Cb()
const Image49Props = useStore((state)=>state["Home"]["Image49"]);
const Image49IoProps = useIoStore((state)=>state["Home"]["Image49"]);
const Image49Cb = useImage49Cb()
const Image50Props = useStore((state)=>state["Home"]["Image50"]);
const Image50IoProps = useIoStore((state)=>state["Home"]["Image50"]);
const Image50Cb = useImage50Cb()
const education_headingProps = useStore((state)=>state["Home"]["education_heading"]);
const education_headingIoProps = useIoStore((state)=>state["Home"]["education_heading"]);
const education_headingCb = useeducation_headingCb()
const TextBox91Props = useStore((state)=>state["Home"]["TextBox91"]);
const TextBox91IoProps = useIoStore((state)=>state["Home"]["TextBox91"]);
const TextBox91Cb = useTextBox91Cb()
const TextBox92Props = useStore((state)=>state["Home"]["TextBox92"]);
const TextBox92IoProps = useIoStore((state)=>state["Home"]["TextBox92"]);
const TextBox92Cb = useTextBox92Cb()
const TextBox93Props = useStore((state)=>state["Home"]["TextBox93"]);
const TextBox93IoProps = useIoStore((state)=>state["Home"]["TextBox93"]);
const TextBox93Cb = useTextBox93Cb()
const Image61Props = useStore((state)=>state["Home"]["Image61"]);
const Image61IoProps = useIoStore((state)=>state["Home"]["Image61"]);
const Image61Cb = useImage61Cb()
const Image84Props = useStore((state)=>state["Home"]["Image84"]);
const Image84IoProps = useIoStore((state)=>state["Home"]["Image84"]);
const Image84Cb = useImage84Cb()
const TextBox129Props = useStore((state)=>state["Home"]["TextBox129"]);
const TextBox129IoProps = useIoStore((state)=>state["Home"]["TextBox129"]);
const TextBox129Cb = useTextBox129Cb()
const TextBox130Props = useStore((state)=>state["Home"]["TextBox130"]);
const TextBox130IoProps = useIoStore((state)=>state["Home"]["TextBox130"]);
const TextBox130Cb = useTextBox130Cb()
const TextBox131Props = useStore((state)=>state["Home"]["TextBox131"]);
const TextBox131IoProps = useIoStore((state)=>state["Home"]["TextBox131"]);
const TextBox131Cb = useTextBox131Cb()
const TextBox132Props = useStore((state)=>state["Home"]["TextBox132"]);
const TextBox132IoProps = useIoStore((state)=>state["Home"]["TextBox132"]);
const TextBox132Cb = useTextBox132Cb()
const TextBox133Props = useStore((state)=>state["Home"]["TextBox133"]);
const TextBox133IoProps = useIoStore((state)=>state["Home"]["TextBox133"]);
const TextBox133Cb = useTextBox133Cb()
const TextBox134Props = useStore((state)=>state["Home"]["TextBox134"]);
const TextBox134IoProps = useIoStore((state)=>state["Home"]["TextBox134"]);
const TextBox134Cb = useTextBox134Cb()
const Image85Props = useStore((state)=>state["Home"]["Image85"]);
const Image85IoProps = useIoStore((state)=>state["Home"]["Image85"]);
const Image85Cb = useImage85Cb()
const TextBox104Props = useStore((state)=>state["Home"]["TextBox104"]);
const TextBox104IoProps = useIoStore((state)=>state["Home"]["TextBox104"]);
const TextBox104Cb = useTextBox104Cb()
const Image67Props = useStore((state)=>state["Home"]["Image67"]);
const Image67IoProps = useIoStore((state)=>state["Home"]["Image67"]);
const Image67Cb = useImage67Cb()
const Image62Props = useStore((state)=>state["Home"]["Image62"]);
const Image62IoProps = useIoStore((state)=>state["Home"]["Image62"]);
const Image62Cb = useImage62Cb()
const TextBox95Props = useStore((state)=>state["Home"]["TextBox95"]);
const TextBox95IoProps = useIoStore((state)=>state["Home"]["TextBox95"]);
const TextBox95Cb = useTextBox95Cb()
const TextBox96Props = useStore((state)=>state["Home"]["TextBox96"]);
const TextBox96IoProps = useIoStore((state)=>state["Home"]["TextBox96"]);
const TextBox96Cb = useTextBox96Cb()
const TextBox97Props = useStore((state)=>state["Home"]["TextBox97"]);
const TextBox97IoProps = useIoStore((state)=>state["Home"]["TextBox97"]);
const TextBox97Cb = useTextBox97Cb()
const Image69Props = useStore((state)=>state["Home"]["Image69"]);
const Image69IoProps = useIoStore((state)=>state["Home"]["Image69"]);
const Image69Cb = useImage69Cb()
const TextBox111Props = useStore((state)=>state["Home"]["TextBox111"]);
const TextBox111IoProps = useIoStore((state)=>state["Home"]["TextBox111"]);
const TextBox111Cb = useTextBox111Cb()
const TextBox112Props = useStore((state)=>state["Home"]["TextBox112"]);
const TextBox112IoProps = useIoStore((state)=>state["Home"]["TextBox112"]);
const TextBox112Cb = useTextBox112Cb()
const TextBox120Props = useStore((state)=>state["Home"]["TextBox120"]);
const TextBox120IoProps = useIoStore((state)=>state["Home"]["TextBox120"]);
const TextBox120Cb = useTextBox120Cb()
const Image74Props = useStore((state)=>state["Home"]["Image74"]);
const Image74IoProps = useIoStore((state)=>state["Home"]["Image74"]);
const Image74Cb = useImage74Cb()
const Image71Props = useStore((state)=>state["Home"]["Image71"]);
const Image71IoProps = useIoStore((state)=>state["Home"]["Image71"]);
const Image71Cb = useImage71Cb()
const TextBox114Props = useStore((state)=>state["Home"]["TextBox114"]);
const TextBox114IoProps = useIoStore((state)=>state["Home"]["TextBox114"]);
const TextBox114Cb = useTextBox114Cb()
const TextBox115Props = useStore((state)=>state["Home"]["TextBox115"]);
const TextBox115IoProps = useIoStore((state)=>state["Home"]["TextBox115"]);
const TextBox115Cb = useTextBox115Cb()
const Image70Props = useStore((state)=>state["Home"]["Image70"]);
const Image70IoProps = useIoStore((state)=>state["Home"]["Image70"]);
const Image70Cb = useImage70Cb()
const TextBox121Props = useStore((state)=>state["Home"]["TextBox121"]);
const TextBox121IoProps = useIoStore((state)=>state["Home"]["TextBox121"]);
const TextBox121Cb = useTextBox121Cb()
const Image75Props = useStore((state)=>state["Home"]["Image75"]);
const Image75IoProps = useIoStore((state)=>state["Home"]["Image75"]);
const Image75Cb = useImage75Cb()
const TextBox122Props = useStore((state)=>state["Home"]["TextBox122"]);
const TextBox122IoProps = useIoStore((state)=>state["Home"]["TextBox122"]);
const TextBox122Cb = useTextBox122Cb()
const Image76Props = useStore((state)=>state["Home"]["Image76"]);
const Image76IoProps = useIoStore((state)=>state["Home"]["Image76"]);
const Image76Cb = useImage76Cb()
const Image77Props = useStore((state)=>state["Home"]["Image77"]);
const Image77IoProps = useIoStore((state)=>state["Home"]["Image77"]);
const Image77Cb = useImage77Cb()
const TextBox123Props = useStore((state)=>state["Home"]["TextBox123"]);
const TextBox123IoProps = useIoStore((state)=>state["Home"]["TextBox123"]);
const TextBox123Cb = useTextBox123Cb()
const TextBox124Props = useStore((state)=>state["Home"]["TextBox124"]);
const TextBox124IoProps = useIoStore((state)=>state["Home"]["TextBox124"]);
const TextBox124Cb = useTextBox124Cb()
const TextBox125Props = useStore((state)=>state["Home"]["TextBox125"]);
const TextBox125IoProps = useIoStore((state)=>state["Home"]["TextBox125"]);
const TextBox125Cb = useTextBox125Cb()
const Image80Props = useStore((state)=>state["Home"]["Image80"]);
const Image80IoProps = useIoStore((state)=>state["Home"]["Image80"]);
const Image80Cb = useImage80Cb()
const Image82Props = useStore((state)=>state["Home"]["Image82"]);
const Image82IoProps = useIoStore((state)=>state["Home"]["Image82"]);
const Image82Cb = useImage82Cb()
const Image86Props = useStore((state)=>state["Home"]["Image86"]);
const Image86IoProps = useIoStore((state)=>state["Home"]["Image86"]);
const Image86Cb = useImage86Cb()
const TextBox135Props = useStore((state)=>state["Home"]["TextBox135"]);
const TextBox135IoProps = useIoStore((state)=>state["Home"]["TextBox135"]);
const TextBox135Cb = useTextBox135Cb()
const Image89Props = useStore((state)=>state["Home"]["Image89"]);
const Image89IoProps = useIoStore((state)=>state["Home"]["Image89"]);
const Image89Cb = useImage89Cb()
const TextBox144Props = useStore((state)=>state["Home"]["TextBox144"]);
const TextBox144IoProps = useIoStore((state)=>state["Home"]["TextBox144"]);
const TextBox144Cb = useTextBox144Cb()
const TextBox166Props = useStore((state)=>state["Home"]["TextBox166"]);
const TextBox166IoProps = useIoStore((state)=>state["Home"]["TextBox166"]);
const TextBox166Cb = useTextBox166Cb()
const Image96Props = useStore((state)=>state["Home"]["Image96"]);
const Image96IoProps = useIoStore((state)=>state["Home"]["Image96"]);
const Image96Cb = useImage96Cb()
const Image98Props = useStore((state)=>state["Home"]["Image98"]);
const Image98IoProps = useIoStore((state)=>state["Home"]["Image98"]);
const Image98Cb = useImage98Cb()
const TextBox168Props = useStore((state)=>state["Home"]["TextBox168"]);
const TextBox168IoProps = useIoStore((state)=>state["Home"]["TextBox168"]);
const TextBox168Cb = useTextBox168Cb()
const TextBox169Props = useStore((state)=>state["Home"]["TextBox169"]);
const TextBox169IoProps = useIoStore((state)=>state["Home"]["TextBox169"]);
const TextBox169Cb = useTextBox169Cb()
const Image99Props = useStore((state)=>state["Home"]["Image99"]);
const Image99IoProps = useIoStore((state)=>state["Home"]["Image99"]);
const Image99Cb = useImage99Cb()
const TextBox170Props = useStore((state)=>state["Home"]["TextBox170"]);
const TextBox170IoProps = useIoStore((state)=>state["Home"]["TextBox170"]);
const TextBox170Cb = useTextBox170Cb()
const Image100Props = useStore((state)=>state["Home"]["Image100"]);
const Image100IoProps = useIoStore((state)=>state["Home"]["Image100"]);
const Image100Cb = useImage100Cb()
const TextBox171Props = useStore((state)=>state["Home"]["TextBox171"]);
const TextBox171IoProps = useIoStore((state)=>state["Home"]["TextBox171"]);
const TextBox171Cb = useTextBox171Cb()
const Image101Props = useStore((state)=>state["Home"]["Image101"]);
const Image101IoProps = useIoStore((state)=>state["Home"]["Image101"]);
const Image101Cb = useImage101Cb()
const TextBox172Props = useStore((state)=>state["Home"]["TextBox172"]);
const TextBox172IoProps = useIoStore((state)=>state["Home"]["TextBox172"]);
const TextBox172Cb = useTextBox172Cb()
const Image102Props = useStore((state)=>state["Home"]["Image102"]);
const Image102IoProps = useIoStore((state)=>state["Home"]["Image102"]);
const Image102Cb = useImage102Cb()
const TextBox173Props = useStore((state)=>state["Home"]["TextBox173"]);
const TextBox173IoProps = useIoStore((state)=>state["Home"]["TextBox173"]);
const TextBox173Cb = useTextBox173Cb()
const Image103Props = useStore((state)=>state["Home"]["Image103"]);
const Image103IoProps = useIoStore((state)=>state["Home"]["Image103"]);
const Image103Cb = useImage103Cb()
const Image106Props = useStore((state)=>state["Home"]["Image106"]);
const Image106IoProps = useIoStore((state)=>state["Home"]["Image106"]);
const Image106Cb = useImage106Cb()
const TextBox175Props = useStore((state)=>state["Home"]["TextBox175"]);
const TextBox175IoProps = useIoStore((state)=>state["Home"]["TextBox175"]);
const TextBox175Cb = useTextBox175Cb()
const Image107Props = useStore((state)=>state["Home"]["Image107"]);
const Image107IoProps = useIoStore((state)=>state["Home"]["Image107"]);
const Image107Cb = useImage107Cb()
const TextBox176Props = useStore((state)=>state["Home"]["TextBox176"]);
const TextBox176IoProps = useIoStore((state)=>state["Home"]["TextBox176"]);
const TextBox176Cb = useTextBox176Cb()
const footer_linkProps = useStore((state)=>state["Home"]["footer_link"]);
const footer_linkIoProps = useIoStore((state)=>state["Home"]["footer_link"]);
const footer_linkCb = usefooter_linkCb()
const TextBox183Props = useStore((state)=>state["Home"]["TextBox183"]);
const TextBox183IoProps = useIoStore((state)=>state["Home"]["TextBox183"]);
const TextBox183Cb = useTextBox183Cb()
const TextBox184Props = useStore((state)=>state["Home"]["TextBox184"]);
const TextBox184IoProps = useIoStore((state)=>state["Home"]["TextBox184"]);
const TextBox184Cb = useTextBox184Cb()
const TextBox185Props = useStore((state)=>state["Home"]["TextBox185"]);
const TextBox185IoProps = useIoStore((state)=>state["Home"]["TextBox185"]);
const TextBox185Cb = useTextBox185Cb()
const TextBox186Props = useStore((state)=>state["Home"]["TextBox186"]);
const TextBox186IoProps = useIoStore((state)=>state["Home"]["TextBox186"]);
const TextBox186Cb = useTextBox186Cb()
const TextBox188Props = useStore((state)=>state["Home"]["TextBox188"]);
const TextBox188IoProps = useIoStore((state)=>state["Home"]["TextBox188"]);
const TextBox188Cb = useTextBox188Cb()
const TextBox189Props = useStore((state)=>state["Home"]["TextBox189"]);
const TextBox189IoProps = useIoStore((state)=>state["Home"]["TextBox189"]);
const TextBox189Cb = useTextBox189Cb()
const TextBox190Props = useStore((state)=>state["Home"]["TextBox190"]);
const TextBox190IoProps = useIoStore((state)=>state["Home"]["TextBox190"]);
const TextBox190Cb = useTextBox190Cb()
const TextBox192Props = useStore((state)=>state["Home"]["TextBox192"]);
const TextBox192IoProps = useIoStore((state)=>state["Home"]["TextBox192"]);
const TextBox192Cb = useTextBox192Cb()
const TextBox174Props = useStore((state)=>state["Home"]["TextBox174"]);
const TextBox174IoProps = useIoStore((state)=>state["Home"]["TextBox174"]);
const TextBox174Cb = useTextBox174Cb()
const Image104Props = useStore((state)=>state["Home"]["Image104"]);
const Image104IoProps = useIoStore((state)=>state["Home"]["Image104"]);
const Image104Cb = useImage104Cb()
const Link9Props = useStore((state)=>state["Home"]["Link9"]);
const Link9IoProps = useIoStore((state)=>state["Home"]["Link9"]);
const Link9Cb = useLink9Cb()

  return (<>
  <Flex className="p-Home main_container bpt" {...main_containerProps} {...main_containerCb} {...main_containerIoProps}>
<Div className="p-Home main_div bpt" {...main_divProps} {...main_divCb} {...main_divIoProps}>
<Flex className="p-Home wrapper_nav bpt" {...wrapper_navProps} {...wrapper_navCb} {...wrapper_navIoProps}>
<Image className="p-Home Image1 bpt" {...Image1Props} {...Image1Cb} {...Image1IoProps}/>
<Flex className="p-Home nav bpt" {...navProps} {...navCb} {...navIoProps}>
<Link className="p-Home about_heading bpt" {...about_headingProps} {...about_headingCb} {...about_headingIoProps}/>
<Link className="p-Home project bpt" {...projectProps} {...projectCb} {...projectIoProps}/>
<Link className="p-Home services bpt" {...servicesProps} {...servicesCb} {...servicesIoProps}/>
<Link className="p-Home blogs bpt" {...blogsProps} {...blogsCb} {...blogsIoProps}/>
<Flex className="p-Home Flex3 bpt" {...Flex3Props} {...Flex3Cb} {...Flex3IoProps}>
<Link className="p-Home book bpt" {...bookProps} {...bookCb} {...bookIoProps}/>
<Image className="p-Home arrow bpt" {...arrowProps} {...arrowCb} {...arrowIoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home home_hero_section bpt" {...home_hero_sectionProps} {...home_hero_sectionCb} {...home_hero_sectionIoProps}>
<Flex className="p-Home content bpt" {...contentProps} {...contentCb} {...contentIoProps}>
<Image className="p-Home design_line bpt" {...design_lineProps} {...design_lineCb} {...design_lineIoProps}/>
<TextBox className="p-Home TextBox1 bpt" {...TextBox1Props} {...TextBox1Cb} {...TextBox1IoProps}/>
<TextBox className="p-Home small_content bpt" {...small_contentProps} {...small_contentCb} {...small_contentIoProps}/>
<Flex className="p-Home button_wrapper bpt" {...button_wrapperProps} {...button_wrapperCb} {...button_wrapperIoProps}>
<Button className="p-Home book_btn bpt" {...book_btnProps} {...book_btnCb} {...book_btnIoProps}/>
<Flex className="p-Home dwld_csv bpt" {...dwld_csvProps} {...dwld_csvCb} {...dwld_csvIoProps}>
<TextBox className="p-Home TextBox3 bpt" {...TextBox3Props} {...TextBox3Cb} {...TextBox3IoProps}/>
<Image className="p-Home Image4 bpt" {...Image4Props} {...Image4Cb} {...Image4IoProps}/>
</Flex>
</Flex>
</Flex>
<Div className="p-Home Div2 bpt" {...Div2Props} {...Div2Cb} {...Div2IoProps}>
<Image className="p-Home Image5 bpt" {...Image5Props} {...Image5Cb} {...Image5IoProps}/>
</Div>
</Flex>
<Flex className="p-Home trusted_by bpt" {...trusted_byProps} {...trusted_byCb} {...trusted_byIoProps}>
<Flex className="p-Home Trusted_by_heading bpt" {...Trusted_by_headingProps} {...Trusted_by_headingCb} {...Trusted_by_headingIoProps}>
<TextBox className="p-Home trusted_by_text bpt" {...trusted_by_textProps} {...trusted_by_textCb} {...trusted_by_textIoProps}/>
</Flex>
<Flex className="p-Home Flex_trust bpt" {...Flex_trustProps} {...Flex_trustCb} {...Flex_trustIoProps}>
<Flex className="p-Home Flex14 bpt" {...Flex14Props} {...Flex14Cb} {...Flex14IoProps}>
<Image className="p-Home Image bpt" {...ImageProps} {...ImageCb} {...ImageIoProps}/>
<Image className="p-Home Image7 bpt" {...Image7Props} {...Image7Cb} {...Image7IoProps}/>
<Image className="p-Home Image3 bpt" {...Image3Props} {...Image3Cb} {...Image3IoProps}/>
<Image className="p-Home Image9 bpt" {...Image9Props} {...Image9Cb} {...Image9IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home service_wrapper bpt" {...service_wrapperProps} {...service_wrapperCb} {...service_wrapperIoProps}>
<Flex className="p-Home service_text1 bpt" {...service_text1Props} {...service_text1Cb} {...service_text1IoProps}>
<Image className="p-Home service_text bpt" {...service_textProps} {...service_textCb} {...service_textIoProps}/>
<TextBox className="p-Home s_text1 bpt" {...s_text1Props} {...s_text1Cb} {...s_text1IoProps}/>
</Flex>
<Flex className="p-Home service_text2 bpt" {...service_text2Props} {...service_text2Cb} {...service_text2IoProps}>
<Div className="p-Home Div3 bpt" {...Div3Props} {...Div3Cb} {...Div3IoProps}>
<Image className="p-Home s1 bpt" {...s1Props} {...s1Cb} {...s1IoProps}/>
<TextBox className="p-Home TextBox6 bpt" {...TextBox6Props} {...TextBox6Cb} {...TextBox6IoProps}/>
<TextBox className="p-Home TextBox9 bpt" {...TextBox9Props} {...TextBox9Cb} {...TextBox9IoProps}/>
<Flex className="p-Home Flex18 bpt" {...Flex18Props} {...Flex18Cb} {...Flex18IoProps}>
<TextBox className="p-Home TextBox16 bpt" {...TextBox16Props} {...TextBox16Cb} {...TextBox16IoProps}/>
</Flex>
<Flex className="p-Home Flex19 bpt" {...Flex19Props} {...Flex19Cb} {...Flex19IoProps}>
<TextBox className="p-Home TextBox17 bpt" {...TextBox17Props} {...TextBox17Cb} {...TextBox17IoProps}/>
</Flex>
<Flex className="p-Home Flex20 bpt" {...Flex20Props} {...Flex20Cb} {...Flex20IoProps}>
<TextBox className="p-Home TextBox18 bpt" {...TextBox18Props} {...TextBox18Cb} {...TextBox18IoProps}/>
</Flex>
</Div>
<Div className="p-Home Div4 bpt" {...Div4Props} {...Div4Cb} {...Div4IoProps}>
<Image className="p-Home s2 bpt" {...s2Props} {...s2Cb} {...s2IoProps}/>
<TextBox className="p-Home TextBox12 bpt" {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
<TextBox className="p-Home TextBox14 bpt" {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
<Flex className="p-Home Flex21 bpt" {...Flex21Props} {...Flex21Cb} {...Flex21IoProps}>
<TextBox className="p-Home TextBox19 bpt" {...TextBox19Props} {...TextBox19Cb} {...TextBox19IoProps}/>
</Flex>
<Flex className="p-Home Flex22 bpt" {...Flex22Props} {...Flex22Cb} {...Flex22IoProps}>
<TextBox className="p-Home TextBox20 bpt" {...TextBox20Props} {...TextBox20Cb} {...TextBox20IoProps}/>
</Flex>
<Flex className="p-Home Flex23 bpt" {...Flex23Props} {...Flex23Cb} {...Flex23IoProps}>
<TextBox className="p-Home TextBox21 bpt" {...TextBox21Props} {...TextBox21Cb} {...TextBox21IoProps}/>
</Flex>
</Div>
<Div className="p-Home Div5 bpt" {...Div5Props} {...Div5Cb} {...Div5IoProps}>
<Image className="p-Home Image13 bpt" {...Image13Props} {...Image13Cb} {...Image13IoProps}/>
<TextBox className="p-Home TextBox13 bpt" {...TextBox13Props} {...TextBox13Cb} {...TextBox13IoProps}/>
<TextBox className="p-Home TextBox15 bpt" {...TextBox15Props} {...TextBox15Cb} {...TextBox15IoProps}/>
<Flex className="p-Home Flex24 bpt" {...Flex24Props} {...Flex24Cb} {...Flex24IoProps}>
<TextBox className="p-Home TextBox22 bpt" {...TextBox22Props} {...TextBox22Cb} {...TextBox22IoProps}/>
</Flex>
<Flex className="p-Home Flex25 bpt" {...Flex25Props} {...Flex25Cb} {...Flex25IoProps}>
<TextBox className="p-Home TextBox23 bpt" {...TextBox23Props} {...TextBox23Cb} {...TextBox23IoProps}/>
</Flex>
<Flex className="p-Home Flex27 bpt" {...Flex27Props} {...Flex27Cb} {...Flex27IoProps}>
<TextBox className="p-Home TextBox25 bpt" {...TextBox25Props} {...TextBox25Cb} {...TextBox25IoProps}/>
</Flex>
</Div>
</Flex>
</Flex>
<Flex className="p-Home project_wrapper bpt" {...project_wrapperProps} {...project_wrapperCb} {...project_wrapperIoProps}>
<Div className="p-Home project_text bpt" {...project_textProps} {...project_textCb} {...project_textIoProps}>
<Image className="p-Home project_heading bpt" {...project_headingProps} {...project_headingCb} {...project_headingIoProps}/>
<TextBox className="p-Home TextBox26 bpt" {...TextBox26Props} {...TextBox26Cb} {...TextBox26IoProps}/>
<TextBox className="p-Home TextBox27 bpt" {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
</Div>
<Button className="p-Home view_btn bpt" {...view_btnProps} {...view_btnCb} {...view_btnIoProps}/>
</Flex>
</Div>
<Flex className="p-Home image_projects bpt" {...image_projectsProps} {...image_projectsCb} {...image_projectsIoProps}>
<Div className="p-Home Div8 bpt" {...Div8Props} {...Div8Cb} {...Div8IoProps}>
<Image className="p-Home Image16 bpt" {...Image16Props} {...Image16Cb} {...Image16IoProps}/>
</Div>
<Div className="p-Home Div13 bpt" {...Div13Props} {...Div13Cb} {...Div13IoProps}>
<Image className="p-Home Image22 bpt" {...Image22Props} {...Image22Cb} {...Image22IoProps}/>
</Div>
<Div className="p-Home Div10 bpt" {...Div10Props} {...Div10Cb} {...Div10IoProps}>
<Image className="p-Home Image19 bpt" {...Image19Props} {...Image19Cb} {...Image19IoProps}/>
</Div>
</Flex>
<Flex className="p-Home title_projects bpt" {...title_projectsProps} {...title_projectsCb} {...title_projectsIoProps}>
<Flex className="p-Home Flex37 bpt" {...Flex37Props} {...Flex37Cb} {...Flex37IoProps}>
<Div className="p-Home Div9 bpt" {...Div9Props} {...Div9Cb} {...Div9IoProps}>
<Image className="p-Home gr_txt1 bpt" {...gr_txt1Props} {...gr_txt1Cb} {...gr_txt1IoProps}/>
<TextBox className="p-Home TextBox29 bpt" {...TextBox29Props} {...TextBox29Cb} {...TextBox29IoProps}/>
<Flex className="p-Home Flex36 bpt" {...Flex36Props} {...Flex36Cb} {...Flex36IoProps}>
<TextBox className="p-Home TextBox30 bpt" {...TextBox30Props} {...TextBox30Cb} {...TextBox30IoProps}/>
<Image className="p-Home arrow_1 bpt" {...arrow_1Props} {...arrow_1Cb} {...arrow_1IoProps}/>
</Flex>
</Div>
<Div className="p-Home Div15 bpt" {...Div15Props} {...Div15Cb} {...Div15IoProps}>
<Image className="p-Home Image24 bpt" {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
<TextBox className="p-Home TextBox32 bpt" {...TextBox32Props} {...TextBox32Cb} {...TextBox32IoProps}/>
<Flex className="p-Home Flex38 bpt" {...Flex38Props} {...Flex38Cb} {...Flex38IoProps}>
<TextBox className="p-Home TextBox31 bpt" {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
<Image className="p-Home Image23 bpt" {...Image23Props} {...Image23Cb} {...Image23IoProps}/>
</Flex>
</Div>
<Div className="p-Home Div16 bpt" {...Div16Props} {...Div16Cb} {...Div16IoProps}>
<Image className="p-Home Image26 bpt" {...Image26Props} {...Image26Cb} {...Image26IoProps}/>
<TextBox className="p-Home TextBox34 bpt" {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
<Flex className="p-Home Flex39 bpt" {...Flex39Props} {...Flex39Cb} {...Flex39IoProps}>
<TextBox className="p-Home TextBox33 bpt" {...TextBox33Props} {...TextBox33Cb} {...TextBox33IoProps}/>
<Image className="p-Home Image25 bpt" {...Image25Props} {...Image25Cb} {...Image25IoProps}/>
</Flex>
</Div>
</Flex>
</Flex>
<Flex className="p-Home arrow_box bpt" {...arrow_boxProps} {...arrow_boxCb} {...arrow_boxIoProps}>
<Flex className="p-Home Flex44 bpt" {...Flex44Props} {...Flex44Cb} {...Flex44IoProps}>
<Div className="p-Home left_arrow_box bpt" {...left_arrow_boxProps} {...left_arrow_boxCb} {...left_arrow_boxIoProps}>
<Image className="p-Home left_arrow bpt" {...left_arrowProps} {...left_arrowCb} {...left_arrowIoProps}/>
</Div>
<Div className="p-Home right_arrow_box bpt" {...right_arrow_boxProps} {...right_arrow_boxCb} {...right_arrow_boxIoProps}>
<Image className="p-Home right_arrow bpt" {...right_arrowProps} {...right_arrowCb} {...right_arrowIoProps}/>
</Div>
</Flex>
</Flex>
<Div className="p-Home blogs_section bpt" {...blogs_sectionProps} {...blogs_sectionCb} {...blogs_sectionIoProps}>
<Flex className="p-Home blog_box bpt" {...blog_boxProps} {...blog_boxCb} {...blog_boxIoProps}>
<Div className="p-Home Div18 bpt" {...Div18Props} {...Div18Cb} {...Div18IoProps}>
<Image className="p-Home blogs_heading bpt" {...blogs_headingProps} {...blogs_headingCb} {...blogs_headingIoProps}/>
<TextBox className="p-Home TextBox36 bpt" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
<Flex className="p-Home view_all_box bpt" {...view_all_boxProps} {...view_all_boxCb} {...view_all_boxIoProps}>
<TextBox className="p-Home TextBox38 bpt" {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
<Image className="p-Home white_arrrow bpt" {...white_arrrowProps} {...white_arrrowCb} {...white_arrrowIoProps}/>
</Flex>
</Div>
<Div className="p-Home right_box bpt" {...right_boxProps} {...right_boxCb} {...right_boxIoProps}>
<Flex className="p-Home rightbox_1 bpt" {...rightbox_1Props} {...rightbox_1Cb} {...rightbox_1IoProps}>
<TextBox className="p-Home date_time bpt" {...date_timeProps} {...date_timeCb} {...date_timeIoProps}/>
<Flex className="p-Home read_box bpt" {...read_boxProps} {...read_boxCb} {...read_boxIoProps}>
<TextBox className="p-Home read_article bpt" {...read_articleProps} {...read_articleCb} {...read_articleIoProps}/>
<Image className="p-Home whie_arrow bpt" {...whie_arrowProps} {...whie_arrowCb} {...whie_arrowIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex56 bpt" {...Flex56Props} {...Flex56Cb} {...Flex56IoProps}>
<TextBox className="p-Home TextBox55 bpt" {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
<TextBox className="p-Home TextBox56 bpt" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
<Flex className="p-Home Flex55 bpt" {...Flex55Props} {...Flex55Cb} {...Flex55IoProps}>
<TextBox className="p-Home TextBox54 bpt" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
<Image className="p-Home Image36 bpt" {...Image36Props} {...Image36Cb} {...Image36IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex60 bpt" {...Flex60Props} {...Flex60Cb} {...Flex60IoProps}>
<TextBox className="p-Home TextBox62 bpt" {...TextBox62Props} {...TextBox62Cb} {...TextBox62IoProps}/>
<TextBox className="p-Home TextBox61 bpt" {...TextBox61Props} {...TextBox61Cb} {...TextBox61IoProps}/>
<Flex className="p-Home Flex59 bpt" {...Flex59Props} {...Flex59Cb} {...Flex59IoProps}>
<TextBox className="p-Home TextBox60 bpt" {...TextBox60Props} {...TextBox60Cb} {...TextBox60IoProps}/>
<Image className="p-Home Image38 bpt" {...Image38Props} {...Image38Cb} {...Image38IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex64 bpt" {...Flex64Props} {...Flex64Cb} {...Flex64IoProps}>
<TextBox className="p-Home TextBox67 bpt" {...TextBox67Props} {...TextBox67Cb} {...TextBox67IoProps}/>
<TextBox className="p-Home TextBox68 bpt" {...TextBox68Props} {...TextBox68Cb} {...TextBox68IoProps}/>
<Flex className="p-Home Flex63 bpt" {...Flex63Props} {...Flex63Cb} {...Flex63IoProps}>
<TextBox className="p-Home TextBox66 bpt" {...TextBox66Props} {...TextBox66Cb} {...TextBox66IoProps}/>
<Image className="p-Home Image40 bpt" {...Image40Props} {...Image40Cb} {...Image40IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex69 bpt" {...Flex69Props} {...Flex69Cb} {...Flex69IoProps}>
<TextBox className="p-Home TextBox74 bpt" {...TextBox74Props} {...TextBox74Cb} {...TextBox74IoProps}/>
<TextBox className="p-Home TextBox73 bpt" {...TextBox73Props} {...TextBox73Cb} {...TextBox73IoProps}/>
<Flex className="p-Home Flex68 bpt" {...Flex68Props} {...Flex68Cb} {...Flex68IoProps}>
<TextBox className="p-Home TextBox72 bpt" {...TextBox72Props} {...TextBox72Cb} {...TextBox72IoProps}/>
<Image className="p-Home Image42 bpt" {...Image42Props} {...Image42Cb} {...Image42IoProps}/>
</Flex>
</Flex>
</Div>
</Flex>
</Div>
<Flex className="p-Home about_section_1 bpt" {...about_section_1Props} {...about_section_1Cb} {...about_section_1IoProps}>
<Div className="p-Home abot_div bpt" {...abot_divProps} {...abot_divCb} {...abot_divIoProps}>
<Flex className="p-Home about_text bpt" {...about_textProps} {...about_textCb} {...about_textIoProps}>
<Div className="p-Home left_about bpt" {...left_aboutProps} {...left_aboutCb} {...left_aboutIoProps}>
<Image className="p-Home product_heading bpt" {...product_headingProps} {...product_headingCb} {...product_headingIoProps}/>
<TextBox className="p-Home TextBox70 bpt" {...TextBox70Props} {...TextBox70Cb} {...TextBox70IoProps}/>
</Div>
<Div className="p-Home about_1_right bpt" {...about_1_rightProps} {...about_1_rightCb} {...about_1_rightIoProps}>
<TextBox className="p-Home TextBox71 bpt" {...TextBox71Props} {...TextBox71Cb} {...TextBox71IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex67 bpt" {...Flex67Props} {...Flex67Cb} {...Flex67IoProps}>
<Div className="p-Home Div27 bpt" {...Div27Props} {...Div27Cb} {...Div27IoProps}>
<Image className="p-Home Image43 bpt" {...Image43Props} {...Image43Cb} {...Image43IoProps}/>
</Div>
<Div className="p-Home Div28 bpt" {...Div28Props} {...Div28Cb} {...Div28IoProps}>
<Image className="p-Home Image44 bpt" {...Image44Props} {...Image44Cb} {...Image44IoProps}/>
</Div>
<Flex className="p-Home Flex71 bpt" {...Flex71Props} {...Flex71Cb} {...Flex71IoProps}>
<Div className="p-Home Div33 bpt" {...Div33Props} {...Div33Cb} {...Div33IoProps}>
<Image className="p-Home Image49 bpt" {...Image49Props} {...Image49Cb} {...Image49IoProps}/>
</Div>
<Div className="p-Home Div34 bpt" {...Div34Props} {...Div34Cb} {...Div34IoProps}>
<Image className="p-Home Image50 bpt" {...Image50Props} {...Image50Cb} {...Image50IoProps}/>
</Div>
</Flex>
</Flex>
</Div>
</Flex>
<Div className="p-Home experience_section bpt" {...experience_sectionProps} {...experience_sectionCb} {...experience_sectionIoProps}>
<Flex className="p-Home Flex75 bpt" {...Flex75Props} {...Flex75Cb} {...Flex75IoProps}>
<Div className="p-Home edu_bo bpt" {...edu_boProps} {...edu_boCb} {...edu_boIoProps}>
<TextBox className="p-Home education_heading bpt" {...education_headingProps} {...education_headingCb} {...education_headingIoProps}/>
<Div className="p-Home Div54 bpt" {...Div54Props} {...Div54Cb} {...Div54IoProps}>
<Flex className="p-Home Flex85 bpt" {...Flex85Props} {...Flex85Cb} {...Flex85IoProps}>
<Div className="p-Home Div53 bpt" {...Div53Props} {...Div53Cb} {...Div53IoProps}>
<TextBox className="p-Home TextBox91 bpt" {...TextBox91Props} {...TextBox91Cb} {...TextBox91IoProps}/>
<TextBox className="p-Home TextBox92 bpt" {...TextBox92Props} {...TextBox92Cb} {...TextBox92IoProps}/>
</Div>
<Flex className="p-Home Flex84 bpt" {...Flex84Props} {...Flex84Cb} {...Flex84IoProps}>
<Image className="p-Home Image61 bpt" {...Image61Props} {...Image61Cb} {...Image61IoProps}/>
<TextBox className="p-Home TextBox93 bpt" {...TextBox93Props} {...TextBox93Cb} {...TextBox93IoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home Div80 bpt" {...Div80Props} {...Div80Cb} {...Div80IoProps}>
<Flex className="p-Home Flex116 bpt" {...Flex116Props} {...Flex116Cb} {...Flex116IoProps}>
<Div className="p-Home Div79 bpt" {...Div79Props} {...Div79Cb} {...Div79IoProps}>
<TextBox className="p-Home TextBox131 bpt" {...TextBox131Props} {...TextBox131Cb} {...TextBox131IoProps}/>
<TextBox className="p-Home TextBox130 bpt" {...TextBox130Props} {...TextBox130Cb} {...TextBox130IoProps}/>
</Div>
<Flex className="p-Home Flex115 bpt" {...Flex115Props} {...Flex115Cb} {...Flex115IoProps}>
<Image className="p-Home Image84 bpt" {...Image84Props} {...Image84Cb} {...Image84IoProps}/>
<TextBox className="p-Home TextBox129 bpt" {...TextBox129Props} {...TextBox129Cb} {...TextBox129IoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home Div82 bpt" {...Div82Props} {...Div82Cb} {...Div82IoProps}>
<Flex className="p-Home Flex118 bpt" {...Flex118Props} {...Flex118Cb} {...Flex118IoProps}>
<Div className="p-Home Div81 bpt" {...Div81Props} {...Div81Cb} {...Div81IoProps}>
<TextBox className="p-Home TextBox132 bpt" {...TextBox132Props} {...TextBox132Cb} {...TextBox132IoProps}/>
<TextBox className="p-Home TextBox133 bpt" {...TextBox133Props} {...TextBox133Cb} {...TextBox133IoProps}/>
</Div>
<Flex className="p-Home Flex117 bpt" {...Flex117Props} {...Flex117Cb} {...Flex117IoProps}>
<Image className="p-Home Image85 bpt" {...Image85Props} {...Image85Cb} {...Image85IoProps}/>
<TextBox className="p-Home TextBox134 bpt" {...TextBox134Props} {...TextBox134Cb} {...TextBox134IoProps}/>
</Flex>
</Flex>
</Div>
</Div>
<Div className="p-Home Div61 bpt" {...Div61Props} {...Div61Cb} {...Div61IoProps}>
<TextBox className="p-Home TextBox104 bpt" {...TextBox104Props} {...TextBox104Cb} {...TextBox104IoProps}/>
<Div className="p-Home Div58 bpt" {...Div58Props} {...Div58Cb} {...Div58IoProps}>
<Flex className="p-Home Flex89 bpt" {...Flex89Props} {...Flex89Cb} {...Flex89IoProps}>
<Image className="p-Home Image67 bpt" {...Image67Props} {...Image67Cb} {...Image67IoProps}/>
<Div className="p-Home Div55 bpt" {...Div55Props} {...Div55Cb} {...Div55IoProps}>
<TextBox className="p-Home TextBox97 bpt" {...TextBox97Props} {...TextBox97Cb} {...TextBox97IoProps}/>
<TextBox className="p-Home TextBox96 bpt" {...TextBox96Props} {...TextBox96Cb} {...TextBox96IoProps}/>
</Div>
<Flex className="p-Home Flex86 bpt" {...Flex86Props} {...Flex86Cb} {...Flex86IoProps}>
<Image className="p-Home Image62 bpt" {...Image62Props} {...Image62Cb} {...Image62IoProps}/>
<TextBox className="p-Home TextBox95 bpt" {...TextBox95Props} {...TextBox95Cb} {...TextBox95IoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home Div67 bpt" {...Div67Props} {...Div67Cb} {...Div67IoProps}>
<Flex className="p-Home Flex97 bpt" {...Flex97Props} {...Flex97Cb} {...Flex97IoProps}>
<Image className="p-Home Image69 bpt" {...Image69Props} {...Image69Cb} {...Image69IoProps}/>
<Div className="p-Home Div66 bpt" {...Div66Props} {...Div66Cb} {...Div66IoProps}>
<TextBox className="p-Home TextBox111 bpt" {...TextBox111Props} {...TextBox111Cb} {...TextBox111IoProps}/>
<TextBox className="p-Home TextBox112 bpt" {...TextBox112Props} {...TextBox112Cb} {...TextBox112IoProps}/>
</Div>
<Flex className="p-Home Flex102 bpt" {...Flex102Props} {...Flex102Cb} {...Flex102IoProps}>
<Image className="p-Home Image74 bpt" {...Image74Props} {...Image74Cb} {...Image74IoProps}/>
<TextBox className="p-Home TextBox120 bpt" {...TextBox120Props} {...TextBox120Cb} {...TextBox120IoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home Div69 bpt" {...Div69Props} {...Div69Cb} {...Div69IoProps}>
<Flex className="p-Home Flex99 bpt" {...Flex99Props} {...Flex99Cb} {...Flex99IoProps}>
<Image className="p-Home Image71 bpt" {...Image71Props} {...Image71Cb} {...Image71IoProps}/>
<Div className="p-Home Div68 bpt" {...Div68Props} {...Div68Cb} {...Div68IoProps}>
<TextBox className="p-Home TextBox114 bpt" {...TextBox114Props} {...TextBox114Cb} {...TextBox114IoProps}/>
<TextBox className="p-Home TextBox115 bpt" {...TextBox115Props} {...TextBox115Cb} {...TextBox115IoProps}/>
</Div>
<Flex className="p-Home Flex98 bpt" {...Flex98Props} {...Flex98Cb} {...Flex98IoProps}>
<Image className="p-Home Image70 bpt" {...Image70Props} {...Image70Cb} {...Image70IoProps}/>
<TextBox className="p-Home TextBox121 bpt" {...TextBox121Props} {...TextBox121Cb} {...TextBox121IoProps}/>
</Flex>
</Flex>
</Div>
</Div>
</Flex>
</Div>
<Div className="p-Home testimonial_section bpt" {...testimonial_sectionProps} {...testimonial_sectionCb} {...testimonial_sectionIoProps}>
<Flex className="p-Home Flex104 bpt" {...Flex104Props} {...Flex104Cb} {...Flex104IoProps}>
<Image className="p-Home Image75 bpt" {...Image75Props} {...Image75Cb} {...Image75IoProps}/>
<TextBox className="p-Home TextBox122 bpt" {...TextBox122Props} {...TextBox122Cb} {...TextBox122IoProps}/>
</Flex>
<Flex className="p-Home Flex105 bpt" {...Flex105Props} {...Flex105Cb} {...Flex105IoProps}>
<Image className="p-Home Image76 bpt" {...Image76Props} {...Image76Cb} {...Image76IoProps}/>
<Flex className="p-Home Flex107 bpt" {...Flex107Props} {...Flex107Cb} {...Flex107IoProps}>
<Image className="p-Home Image77 bpt" {...Image77Props} {...Image77Cb} {...Image77IoProps}/>
<TextBox className="p-Home TextBox123 bpt" {...TextBox123Props} {...TextBox123Cb} {...TextBox123IoProps}/>
<Flex className="p-Home Flex106 bpt" {...Flex106Props} {...Flex106Cb} {...Flex106IoProps}>
<Div className="p-Home Div75 bpt" {...Div75Props} {...Div75Cb} {...Div75IoProps}>
<TextBox className="p-Home TextBox124 bpt" {...TextBox124Props} {...TextBox124Cb} {...TextBox124IoProps}/>
<TextBox className="p-Home TextBox125 bpt" {...TextBox125Props} {...TextBox125Cb} {...TextBox125IoProps}/>
</Div>
<Flex className="p-Home Flex111 bpt" {...Flex111Props} {...Flex111Cb} {...Flex111IoProps}>
<Flex className="p-Home Flex109 bpt" {...Flex109Props} {...Flex109Cb} {...Flex109IoProps}>
<Image className="p-Home Image80 bpt" {...Image80Props} {...Image80Cb} {...Image80IoProps}/>
</Flex>
<Flex className="p-Home Flex110 bpt" {...Flex110Props} {...Flex110Cb} {...Flex110IoProps}>
<Image className="p-Home Image82 bpt" {...Image82Props} {...Image82Cb} {...Image82IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
</Div>
<Flex className="p-Home Faq_section&footer bpt" {...Faq_section&footerProps} {...Faq_section&footerCb} {...Faq_section&footerIoProps}>
<Div className="p-Home Div76 bpt" {...Div76Props} {...Div76Cb} {...Div76IoProps}>
<Flex className="p-Home Flex119 bpt" {...Flex119Props} {...Flex119Cb} {...Flex119IoProps}>
<Image className="p-Home Image86 bpt" {...Image86Props} {...Image86Cb} {...Image86IoProps}/>
<TextBox className="p-Home TextBox135 bpt" {...TextBox135Props} {...TextBox135Cb} {...TextBox135IoProps}/>
</Flex>
<Flex className="p-Home Flex120 bpt" {...Flex120Props} {...Flex120Cb} {...Flex120IoProps}>
<Div className="p-Home Div89 bpt" {...Div89Props} {...Div89Cb} {...Div89IoProps}>
<Div className="p-Home Div88 bpt" {...Div88Props} {...Div88Cb} {...Div88IoProps}>
<Flex className="p-Home Flex126 bpt" {...Flex126Props} {...Flex126Cb} {...Flex126IoProps}>
<Div className="p-Home Div85 bpt" {...Div85Props} {...Div85Cb} {...Div85IoProps}>
<TextBox className="p-Home TextBox144 bpt" {...TextBox144Props} {...TextBox144Cb} {...TextBox144IoProps}/>
</Div>
<Flex className="p-Home Flex123 bpt" {...Flex123Props} {...Flex123Cb} {...Flex123IoProps}>
<Image className="p-Home Image89 bpt" {...Image89Props} {...Image89Cb} {...Image89IoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home Div105 bpt" {...Div105Props} {...Div105Cb} {...Div105IoProps}>
<Flex className="p-Home Flex140 bpt" {...Flex140Props} {...Flex140Cb} {...Flex140IoProps}>
<Div className="p-Home Div104 bpt" {...Div104Props} {...Div104Cb} {...Div104IoProps}>
<TextBox className="p-Home TextBox166 bpt" {...TextBox166Props} {...TextBox166Cb} {...TextBox166IoProps}/>
</Div>
<Flex className="p-Home Flex139 bpt" {...Flex139Props} {...Flex139Cb} {...Flex139IoProps}>
<Image className="p-Home Image96 bpt" {...Image96Props} {...Image96Cb} {...Image96IoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home Div109 bpt" {...Div109Props} {...Div109Cb} {...Div109IoProps}>
<Flex className="p-Home Flex144 bpt" {...Flex144Props} {...Flex144Cb} {...Flex144IoProps}>
<Div className="p-Home Div108 bpt" {...Div108Props} {...Div108Cb} {...Div108IoProps}>
<TextBox className="p-Home TextBox168 bpt" {...TextBox168Props} {...TextBox168Cb} {...TextBox168IoProps}/>
</Div>
<Flex className="p-Home Flex143 bpt" {...Flex143Props} {...Flex143Cb} {...Flex143IoProps}>
<Image className="p-Home Image98 bpt" {...Image98Props} {...Image98Cb} {...Image98IoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home Div111 bpt" {...Div111Props} {...Div111Cb} {...Div111IoProps}>
<Flex className="p-Home Flex146 bpt" {...Flex146Props} {...Flex146Cb} {...Flex146IoProps}>
<Div className="p-Home Div110 bpt" {...Div110Props} {...Div110Cb} {...Div110IoProps}>
<TextBox className="p-Home TextBox169 bpt" {...TextBox169Props} {...TextBox169Cb} {...TextBox169IoProps}/>
</Div>
<Flex className="p-Home Flex145 bpt" {...Flex145Props} {...Flex145Cb} {...Flex145IoProps}>
<Image className="p-Home Image99 bpt" {...Image99Props} {...Image99Cb} {...Image99IoProps}/>
</Flex>
</Flex>
</Div>
</Div>
<Div className="p-Home Div96 bpt" {...Div96Props} {...Div96Cb} {...Div96IoProps}>
<Div className="p-Home Div113 bpt" {...Div113Props} {...Div113Cb} {...Div113IoProps}>
<Flex className="p-Home Flex148 bpt" {...Flex148Props} {...Flex148Cb} {...Flex148IoProps}>
<Div className="p-Home Div112 bpt" {...Div112Props} {...Div112Cb} {...Div112IoProps}>
<TextBox className="p-Home TextBox170 bpt" {...TextBox170Props} {...TextBox170Cb} {...TextBox170IoProps}/>
</Div>
<Flex className="p-Home Flex147 bpt" {...Flex147Props} {...Flex147Cb} {...Flex147IoProps}>
<Image className="p-Home Image100 bpt" {...Image100Props} {...Image100Cb} {...Image100IoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home Div115 bpt" {...Div115Props} {...Div115Cb} {...Div115IoProps}>
<Flex className="p-Home Flex150 bpt" {...Flex150Props} {...Flex150Cb} {...Flex150IoProps}>
<Div className="p-Home Div114 bpt" {...Div114Props} {...Div114Cb} {...Div114IoProps}>
<TextBox className="p-Home TextBox171 bpt" {...TextBox171Props} {...TextBox171Cb} {...TextBox171IoProps}/>
</Div>
<Flex className="p-Home Flex149 bpt" {...Flex149Props} {...Flex149Cb} {...Flex149IoProps}>
<Image className="p-Home Image101 bpt" {...Image101Props} {...Image101Cb} {...Image101IoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home Div117 bpt" {...Div117Props} {...Div117Cb} {...Div117IoProps}>
<Flex className="p-Home Flex152 bpt" {...Flex152Props} {...Flex152Cb} {...Flex152IoProps}>
<Div className="p-Home Div116 bpt" {...Div116Props} {...Div116Cb} {...Div116IoProps}>
<TextBox className="p-Home TextBox172 bpt" {...TextBox172Props} {...TextBox172Cb} {...TextBox172IoProps}/>
</Div>
<Flex className="p-Home Flex151 bpt" {...Flex151Props} {...Flex151Cb} {...Flex151IoProps}>
<Image className="p-Home Image102 bpt" {...Image102Props} {...Image102Cb} {...Image102IoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home Div119 bpt" {...Div119Props} {...Div119Cb} {...Div119IoProps}>
<Flex className="p-Home Flex154 bpt" {...Flex154Props} {...Flex154Cb} {...Flex154IoProps}>
<Div className="p-Home Div118 bpt" {...Div118Props} {...Div118Cb} {...Div118IoProps}>
<TextBox className="p-Home TextBox173 bpt" {...TextBox173Props} {...TextBox173Cb} {...TextBox173IoProps}/>
</Div>
<Flex className="p-Home Flex153 bpt" {...Flex153Props} {...Flex153Cb} {...Flex153IoProps}>
<Image className="p-Home Image103 bpt" {...Image103Props} {...Image103Cb} {...Image103IoProps}/>
</Flex>
</Flex>
</Div>
</Div>
</Flex>
<Div className="p-Home footer bpt" {...footerProps} {...footerCb} {...footerIoProps}>
<Flex className="p-Home Flex164 bpt" {...Flex164Props} {...Flex164Cb} {...Flex164IoProps}>
<Div className="p-Home Div122 bpt" {...Div122Props} {...Div122Cb} {...Div122IoProps}>
<TextBox className="p-Home TextBox174 bpt" {...TextBox174Props} {...TextBox174Cb} {...TextBox174IoProps}/>
<Image className="p-Home Image104 bpt" {...Image104Props} {...Image104Cb} {...Image104IoProps}/>
</Div>
<Flex className="p-Home Flex156 bpt" {...Flex156Props} {...Flex156Cb} {...Flex156IoProps}>
<Div className="p-Home Div124 bpt" {...Div124Props} {...Div124Cb} {...Div124IoProps}>
<Image className="p-Home Image106 bpt" {...Image106Props} {...Image106Cb} {...Image106IoProps}/>
<TextBox className="p-Home TextBox175 bpt" {...TextBox175Props} {...TextBox175Cb} {...TextBox175IoProps}/>
<Flex className="p-Home Flex159 bpt" {...Flex159Props} {...Flex159Cb} {...Flex159IoProps}>
<Image className="p-Home Image107 bpt" {...Image107Props} {...Image107Cb} {...Image107IoProps}/>
<TextBox className="p-Home TextBox176 bpt" {...TextBox176Props} {...TextBox176Cb} {...TextBox176IoProps}/>
</Flex>
</Div>
<Flex className="p-Home Flex158 bpt" {...Flex158Props} {...Flex158Cb} {...Flex158IoProps}>
<Flex className="p-Home Flex160 bpt" {...Flex160Props} {...Flex160Cb} {...Flex160IoProps}>
<TextBox className="p-Home footer_link bpt" {...footer_linkProps} {...footer_linkCb} {...footer_linkIoProps}/>
<TextBox className="p-Home TextBox183 bpt" {...TextBox183Props} {...TextBox183Cb} {...TextBox183IoProps}/>
<TextBox className="p-Home TextBox184 bpt" {...TextBox184Props} {...TextBox184Cb} {...TextBox184IoProps}/>
</Flex>
<Flex className="p-Home Flex161 bpt" {...Flex161Props} {...Flex161Cb} {...Flex161IoProps}>
<TextBox className="p-Home TextBox188 bpt" {...TextBox188Props} {...TextBox188Cb} {...TextBox188IoProps}/>
<TextBox className="p-Home TextBox186 bpt" {...TextBox186Props} {...TextBox186Cb} {...TextBox186IoProps}/>
<TextBox className="p-Home TextBox185 bpt" {...TextBox185Props} {...TextBox185Cb} {...TextBox185IoProps}/>
</Flex>
<Flex className="p-Home Flex162 bpt" {...Flex162Props} {...Flex162Cb} {...Flex162IoProps}>
<TextBox className="p-Home TextBox192 bpt" {...TextBox192Props} {...TextBox192Cb} {...TextBox192IoProps}/>
<TextBox className="p-Home TextBox190 bpt" {...TextBox190Props} {...TextBox190Cb} {...TextBox190IoProps}/>
<TextBox className="p-Home TextBox189 bpt" {...TextBox189Props} {...TextBox189Cb} {...TextBox189IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex163 bpt" {...Flex163Props} {...Flex163Cb} {...Flex163IoProps}>
<Link className="p-Home Link9 bpt" {...Link9Props} {...Link9Cb} {...Link9IoProps}/>
</Flex>
</Flex>
</Div>
</Div>
</Flex>
</Flex>
  </>);
}
