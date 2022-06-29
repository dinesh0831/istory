import Header from "./Header"
import { Box, Typography, Button, Divider,  Grid,InputBase } from "@mui/material"
import background from "./assets/Hero_background.jpg"

import speak from "./assets/30per_voice.gif"

import Create_engage_experience from "./assets/Create Engaging Experiences.jpg"
import Break_Throw from "./assets/Break through the clutter.jpg"
import Track_effectiveness from "./assets/Track effectiveness at every step.jpg"
import "./homepage.css"
import Enhance_content from "./assets/Enhance-Your-Content-With-Voice-Interaction.gif"
import Demo_Creator from "./assets/DemoOfCreator Experience.png"
import Demo_user from "./assets/DemoOfUserExperience.png"
import reel from "./assets/47per_Voice.gif"
import x_voice from "./assets/9x_voice.gif"
import voice_memorable from "./assets/32per_voice.gif"
import less_time from "./assets/LessTime_LessMoney.svg"
import less_software from "./assets/LessSoftware_BetterAnalytics.svg"
import no_coding from "./assets/NoCodingRequired.svg"
import Porsch from "./assets/Porsche.jpg"
import Red_wine from "./assets/Red & White Winehousee.jpg"
import Foundation from "./assets/Foundation Finder.jpg"
import Jardins from "./assets/Jardins.jpg"
import React, { useState,  } from "react"
import hero_video from "./assets/Hero Banner New.webm"
import Arrivu from "./assets/Arrivu_Lighter Logo.svg"
import facebook from "./assets/Facebook_Footer.svg"
import twitter from "./assets/Twitter_Footer.svg"
import youtube from "./assets/Youtube_Footer.svg"
import linkedin from "./assets/Linkedin_footer.svg"
import mail from "./assets/Email.svg"




function Home() {
    let [image, setImage] = useState(0)
    let [video, setVideo] = useState(0)
    let [img, setImg] = useState(0)
    const [subscribe,setSubscribe]=useState()
     const handleSubmit=()=>{
         console.log(subscribe)

     }

 
    const Build = [{ image: less_time, title: "Less Time / Less Money", description: "Create an engaging interactive experience using voice in a few hours from anywhere." },
    { image: less_software, title: "Less Software / Better Analytics", description: "Use our cloud based platform to repurpode your current digital assets and get better data on the user experience." },
    { image: no_coding, title: "No Coding Required", description: "Our no-code platform does the heavy lifting by combining rich media content and voice interaction that you can easily control in our online Studio environment." }]
    const Demo = [
        { title: "Creator Experience", video: Demo_Creator }, { title: "User Experience", video: Demo_user }
    ]
    const marketing_funnel = [{ image: Jardins, title: "Jardins", description: "Rich media e-brochure for high end community targeting families and couples." }, { image: Red_wine, title: "Red & White Winehouse", description: "Custom Wine Pairing Quiz with email sign up & analytics." },
    { image: Foundation, title: "Foundation Finder", description: "Cosmetic product finder that personalizes shopping process & links to ecommerce." }, { image: Porsch, title: "Porsch", description: "End of lease new product presentaion, quoting tool & test drive sign up." }]

    var image_interval = setTimeout(() => {
        if (img === 2) {
            setImg(0)
            
        }
        else {
            setImg(img + 1);
           
        }


    }, 1000 * 2);
    var video_interval = setTimeout(() => {
        if (video === 1) {
            setVideo(0)

        }
        else {
            setVideo(video + 1);


        }

    }, 1000 * 2)


    const stop = () => {
        clearTimeout(image_interval)

    }
    const Restart = () => {

        image_interval = setTimeout(() => {
            if (img === 2) {
                setImg(0)
              

            }
            else {
                setImg(img + 1);
               
            }


        }, 1000 * 2);

    }
    const Video_Restart = () => {
        video_interval = setTimeout(() => {
            if (video === 1) {
                setVideo(0)

            }
            else {
                setVideo(video + 1);


            }

        }, 1000 * 2)

    }
    const stopVideo = () => {
        clearTimeout(video_interval)

    }
    // const increment=(e)=>{
    //     console.log(e)
    //     if(e.deltaY>0){
    //         if (img==2){
    //             setImg(0)
    //         }
    //         else{
    //             setImg(img+1)
    //         }

    //     }
    //     else{
    //         if(img<=0){
    //             setImg(2)
    //         }
    //         else{
    //             setImg(img-1)

    //         }
    //     }

    // }
    // const decrement=(e)=>{
    //   console.log(e)


    // }
    

    return (
        <Box sx={{}}>
            <Header />

            <Box sx={{ overflow: "hidden", height: "100vh", width: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed", display: 'flex', justifyContent: "space-evenly", position: "relative" }}>
                <Box sx={{ position: "absolute", width: "60%", top: 10, display: 'flex', justifyContent: "center" }} >
                    <Typography sx={{ fontSize: 35, textAlign: "center", fontWeight: "bold", marginBottom: 5 }}>
                        The First <span style={{ color: "#0087ca" }}>Interactive Storytelling</span> Tool For Digital Marketer That Integrates Voice/AI, Rich Media & Analytics
                    </Typography>
                    <Button sx={{ position: "absolute", top: 150, fontSize: 25, textTransform: "capitalize", paddingTop: 5 }}> contact us for live demo </Button>
                </Box>
                <Box component="video" type="video/webm" sx={{ width: "60%", position: "absolute", bottom: 25 }} src={hero_video} controls autoPlay >


                </Box>

                <Box component="img" sx={{ width: "100%", overflow: "hidden", bgcolor: 'background.paper', }} src={background}>
                </Box>
            </Box>
            <Box sx={{ marginTop: 5 }}>
                <Typography sx={{ fontSize: 35, textAlign: "center", fontWeight: "bold", display: "flex", justifyContent: "center" }}>
                    Make your Story an experience with Voice
                </Typography>
            </Box>
            <Grid container sx={{ placeContent: "center", margin: "10px", placeItems: "center" }}>
                <Grid item sx={{ margin: 5, width: 300, }}>
                    <Grid item sx={{ display: "flex", justifyContent: "center" }}>
                        <Box component="img" sx={{}} src={speak} />
                    </Grid>

                    <Grid item>
                        <Typography sx={{ fontSize: 35, textAlign: "center", fontWeight: "bold", }}>
                            30%
                        </Typography>
                        <Typography sx={{ fontSize: 16, textAlign: "center", fontWeight: "bold", }}><span style={{ color: "#0087ca" }}>VOICE&nbsp;</span>has<span style={{ color: "#0087ca" }}>&nbsp;more impact</span>&nbsp;when run concurrently with non interactive content.
                        </Typography>
                    </Grid>
                </Grid>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Grid item sx={{ margin: 5, width: 300 }}>
                    <Grid item sx={{ display: "flex", justifyContent: "center" }}>
                        <Box component="img" sx={{}} src={reel} />
                    </Grid>
                    <Grid item>
                        <Typography sx={{ fontSize: 35, textAlign: "center", fontWeight: "bold", }}>
                            47%
                        </Typography>
                        <Typography sx={{ fontSize: 16, textAlign: "center", fontWeight: "bold", }}><span style={{ color: "#0087ca" }}>VOICE&nbsp;</span>interactive video ads can increase lift in time spent with the ad.</Typography>
                    </Grid>
                </Grid>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Grid item sx={{ margin: 5, width: 300 }}>
                    <Grid item sx={{ display: "flex", justifyContent: "center" }}>
                        <Box component="img" sx={{}} src={x_voice} />
                    </Grid>
                    <Grid item>
                        <Typography sx={{ fontSize: 35, textAlign: "center", fontWeight: "bold", }}>
                            9x
                        </Typography>
                        <Typography sx={{ fontSize: 16, textAlign: "center", fontWeight: "bold", }}><span style={{ color: "#0087ca" }}>VOICE</span>&nbsp;has<span style={{ color: "#0087ca" }}>&nbsp;higher impact</span>&nbsp;on<span style={{ color: "#0087ca" }}>&nbsp;purchase intent.</span></Typography>
                    </Grid>
                </Grid>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Grid item sx={{ margin: 5, width: 300 }}>
                    <Grid item sx={{ display: "flex", justifyContent: "center" }}>
                        <Box component="img" sx={{}} src={voice_memorable} />
                    </Grid>
                    <Grid item>
                        <Typography sx={{ fontSize: 35, textAlign: "center", fontWeight: "bold", }}>
                            32%
                        </Typography>
                        <Typography sx={{ fontSize: 16, textAlign: "center", fontWeight: "bold", }}><span style={{ color: "#0087ca" }}>VOICE</span>&nbsp; interactive ads are<span style={{ color: "#0087ca" }}>&nbsp;more memorable</span> .</Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid sx={{ bgcolor: "#EFEFEF", marginTop: 5, height: 650, paddingBottom: 10 }}>
                <Grid item sx={{ paddingTop: 10 }}>
                    <Typography sx={{ fontSize: 35, textAlign: "center", fontWeight: "bold", display: "flex", justifyContent: "center" }}>Build your story and share it in hours not days</Typography>
                </Grid>
                <Grid item sx={{ height: 600, paddingTop: 5, display: "flex", justifyContent: "center" }}>

                    <Grid container className="scrolldown" sx={{ width: 1440, }} onMouseOver={stop} onMouseOut={Restart}  >

                        <Grid container sx={{ placeContent: "space-around", placeItems: "center" }}>
                            <Grid item sx={{ display: "flex", justifyContent: "center", width: 600 }}>
                                <Box sx={{ bgcolor: "white", width: 405, borderRadius: 3, padding: 2, height: 112 }}>
                                    <Typography sx={{ fontSize: 20, textAlign: "left", fontWeight: "bold", }}>{Build[img].title}</Typography>
                                    <Typography sx={{ fontSize: 14, textAlign: "left", }}>{Build[img].description}</Typography>
                                </Box>
                            </Grid>
                            <Grid item sx={{ width: 500 }}>
                                <Box className="image_slide" component="img" src={Build[img].image} loading="lazy" />
                            </Grid>
                            <Grid item sx={{ placeContent: "space-evenly", }}>
                                {img === 0 ? <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#0057B8", margin: 2 }} /> : <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#666666", margin: 2 }} />}
                                {img === 1 ? <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#0057B8", margin: 2 }} /> : <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#666666", margin: 2 }} />}
                                {img === 2 ? <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#0057B8", margin: 2 }} /> : <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#666666", margin: 2 }} />}

                            </Grid>

                        </Grid>




                    </Grid>
                </Grid>
            </Grid>
            <Box>
                <Box container sx={{ paddingTop: 10, display: "flex", alignItems: "center", justifyContent: "center", }}>
                    <Typography sx={{ fontSize: 35, textAlign: "center", fontWeight: "bold", display: "flex", justifyContent: "center" }}>iStory delivers unique solution for marketers</Typography>
                </Box>
                <Grid container sx={{ placeContent: "center", padding: 10 }} spacing={5}>
                    <Grid item sx={{}}>
                        <Grid component="img" sx={{ justifySelf: "center", width: "373px" }} src={Create_engage_experience} />
                        <Grid sx={{ paddingTop: 5, width: 373 }}><Typography sx={{ fontSize: 20, textAlign: "center", fontWeight: "bold", display: "flex", justifyContent: "center" }}>Create Engaging Experiences</Typography>
                            <Typography sx={{ fontSize: 14, textAlign: "center", fontWeight: "bold", display: "flex", justifyContent: "center", paddingTop: 2 }}>People are looking to interact with brands in their own way. Start a conversation and let the user choose the path of the story.</Typography>
                        </Grid>
                    </Grid>
                    <Grid item sx={{}}>
                        <Grid component="img" sx={{ justifySelf: "center", width: "373px" }} src={Break_Throw} />
                        <Grid sx={{ paddingTop: 5, width: 373 }}><Typography sx={{ fontSize: 20, textAlign: "center", fontWeight: "bold", display: "flex", justifyContent: "center" }}>Break through the clutter</Typography>
                            <Typography sx={{ fontSize: 14, textAlign: "center", fontWeight: "bold", display: "flex", justifyContent: "center", paddingTop: 2 }}>With all the banner ads, eBlasts, and  social media posts flying around the digital ecosystem, marketers need a new way to speak to people.</Typography>
                        </Grid>
                    </Grid>
                    <Grid item sx={{}}>
                        <Grid component="img" sx={{ justifySelf: "center", width: "373px" }} src={Track_effectiveness} />
                        <Grid sx={{ paddingTop: 5, width: 373 }}><Typography sx={{ fontSize: 20, textAlign: "center", fontWeight: "bold", display: "flex", justifyContent: "center" }}>Track effectiveness at every step</Typography>
                            <Typography sx={{ fontSize: 14, textAlign: "center", fontWeight: "bold", display: "flex", justifyContent: "center", paddingTop: 2 }}>Tag every stage of your story and learn how people interact with your brand on a deeper level.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ paddingTop: 10 }}>
                <Typography sx={{ fontSize: 35, textAlign: "center", fontWeight: "bold", display: "flex", justifyContent: "center" }}>Working throughout the marketing funnel</Typography>
            </Box >
            <Grid container sx={{ placeContent: "space-around", paddingTop: 10, placeItems: "center" }}>
                <Grid item sx={{ display: "flex-block", justifyContent: "center", alignItems: "center" }}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", margin: 3 }}>
                        <Box component={Button} className="shape1" sx={{ height: "84px", width: "354px", display: "flex", alignItems: "center", color: "black", justifyContent: "center", bgcolor: "#E6E8EB", textTransform: "capitalize", '&:focus': { bgcolor: "#0057B8", color: "white" } }} variant="filled" onClick={() => { setImage(0) }} autoFocus>
                            <Typography sx={{ fontSize: 35, textAlign: "center", fontWeight: "bold", display: "flex", justifyContent: "center", }}>Awareness</Typography>
                        </Box>

                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", margin: 3 }}>
                        <Box component={Button} className="shape2" sx={{ height: "84px", width: "300px", display: "flex", alignItems: "center", justifyContent: "center", color: "black", bgcolor: "#E6E8EB", textTransform: "capitalize", '&:focus': { bgcolor: "#0057B8", color: "white" } }} variant="filled" onClick={() => { setImage(1) }}>
                            <Typography sx={{ fontSize: 35, textAlign: "center", fontWeight: "bold", display: "flex", justifyContent: "center" }}>Consideration</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", margin: 3 }}>
                        <Box component={Button} className="shape3" sx={{ height: "84px", width: "247px", display: "flex", alignItems: "center", justifyContent: "center", color: "black", bgcolor: "#E6E8EB", textTransform: "capitalize", '&:focus': { bgcolor: "#0057B8", color: "white" } }} variant="filled" onClick={() => { setImage(2) }}>
                            <Typography sx={{ fontSize: 35, textAlign: "center", fontWeight: "bold", display: "flex", justifyContent: "center" }}>convertion</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", margin: 3, }}>
                        <Box component={Button} className="shape4" sx={{ height: "84px", width: "194px", display: "flex", alignItems: "center", justifyContent: "center", color: "black", bgcolor: "#E6E8EB", textTransform: "capitalize", '&:focus': { bgcolor: "#0057B8", color: "white" } }} variant="filled" onClick={() => { setImage(3) }}>
                            <Typography sx={{ fontSize: 35, textAlign: "center", fontWeight: "bold", display: "flex", justifyContent: "center" }}>Loyalty</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box component="img" sx={{ width: 700 }} src={marketing_funnel[image].image} />
                        <Grid item sx={{ placeContent: "space-evenly", }}>
                            {image === 0 ? <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#0057B8", margin: 2 }} /> : <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#666666", margin: 2 }} />}
                            {image === 1 ? <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#0057B8", margin: 2 }} /> : <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#666666", margin: 2 }} />}
                            {image === 2 ? <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#0057B8", margin: 2 }} /> : <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#666666", margin: 2 }} />}
                            {image === 3 ? <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#0057B8", margin: 2 }} /> : <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#666666", margin: 2 }} />}

                        </Grid>
                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: 24, fontWeight: "bold" }}>{marketing_funnel[image].title}</Typography>
                        <Typography sx={{ fontSize: 16 }}>{marketing_funnel[image].description}</Typography>
                    </Box>

                </Grid>
            </Grid>
            <Grid container sx={{ display: "flex", alignItems: "center", justifyContent: "space-around", }}>
                <Grid item sx={{ width: 375 }}>
                    <Typography sx={{ fontSize: 35, textAlign: "left", fontWeight: "bold", }}>Enhance your creative content and collect better data for your MarTech tools</Typography>
                </Grid >
                <Grid item sx={{}}>
                    <Box className="image" component="img" sx={{}} src={Enhance_content} />

                </Grid>
            </Grid >
            <Box sx={{}}>
                <Typography sx={{ fontSize: 35, textAlign: "center", fontWeight: "bold", display: "flex", justifyContent: "center" }}>Experience iStory for yourself</Typography>
            </Box>
            <Grid container sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", paddingTop: 10, paddingBottom: 10, }} onMouseOver={stopVideo} onMouseOut={Video_Restart}>
                <Grid item sx={{ width: 500 }} >
                    <Typography sx={{ fontSize: 35, textAlign: "left", fontWeight: "bold", }}>Demo of<br /> <span style={{ color: "#0087ca" }}>{Demo[video].title}</span></Typography>
                </Grid>
                <Grid item sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Box component="img" sx={{ width: "690px", height: "529px", }} src={Demo[video].video} />
                    <Box sx={{}}>
                        {video === 0 ? <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#0057B8", margin: 2 }} /> : <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#666666", margin: 2 }} />}
                        {video === 1 ? <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#0057B8", margin: 2 }} /> : <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#666666", margin: 2 }} />}
                    </Box>
                </Grid>
            </Grid>
            <Grid container sx={{ paddingTop: 10, paddingBottom: 10, bgcolor: "#555555", display: "flex", justifyContent: "space-around", }} >
                <Grid item sx={{ width: "201px", marginTop: 10 }}>
                    <Typography sx={{ fontSize: 25, textAlign: "left", fontWeight: "bold", color: "white" }}>Product Plans</Typography>
                    <Typography sx={{ fontSize: 14, textAlign: "left", color: "white", marginTop: 3, marginBottom: 3 }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using </Typography>
                    <Button sx={{ width: 201, bgcolor: "#0057B8" }} variant="contained">Signup for a Demo</Button>
                </Grid>
                <Grid item sx={{ display: "flex" }}>

                    <Grid Container sx={{ height: 414, width: 273, bgcolor: "white", borderRadius: 5, overflow: "hidden", margin: 1, }}>
                        <Grid item className="arrow" sx={{ height: 73, width: 273, bgcolor: "#0057B8", position: "relative" }}>
                        </Grid>
                        <Grid item sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Button sx={{ bgcolor: "#0057B8", color: "white", textTransform: "capitalize", }} variant="contained">Choose Plan</Button>
                        </Grid>
                    </Grid >
                    <Grid sx={{ height: 414, width: 273, bgcolor: "white", borderRadius: 5, overflow: "hidden", margin: 1 }}>
                        <Grid className="arrow2" sx={{ height: 73, width: 273, bgcolor: "#151515", position: "relative" }}>

                        </Grid>
                        <Grid item sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Button sx={{ bgcolor: "#151515", color: "white", textTransform: "capitalize", }} variant="contained">Choose Plan</Button>
                        </Grid>

                    </Grid>
                    <Grid sx={{ height: 414, width: 273, bgcolor: "white", borderRadius: 5, overflow: "hidden", margin: 1 }}>
                        <Grid className="arrow3" sx={{ height: 73, width: 273, bgcolor: "#45BAF5", position: "relative" }}>

                        </Grid>
                        <Grid item sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Button sx={{ bgcolor: "#45BAF5", color: "white", textTransform: "capitalize", }} variant="contained">Choose Plan</Button>
                        </Grid>

                    </Grid>

                </Grid>


            </Grid>
            <Grid container sx={{ paddingTop: 5, placeContent: "center", paddingBottom: 5 }}>
                <Grid item>
                    <Typography sx={{ fontSize: 25, textAlign: "center", fontWeight: "bold", }}>User Testimonials</Typography>
                </Grid>
            </Grid>

            <Grid container spacing={5} sx={{ paddingTop: 10, display: "flex", justifyContent: "center", paddingBottom: 10 }}>
                <Grid item sx={{ width: 308, height: 271, bgcolor: " #C4C4C44D", margin: 5, borderRadius: 2 }}>

                </Grid>
                <Grid item sx={{ width: 308, height: 271, bgcolor: " #C4C4C44D", margin: 5, borderRadius: 2 }}>

                </Grid>
                <Grid item sx={{ width: 308, height: 271, bgcolor: " #C4C4C44D", margin: 5, borderRadius: 2 }}>

                </Grid>

            </Grid>
            <Grid sx={{ height: 338, bgcolor: "#111111", display: "flex", paddingTop:10, }}>
                <Grid item sx={{ paddingLeft: 5 }}>
                    <Box component="img" src={Arrivu} />
                    <Box>
                        <Box component="img" sx={{ margin: 1 }} src={facebook} />
                        <Box component="img" sx={{ margin: 1 }} src={twitter} />
                        <Box component="img" sx={{ margin: 1 }} src={linkedin} />
                        <Box component="img" sx={{ margin: 1 }} src={youtube} />
                    </Box>
                </Grid>
                <Grid item sx={{ paddingLeft: 15 }} >
                    <Box>
                    <Typography sx={{ color: "white", fontWeight: "bold", fontSize: { mobile: 12, tablet: 16, laptop: 24 } }}>News Letter</Typography></Box>
                    <Box sx={{display:"flex",paddingTop:3}}>
                        <Box component="img" src={mail} />
                    <Typography sx={{ color: "white",  fontSize: { mobile: 12, tablet: 16, laptop: 24,paddingLeft:10, } }}>Stay up to date on the latest from Arrivu</Typography>
                    </Box>
                    <form>
                        <InputBase type="text" placeholder='Enter Your Email' onChange={(e) => setSubscribe(e.target.value)} id='getFile' sx={{ width: { mobile: 100, tablet: 150, laptop: 250 }, height: 40, color: "white", border: "1px white solid", paddingLeft: 2, borderRadius: .5, fontSize: { mobile: 10, tablet: 14, laptop: 16 } }} multiline />

                        <Button style={{}} variant="contained" sx={{ bgcolor: "#0057B8", margin: 5 }} onClick={handleSubmit}>Subscribe</Button>
                    </form>
                </Grid>


            </Grid>



        </Box>
    )
}
export default Home