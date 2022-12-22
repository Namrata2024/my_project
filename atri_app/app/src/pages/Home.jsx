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
import { usemain_containerCb, usemain_divCb, usewrapper_navCb, usenavCb, useFlex3Cb, usehome_hero_sectionCb, usecontentCb, usebutton_wrapperCb, usedwld_csvCb, useDiv2Cb, usetrusted_byCb, useTrusted_by_headingCb, useFlex_trustCb, useFlex14Cb, useservice_wrapperCb, useservice_text2Cb, useDiv3Cb, useFlex18Cb, useFlex19Cb, useFlex20Cb, useDiv4Cb, useFlex21Cb, useFlex22Cb, useFlex23Cb, useDiv5Cb, useFlex24Cb, useFlex25Cb, useFlex26Cb, useservice_text1Cb, useImage1Cb, useabout_headingCb, useservicesCb, useprojectCb, useblogsCb, usebookCb, usearrowCb, useTextBox1Cb, usesmall_contentCb, usedesign_lineCb, usebook_btnCb, useTextBox3Cb, useImage4Cb, useImage5Cb, usetrusted_by_textCb, useImageCb, useImage7Cb, useImage3Cb, useImage9Cb, uses1Cb, useTextBox6Cb, useTextBox9Cb, useTextBox16Cb, useTextBox17Cb, useTextBox18Cb, uses2Cb, useTextBox12Cb, useTextBox14Cb, useTextBox19Cb, useTextBox20Cb, useTextBox21Cb, useImage13Cb, useTextBox13Cb, useTextBox15Cb, useTextBox22Cb, useTextBox23Cb, useTextBox24Cb, useservice_textCb, uses_text1Cb } from "../page-cbs/Home";
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
const Flex26Props = useStore((state)=>state["Home"]["Flex26"]);
const Flex26IoProps = useIoStore((state)=>state["Home"]["Flex26"]);
const Flex26Cb = useFlex26Cb()
const service_text1Props = useStore((state)=>state["Home"]["service_text1"]);
const service_text1IoProps = useIoStore((state)=>state["Home"]["service_text1"]);
const service_text1Cb = useservice_text1Cb()
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
const TextBox24Props = useStore((state)=>state["Home"]["TextBox24"]);
const TextBox24IoProps = useIoStore((state)=>state["Home"]["TextBox24"]);
const TextBox24Cb = useTextBox24Cb()
const service_textProps = useStore((state)=>state["Home"]["service_text"]);
const service_textIoProps = useIoStore((state)=>state["Home"]["service_text"]);
const service_textCb = useservice_textCb()
const s_text1Props = useStore((state)=>state["Home"]["s_text1"]);
const s_text1IoProps = useIoStore((state)=>state["Home"]["s_text1"]);
const s_text1Cb = uses_text1Cb()

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
<Flex className="p-Home Flex26 bpt" {...Flex26Props} {...Flex26Cb} {...Flex26IoProps}>
<TextBox className="p-Home TextBox24 bpt" {...TextBox24Props} {...TextBox24Cb} {...TextBox24IoProps}/>
</Flex>
</Div>
</Flex>
</Flex>
</Div>
</Flex>
  </>);
}
