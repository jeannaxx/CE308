import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.profileHeader}>
                <View style={styles.avatarContainer}>
                    {/* <Ionicons name="person" size={50} color="#FFFFFF" /> */}
                </View>
                <Text style={styles.name}>Natthya Dacha</Text>
                <Text style={styles.email}>Natthya@example.com</Text>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        // backgroundColor: '#ffffff',
    },
    profileHeader: {
        // backgroundColor: '#d86ccd',
        // alignItems: 'center',
        // justifyContent:'center',
        padding: 32,
        paddingTop:230,
        alignItems:'center',
        justifyContent: 'center'
       
    },
    avatarContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#ababab',
        // alignItems: 'center',
        // justifyContent: 'center',
        marginBottom: 16,

    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
        // marginBottom: 4,
        // alignItems: 'center',
        // justifyContent:'center',
    },
    email: {
        fontSize: 14,
        color: '#000000',
    },
});
