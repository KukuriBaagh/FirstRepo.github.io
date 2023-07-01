import React from 'react'
import { Tabs, Tab, TabPanels, TabPanel, TabList } from '@chakra-ui/tabs'

function Navbar() {
    return (
        <>
            <Tabs isManual variant="enclosed" colorScheme="red">
                <TabList>
                    <Tab>Home</Tab>
                    <Tab>About</Tab>
                    <Tab>Profile</Tab>
                    <Tab>Contact</Tab>
                </TabList>
                {/* <TabPanels>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels> */}
            </Tabs>
        </>
    )
}

export default Navbar