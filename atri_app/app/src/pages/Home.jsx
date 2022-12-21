import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Link } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { usemain_divCb, usewrapper_navCb, usenavCb, useFlex3Cb, usehome-hero-sectionCb, usecontentCb, usebutton_wrapperCb, usedwld_csvCb, useimageCb, useImage1Cb, useabout_headingCb, useservicesCb, useprojectCb, useblogsCb, usebookCb, usearrowCb, useTextBox1Cb, usesmall_contentCb, usedesign_lineCb, usebook_btnCb, useTextBox3Cb, useImage4Cb, useImage5Cb } from "../page-cbs/Home";
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
const home-hero-sectionProps = useStore((state)=>state["Home"]["home-hero-section"]);
const home-hero-sectionIoProps = useIoStore((state)=>state["Home"]["home-hero-section"]);
const home-hero-sectionCb = usehome-hero-sectionCb()
const contentProps = useStore((state)=>state["Home"]["content"]);
const contentIoProps = useIoStore((state)=>state["Home"]["content"]);
const contentCb = usecontentCb()
const button_wrapperProps = useStore((state)=>state["Home"]["button_wrapper"]);
const button_wrapperIoProps = useIoStore((state)=>state["Home"]["button_wrapper"]);
const button_wrapperCb = usebutton_wrapperCb()
const dwld_csvProps = useStore((state)=>state["Home"]["dwld_csv"]);
const dwld_csvIoProps = useIoStore((state)=>state["Home"]["dwld_csv"]);
const dwld_csvCb = usedwld_csvCb()
const imageProps = useStore((state)=>state["Home"]["image"]);
const imageIoProps = useIoStore((state)=>state["Home"]["image"]);
const imageCb = useimageCb()
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

  return (<>
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
<Flex className="p-Home home-hero-section bpt" {...home-hero-sectionProps} {...home-hero-sectionCb} {...home-hero-sectionIoProps}>
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
<Flex className="p-Home image bpt" {...imageProps} {...imageCb} {...imageIoProps}>
<Image className="p-Home Image5 bpt" {...Image5Props} {...Image5Cb} {...Image5IoProps}/>
</Flex>
</Flex>
</Div>
  </>);
}
