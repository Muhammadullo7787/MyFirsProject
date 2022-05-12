import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';


export default function Documentation() {
    return (
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography
                sx={{
                    width: '90%',
                    height: '25%',
                    background: '#456D77',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    borderRadius: '20px',
                    padding: '40px 0px 40px 0px'
                }}>
                <Typography variant='h4'
                    sx={{
                        width: '60%',
                        color: 'white',
                        fontWeight: '700',
                    }}>
                    The MIT App Inventor Library: Documentation & Support
                </Typography>
            </Typography>

            <Box sx={{ flexGrow: 1, mt: '50px' }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Typography variant='h4'>Getting Started with App Inventor</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Typography sx={{ textAlign: 'left' }}>
                                <Typography sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                    <Typography sx={{ display: 'flex', flexDirection: 'column', width: '40%' }}>
                                        <Link href="#" underline="hover">Setup computer and phone/tablet or emulator for live testing as youbuild</Link>
                                        <Link href="#" underline="hover">Preview the IDE</Link>
                                        <Link href="#" underline="hover">Watch a beginner video tutorial to get started</Link>
                                        <Link href="#" underline="hover">Take the next step with another tutorial </Link>
                                        <Link href="#" underline="hover">Compatibility Issues with Releases of Android and App Inventor </Link>
                                    </Typography>
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Typography variant='h4'>Documentation</Typography>
                            <Typography variant='subtitle1'>Helpful explanations for all of the components and blocks in App Inventor</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Typography sx={{ textAlign: 'left' }}>
                                <Typography sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                    <Typography sx={{ display: 'flex', flexDirection: 'column', width: '40%' }}>
                                        <Link href="#" underline="hover">Built-in Blocks Documentation</Link>
                                        <Link href="#" underline="hover">Component Documentation</Link>
                                        <Link href="#" underline="hover">Using App Inventor Templates and Creating App Inventor Template Repositories</Link>
                                    </Typography>
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Typography variant='h4'>Teaching with App Inventor</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Typography sx={{ textAlign: 'left' }}>
                                <Typography sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                    <Typography sx={{ display: 'flex', flexDirection: 'column', width: '40%' }}>
                                        <Link href="#" underline="hover">MIT App Inventor -- Teach</Link>
                                        <Link href="#" underline="hover">MIT App Inventor -- Resources</Link>
                                    </Typography>
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Typography variant='h4'>Support and Troubleshooting</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Typography sx={{ textAlign: 'left' }}>
                                <Typography sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                    <Typography sx={{ display: 'flex', flexDirection: 'column', width: '40%' }}>
                                        <Link href="#" underline="hover">School IT/Network Admins: Information specific to school networks  (also helpful for conferences and hotel situations)</Link>
                                        <Link href="#" underline="hover">Help with problems connecting to the emulator, phone or tablet; Help with aiStarter</Link>
                                        <Link href="#" underline="hover">How to Update the App Inventor Setup Software (USB, Emulator)</Link>
                                        <Link href="#" underline="hover">Troubleshooting: Help with saving and using apps, fixing common errors, etc.</Link>
                                        <Link href="#" underline="hover">MIT App Inventor Forum connects App Inventor users with each other.</Link>
                                    </Typography>
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Typography variant='h4'>Other App Inventor Features</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Typography sx={{ textAlign: 'left' }}>
                                <Typography sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                    <Typography sx={{ display: 'flex', flexDirection: 'column', width: '40%' }}>
                                        <Link href="#" underline="hover">Development & Emulation</Link>
                                        <Link href="#" underline="hover">Building Apps with Many Screens</Link>
                                        <Link href="#" underline="hover">Using the Backpack Cut and Paste System</Link>
                                        <Link href="#" underline="hover">Responsive Design in App Inventor</Link>
                                        <Link href="#" underline="hover">Live Development, Testing, and Debugging Tools</Link>
                                        <Link href="#" underline="hover">Building Apps with the Emulator</Link>
                                        <Link href="#" underline="hover">Using the Genymotion emulator with App Inventor</Link>
                                        <Link href="#" underline="hover">Sharing Your App</Link>
                                        <Link href="#" underline="hover">Uploading Your Apps to Google Play</Link>
                                        <Link href="#" underline="hover">Tips & Tricks (Commenting blocks, using shortcuts like copy & paste, etc.)</Link>
                                        <Link href="#" underline="hover">Component Usage Examples</Link>
                                        <Link href="#" underline="hover">Displaying a List</Link>
                                        <Link href="#" underline="hover">Specifying Sizes of Components</Link>
                                        <Link href="#" underline="hover">Using Images with App Inventor</Link>
                                        <hr style={{ color: 'grey' }} />
                                        <Link href="#" underline="hover">App Inventor Concepts: Lists, Variables, Databases, Activity Starter, Google Play...</Link>
                                        <Link href="#" underline="hover">Images and Sounds</Link>
                                        <Link href="#" underline="hover">Using the Activity Starter</Link>
                                        <Link href="#" underline="hover">Sensors</Link>
                                        <Link href="#" underline="hover">Using the Location Sensor</Link>
                                        <Link href="#" underline="hover">Interfacing App Inventor projects to external sensors</Link>
                                        <Link href="#" underline="hover">See more on our Internet of Things site</Link>
                                    </Typography>
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Typography variant='h4'>Advanced</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Typography sx={{ textAlign: 'left' }}>
                                <Typography sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                    <Typography sx={{ display: 'flex', flexDirection: 'column', width: '40%' }}>
                                        <Link href="#" underline="hover">Working with XML and Web services</Link>
                                        <Link href="#" underline="hover">Appinventor Extensions</Link>
                                        <Link href="#" underline="hover">Using App Inventor extensions to implement multitouch: Scale Detector</Link>
                                        <Link href="#" underline="hover">Using App Inventor extensions to implement multitouch: Rotation Detector</Link>
                                        <Link href="#" underline="hover">Brief introduction to cloud data and the Firebase component (replaced by CloudDB in 2019)</Link>
                                        <Link href="#" underline="hover">Project merger tool</Link>
                                    </Typography>
                                </Typography>
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <hr></hr>
            <Typography sx={{width:'70%', mt:'30px'}}>
            What happened to the old App Inventor?! What happened to the old App Inventor?!
            <Link href="#" underline="hover">You can read our farewell message here. </Link>
            </Typography>

        </Box>
    )
}
