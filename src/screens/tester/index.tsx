import React, {useState} from "react";
import { View, StyleSheet, ViewProps} from "react-native";
import { AppButton } from "src/components/Base/Button"
import { AppInput, AppLoginInput } from "src/components/Base/Input";
import { AppLinkText, AppText } from "src/components/Base/Text";
import { AppTouchable } from "src/components/Base/Touchable";
import { LayoutPage } from "src/components/Layout";
import { Pagination } from "src/components/Pagination";
import { DiscreteTabs } from "src/components/Tabs/DiscreteTabs";

interface Props extends ViewProps {
    children?: React.ReactNode;
    onPress?: () => {}
}

export const TesterScreen  = ({...props}: Props) => {
    const options = [
        {
            label: 'A',
            value: 'a'
        },
        {
            label: 'B',
            value: 'b'
        }
    ]
    const [option , setOption] = useState(options[0])
    const [page, setPage] = useState(1)
 

    return (
        <LayoutPage>
            <AppButton title={"Button"}></AppButton>
            <AppInput></AppInput>
            <AppLoginInput label='username' value={''}></AppLoginInput>
            <AppTouchable><AppText>Link</AppText></AppTouchable>
            <AppLinkText onPress={()=>{}}>LinkText</AppLinkText>
            <DiscreteTabs options ={options} onChange={setOption} value={option} ></DiscreteTabs>
            <Pagination onChange={setPage} page={page} perPage={10} total={60}></Pagination>
        </LayoutPage>
        
    );
}

const _styles = StyleSheet.create({
    title: {

    },
    desc: {
        
    }
})