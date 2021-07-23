import React, {useEffect, useState} from "react";
import { View, StyleSheet} from "react-native";
import { requestErrorHandle } from "src/common/util";
import { AppText } from "src/components/Base/Text";
import { DataService } from "src/services/DataService";
import { NoteDto } from "../../models/dto/Note.dto"


interface Props {

}

export const NoteScreen  = ({...props}: Props) => {
    const [data, setData] = useState<NoteDto[]>([])
    useEffect(() => {
        DataService.getNote().then( res => setData(res.data)).catch(requestErrorHandle)
    }, [])
    return <View>
        {
            data.map(d => (
                <AppText>{d.content}</AppText>
            ))
        }
    </View>
}

const _styles = StyleSheet.create({
    
})